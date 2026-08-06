// ============================================================
// English Learning Platform - Application Logic
// ============================================================

(function () {
  'use strict';

  // ===== State =====
  let currentView = 'home'; // home | category | lesson
  let currentCategoryId = null;
  let currentLessonId = null;
  let isPlaying = false;
  let currentUtterance = null;
  let currentSpeed = 0.9;
  let speakingTarget = null; // 'full' | 'vocab' | null

  // ===== Progress (localStorage) =====
  const STORAGE_KEY = 'elp_progress_v1';

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveProgress(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // storage might be full or disabled
    }
  }

  let progress = loadProgress();

  function markLessonComplete(categoryId, lessonId) {
    if (!progress[categoryId]) progress[categoryId] = [];
    if (!progress[categoryId].includes(lessonId)) {
      progress[categoryId].push(lessonId);
      saveProgress(progress);
    }
  }

  function isLessonComplete(categoryId, lessonId) {
    return progress[categoryId] && progress[categoryId].includes(lessonId);
  }

  function getCategoryProgress(categoryId) {
    const category = COURSE_DATA[categoryId];
    if (!category) return { completed: 0, total: 0, percent: 0 };
    const total = category.lessons.length;
    const completed = progress[categoryId] ? progress[categoryId].length : 0;
    return {
      completed,
      total,
      percent: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  }

  function getGlobalProgress() {
    let totalLessons = 0;
    let completedLessons = 0;
    Object.keys(COURSE_DATA).forEach(function (catId) {
      totalLessons += COURSE_DATA[catId].lessons.length;
      completedLessons += progress[catId] ? progress[catId].length : 0;
    });
    return {
      total: totalLessons,
      completed: completedLessons,
      percent: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0
    };
  }

  // ===== Speech Synthesis =====
  function getEnglishVoice() {
    const voices = window.speechSynthesis.getVoices();
    // Prefer en-US or en-GB voices
    return (
      voices.find(function (v) { return v.lang === 'en-US' && v.name.includes('Google'); }) ||
      voices.find(function (v) { return v.lang === 'en-GB' && v.name.includes('Google'); }) ||
      voices.find(function (v) { return v.lang === 'en-US'; }) ||
      voices.find(function (v) { return v.lang === 'en-GB'; }) ||
      voices.find(function (v) { return v.lang.startsWith('en'); }) ||
      voices[0]
    );
  }

  function speak(text, target) {
    if (!('speechSynthesis' in window)) {
      showToast('您的浏览器不支持语音朗读功能');
      return;
    }

    // Stop any current speech
    window.speechSynthesis.cancel();
    isPlaying = false;
    updatePlayButtons();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = currentSpeed;
    utterance.pitch = 1;

    const voice = getEnglishVoice();
    if (voice) utterance.voice = voice;

    utterance.onstart = function () {
      isPlaying = true;
      speakingTarget = target || 'full';
      updatePlayButtons();
      updateVisualizer(true);
    };

    utterance.onend = function () {
      isPlaying = false;
      speakingTarget = null;
      updatePlayButtons();
      updateVisualizer(false);
      // Auto-mark lesson complete when full text finishes
      if (target === 'full' && currentLessonId) {
        markLessonComplete(currentCategoryId, currentLessonId);
        showToast('课程学习完成！');
        updateHeaderProgress();
      }
    };

    utterance.onerror = function () {
      isPlaying = false;
      speakingTarget = null;
      updatePlayButtons();
      updateVisualizer(false);
    };

    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  function stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    isPlaying = false;
    speakingTarget = null;
    updatePlayButtons();
    updateVisualizer(false);
  }

  function togglePlay() {
    if (isPlaying && speakingTarget === 'full') {
      stopSpeaking();
    } else {
      const lesson = getCurrentLesson();
      if (lesson) {
        speak(lesson.english, 'full');
      }
    }
  }

  function updatePlayButtons() {
    // Main play button
    const mainBtn = document.getElementById('audioPlayBtn');
    if (mainBtn) {
      if (isPlaying && speakingTarget === 'full') {
        mainBtn.classList.add('playing');
        mainBtn.innerHTML = '&#10074;&#10074;';
      } else {
        mainBtn.classList.remove('playing');
        mainBtn.innerHTML = '&#9654;';
      }
    }

    // Vocab play buttons
    const vocabBtns = document.querySelectorAll('.vocab-play');
    vocabBtns.forEach(function (btn) {
      if (isPlaying && speakingTarget === btn.dataset.word) {
        btn.classList.add('playing');
        btn.innerHTML = '&#10074;&#10074;';
      } else {
        btn.classList.remove('playing');
        btn.innerHTML = '&#9654;';
      }
    });
  }

  function updateVisualizer(active) {
    const viz = document.querySelector('.audio-visualizer');
    if (viz) {
      if (active) viz.classList.add('active');
      else viz.classList.remove('active');
    }
  }

  // Load voices (some browsers need this)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function () {
      getEnglishVoice();
    };
  }

  // ===== Helpers =====
  function getCurrentLesson() {
    if (!currentCategoryId || !currentLessonId) return null;
    const category = COURSE_DATA[currentCategoryId];
    if (!category) return null;
    return category.lessons.find(function (l) { return l.id === currentLessonId; });
  }

  function getCurrentCategory() {
    return currentCategoryId ? COURSE_DATA[currentCategoryId] : null;
  }

  function getLessonIndex(categoryId, lessonId) {
    const category = COURSE_DATA[categoryId];
    if (!category) return -1;
    return category.lessons.findIndex(function (l) { return l.id === lessonId; });
  }

  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
    }, 2500);
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ===== Rendering =====

  function renderHome() {
    const main = document.getElementById('appMain');
    let html = '';

    html += '<div class="home-hero">';
    html += '<h1>English Learning Platform</h1>';
    html += '<p>四大知识分类，从零基础到专业采购，每课配有纯正音频朗读与详细中文解释</p>';
    html += '</div>';

    html += '<div class="category-grid">';

    Object.keys(COURSE_DATA).forEach(function (catId) {
      const cat = COURSE_DATA[catId];
      const catProgress = getCategoryProgress(catId);
      html += '<div class="category-card" style="--cat-color: ' + cat.color + '; --cat-bg: ' + cat.colorLight + ';" data-category="' + catId + '">';
      html += '<div class="cat-icon">' + cat.icon + '</div>';
      html += '<div class="cat-name">' + cat.name + '</div>';
      html += '<div class="cat-name-en">' + cat.nameEn + '</div>';
      html += '<div class="cat-desc">' + cat.description + '</div>';
      html += '<div class="cat-meta">';
      html += '<span><span>&#128218;</span> ' + cat.lessons.length + ' 课</span>';
      html += '<span><span>&#127919;</span> ' + cat.level + '</span>';
      html += '<span><span>&#9989;</span> ' + catProgress.completed + '/' + catProgress.total + '</span>';
      html += '</div>';
      html += '</div>';
    });

    html += '</div>';

    main.innerHTML = html;

    // Bind category cards
    document.querySelectorAll('.category-card').forEach(function (card) {
      card.addEventListener('click', function () {
        const catId = card.dataset.category;
        openCategory(catId);
      });
    });
  }

  function renderCategory() {
    const cat = getCurrentCategory();
    if (!cat) return;

    const main = document.getElementById('appMain');
    let html = '';

    html += '<div class="view-header">';
    html += '<button class="back-btn" id="backHome">&#8592; 返回首页</button>';
    html += '<div class="category-title">';
    html += '<div class="cat-icon-lg" style="background: ' + cat.colorLight + ';">' + cat.icon + '</div>';
    html += '<h2>' + cat.name + '</h2>';
    html += '<span class="cat-level" style="background: ' + cat.colorLight + '; color: ' + cat.color + ';">' + cat.level + '</span>';
    html += '</div>';
    html += '<p class="category-desc">' + cat.description + '</p>';
    html += '</div>';

    html += '<div class="lesson-list">';

    cat.lessons.forEach(function (lesson, index) {
      const completed = isLessonComplete(cat.id, lesson.id);
      let dotsHtml = '';
      for (let i = 0; i < 5; i++) {
        dotsHtml += '<span class="diff-dot' + (i < lesson.difficulty ? ' active' : '') + '"></span>';
      }

      html += '<div class="lesson-item' + (completed ? ' completed' : '') + '" data-lesson="' + lesson.id + '">';
      html += '<div class="lesson-num">' + (completed ? '&#10003;' : (index + 1)) + '</div>';
      html += '<div class="lesson-info">';
      html += '<div class="lesson-title">' + escapeHtml(lesson.title) + '</div>';
      html += '<div class="lesson-meta">';
      html += '<span>&#128338; ' + lesson.duration + '</span>';
      html += '<span class="lesson-difficulty">' + dotsHtml + '</span>';
      if (completed) html += '<span style="color: var(--success);">&#9989; 已完成</span>';
      html += '</div>';
      html += '</div>';
      html += '<div class="lesson-arrow">&#8250;</div>';
      html += '</div>';
    });

    html += '</div>';

    main.innerHTML = html;

    document.getElementById('backHome').addEventListener('click', function () {
      goHome();
    });

    document.querySelectorAll('.lesson-item').forEach(function (item) {
      item.addEventListener('click', function () {
        openLesson(item.dataset.lesson);
      });
    });
  }

  function renderLesson() {
    const lesson = getCurrentLesson();
    const cat = getCurrentCategory();
    if (!lesson || !cat) return;

    const lessonIndex = getLessonIndex(cat.id, lesson.id);
    const prevLesson = lessonIndex > 0 ? cat.lessons[lessonIndex - 1] : null;
    const nextLesson = lessonIndex < cat.lessons.length - 1 ? cat.lessons[lessonIndex + 1] : null;

    const main = document.getElementById('appMain');
    let html = '';

    html += '<div class="view-header">';
    html += '<button class="back-btn" id="backCategory">&#8592; 返回' + cat.name + '</button>';
    html += '</div>';

    html += '<div class="lesson-detail">';

    // Header
    html += '<div class="lesson-detail-header">';
    html += '<span class="lesson-tag" style="background: ' + cat.colorLight + '; color: ' + cat.color + ';">' + cat.icon + ' ' + cat.name + '</span>';
    html += '<h2>' + escapeHtml(lesson.title) + '</h2>';
    html += '<div class="lesson-title-en">' + escapeHtml(lesson.titleEn) + '</div>';
    html += '<div class="lesson-detail-meta">';
    html += '<span>&#128338; ' + lesson.duration + '</span>';
    let dotsHtml = '';
    for (let i = 0; i < 5; i++) {
      dotsHtml += '<span class="diff-dot' + (i < lesson.difficulty ? ' active' : '') + '"></span>';
    }
    html += '<span>难度 ' + dotsHtml + '</span>';
    html += '</div>';
    html += '</div>';

    // Audio Player
    html += '<div class="audio-player">';
    html += '<button class="audio-play-btn" id="audioPlayBtn">&#9654;</button>';
    html += '<div class="audio-info">';
    html += '<div class="audio-label">点击播放英文朗读</div>';
    html += '<div class="audio-controls">';
    html += '<button class="speed-btn" data-speed="0.6">0.6x</button>';
    html += '<button class="speed-btn" data-speed="0.8">0.8x</button>';
    html += '<button class="speed-btn active" data-speed="0.9">0.9x</button>';
    html += '<button class="speed-btn" data-speed="1.0">1.0x</button>';
    html += '</div>';
    html += '</div>';
    html += '<div class="audio-visualizer">';
    for (let i = 0; i < 7; i++) html += '<div class="bar"></div>';
    html += '</div>';
    html += '</div>';

    // English Text
    html += '<div class="content-section">';
    html += '<div class="section-title"><span class="section-icon">&#127467;&#127479;</span> English Text</div>';
    html += '<div class="english-text" id="englishText">' + escapeHtml(lesson.english) + '</div>';
    html += '</div>';

    // Chinese Translation
    html += '<div class="content-section">';
    html += '<div class="section-title"><span class="section-icon">&#127464;&#127475;</span> 中文解释</div>';
    html += '<div class="chinese-text">' + escapeHtml(lesson.chinese) + '</div>';
    html += '</div>';

    // Vocabulary
    html += '<div class="content-section">';
    html += '<div class="section-title"><span class="section-icon">&#128221;</span> 重点词汇</div>';
    html += '<div class="vocab-list">';
    lesson.vocabulary.forEach(function (vocab) {
      html += '<div class="vocab-card">';
      html += '<button class="vocab-play" data-word="' + escapeHtml(vocab.word) + '" data-example="' + escapeHtml(vocab.example) + '">&#9654;</button>';
      html += '<div class="vocab-content">';
      html += '<span class="vocab-word">' + escapeHtml(vocab.word) + '</span>';
      html += '<span class="vocab-phonetic">' + escapeHtml(vocab.phonetic) + '</span>';
      html += '<div class="vocab-meaning">' + escapeHtml(vocab.meaning) + '</div>';
      html += '<div class="vocab-example">e.g. ' + escapeHtml(vocab.example) + '</div>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    // Grammar
    html += '<div class="content-section">';
    html += '<div class="section-title"><span class="section-icon">&#128221;</span> 语法要点</div>';
    html += '<div class="grammar-content">' + escapeHtml(lesson.grammar) + '</div>';
    html += '</div>';

    // Video Analysis (for newconcept lessons)
    var va = (typeof VIDEO_ANALYSIS !== 'undefined') ? VIDEO_ANALYSIS[lesson.id] : null;
    if (va) {
      html += '<div class="content-section video-analysis-section">';
      html += '<div class="section-title"><span class="section-icon">&#127909;</span> 视频解析</div>';

      // YouTube link
      html += '<div class="video-link-card">';
      html += '<div class="video-link-left">';
      html += '<div class="video-link-icon">&#127909;</div>';
      html += '<div class="video-link-info">';
      html += '<div class="video-link-title">视频讲解</div>';
      html += '<div class="video-link-desc">' + escapeHtml(va.youtubeQuery) + '</div>';
      html += '</div>';
      html += '</div>';
      html += '<a href="' + va.youtubeUrl + '" target="_blank" rel="noopener" class="video-link-btn">在 YouTube 观看 &#8599;</a>';
      html += '</div>';

      // Timestamped segments
      html += '<h4 class="va-subtitle">&#9201; 分段解析</h4>';
      html += '<div class="video-segments">';
      va.segments.forEach(function (seg, idx) {
        html += '<div class="video-segment">';
        html += '<div class="segment-time">' + escapeHtml(seg.time) + '</div>';
        html += '<div class="segment-body">';
        html += '<div class="segment-title">' + escapeHtml(seg.title) + '</div>';
        html += '<div class="segment-content">' + escapeHtml(seg.content) + '</div>';
        html += '</div>';
        html += '</div>';
      });
      html += '</div>';

      // Sentence breakdown
      html += '<h4 class="va-subtitle">&#128270; 逐句精讲</h4>';
      html += '<div class="sentence-breakdown">';
      va.sentenceBreakdown.forEach(function (sb, idx) {
        html += '<div class="sentence-card">';
        html += '<div class="sentence-number">' + (idx + 1) + '</div>';
        html += '<div class="sentence-content">';
        html += '<div class="sentence-en">' + escapeHtml(sb.sentence) + '</div>';
        html += '<div class="sentence-zh">' + escapeHtml(sb.translation) + '</div>';
        html += '<div class="sentence-analysis"><span class="analysis-label">解析</span> ' + escapeHtml(sb.analysis) + '</div>';
        html += '</div>';
        html += '</div>';
      });
      html += '</div>';

      // Deep analysis
      html += '<h4 class="va-subtitle">&#128161; 深度解析</h4>';
      html += '<div class="deep-analysis">' + escapeHtml(va.deepAnalysis) + '</div>';

      html += '</div>';
    }

    // Key Points
    html += '<div class="content-section">';
    html += '<div class="section-title"><span class="section-icon">&#11088;</span> 学习重点</div>';
    html += '<div class="key-points-list">';
    lesson.keyPoints.forEach(function (point) {
      html += '<div class="key-point"><span class="point-icon">&#10003;</span><span>' + escapeHtml(point) + '</span></div>';
    });
    html += '</div>';
    html += '</div>';

    // Navigation
    html += '<div class="lesson-nav">';
    if (prevLesson) {
      html += '<button class="nav-btn" id="prevLesson">&#8592; 上一课</button>';
    } else {
      html += '<button class="nav-btn" disabled>&#8592; 上一课</button>';
    }
    html += '<button class="nav-btn primary" id="markComplete">&#9989; 标记完成</button>';
    if (nextLesson) {
      html += '<button class="nav-btn" id="nextLesson">下一课 &#8594;</button>';
    } else {
      html += '<button class="nav-btn" id="backToList">完成列表 &#10003;</button>';
    }
    html += '</div>';

    html += '</div>';

    main.innerHTML = html;

    // Bind events
    document.getElementById('backCategory').addEventListener('click', function () {
      openCategory(currentCategoryId);
    });

    document.getElementById('audioPlayBtn').addEventListener('click', togglePlay);

    // Speed buttons
    document.querySelectorAll('.speed-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.speed-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentSpeed = parseFloat(btn.dataset.speed);
        // If currently playing, restart with new speed
        if (isPlaying && speakingTarget === 'full') {
          const lesson = getCurrentLesson();
          if (lesson) speak(lesson.english, 'full');
        }
      });
    });

    // Vocab play buttons
    document.querySelectorAll('.vocab-play').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const word = btn.dataset.word;
        const example = btn.dataset.example;
        if (isPlaying && speakingTarget === word) {
          stopSpeaking();
        } else {
          speak(example, word);
        }
      });
    });

    // Navigation buttons
    if (prevLesson) {
      document.getElementById('prevLesson').addEventListener('click', function () {
        openLesson(prevLesson.id);
      });
    }

    document.getElementById('markComplete').addEventListener('click', function () {
      markLessonComplete(currentCategoryId, currentLessonId);
      showToast('已标记为完成！');
      updateHeaderProgress();
      document.getElementById('markComplete').textContent = '&#9989; 已完成';
      document.getElementById('markComplete').disabled = true;
    });

    if (nextLesson) {
      document.getElementById('nextLesson').addEventListener('click', function () {
        openLesson(nextLesson.id);
      });
    } else {
      document.getElementById('backToList').addEventListener('click', function () {
        openCategory(currentCategoryId);
      });
    }

    // Check if already completed
    if (isLessonComplete(currentCategoryId, currentLessonId)) {
      const btn = document.getElementById('markComplete');
      btn.innerHTML = '&#9989; 已完成';
      btn.disabled = true;
    }
  }

  function updateHeaderProgress() {
    const gp = getGlobalProgress();
    const fillEl = document.querySelector('.progress-fill');
    const percentEl = document.querySelector('.progress-percent');
    const completedEl = document.getElementById('statCompleted');
    const streakEl = document.getElementById('statStreak');

    if (fillEl) fillEl.style.width = gp.percent + '%';
    if (percentEl) percentEl.textContent = gp.percent + '%';
    if (completedEl) completedEl.textContent = gp.completed + '/' + gp.total;
  }

  // ===== Navigation =====
  function goHome() {
    stopSpeaking();
    currentView = 'home';
    currentCategoryId = null;
    currentLessonId = null;
    renderHome();
    updateHeaderProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openCategory(catId) {
    stopSpeaking();
    currentView = 'category';
    currentCategoryId = catId;
    currentLessonId = null;
    renderCategory();
    updateHeaderProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openLesson(lessonId) {
    stopSpeaking();
    currentView = 'lesson';
    currentLessonId = lessonId;
    renderLesson();
    updateHeaderProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ===== Init =====
  function init() {
    // Logo click → home
    document.getElementById('appLogo').addEventListener('click', goHome);

    // Render initial view
    renderHome();
    updateHeaderProgress();
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Stop speech when leaving page
  window.addEventListener('beforeunload', function () {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  });
})();
