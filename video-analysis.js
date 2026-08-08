// ============================================================
// New Concept English - Video Analysis Data
// 每课包含：YouTube搜索链接、时间戳分段解析、逐句精讲、深度解析
// ============================================================

const VIDEO_ANALYSIS = {

  // ===== 第一册 =====
  'nc101': {
    youtubeQuery: '新概念英语第一册 Lesson 1 Excuse me 讲解',
    youtubeUrl: 'https://www.youtube.com/results?search_query=新概念英语第一册+Lesson+1+Excuse+me',
    segments: [
      { time: '00:00', title: '课程导入', content: '介绍本课场景：在剧院或其他公共场所，如何用英语引起他人注意。本课是新概念英语的起点，聚焦最基础的日常交际用语。' },
      { time: '01:30', title: 'Excuse me 的用法', content: 'Excuse me 是英语中最常用的礼貌用语之一，用于打扰他人、引起注意、借过、或提问前。与 Sorry 的区别：Excuse me 是"打扰了"，Sorry 是"抱歉做了某事"。' },
      { time: '03:00', title: 'Pardon 的用法', content: 'Pardon? 表示没听清对方的话，请求重复。口语中也常说 "Pardon me?" 或 "I beg your pardon?"。比 "What?" 更礼貌。' },
      { time: '04:30', title: '一般疑问句结构', content: 'Is this your...? 是最基本的一般疑问句，用 be 动词开头。肯定回答 Yes, it is. 否定回答 No, it is not / No, it isn\'t.' },
      { time: '06:00', title: '情景演练', content: '模拟剧院场景对话练习：找到失主、归还物品的完整对话流程。强调语调和礼貌表达。' }
    ],
    sentenceBreakdown: [
      { sentence: 'Excuse me!', translation: '打扰一下！', analysis: 'Excuse me 在此处用于引起陌生人注意。重音在 me 上，语调先升后降。' },
      { sentence: 'Yes?', translation: '什么事？', analysis: 'Yes? 用升调，表示询问对方有什么事。口语中很常见。' },
      { sentence: 'Is this your handbag?', translation: '这是你的手提包吗？', analysis: '一般疑问句：Is + 主语 + ...? this 是指示代词，your 是物主代词修饰 handbag。' },
      { sentence: 'Pardon?', translation: '请再说一遍？', analysis: '表示没听清，请求重复。比 What? 更礼貌正式。' },
      { sentence: 'Yes, it is.', translation: '是的，是我的。', analysis: '简短回答：Yes + 代词(it) + be动词(is)。it 指代 handbag。' },
      { sentence: 'Thank you very much.', translation: '非常感谢。', analysis: 'very much 修饰 thank you，表示程度。比单独的 Thank you 语气更强。' }
    ],
    deepAnalysis: '本课看似简单，但包含了英语交际的三个核心要素：引起注意（Excuse me）、请求重复（Pardon）、表达感谢（Thank you）。这些是任何英语对话的基础构建模块。值得注意的是，英语母语者在公共场所打扰陌生人时几乎必用 Excuse me 开头，这体现了英语文化中对个人空间的尊重。中国文化中直接叫"喂"或拍肩膀的方式在英语环境中是不礼貌的。'
  },

  'nc102': {
    youtubeQuery: '新概念英语第一册 Lesson 2 Is this yours 讲解',
    youtubeUrl: 'https://www.youtube.com/results?search_query=新概念英语第一册+Lesson+2',
    segments: [
      { time: '00:00', title: '课程导入', content: '延续第一册的场景，学习确认物品归属的表达方式。引入特殊疑问词 whose 的用法。' },
      { time: '02:00', title: 'Whose 引导的特殊疑问句', content: 'Whose = 谁的，用于询问物品归属。结构：Whose + 名词 + is this/that? 回答用物主代词或所有格：It is my/his/her... ' },
      { time: '03:30', title: 'Here you are 的用法', content: '递交物品给对方时的固定表达，相当于中文"给你"。不能逐字翻译为"你在这里"。' },
      { time: '05:00', title: '回应感谢的多种表达', content: 'You are welcome / Not at all / That is all right / My pleasure 均可表示"不客气"。在正式和非正式场合各有侧重。' },
      { time: '06:30', title: '名词单复数入门', content: 'pen/pens, book/books 规则复数加 -s。为后续名词复数学习做铺垫。' }
    ],
    sentenceBreakdown: [
      { sentence: 'Is this your pen?', translation: '这是你的钢笔吗？', analysis: '一般疑问句确认物品归属。pen 是可数名词单数。' },
      { sentence: 'No, it is not.', translation: '不，不是我的。', analysis: '否定简短回答。口语常缩写为 No, it isn\'t.' },
      { sentence: 'Whose book is this?', translation: '这是谁的书？', analysis: 'Whose 特殊疑问句。Whose + book（名词）+ is + this（主语）。' },
      { sentence: 'Here you are.', translation: '给你。', analysis: '固定搭配，递交物品时使用。不可按字面翻译。' },
      { sentence: 'You are welcome.', translation: '不客气。', analysis: '回应感谢的标准表达。welcome 此处为形容词。' },
      { sentence: 'Not at all.', translation: '不客气 / 一点也不。', analysis: '多重含义：回应感谢（不客气）、回应请求（没问题）、表示否定（一点也不）。需根据语境判断。' }
    ],
    deepAnalysis: '本课的核心是物品归属的表达体系。英语中确认归属有两条路径：一般疑问句（Is this your...?）用于已知可能的物主，特殊疑问句（Whose... is this?）用于完全不知道物主时。Here you are 是英语中极高频的固定表达，很多学习者会误译为"你在这里"，实际它是递交物品时的专用语。Not at all 的多义性是初学者容易混淆的难点，需要通过语境来判断含义。'
  },

  'nc103': {
    youtubeQuery: '新概念英语第一册 Lesson 3 nationality 讲解',
    youtubeUrl: 'https://www.youtube.com/results?search_query=新概念英语第一册+Lesson+3+nationality',
    segments: [
      { time: '00:00', title: '课程导入', content: '学习自我介绍和询问他人信息的表达：国籍、职业。这是社交场合最基本的信息交换。' },
      { time: '02:00', title: 'What nationality are you?', content: '询问国籍的固定句型。也可说 Where are you from? 两者意思接近但侧重点不同：前者问国籍，后者问来自哪里。' },
      { time: '03:30', title: '不定冠词 a vs an', content: 'a 用于辅音音素前（a teacher, a student），an 用于元音音素前（an engineer, an Italian）。注意是"音素"而非"字母"：an hour（h不发音）。' },
      { time: '05:00', title: 'How do you do? 的用法', content: '初次见面的正式问候语。回答也是 How do you do? 现代英语中逐渐被 Nice to meet you 替代，但在正式场合仍常见。' },
      { time: '06:30', title: 'be 动词全貌', content: 'I am / You are / He is / She is / It is / We are / They are。be 动词是英语最基础的动词，必须烂熟于心。' }
    ],
    sentenceBreakdown: [
      { sentence: 'Are you a new student?', translation: '你是一名新学生吗？', analysis: '一般疑问句用 Are 开头。a new student 中 a 是不定冠词，new 以辅音音素开头。' },
      { sentence: 'What nationality are you?', translation: '你是哪国人？', analysis: 'What + nationality 询问国籍。are you 是主谓结构。' },
      { sentence: 'I am Italian.', translation: '我是意大利人。', analysis: 'Italian 可作名词（意大利人）和形容词（意大利的）。此处作名词，前面不需要冠词。' },
      { sentence: 'I am an engineer.', translation: '我是一名工程师。', analysis: 'an 用于元音音素前。engineer 以元音 /e/ 开头，所以用 an 不用 a。' },
      { sentence: 'How do you do?', translation: '你好（初次见面）。', analysis: '形式上是疑问句，实际是问候语。回答用同样的句子。语调下降。' }
    ],
    deepAnalysis: '本课建立了英语自我介绍的完整框架：姓名 → 国籍 → 职业。这个三段式结构在几乎所有的英语社交场合都会用到。不定冠词 a/an 的选择是英语学习中的经典难点，关键在于判断"音素"而非"字母"——如 a university（u发/ju:/辅音）vs an umbrella（u发/ʌ/元音）。How do you do? 是英式英语的传统问候，在美式英语中更常用 Nice to meet you，这反映了英语的地域差异。'
  },

  // ===== 第二册 =====
  'nc201': {
    youtubeQuery: '新概念英语第二册 Lesson 1 A Private Conversation 讲解',
    youtubeUrl: 'https://www.youtube.com/results?search_query=新概念英语第二册+Lesson+1+Private+Conversation',
    segments: [
      { time: '00:00', title: '课文背景与概述', content: '新概念第二册的开篇之作。讲述在剧院被身后观众打扰的故事，幽默结尾"这是私人谈话"。文章虽短却结构精巧，是一般过去时和过去进行时的经典范例。' },
      { time: '03:00', title: '一般过去时精讲', content: 'went, had, was, did not enjoy, got, turned, looked, said 等过去式动词。一般过去时表示过去某个时间发生的动作或状态。注意不规则动词的变化。' },
      { time: '06:00', title: '过去进行时精讲', content: 'were sitting, were talking 表示过去某时刻正在进行的动作。与一般过去时的区别：进行时强调"正在做"，一般过去时强调"做了"。两者常配合使用：我正在做A时，B发生了。' },
      { time: '09:00', title: '关键短语解析', content: 'turn round（转身）、pay attention（注意）、bear it（忍受）、in the end（最后）、none of your business（不关你的事）。这些短语是英语日常表达的高频组合。' },
      { time: '12:00', title: '幽默结尾分析', content: '"This is a private conversation!" 年轻人把自己的大声喧哗说成"私人谈话"，是对打扰他人的荒谬辩解。这种"反预期"幽默是英式幽默的典型特征。' },
      { time: '14:00', title: '直接引语用法', content: '文中两处直接引语用引号标出："I cannot hear a word!" 和 "It is none of your business." 直接引语保留说话人的原话，注意标点用法。' }
    ],
    sentenceBreakdown: [
      { sentence: 'Last week I went to the theatre.', translation: '上周我去了剧院。', analysis: '一般过去时：went 是 go 的过去式。last week 是明确的时间状语，标志一般过去时。' },
      { sentence: 'The play was very interesting, but I did not enjoy it.', translation: '话剧很有趣，但我却无法享受。', analysis: 'was 是 is 的过去式。did not enjoy = didn\'t enjoy，did not + 动词原形构成过去否定。but 表示转折。' },
      { sentence: 'A young man and a young woman were sitting behind me.', translation: '一男一女坐在我后面。', analysis: '过去进行时：were sitting，表示当时"正在坐着"。behind me 是方位介词短语。' },
      { sentence: 'They did not pay any attention.', translation: '他们毫不理会。', analysis: 'pay attention = 注意。did not pay any attention = 完全没注意。any 用于否定句。' },
      { sentence: 'In the end, I could not bear it.', translation: '最后，我再也受不了了。', analysis: 'in the end = 最终/最后。could not bear = 无法忍受。bear 此处为动词"忍受"。' },
      { sentence: 'It is none of your business.', translation: '这不关你的事。', analysis: 'none of your business 是固定口语表达，意为"不关你的事/别多管闲事"。语气粗鲁不客气。' }
    ],
    deepAnalysis: '作为新概念第二册的开篇，本文堪称微型叙事的典范。全文仅百余词，却完整呈现了"起因→发展→高潮→反转"的叙事弧线。叙事者使用大量过去式动词（went, had, was, got, turned, looked）营造时间推进感，而过去进行时（were sitting, were talking）则勾勒出背景画面——这是一种高级的叙事技巧：用进行时画背景，用一般过去时推情节。文章的幽默在于"私人谈话"的双关——年轻人把在公共场所大声聊天称为"私人谈话"，既是对社交礼仪的无知，也是对被打扰者的嘲讽。这种"一本正经地说荒谬的话"正是英式幽默的精髓。从语言学习角度，本文是练习一般过去时与过去进行时对比的绝佳材料：试着把所有 were + doing 改为一般过去时，感受两种时态在叙事效果上的差异。'
  },

  'nc202': {
    youtubeQuery: '新概念英语第二册 Lesson 2 Breakfast or Lunch 讲解',
    youtubeUrl: 'https://www.youtube.com/results?search_query=新概念英语第二册+Lesson+2+Breakfast+Lunch',
    segments: [
      { time: '00:00', title: '课文背景与概述', content: '讲述一个爱睡懒觉的人在周日被姨妈电话吵醒的趣事。文章巧妙运用了现在进行时、一般现在时和一般过去时的对比，是时态学习的经典课文。' },
      { time: '03:00', title: '频度副词的位置', content: 'never/sometimes/always/usually/often 放在实义动词前、be动词后。I never get up early. He is always late. 这是英语频度副词的基本位置规则。' },
      { time: '05:30', title: '感叹句结构', content: 'What a day! = What + a/an + 名词（+ 主语 + 谓语）! What a beautiful day it is! How 引导的感叹句：How beautiful it is! How + 形容词/副词！' },
      { time: '07:30', title: 'by + 交通工具', content: 'by train/bus/plane/car/ship 表示交通方式。注意 by 和交通工具之间不加冠词。对比：on the train, in a car 需要冠词。' },
      { time: '09:30', title: '现在完成时初探', content: 'I have just arrived. just + 现在完成时表示"刚刚完成"。have/has + 过去分词。这里用现在完成时是因为"到达"的动作对现在有影响（我现在在这里）。' },
      { time: '11:30', title: '时态综合对比', content: '本文同时使用了：一般现在时（I never get up）、一般过去时（I got up very late）、现在进行时（It is raining）、现在完成时（I have just arrived）。是时态对比学习的完美素材。' }
    ],
    sentenceBreakdown: [
      { sentence: 'I never get up early on Sundays.', translation: '我星期天从不早起。', analysis: '一般现在时表习惯。never 频度副词放在实义动词 get up 前。on Sundays = 每个星期天。' },
      { sentence: '"What a day!" I thought.', translation: '"多糟糕的天气！"我想。', analysis: 'What 引导的感叹句，省略了主谓（it was）。thought 是 think 的过去式。what a day 可表示好天气也可表示坏天气，取决于语境。' },
      { sentence: 'Just then, the telephone rang.', translation: '就在那时，电话响了。', analysis: 'just then = 就在那时。rang 是 ring 的过去式。一般过去时表示过去发生的瞬间动作。' },
      { sentence: 'I have just arrived by train.', translation: '我刚坐火车到。', analysis: '现在完成时：have + arrived（过去分词）。just 表示"刚刚"。by train = 坐火车。' },
      { sentence: 'I am still having breakfast.', translation: '我还在吃早餐。', analysis: '现在进行时：am having，表示此刻正在进行。still 强调"仍然"，暗含"比预期晚"的意味。' },
      { sentence: 'Dear me!', translation: '天哪！', analysis: '感叹语，表示惊讶。类似表达：My goodness! Good heavens! Oh dear!' }
    ],
    deepAnalysis: '本文是新概念第二册中时态最丰富的一课，堪称"时态万花筒"。作者在一篇短文中自然地使用了四种时态：一般现在时描述习惯（I never get up early on Sundays）、一般过去时叙述事件（I got up very late）、现在进行时描述当下（It is raining again, I am still having breakfast）、现在完成时表达刚完成的动作（I have just arrived）。这种时态的自然切换正是英语母语者的语言本能——他们并非刻意选择时态，而是根据表达需要自动切换。对于学习者来说，理解每种时态的"使用动机"比记忆结构更重要：为什么这里用进行时？因为强调"正在进行中"的状态；为什么那里用完成时？因为强调"刚完成且对现在有影响"。文章的幽默在于姨妈的惊讶——她无法理解有人会在一点钟吃早餐，而"我"理直气壮地重复"I am having breakfast"，这种认知落差产生了喜剧效果。'
  },

  'nc203': {
    youtubeQuery: '新概念英语第二册 Lesson 3 Please Send Me a Card 讲解',
    youtubeUrl: 'https://www.youtube.com/results?search_query=新概念英语第二册+Lesson+3+Send+Card',
    segments: [
      { time: '00:00', title: '课文背景与概述', content: '讲述一个在意大利度假却始终没写明信片的人，最后买了一堆卡片却一张也没写的故事。全文以一般过去时为主，是学习不规则动词过去式的绝佳材料。' },
      { time: '03:00', title: '不规则动词过去式汇总', content: '本课出现大量不规则动词：went(go), sat(sit), taught(teach), lent(lend), read(read过去式读音不同), thought(think), made(make), bought(buy), spent(spend)。需要逐个记忆。' },
      { time: '06:00', title: 'a few vs a little', content: 'a few + 可数名词复数（a few words, a few lines）；a little + 不可数名词（a little water）。few/little（无a）表示"几乎没有"，带否定含义。' },
      { time: '08:00', title: '双宾语动词', content: 'teach sb sth（教某人某事）、lend sb sth（借给某人某物）。双宾语动词有两个宾语：间接宾语（人）和直接宾语（物）。可改写为 teach sth to sb / lend sth to sb。' },
      { time: '10:00', title: 'make a decision', content: '固定搭配"做决定"。make + 名词构成大量搭配：make a plan, make a mistake, make a promise, make money。' },
      { time: '12:00', title: '讽刺性结尾', content: '买了37张明信片，花了一整天，却"一张也没写"。文章以 did not write a single card 结尾，single 强调"连一张都没有"，形成强烈的反差与自嘲。' }
    ],
    sentenceBreakdown: [
      { sentence: 'Postcards always spoil my holidays.', translation: '明信片总是毁了我的假期。', analysis: '一般现在时表习惯性事实。always 放实义动词 spoil 前。spoil = 破坏/毁掉。' },
      { sentence: 'A friendly waiter taught me a few words of Italian.', translation: '一位友好的服务员教了我几句意大利语。', analysis: '双宾语：taught + me（间接宾语）+ a few words（直接宾语）。a few + 可数名词复数。' },
      { sentence: 'Then he lent me a book.', translation: '然后他借给我一本书。', analysis: 'lend sb sth = 借给某人某物。对比 borrow sth from sb = 向某人借某物。' },
      { sentence: 'I did not understand a word.', translation: '我一个字也没看懂。', analysis: 'did not + 动词原形。a word 强调连一个词都不懂。understand 是规则动词但过去式不变。' },
      { sentence: 'I spent the whole day in my room, but I did not write a single card!', translation: '我在房间里待了一整天，但一张明信片也没写！', analysis: 'spend time in + 地点。whole = 整个。single 强调"单一的"，not... a single = 一个也没有。but 转折。' }
    ],
    deepAnalysis: '本文的叙事魅力在于"心理拖延"的精准刻画。主人公每天想着明信片，却始终没有动笔——这种"想做却一直没做"的心理状态是全人类共通的经验。作者用 "Every day I thought about postcards" 和 "My holidays passed quickly" 的对比，展现了"想"与"做"之间的鸿沟。结尾的反转堪称教科书级别：买了37张卡片（行动力爆发）、在房间待了一整天（准备充分）、但"一张也没写"（彻底失败）。single 一词的运用极为精妙——它把"没写"从"没写任何卡片"升级为"连一张都没有写"，强化了讽刺效果。从语法角度看，本课是不规则动词过去式的集中训练场：went, sat, taught, lent, read, thought, made, bought, spent——这些高频不规则动词必须烂熟于心。建议学习者尝试用自己的话复述故事，重点练习这些动词的过去式。'
  },

  // ===== 第三册 =====
  'nc301': {
    youtubeQuery: '新概念英语第三册 Lesson 1 A Puma at Large 讲解',
    youtubeUrl: 'https://www.youtube.com/results?search_query=新概念英语第三册+Lesson+1+Puma+at+Large',
    segments: [
      { time: '00:00', title: '课文背景与概述', content: '新概念第三册开篇，讲述伦敦郊外疑似出现美洲狮的事件。文章从"报告被忽视"到"证据积累"再到"专家调查"，展现了新闻报道式的叙事风格，语言正式严谨。' },
      { time: '04:00', title: '定语从句精讲', content: 'animals which are found in America（which 引导限制性定语从句）。关系代词 which/that 指物，who/whom 指人。定语从句是第三册的核心语法点之一。' },
      { time: '07:00', title: '同位语从句', content: 'reports that a wild puma had been spotted（that 引导同位语从句，解释 reports 的内容）。同位语从句与定语从句的区别：同位语从句的 that 是连词不充当成分，定语从句的 that 是关系代词充当主/宾语。' },
      { time: '10:00', title: '过去完成时（被动语态）', content: 'had been spotted = had been + 过去分词。表示在过去某个时间点之前已经发生的动作（"过去的过去"），且是被动形式。' },
      { time: '13:00', title: 'wherever 让步状语从句', content: 'Wherever it went = 无论它走到哪里。wherever/whatever/whoever/however 等-ever 词引导让步状语从句，表示"无论..."。' },
      { time: '15:30', title: '分词作宾补', content: 'found clinging to bushes = 发现（毛）挂在灌木丛上。clinging 是现在分词作宾补，表示主动和进行。find sb doing sth = 发现某人正在做某事。' },
      { time: '18:00', title: '新闻语体分析', content: '本文的语言风格接近新闻报道：被动语态大量使用（were not taken seriously, were seen, was found）、客观中立、证据层层递进。这是英语新闻写作的典型特征。' }
    ],
    sentenceBreakdown: [
      { sentence: 'Pumas are large, cat-like animals which are found in America.', translation: '美洲狮是体型很大、像猫一样的动物，产于美洲。', analysis: 'which are found in America 是定语从句修饰 animals。are found 是被动语态（被发现/产于）。cat-like = 像猫的，复合形容词。' },
      { sentence: 'When reports came into London Zoo that a wild puma had been spotted...', translation: '当报告传到伦敦动物园说有人发现了一只野生美洲狮...', analysis: 'that 引导同位语从句，解释 reports 的内容。had been spotted 是过去完成时被动语态，表示在报告传来之前已被发现。' },
      { sentence: 'they were not taken seriously.', translation: '这些报告并没有被认真对待。', analysis: '被动语态：were not taken。take sth seriously = 认真对待某事。' },
      { sentence: 'as the evidence began to accumulate, experts felt obliged to investigate.', translation: '随着证据不断积累，专家们觉得有必要进行调查。', analysis: 'as = 随着，引导时间状语从句。feel obliged to do = 觉得有义务做某事。accumulate = 积累。' },
      { sentence: 'Wherever it went, it left behind it a trail of dead deer and small animals.', translation: '无论它走到哪里，身后都留下一条死鹿和小动物的踪迹。', analysis: 'Wherever = 无论哪里，让步状语从句。left behind = 留在身后。a trail of = 一串/一条踪迹。' },
      { sentence: 'The experts were now fully convinced that the animal really was a puma.', translation: '专家们现在完全相信这只动物确实是一只美洲狮。', analysis: 'be convinced that = 确信。fully 修饰 convinced。that 引导宾语从句。' }
    ],
    deepAnalysis: '作为新概念第三册的开篇，本文标志着从"日常叙事"到"学术/新闻写作"的语言升级。文章的结构是典型的"悬念-调查-结论"模式：先抛出异常事件（美洲狮出现在伦敦郊外），再描述调查过程（证据积累、专家介入、搜寻困难），最后给出不确定的结论（确实是美洲狮，但来源不明）。这种开放式结尾增加了文章的悬疑感。语言层面，本文大量使用被动语态（were not taken seriously, were seen, was found, had been spotted），这并非偶然——被动语态在英语新闻和学术写作中是标配，因为它强调"事件本身"而非"谁做的"，显得更客观。定语从句和同位语从句的密集出现是第三册的语言特征，它们使句子更长更复杂，但也更精确。学习者应注意：长句的理解关键在于找到主句的主谓结构，然后把从句当作"附加信息"挂回去。'
  },

  'nc302': {
    youtubeQuery: '新概念英语第三册 Lesson 2 Thirteen Equals One 讲解',
    youtubeUrl: 'https://www.youtube.com/results?search_query=新概念英语第三册+Lesson+2+Thirteen+Equals+One',
    segments: [
      { time: '00:00', title: '课文背景与概述', content: '讲述教堂大钟多年不响后突然敲了十三下的故事，牧师上楼发现是杂货商在修钟。标题"十三等于一"本身就是一个谜语式的悬念。' },
      { time: '04:00', title: 'always + 进行时表反复', content: 'is always raising money = 总是在筹钱。always 与进行时连用并非表示"正在进行"，而是表示反复发生的、有时令人烦恼的习惯性动作。这是一种特殊的进行时用法。' },
      { time: '07:00', title: 'have sth done 结构', content: 'have the church clock repaired = 找人修教堂钟。have sth done 表示"让某事被做（通常由别人做）"。对比：I repaired the clock（我自己修）vs I had the clock repaired（我找人修）。' },
      { time: '10:00', title: 'used to do', content: 'which used to strike the hours = 过去常报时。used to do 表示过去常常做但现在不再做的事。注意区分：used to do（过去常常）、be used to doing（习惯于做）。' },
      { time: '13:00', title: '分词短语作状语', content: 'Armed with a torch, the vicar went up... = 拿着手电筒，牧师上去...。过去分词短语作状语，表示伴随状态。相当于 With a torch in his hand, ...' },
      { time: '15:30', title: 'catch sight of', content: 'caught sight of a figure = 瞥见一个人影。catch sight of = 突然看见/瞥见，强调"不经意间看到"。对比 see（看见，一般用语）、notice（注意到）。' }
    ],
    sentenceBreakdown: [
      { sentence: 'Our vicar is always raising money for one cause or another.', translation: '我们的牧师总是在为这样或那样的原因筹钱。', analysis: 'always + 进行时表反复动作，暗含"频繁到令人无奈"的语气。one cause or another = 这样或那样的原因。' },
      { sentence: 'he has never managed to get enough money to have the church clock repaired.', translation: '他从未设法筹到足够的钱来修理教堂的钟。', analysis: 'has never managed = 现在完成时否定。manage to do = 设法做到。have sth repaired = 找人修理。' },
      { sentence: 'The big clock which used to strike the hours day and night was damaged many years ago.', translation: '那个曾经日夜报时的大钟很多年前就坏了。', analysis: 'which used to strike 是定语从句。used to do = 过去常常。day and night = 日夜。was damaged = 被动语态。' },
      { sentence: 'the bell struck thirteen times before it stopped.', translation: '钟敲了十三下才停下来。', analysis: 'before 引导时间状语从句。thirteen times = 十三次。struck 是 strike 的过去式。"十三下"是全文的悬念核心。' },
      { sentence: 'Armed with a torch, the vicar went up into the clock tower.', translation: '牧师拿着手电筒，爬上钟楼。', analysis: 'Armed with = 过去分词短语作方式状语。go up into = 上去进入。' },
      { sentence: 'he caught sight of a figure whom he immediately recognized as Bill Wilkins.', translation: '他瞥见一个人影，立刻认出那是比尔·威尔金斯。', analysis: 'catch sight of = 瞥见。whom 引导定语从句修饰 figure。recognize sb as = 认出某人是...' }
    ],
    deepAnalysis: '本文的标题"Thirteen Equals One"（十三等于一）本身就是一个精巧的文字游戏——钟敲了十三下（thirteen），但实际上只是一个杂货商在修钟（one person/one cause）。这种标题先设谜、正文后解谜的结构是英式幽默的经典手法。语言层面，本课有两个高级语法点值得深究：一是"always + 进行时"的特殊用法——is always raising money 并非表示"正在筹钱"，而是表示"总是筹钱"且暗含频率过高的无奈感，这种"形式与意义的不匹配"是英语进行时的一个微妙用法；二是"have sth done"结构——have the church clock repaired 强调"让钟被修好"但不是自己修，这种"使役+被动"的组合在英语中极为常用。文章的叙事节奏也值得学习：先铺垫（牧师筹钱修钟多年未果）、再设悬念（钟突然敲了十三下）、最后揭晓（是杂货商在修钟），形成了完整的微型故事弧线。'
  },

  // ===== 第四册 =====
  'nc401': {
    youtubeQuery: '新概念英语第四册 Lesson 1 Finding Fossils 讲解',
    youtubeUrl: 'https://www.youtube.com/results?search_query=新概念英语第四册+Lesson+1+Finding+Fossils',
    segments: [
      { time: '00:00', title: '课文背景与概述', content: '新概念第四册开篇，探讨在没有文字的社会中，历史如何通过口述传说保存。文章涉及人类学、历史学主题，语言正式、学术性强，长难句密集。' },
      { time: '05:00', title: 'where 引导的定语从句', content: 'in the Near East, where people first learned to write（where 关系副词引导非限制性定语从句，修饰表示地点的名词）。where 在从句中作地点状语，相当于 in which。' },
      { time: '09:00', title: '过去分词作后置定语', content: 'legends handed down from one generation（handed down 是过去分词短语，修饰 legends，表示"被传下来的"）。相当于 legends which were handed down。' },
      { time: '12:00', title: '现在分词作后置定语', content: 'peoples now living in the Pacific Islands（living 是现在分词短语，修饰 peoples，表示"正在居住的"）。相当于 peoples who now live in...。注意 peoples 加 s 表示"民族"。' },
      { time: '15:00', title: 'what 引导的宾语从句', content: 'write down what they did = 写下他们所做的事。what = the things that，在从句中充当宾语。what 从句是英语长难句的常见组件。' },
      { time: '18:00', title: '学术写作的语言特征', content: '本文体现了学术英语的典型特征：长句多、从句嵌套深、被动语态频繁、抽象名词密集。理解长句的关键：找到主句主谓，再逐层拆解从句。' }
    ],
    sentenceBreakdown: [
      { sentence: 'We can read of things that happened 5,000 years ago in the Near East, where people first learned to write.', translation: '我们可以读到5000年前近东地区发生的事情，那里的人们最早学会了书写。', analysis: 'that happened 是定语从句修饰 things。where 引导非限制性定语从句修饰 Near East。read of = 读到关于...的记载。' },
      { sentence: 'The only way they can preserve their history is to recount it as sagas.', translation: '他们保存历史的唯一方法是将其作为英雄传说来讲述。', analysis: 'they can preserve 是省略了 that 的定语从句修饰 way。to recount... 是不定式作表语。as = 作为。' },
      { sentence: 'legends handed down from one generation of storytellers to another.', translation: '从一代说书人传给另一代说书人的传说。', analysis: 'handed down 是过去分词短语修饰 legends，表示被动"被传下来"。from... to another = 从一代到另一代。' },
      { sentence: 'These legends are useful because they can tell us something about migrations of people who lived long ago.', translation: '这些传说是有用的，因为它们可以告诉我们一些关于远古人类迁徙的信息。', analysis: 'because 引导原因状语从句。who lived long ago 是定语从句修饰 people。migrations of people = 人类的迁徙。' },
      { sentence: 'none could write down what they did.', translation: '但没有人能够写下他们所做的事情。', analysis: 'what they did 是 what 引导的宾语从句，what = the things that。none = 没有人（代词）。' },
      { sentence: 'Anthropologists wondered where the remote ancestors of the Polynesian peoples now living in the Pacific Islands came from.', translation: '人类学家想知道，现在居住在太平洋岛屿上的波利尼西亚人的远祖是从哪里来的。', analysis: 'where... came from 是宾语从句。now living in... 是现在分词短语修饰 peoples。peoples = 民族（复数）。wondered = 想知道。' }
    ],
    deepAnalysis: '本文标志着新概念英语从"语言学习"向"思想探讨"的跨越。文章讨论的核心问题是：在没有文字的文明中，历史如何被保存？答案是口述传说（sagas）。这个话题本身涉及人类学的深层命题——文字并非保存历史的唯一方式，口头传统同样能传递跨越千年的信息。语言层面，第四册的长难句是对学习者的最大挑战。以最后一句为例：Anthropologists wondered where the remote ancestors of the Polynesian peoples now living in the Pacific Islands came from. 这句话包含三层嵌套：主句（Anthropologists wondered）→ 宾语从句（where... came from）→ 定语短语（now living in the Pacific Islands 修饰 peoples）。理解长句的方法是"先找主谓，再拆从句"：先找到主句的 Anthropologists wondered，然后 where... came from 是 wondered 的宾语从句，now living in... 是 peoples 的后置定语。这种"拆解法"是攻克第四册长难句的核心技能。另外，peoples 加 -s 表示"民族"而非"人们"——英语中某些名词加复数会改变含义，这是高级英语的细节。'
  },

  'nc402': {
    youtubeQuery: '新概念英语第四册 Lesson 2 Spare That Spider 讲解',
    youtubeUrl: 'https://www.youtube.com/results?search_query=新概念英语第四册+Lesson+2+Spare+Spider',
    segments: [
      { time: '00:00', title: '课文背景与概述', content: '一篇关于蜘蛛益处的科普文章。作者用设问开头（为什么蜘蛛是我们的朋友？），通过对比论证蜘蛛比其他食虫动物更高效地消灭害虫。语言风格兼具学术性和说服力。' },
      { time: '05:00', title: '虚拟语气（与现在事实相反）', content: 'if it were not for the protection... they would devour all our crops. 虚拟语气表示与现在事实相反的假设：if + 过去式, 主句 would + 动词原形。if it were not for = 如果不是因为...（固定句型）。' },
      { time: '09:00', title: '插入语在疑问句中', content: 'Why, you may wonder, should spiders be our friends? you may wonder 是插入语，不影响句子结构。疑问词 why 仍放在句首。插入语使语气更口语化、更具互动感。' },
      { time: '12:00', title: 'make it + adj. + for sb + to do', content: 'make it impossible for us to live = 使我们不可能生存。it 是形式宾语，真正的宾语是 to live，impossible 是宾补。这是英语高级句型，用于表达"使某事成为可能/不可能"。' },
      { time: '15:00', title: 'owe a lot to sb', content: 'We owe a lot to the birds and beasts = 我们深受鸟兽之恩。owe A to B = 把A归功于B / 欠B的A。这是正式文体中的感谢表达。' },
      { time: '18:00', title: '对比论证手法', content: '文章用"all of them put together kill only a fraction of the number destroyed by spiders"做对比，证明蜘蛛比所有食虫鸟兽加起来更高效。这种"以数据对比支撑论点"的方法在英语议论文中很常见。' }
    ],
    sentenceBreakdown: [
      { sentence: 'Why, you may wonder, should spiders be our friends?', translation: '你可能会想，为什么蜘蛛应该是我们的朋友？', analysis: 'you may wonder 是插入语。why should... 是疑问句，should 表"应该"。spider 用复数泛指蜘蛛这类生物。' },
      { sentence: 'Because they destroy so many insects, and insects include some of the greatest enemies of the human race.', translation: '因为它们消灭了如此多的昆虫，而昆虫中包括人类最大的敌人。', analysis: 'Because 回答上文的 why。so many + 可数名词复数。the human race = 人类（固定表达）。' },
      { sentence: 'Insects would make it impossible for us to live in the world;', translation: '昆虫将使我们无法在这个世界上生存；', analysis: '虚拟语气主句：would + 动词原形。make it impossible for sb to do = 使某人不可能做某事。it 是形式宾语。' },
      { sentence: 'if it were not for the protection we get from insect-eating animals.', translation: '如果不是因为有食虫动物的保护。', analysis: '虚拟条件句：if it were not for = 如果不是因为（固定句型）。were 不随主语变化（虚拟语气）。insect-eating = 食虫的（复合形容词）。' },
      { sentence: 'We owe a lot to the birds and beasts who eat insects,', translation: '我们深受食虫鸟兽之恩，', analysis: 'owe a lot to sb = 深受某人之恩。who eat insects 是定语从句修饰 birds and beasts。beasts = 野兽。' },
      { sentence: 'but all of them put together kill only a fraction of the number destroyed by spiders.', translation: '但它们全部加起来杀死的昆虫数量也不过是蜘蛛所消灭的一小部分。', analysis: 'put together = 加在一起（过去分词短语作后置定语）。a fraction of = 一小部分。destroyed by spiders 是过去分词短语修饰 number。' }
    ],
    deepAnalysis: '本文是一篇典范的英语科普议论文。作者运用了多种高级论证手法：设问开头（Why should spiders be our friends?）引发读者好奇、虚拟语气假设（if it were not for...）展示昆虫的危害、对比论证（蜘蛛 vs 食虫鸟兽）突出蜘蛛的贡献、递进收尾（Moreover, unlike... spiders never do the least harm）强化论点。这种"设问→假设→对比→递进"的论证结构在英语学术写作中极为常见。语言层面，虚拟语气的运用是本课最大亮点：if it were not for the protection... they would devour all our crops —— 这里用虚拟语气表示"与现在事实相反的假设"，即"如果没有食虫动物的保护（实际上有），昆虫就会吞噬庄稼（实际上没有）"。虚拟语气的核心是"假设一个不存在的情景然后推导后果"，这种思维方式在英语中非常普遍，但在中文里较少使用。另外，"make it impossible for us to live"中的 it 是形式宾语——英语不喜欢"宾语太长"，所以用 it 占位，把真正的宾语 to live 放到后面。这种"形式词占位"的结构（it作形式主语/宾语）是英语句法的一大特色，在第四册中随处可见。'
  }
};
