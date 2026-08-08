// ============================================================
// English Learning Platform - BBC 中长篇阅读
// 动态抓取 BBC 中长篇深度文章，提供音频朗读 + 逐句逐词解析
// 数据来源：BBC RSS Feeds → rss2json API (CORS proxy)
// 功能增强：全文代理抓取 + 持久化存储（不覆盖旧文章）
// ============================================================

var BBC_NEWS = (function () {
  'use strict';

  // BBC RSS 源（选择偏中长篇深度报道的板块）
  var RSS_FEEDS = [
    {
      id: 'magazine',
      name: 'Magazine & Features',
      nameZh: '深度特稿',
      url: 'https://feeds.bbci.co.uk/news/magazine/rss.xml'
    },
    {
      id: 'world',
      name: 'World Affairs',
      nameZh: '国际事务',
      url: 'https://feeds.bbci.co.uk/news/world/rss.xml'
    },
    {
      id: 'science',
      name: 'Science & Environment',
      nameZh: '科学与环境',
      url: 'https://feeds.bbci.co.uk/news/science_and_environment/rss.xml'
    },
    {
      id: 'arts',
      name: 'Entertainment & Arts',
      nameZh: '文化娱乐',
      url: 'https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml'
    },
    {
      id: 'health',
      name: 'Health',
      nameZh: '健康',
      url: 'https://feeds.bbci.co.uk/news/health/rss.xml'
    }
  ];

  // rss2json API endpoint（免费 CORS 代理）
  var API_BASE = 'https://api.rss2json.com/v1/api.json?rss_url=';

  // CORS 代理列表（用于抓取全文，依次尝试）
  var CORS_PROXIES = [
    'https://api.allorigins.win/raw?url=',
    'https://corsproxy.io/?url=',
    'https://api.codetabs.com/v1/proxy/?quest='
  ];

  // 缓存 key（临时缓存，30分钟过期）
  var CACHE_KEY = 'bbc_news_cache_v1';
  var CACHE_TIME = 30 * 60 * 1000; // 30 分钟缓存

  // 持久化存储 key（保存已抓取的文章，不自动过期）
  var SAVED_KEY = 'bbc_news_saved_v1';
  var SAVED_MAX = 60; // 最多保存 60 篇

  // 分类配置
  var CATEGORY_CONFIG = {
    id: 'bbcNews',
    name: 'BBC中长篇',
    nameEn: 'BBC Feature Articles',
    icon: '📖',
    color: '#dc2626',
    colorLight: '#fee2e2',
    description: '精选 BBC 深度特稿、国际事务、科学、文化、健康等中长篇英语文章，每篇配有音频朗读与逐句逐词中文解析，支持应用内阅读完整原文。',
    level: 'B2-C2'
  };

  // ===== 临时缓存管理 =====
  function loadCache() {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (Date.now() - data.timestamp > CACHE_TIME) return null;
      return data.feeds;
    } catch (e) {
      return null;
    }
  }

  function saveCache(feeds) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        feeds: feeds
      }));
    } catch (e) {
      // storage full or disabled
    }
  }

  // ===== 持久化存储管理（不覆盖旧文章） =====
  function loadSavedArticles() {
    try {
      var raw = localStorage.getItem(SAVED_KEY);
      if (!raw) return [];
      var data = JSON.parse(raw);
      return Array.isArray(data) ? data : [];
    } catch (e) {
      return [];
    }
  }

  function saveArticles(articles) {
    try {
      // 按时间倒序，保留最新的 SAVED_MAX 篇
      articles.sort(function (a, b) {
        var ta = a._pubDate ? new Date(a._pubDate).getTime() : 0;
        var tb = b._pubDate ? new Date(b._pubDate).getTime() : 0;
        return tb - ta;
      });
      localStorage.setItem(SAVED_KEY, JSON.stringify(articles.slice(0, SAVED_MAX)));
    } catch (e) {
      // storage full - try saving fewer
      try {
        localStorage.setItem(SAVED_KEY, JSON.stringify(articles.slice(0, 20)));
      } catch (e2) {}
    }
  }

  // 将新抓取的文章合并到已保存列表（不覆盖已有文章）
  function mergeSavedArticles(newArticles) {
    var saved = loadSavedArticles();
    var savedIds = {};
    saved.forEach(function (a) { savedIds[a.id] = true; });

    newArticles.forEach(function (a) {
      if (!savedIds[a.id]) {
        saved.push(a);
        savedIds[a.id] = true;
      }
    });

    saveArticles(saved);
    return saved;
  }

  // 更新单个已保存文章（例如加载了全文后）
  function updateSavedArticle(articleId, updates) {
    var saved = loadSavedArticles();
    var found = false;
    for (var i = 0; i < saved.length; i++) {
      if (saved[i].id === articleId) {
        for (var key in updates) {
          saved[i][key] = updates[key];
        }
        found = true;
        break;
      }
    }
    if (found) {
      saveArticles(saved);
    }
    return found;
  }

  // ===== URL 清理 =====
  function cleanUrl(url) {
    if (!url) return '';
    // 移除 BBC 追踪参数
    return url.replace(/\?at_medium=RSS&at_campaign=rss.*$/, '').replace(/\?at_medium=RSS.*$/, '');
  }

  // 中长篇最低内容长度（过滤掉简短快讯）
  var MIN_CONTENT_LENGTH = 60;

  // ===== 抓取文章列表（RSS） =====
  function fetchFeed(feedUrl) {
    return new Promise(function (resolve, reject) {
      var apiUrl = API_BASE + encodeURIComponent(feedUrl);
      fetch(apiUrl)
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.status === 'ok' && data.items) {
            // 过滤掉内容过短的快讯，按内容长度降序排列（优先中长篇）
            var filtered = data.items
              .map(function (item) {
                return {
                  title: item.title || '',
                  link: item.link || '',
                  pubDate: item.pubDate || '',
                  description: stripHtml(item.description || ''),
                  content: stripHtml(item.content || item.description || ''),
                  thumbnail: extractThumbnail(item)
                };
              })
              .filter(function (item) {
                return item.content.length >= MIN_CONTENT_LENGTH;
              })
              .sort(function (a, b) {
                return b.content.length - a.content.length;
              })
              .slice(0, 5);
            resolve(filtered);
          } else {
            reject(new Error('Feed parse error'));
          }
        })
        .catch(reject);
    });
  }

  function fetchAllFeeds() {
    // 先检查临时缓存
    var cached = loadCache();
    if (cached) {
      return Promise.resolve(cached);
    }

    // 抓取所有源
    var promises = RSS_FEEDS.map(function (feed) {
      return fetchFeed(feed.url).then(function (items) {
        return {
          feedId: feed.id,
          feedName: feed.name,
          feedNameZh: feed.feedNameZh || feed.nameZh,
          items: items
        };
      }).catch(function () {
        return {
          feedId: feed.id,
          feedName: feed.name,
          feedNameZh: feed.nameZh,
          items: []
        };
      });
    });

    return Promise.all(promises).then(function (feeds) {
      saveCache(feeds);
      return feeds;
    });
  }

  // ===== 抓取完整原文（通过 CORS 代理） =====
  function fetchFullArticle(articleUrl) {
    var cleanArticleUrl = cleanUrl(articleUrl);
    var errors = [];

    // 依次尝试每个代理
    function tryProxy(proxyIndex) {
      if (proxyIndex >= CORS_PROXIES.length) {
        // 所有代理都失败，尝试直接 fetch（用户可能有 VPN）
        return fetch(cleanArticleUrl, { mode: 'cors' })
          .then(function (res) { return res.text(); })
          .then(function (html) {
            var article = parseBBCArticle(html);
            if (article && article.length > 100) {
              return article;
            }
            throw new Error('Direct fetch: article too short');
          })
          .catch(function (err) {
            errors.push('Direct: ' + err.message);
            return null;
          });
      }

      var proxyUrl = CORS_PROXIES[proxyIndex] + encodeURIComponent(cleanArticleUrl);

      return fetch(proxyUrl)
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.text();
        })
        .then(function (html) {
          var article = parseBBCArticle(html);
          if (article && article.length > 100) {
            return article;
          }
          throw new Error('Article too short');
        })
        .catch(function (err) {
          errors.push('Proxy' + proxyIndex + ': ' + err.message);
          return tryProxy(proxyIndex + 1);
        });
    }

    return tryProxy(0).then(function (result) {
      if (result) return result;
      throw new Error('所有代理均失败: ' + errors.join('; '));
    });
  }

  // ===== 解析 BBC 文章 HTML，提取正文 =====
  function parseBBCArticle(html) {
    if (!html || html.length < 50) return '';

    try {
      var tmp = document.createElement('div');
      tmp.innerHTML = html;

      // 移除 script、style、nav 等非正文元素
      var removeSelectors = ['script', 'style', 'nav', 'header', 'footer', 'aside',
        '[data-component="share-tools"]', '[data-component="promo"]',
        '.advertisement', '.advert', '.share-tools', '.related-topics',
        '.story-tag', '.see-also', '.newsletter-signup', '[role="navigation"]'];

      removeSelectors.forEach(function (sel) {
        var els = tmp.querySelectorAll(sel);
        els.forEach(function (el) { el.remove(); });
      });

      // BBC 新版文章结构：[data-component="body-block"] 内的段落
      var bodyBlocks = tmp.querySelectorAll('[data-component="body-block"]');
      var paragraphs = [];

      if (bodyBlocks.length > 0) {
        bodyBlocks.forEach(function (block) {
          var ps = block.querySelectorAll('p');
          ps.forEach(function (p) {
            var text = (p.textContent || '').trim();
            if (text.length > 10) paragraphs.push(text);
          });
        });
      }

      // 备用：article 标签内的段落
      if (paragraphs.length === 0) {
        var article = tmp.querySelector('article');
        if (article) {
          var ps = article.querySelectorAll('p');
          ps.forEach(function (p) {
            var text = (p.textContent || '').trim();
            if (text.length > 10) paragraphs.push(text);
          });
        }
      }

      // 备用：所有 class 含 "story" 或 "article-body" 的元素
      if (paragraphs.length === 0) {
        var storyEl = tmp.querySelector('.story-body, .article-body, .article__body, [data-testid="article-body"]');
        if (storyEl) {
          var ps = storyEl.querySelectorAll('p');
          ps.forEach(function (p) {
            var text = (p.textContent || '').trim();
            if (text.length > 10) paragraphs.push(text);
          });
        }
      }

      // 最后备用：所有较长的段落
      if (paragraphs.length === 0) {
        var allPs = tmp.querySelectorAll('p');
        allPs.forEach(function (p) {
          var text = (p.textContent || '').trim();
          if (text.length > 30) paragraphs.push(text);
        });
      }

      var fullText = paragraphs.join(' ');
      // 清理多余空白
      fullText = fullText.replace(/\s+/g, ' ').trim();

      // 如果提取的内容太短，返回空
      if (fullText.length < 100) return '';

      return fullText;
    } catch (e) {
      return '';
    }
  }

  // ===== HTML 清理 =====
  function stripHtml(html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    // 移除图片说明等
    var imgs = tmp.querySelectorAll('img');
    imgs.forEach(function (img) { img.remove(); });
    var text = tmp.textContent || tmp.innerText || '';
    return text.replace(/\s+/g, ' ').trim();
  }

  function extractThumbnail(item) {
    if (item.enclosure && item.enclosure.link) {
      return item.enclosure.link;
    }
    if (item.thumbnail) {
      return item.thumbnail;
    }
    // 尝试从 description 中提取
    var match = (item.description || '').match(/<img[^>]+src="([^">]+)"/);
    if (match) return match[1];
    return '';
  }

  // ===== 逐句拆分 =====
  function splitSentences(text) {
    if (!text) return [];
    // 按句号、问号、感叹号拆分，保留缩写
    var sentences = text
      .replace(/([.!?])\s+/g, '$1\u0001')
      .split('\u0001')
      .map(function (s) { return s.trim(); })
      .filter(function (s) { return s.length > 3; });
    return sentences;
  }

  // ===== 逐词拆分 + 在线翻译 =====
  // 简易词典（常见词汇预置翻译，其余通过上下文推断）
  var COMMON_DICT = {
    'the': 'art. 这/那（定冠词）',
    'a': 'art. 一个（不定冠词）',
    'an': 'art. 一个（不定冠词，元音前）',
    'in': 'prep. 在...里',
    'on': 'prep. 在...上',
    'at': 'prep. 在...（地点/时间）',
    'to': 'prep. 到... / 不定式符号',
    'of': 'prep. ...的',
    'for': 'prep. 为了... / conj. 因为',
    'with': 'prep. 和...一起 / 用...',
    'by': 'prep. 被... / 通过...',
    'from': 'prep. 从...来',
    'as': 'conj. 当...时 / prep. 作为',
    'is': 'v. 是（be动词第三人称单数）',
    'are': 'v. 是（be动词复数）',
    'was': 'v. 是（be动词过去式）',
    'were': 'v. 是（be动词过去式复数）',
    'has': 'v. 有（第三人称单数）',
    'have': 'v. 有 / 助动词',
    'had': 'v. 有（过去式）',
    'will': 'aux. 将要',
    'would': 'aux. 将要（过去式）/ 会',
    'can': 'aux. 能 / 可以',
    'could': 'aux. 能（过去式）/ 可以',
    'should': 'aux. 应该',
    'must': 'aux. 必须',
    'may': 'aux. 可以 / 可能',
    'and': 'conj. 和 / 与',
    'but': 'conj. 但是',
    'or': 'conj. 或者',
    'not': 'adv. 不',
    'no': 'adv. 不 / adj. 没有',
    'yes': 'adv. 是的',
    'it': 'pron. 它',
    'its': 'pron. 它的',
    'it\'s': 'pron. 它是 (it is)',
    'he': 'pron. 他',
    'she': 'pron. 她',
    'they': 'pron. 他们',
    'them': 'pron. 他们（宾格）',
    'their': 'pron. 他们的',
    'there': 'adv. 那里 / 引导词',
    'this': 'pron. 这个',
    'that': 'pron. 那个',
    'which': 'pron. 哪个 / 关系代词',
    'who': 'pron. 谁 / 关系代词',
    'whom': 'pron. 谁（宾格）',
    'whose': 'pron. 谁的',
    'what': 'pron. 什么',
    'when': 'adv. 什么时候 / conj. 当...时',
    'where': 'adv. 哪里',
    'why': 'adv. 为什么',
    'how': 'adv. 怎样',
    'said': 'v. 说（过去式）',
    'says': 'v. 说（第三人称单数）',
    'say': 'v. 说',
    'about': 'prep. 关于 / adv. 大约',
    'after': 'prep. 在...之后 / conj. 在...之后',
    'before': 'prep. 在...之前 / conj. 在...之前',
    'because': 'conj. 因为',
    'if': 'conj. 如果',
    'so': 'conj. 所以 / adv. 如此',
    'than': 'conj. 比',
    'then': 'adv. 然后 / 那时',
    'up': 'adv. 向上',
    'down': 'adv. 向下',
    'out': 'adv. 出 / 外面',
    'more': 'adv. 更多 / adj. 更多的',
    'most': 'adv. 最 / adj. 大多数的',
    'some': 'adj. 一些 / pron. 一些',
    'any': 'adj. 任何 / pron. 任何',
    'all': 'adj. 所有的 / pron. 全部',
    'each': 'adj. 每个 / pron. 每个',
    'other': 'adj. 其他的 / pron. 其他',
    'such': 'adj. 这样的',
    'new': 'adj. 新的',
    'first': 'adj. 第一的 / adv. 首先',
    'last': 'adj. 最后的 / adv. 上一个',
    'also': 'adv. 也',
    'only': 'adv. 仅仅 / adj. 唯一的',
    'very': 'adv. 非常',
    'into': 'prep. 进入...里',
    'over': 'prep. 在...上方 / adv. 结束',
    'during': 'prep. 在...期间',
    'while': 'conj. 当...的时候 / 然而',
    'between': 'prep. 在...之间',
    'through': 'prep. 通过 / 穿过',
    'against': 'prep. 反对 / 对着',
    'without': 'prep. 没有 / 无',
    'within': 'prep. 在...之内',
    'among': 'prep. 在...之中',
    'been': 'v. 是（be动词过去分词）',
    'being': 'v. 是（be动词现在分词）',
    'be': 'v. 是',
    'do': 'v. 做 / aux. 助动词',
    'does': 'v. 做（第三人称单数）',
    'did': 'v. 做（过去式）',
    'done': 'v. 做（过去分词）',
    'make': 'v. 制作 / 使得',
    'made': 'v. 制作（过去式/过去分词）',
    'get': 'v. 获得 / 变得',
    'got': 'v. 获得（过去式）',
    'go': 'v. 去',
    'went': 'v. 去（过去式）',
    'gone': 'v. 去（过去分词）',
    'come': 'v. 来',
    'came': 'v. 来（过去式）',
    'take': 'v. 拿 / 取',
    'took': 'v. 拿（过去式）',
    'taken': 'v. 拿（过去分词）',
    'give': 'v. 给',
    'gave': 'v. 给（过去式）',
    'given': 'v. 给（过去分词）',
    'see': 'v. 看见',
    'saw': 'v. 看见（过去式）',
    'seen': 'v. 看见（过去分词）',
    'know': 'v. 知道',
    'knew': 'v. 知道（过去式）',
    'known': 'v. 知道（过去分词）',
    'think': 'v. 思考 / 认为',
    'thought': 'v. 思考（过去式）',
    'find': 'v. 找到 / 发现',
    'found': 'v. 找到（过去式）',
    'tell': 'v. 告诉',
    'told': 'v. 告诉（过去式）',
    'ask': 'v. 问 / 要求',
    'asked': 'v. 问（过去式）',
    'seem': 'v. 似乎',
    'feel': 'v. 感觉',
    'try': 'v. 尝试',
    'tried': 'v. 尝试（过去式）',
    'leave': 'v. 离开 / 留下',
    'left': 'v. 离开（过去式）',
    'call': 'v. 称呼 / 打电话',
    'called': 'v. 称呼（过去式）',
    'want': 'v. 想要',
    'use': 'v. 使用',
    'used': 'v. 使用（过去式）',
    'work': 'v. 工作 / n. 工作',
    'worked': 'v. 工作（过去式）',
    'look': 'v. 看 / 看起来',
    'looked': 'v. 看（过去式）',
    'become': 'v. 变成',
    'became': 'v. 变成（过去式）',
    'turn': 'v. 转动 / 变成',
    'turned': 'v. 转动（过去式）',
    'start': 'v. 开始',
    'started': 'v. 开始（过去式）',
    'show': 'v. 展示',
    'showed': 'v. 展示（过去式）',
    'shown': 'v. 展示（过去分词）',
    'hear': 'v. 听见',
    'heard': 'v. 听见（过去式）',
    'play': 'v. 玩 / 播放',
    'played': 'v. 玩（过去式）',
    'run': 'v. 跑 / 运营',
    'ran': 'v. 跑（过去式）',
    'move': 'v. 移动',
    'moved': 'v. 移动（过去式）',
    'live': 'v. 生活 / adj. 现场的',
    'lived': 'v. 生活（过去式）',
    'believe': 'v. 相信',
    'believed': 'v. 相信（过去式）',
    'bring': 'v. 带来',
    'brought': 'v. 带来（过去式）',
    'happen': 'v. 发生',
    'happened': 'v. 发生（过去式）',
    'write': 'v. 写',
    'wrote': 'v. 写（过去式）',
    'written': 'v. 写（过去分词）',
    'provide': 'v. 提供',
    'provided': 'v. 提供（过去式）',
    'sit': 'v. 坐',
    'sat': 'v. 坐（过去式）',
    'stand': 'v. 站立',
    'stood': 'v. 站立（过去式）',
    'lose': 'v. 失去 / 输',
    'lost': 'v. 失去（过去式）',
    'pay': 'v. 支付',
    'paid': 'v. 支付（过去式）',
    'meet': 'v. 遇见',
    'met': 'v. 遇见（过去式）',
    'include': 'v. 包含',
    'included': 'v. 包含（过去式）',
    'continue': 'v. 继续',
    'set': 'v. 设置 / n. 一套',
    'learn': 'v. 学习',
    'learned': 'v. 学习（过去式）',
    'change': 'v. 改变 / n. 改变',
    'changed': 'v. 改变（过去式）',
    'lead': 'v. 领导 / 导致',
    'led': 'v. 领导（过去式）',
    'understand': 'v. 理解',
    'understood': 'v. 理解（过去式）',
    'watch': 'v. 观看',
    'watched': 'v. 观看（过去式）',
    'follow': 'v. 跟随 / 遵循',
    'followed': 'v. 跟随（过去式）',
    'stop': 'v. 停止',
    'stopped': 'v. 停止（过去式）',
    'create': 'v. 创造',
    'created': 'v. 创造（过去式）',
    'speak': 'v. 说话',
    'spoke': 'v. 说话（过去式）',
    'spoken': 'v. 说话（过去分词）',
    'read': 'v. 阅读',
    'allow': 'v. 允许',
    'allowed': 'v. 允许（过去式）',
    'add': 'v. 添加',
    'added': 'v. 添加（过去式）',
    'spend': 'v. 花费',
    'spent': 'v. 花费（过去式）',
    'grow': 'v. 生长 / 增长',
    'grew': 'v. 生长（过去式）',
    'grown': 'v. 生长（过去分词）',
    'open': 'v. 打开 / adj. 开着的',
    'opened': 'v. 打开（过去式）',
    'walk': 'v. 走 / 散步',
    'walked': 'v. 走（过去式）',
    'win': 'v. 赢',
    'won': 'v. 赢（过去式）',
    'offer': 'v. 提供 / n. 提议',
    'offered': 'v. 提供（过去式）',
    'remember': 'v. 记得',
    'consider': 'v. 考虑',
    'appear': 'v. 出现 / 似乎',
    'appeared': 'v. 出现（过去式）',
    'buy': 'v. 购买',
    'bought': 'v. 购买（过去式）',
    'wait': 'v. 等待',
    'waited': 'v. 等待（过去式）',
    'serve': 'v. 服务',
    'served': 'v. 服务（过去式）',
    'die': 'v. 死亡',
    'died': 'v. 死亡（过去式）',
    'send': 'v. 发送',
    'sent': 'v. 发送（过去式）',
    'expect': 'v. 期望',
    'expected': 'v. 期望（过去式）',
    'build': 'v. 建造',
    'built': 'v. 建造（过去式）',
    'stay': 'v. 停留',
    'stayed': 'v. 停留（过去式）',
    'fall': 'v. 落下 / n. 秋天',
    'fell': 'v. 落下（过去式）',
    'fallen': 'v. 落下（过去分词）',
    'cut': 'v. 切 / 削减',
    'reach': 'v. 到达 / 达到',
    'reached': 'v. 到达（过去式）',
    'kill': 'v. 杀死',
    'killed': 'v. 杀死（过去式）',
    'remain': 'v. 保持 / 剩余',
    'remained': 'v. 保持（过去式）',
    'suggest': 'v. 建议 / 暗示',
    'suggested': 'v. 建议（过去式）',
    'raise': 'v. 举起 / 提高',
    'raised': 'v. 提高（过去式）',
    'pass': 'v. 通过 / 传递',
    'passed': 'v. 通过（过去式）',
    'sell': 'v. 卖',
    'sold': 'v. 卖（过去式）',
    'require': 'v. 需要 / 要求',
    'required': 'v. 需要（过去式）',
    'report': 'v. 报告 / n. 报告',
    'reported': 'v. 报告（过去式）',
    'decide': 'v. 决定',
    'decided': 'v. 决定（过去式）',
    'pull': 'v. 拉',
    'pulled': 'v. 拉（过去式）',
    'upon': 'prep. 在...之上',
    'behind': 'prep. 在...后面',
    'along': 'prep. 沿着 / adv. 一起',
    'since': 'prep. 自从 / conj. 自从...以来',
    'until': 'prep. / conj. 直到',
    'whether': 'conj. 是否',
    'though': 'conj. 虽然 / adv. 可是',
    'although': 'conj. 虽然',
    'yet': 'adv. 还 / 然而',
    'still': 'adv. 仍然',
    'already': 'adv. 已经',
    'just': 'adv. 刚刚 / 仅仅',
    'now': 'adv. 现在',
    'here': 'adv. 这里',
    'today': 'adv. / n. 今天',
    'year': 'n. 年',
    'years': 'n. 年（复数）',
    'day': 'n. 天 / 日',
    'days': 'n. 天（复数）',
    'time': 'n. 时间 / 次数',
    'people': 'n. 人们',
    'world': 'n. 世界',
    'country': 'n. 国家 / 乡村',
    'countries': 'n. 国家（复数）',
    'government': 'n. 政府',
    'group': 'n. 团体 / 组',
    'case': 'n. 案例 / 情况',
    'company': 'n. 公司',
    'companies': 'n. 公司（复数）',
    'number': 'n. 数字 / 数量',
    'week': 'n. 周 / 星期',
    'month': 'n. 月',
    'man': 'n. 男人 / 人',
    'woman': 'n. 女人',
    'men': 'n. 男人（复数）',
    'women': 'n. 女人（复数）',
    'child': 'n. 孩子',
    'children': 'n. 孩子们',
    'city': 'n. 城市',
    'area': 'n. 地区 / 区域',
    'water': 'n. 水 / v. 浇水',
    'home': 'n. 家',
    'house': 'n. 房子',
    'place': 'n. 地方 / v. 放置',
    'word': 'n. 单词 / 话',
    'point': 'n. 点 / 观点 / v. 指向',
    'example': 'n. 例子',
    'fact': 'n. 事实',
    'question': 'n. 问题',
    'problem': 'n. 问题 / 难题',
    'way': 'n. 方式 / 道路',
    'part': 'n. 部分',
    'side': 'n. 边 / 侧面',
    'line': 'n. 线 / 行',
    'end': 'n. 结尾 / v. 结束',
    'member': 'n. 成员',
    'law': 'n. 法律',
    'system': 'n. 系统',
    'program': 'n. 程序 / 计划',
    'plan': 'n. 计划 / v. 计划',
    'process': 'n. 过程 / v. 处理',
    'result': 'n. 结果',
    'level': 'n. 水平 / 级别',
    'rate': 'n. 比率 / 速率',
    'cost': 'n. 费用 / v. 花费',
    'value': 'n. 价值',
    'class': 'n. 班级 / 阶级',
    'data': 'n. 数据',
    'image': 'n. 图像',
    'art': 'n. 艺术',
    'body': 'n. 身体 / 机构',
    'music': 'n. 音乐',
    'market': 'n. 市场',
    'research': 'n. 研究',
    'team': 'n. 团队',
    'idea': 'n. 想法 / 主意',
    'service': 'n. 服务',
    'power': 'n. 力量 / 权力 / 电力',
    'war': 'n. 战争',
    'police': 'n. 警察',
    'school': 'n. 学校',
    'father': 'n. 父亲',
    'mother': 'n. 母亲',
    'family': 'n. 家庭',
    'friend': 'n. 朋友',
    'money': 'n. 钱',
    'story': 'n. 故事',
    'job': 'n. 工作',
    'business': 'n. 商业 / 生意',
    'night': 'n. 夜晚',
    'morning': 'n. 早晨',
    'life': 'n. 生活 / 生命',
    'land': 'n. 土地',
    'book': 'n. 书 / v. 预订',
    'car': 'n. 汽车',
    'street': 'n. 街道',
    'name': 'n. 名字',
    'mile': 'n. 英里',
    'foot': 'n. 脚 / 英尺',
    'hour': 'n. 小时',
    'minute': 'n. 分钟',
    'second': 'n. 秒',
    'fire': 'n. 火 / v. 开火',
    'air': 'n. 空气',
    'force': 'n. 力量 / 部队',
    'key': 'n. 钥匙 / 关键',
    'human': 'n. 人 / adj. 人类的',
    'office': 'n. 办公室',
    'space': 'n. 空间 / 太空',
    'table': 'n. 桌子',
    'range': 'n. 范围',
    'field': 'n. 领域 / 田野',
    'reporter': 'n. 记者',
    'news': 'n. 新闻',
    'press': 'n. 新闻界 / v. 按',
    'media': 'n. 媒体',
    'like': 'v. 喜欢 / prep. 像',
    'liked': 'v. 喜欢（过去式）',
    'big': 'adj. 大的',
    'small': 'adj. 小的',
    'old': 'adj. 老的 / 旧的',
    'young': 'adj. 年轻的',
    'good': 'adj. 好的',
    'bad': 'adj. 坏的',
    'great': 'adj. 伟大的 / 很好的',
    'high': 'adj. 高的',
    'low': 'adj. 低的',
    'large': 'adj. 大的',
    'little': 'adj. 小的 / 少的',
    'long': 'adj. 长的',
    'short': 'adj. 短的 / 矮的',
    'own': 'adj. 自己的',
    'same': 'adj. 相同的',
    'few': 'adj. 少数的',
    'many': 'adj. 许多的',
    'much': 'adj. 许多的 / adv. 非常',
    'every': 'adj. 每一个',
    'another': 'adj. 另一个',
    'able': 'adj. 有能力的',
    'available': 'adj. 可用的',
    'important': 'adj. 重要的',
    'possible': 'adj. 可能的',
    'likely': 'adj. 可能的 / adv. 可能',
    'difficult': 'adj. 困难的',
    'different': 'adj. 不同的',
    'common': 'adj. 常见的',
    'public': 'adj. 公众的 / n. 公众',
    'private': 'adj. 私人的',
    'national': 'adj. 国家的',
    'international': 'adj. 国际的',
    'global': 'adj. 全球的',
    'local': 'adj. 本地的',
    'general': 'adj. 一般的 / n. 将军',
    'political': 'adj. 政治的',
    'economic': 'adj. 经济的',
    'financial': 'adj. 金融的',
    'social': 'adj. 社会的',
    'environmental': 'adj. 环境的',
    'digital': 'adj. 数字的 / 数码的',
    'online': 'adj. 在线的 / adv. 在网上',
    'major': 'adj. 主要的 / v. 主修',
    'recent': 'adj. 最近的',
    'current': 'adj. 当前的',
    'previous': 'adj. 以前的',
    'next': 'adj. 下一个的',
    'final': 'adj. 最终的',
    'main': 'adj. 主要的',
    'real': 'adj. 真实的',
    'several': 'adj. 几个的',
    'various': 'adj. 各种各样的',
    'full': 'adj. 满的 / 完整的',
    'free': 'adj. 免费的 / 自由的',
    'total': 'adj. 总的 / n. 总数',
    'particular': 'adj. 特定的',
    'certain': 'adj. 某些的 / 确定的',
    'simple': 'adj. 简单的',
    'single': 'adj. 单一的 / 单身的',
    'white': 'adj. 白色的',
    'black': 'adj. 黑色的',
    'red': 'adj. 红色的',
    'blue': 'adj. 蓝色的',
    'green': 'adj. 绿色的',
    'however': 'adv. 然而',
    'therefore': 'adv. 因此',
    'thus': 'adv. 因此',
    'often': 'adv. 经常',
    'usually': 'adv. 通常',
    'sometimes': 'adv. 有时',
    'always': 'adv. 总是',
    'never': 'adv. 从不',
    'again': 'adv. 再次',
    'ever': 'adv. 曾经',
    'enough': 'adv. 足够 / adj. 足够的',
    'perhaps': 'adv. 也许',
    'maybe': 'adv. 也许',
    'really': 'adv. 真正地',
    'actually': 'adv. 实际上',
    'according': 'adv. 按照（according to）',
    'back': 'adv. 回 / n. 背部',
    'away': 'adv. 离开 / 远离',
    'around': 'adv. 周围 / 大约',
    'above': 'adv. / prep. 在...上方',
    'below': 'adv. / prep. 在...下方',
    'off': 'adv. 离开 / 关掉',
    'near': 'prep. 靠近 / adv. 近',
    'million': 'n. 百万',
    'billion': 'n. 十亿',
    'thousand': 'n. 千',
    'hundred': 'n. 百',
    'percent': 'n. 百分之...',
    'per': 'prep. 每',
    'including': 'prep. 包括',
    'even': 'adv. 甚至 / adj. 平的',
    'well': 'adv. 好 / int. 嗯',
    'too': 'adv. 也 / 太',
    'those': 'pron. 那些',
    'these': 'pron. 这些',
    'both': 'pron. 两者 / adj. 两者的',
    'either': 'pron. 任何一个 / adj. 任一的',
    'neither': 'pron. 两者都不',
    'one': 'num. 一 / pron. 一个',
    'two': 'num. 二',
    'three': 'num. 三',
    'four': 'num. 四',
    'five': 'num. 五',
    'six': 'num. 六',
    'seven': 'num. 七',
    'eight': 'num. 八',
    'nine': 'num. 九',
    'ten': 'num. 十',
    'first': 'num. 第一 / adv. 首先',
    'second': 'num. 第二 / n. 秒',
    'third': 'num. 第三',
    'best': 'adj. 最好的',
    'better': 'adj. 更好的',
    'worse': 'adj. 更差的',
    'worst': 'adj. 最差的',
    'least': 'adv. 最少',
    'less': 'adv. 更少',
    'quite': 'adv. 相当',
    'rather': 'adv. 相当 / 宁可',
    'pretty': 'adv. 相当 / adj. 漂亮的',
    'fairly': 'adv. 相当',
    'somewhat': 'adv. 有点',
    'slightly': 'adv. 稍微',
    'nearly': 'adv. 几乎',
    'almost': 'adv. 几乎',
    'mostly': 'adv. 主要地',
    'mainly': 'adv. 主要地',
    'largely': 'adv. 很大程度上',
    'especially': 'adv. 尤其',
    'particularly': 'adv. 特别地',
    'specifically': 'adv. 具体地',
    'exactly': 'adv. 确切地',
    'completely': 'adv. 完全地',
    'totally': 'adv. 完全地',
    'entirely': 'adv. 完全地',
    'fully': 'adv. 充分地',
    'highly': 'adv. 高度地',
    'widely': 'adv. 广泛地',
    'closely': 'adv. 密切地',
    'directly': 'adv. 直接地',
    'indirectly': 'adv. 间接地',
    'immediately': 'adv. 立即',
    'suddenly': 'adv. 突然',
    'gradually': 'adv. 逐渐地',
    'eventually': 'adv. 最终',
    'finally': 'adv. 最后',
    'recently': 'adv. 最近',
    'previously': 'adv. 以前',
    'currently': 'adv. 目前',
    'monday': 'n. 星期一',
    'tuesday': 'n. 星期二',
    'wednesday': 'n. 星期三',
    'thursday': 'n. 星期四',
    'friday': 'n. 星期五',
    'saturday': 'n. 星期六',
    'sunday': 'n. 星期日',
    'january': 'n. 一月',
    'february': 'n. 二月',
    'march': 'n. 三月',
    'april': 'n. 四月',
    'june': 'n. 六月',
    'july': 'n. 七月',
    'august': 'n. 八月',
    'september': 'n. 九月',
    'october': 'n. 十月',
    'november': 'n. 十一月',
    'december': 'n. 十二月',
    'told': 'v. 告诉（过去式）',
    'according to': 'prep. 根据'
  };

  function lookupWord(word) {
    var lower = word.toLowerCase().replace(/[^a-z']/g, '');
    if (!lower) return null;

    // 检查词典
    if (COMMON_DICT[lower]) {
      return COMMON_DICT[lower];
    }

    // 基于词缀的简单推断
    // -s 复数
    if (lower.length > 3 && lower.endsWith('s') && COMMON_DICT[lower.slice(0, -1)]) {
      var base = COMMON_DICT[lower.slice(0, -1)];
      return base.replace(/\(.*\)/, '') + '(复数)';
    }
    // -ed 过去式
    if (lower.length > 4 && lower.endsWith('ed') && COMMON_DICT[lower.slice(0, -2)]) {
      return COMMON_DICT[lower.slice(0, -2)] + '（过去式）';
    }
    if (lower.length > 4 && lower.endsWith('ed') && COMMON_DICT[lower.slice(0, -1)]) {
      return COMMON_DICT[lower.slice(0, -1)] + '（过去式）';
    }
    // -ing 进行时
    if (lower.length > 5 && lower.endsWith('ing') && COMMON_DICT[lower.slice(0, -3)]) {
      return COMMON_DICT[lower.slice(0, -3)] + '（现在分词）';
    }
    if (lower.length > 5 && lower.endsWith('ing') && COMMON_DICT[lower.slice(0, -3) + 'e']) {
      return COMMON_DICT[lower.slice(0, -3) + 'e'] + '（现在分词）';
    }
    // -ly 副词
    if (lower.length > 4 && lower.endsWith('ly') && COMMON_DICT[lower.slice(0, -2)]) {
      var adj = COMMON_DICT[lower.slice(0, -2)];
      return 'adv. ' + adj.replace(/^(adj|adv)\.\s*/, '').replace(/\(.*\)/, '');
    }
    // -tion 名词
    if (lower.length > 5 && lower.endsWith('tion')) {
      return 'n. ' + lower.charAt(0).toUpperCase() + lower.slice(1) + '（名词后缀）';
    }
    // -ment 名词
    if (lower.length > 5 && lower.endsWith('ment')) {
      return 'n. ' + lower.charAt(0).toUpperCase() + lower.slice(1) + '（名词后缀）';
    }
    // -ness 名词
    if (lower.length > 5 && lower.endsWith('ness')) {
      return 'n. ' + lower.charAt(0).toUpperCase() + lower.slice(1) + '（名词后缀）';
    }
    // -ful 形容词
    if (lower.length > 5 && lower.endsWith('ful')) {
      return 'adj. ' + lower.charAt(0).toUpperCase() + lower.slice(1) + '（形容词后缀）';
    }
    // -less 形容词
    if (lower.length > 6 && lower.endsWith('less')) {
      return 'adj. ' + lower.charAt(0).toUpperCase() + lower.slice(1) + '（形容词后缀）';
    }
    // -able / -ible 形容词
    if (lower.length > 5 && (lower.endsWith('able') || lower.endsWith('ible'))) {
      return 'adj. ' + lower.charAt(0).toUpperCase() + lower.slice(1) + '（形容词后缀）';
    }

    // 未知词汇：标注词性推测
    if (/^[A-Z]/.test(word)) {
      return 'n. ' + word + '（专有名词）';
    }
    return 'n./v. ' + word + '（专业词汇）';
  }

  function splitWords(sentence) {
    // 按空格拆分，保留标点附着在词上
    var tokens = sentence.split(/\s+/).filter(function (t) { return t.length > 0; });
    var words = [];

    tokens.forEach(function (token) {
      // 检查是否是已知短语（如 "according to", "lead to"）
      var lowerToken = token.toLowerCase().replace(/[^a-z'\-]/g, '');

      // 处理带连字符的词
      if (token.includes('-') && token.split('-').length === 2) {
        var parts = token.split('-');
        words.push({
          word: token,
          meaning: lookupWord(parts[0].toLowerCase()) || 'n./adj. ' + token,
          phonetic: ''
        });
        return;
      }

      var meaning = lookupWord(token);
      words.push({
        word: token,
        meaning: meaning || 'n./v. ' + lowerToken,
        phonetic: ''
      });
    });

    return words;
  }

  // ===== 为任意文本生成逐句解析 =====
  function generateSentenceAnalysis(text) {
    var sentences = splitSentences(text);
    return sentences.map(function (sentence) {
      return {
        sentence: sentence,
        translation: '(点击查看逐词解析)',
        words: splitWords(sentence)
      };
    });
  }

  // ===== 生成中长篇课程数据 =====
  function generateNewsLesson(feed, item, index) {
    var content = item.content || item.description || '';
    var sentences = splitSentences(content);

    // 构建逐句解析（基于 RSS 摘要）
    var sentenceAnalysis = sentences.map(function (sentence) {
      return {
        sentence: sentence,
        translation: '(点击查看逐词解析)',
        words: splitWords(sentence)
      };
    });

    return {
      id: 'news_' + feed.feedId + '_' + index,
      title: item.title.length > 60 ? item.title.substring(0, 57) + '...' : item.title,
      titleEn: feed.feedName,
      difficulty: 4,
      duration: sentences.length * 2 + ' min',
      english: content,
      chinese: '中长篇英语文章，请通过逐句逐词解析学习',
      vocabulary: extractKeyVocabulary(content),
      grammar: '本篇中长篇文章使用多种时态和句式，请注意深度报道中常用的被动语态、直接引语和复杂从句。',
      keyPoints: [
        '文章来源：BBC ' + feed.feedNameZh,
        '发布时间：' + (item.pubDate || '未知'),
        '逐句逐词解析：每个单词可点击发音',
        '音频朗读：点击播放按钮听完整朗读',
        '建议先听音频，再逐句解析，最后阅读全文'
      ],
      _isNews: true,
      _hasFullContent: false,
      _sentenceAnalysis: sentenceAnalysis,
      _link: item.link,
      _cleanLink: cleanUrl(item.link),
      _pubDate: item.pubDate,
      _thumbnail: item.thumbnail,
      _feedName: feed.feedNameZh || feed.feedName
    };
  }

  function extractKeyVocabulary(text) {
    // 提取较长、可能较难的词作为重点词汇
    var words = text.split(/\s+/)
      .map(function (w) { return w.replace(/[^a-zA-Z\-]/g, ''); })
      .filter(function (w) { return w.length >= 7; })
      .filter(function (w, i, arr) { return arr.indexOf(w) === i; })
      .slice(0, 6);

    return words.map(function (w) {
      var meaning = lookupWord(w);
      return {
        word: w.toLowerCase(),
        phonetic: '',
        meaning: meaning || 'n./v. ' + w.toLowerCase(),
        example: w
      };
    });
  }

  // ===== 公开接口 =====
  return {
    config: CATEGORY_CONFIG,
    feeds: RSS_FEEDS,
    fetchAll: fetchAllFeeds,
    fetchFullArticle: fetchFullArticle,
    generateLesson: generateNewsLesson,
    generateSentenceAnalysis: generateSentenceAnalysis,
    parseBBCArticle: parseBBCArticle,
    splitSentences: splitSentences,
    splitWords: splitWords,
    lookupWord: lookupWord,
    cleanUrl: cleanUrl,
    clearCache: function () {
      try { localStorage.removeItem(CACHE_KEY); } catch (e) {}
    },
    // 持久化存储接口
    loadSavedArticles: loadSavedArticles,
    mergeSavedArticles: mergeSavedArticles,
    updateSavedArticle: updateSavedArticle,
    saveArticles: saveArticles,
    clearSavedArticles: function () {
      try { localStorage.removeItem(SAVED_KEY); } catch (e) {}
    }
  };
})();
