// ============================================================
// English Learning Platform - Course Data
// 五大知识分类：从零入门、新概念英语、BBC短篇、商务英语、采购英语
// 每个课程包含：英文原文、中文解释、重点词汇、语法要点
// ============================================================

const COURSE_DATA = {
  beginner: {
    id: 'beginner',
    name: '从零入门',
    nameEn: 'Beginner from Zero',
    icon: '🌱',
    color: '#10b981',
    colorLight: '#d1fae5',
    description: '为零基础学习者设计，从字母、发音、基础句型开始，逐步建立英语思维。',
    level: 'A0-A1',
    lessons: [
      {
        id: 'b01',
        title: '英语字母与发音基础',
        titleEn: 'Alphabet and Basic Pronunciation',
        difficulty: 1,
        duration: '10 min',
        english: `The English alphabet has 26 letters. There are 5 vowels: A, E, I, O, U. The other 21 letters are consonants. Each letter can be pronounced in different ways. For example, the letter "A" can sound like "ay" in "cake" or "ah" in "father". Learning the correct pronunciation is the first step to speaking English well.`,
        chinese: `英语字母表共有26个字母。其中有5个元音字母：A、E、I、O、U。其余21个是辅音字母。每个字母可以有不同的发音方式。例如，字母"A"在"cake"中发"ay"的音，在"father"中发"ah"的音。学习正确的发音是说好英语的第一步。`,
        vocabulary: [
          { word: 'alphabet', phonetic: '/ˈælfəbet/', meaning: 'n. 字母表', example: 'The English alphabet has 26 letters.' },
          { word: 'vowel', phonetic: '/ˈvaʊəl/', meaning: 'n. 元音', example: 'A, E, I, O, U are vowels.' },
          { word: 'consonant', phonetic: '/ˈkɒnsənənt/', meaning: 'n. 辅音', example: 'B, C, D are consonants.' },
          { word: 'pronunciation', phonetic: '/prəˌnʌnsiˈeɪʃən/', meaning: 'n. 发音', example: 'Your pronunciation is very good.' }
        ],
        grammar: `英语字母分为元音和辅音两大类。元音字母是构成音节的核心，每个单词至少包含一个元音。字母的发音会因其在单词中的位置和组合不同而变化，这是英语发音的一大特点。`,
        keyPoints: [
          '26个字母 = 5个元音 + 21个辅音',
          '同一个字母在不同单词中可能有不同发音',
          '掌握字母发音是口语学习的基础'
        ]
      },
      {
        id: 'b02',
        title: '日常问候与自我介绍',
        titleEn: 'Daily Greetings and Self-Introduction',
        difficulty: 1,
        duration: '12 min',
        english: `Hello! My name is Li Ming. I am from China. I am twenty-five years old. I work as a teacher. Nice to meet you! How are you today? I am fine, thank you. And you? What do you do? I am a student. Where are you from? I am from Beijing.`,
        chinese: `你好！我的名字叫李明。我来自中国。我今年25岁。我的工作是老师。很高兴认识你！你今天好吗？我很好，谢谢。你呢？你是做什么的？我是一名学生。你来自哪里？我来自北京。`,
        vocabulary: [
          { word: 'hello', phonetic: '/həˈləʊ/', meaning: 'intj. 你好', example: 'Hello, everyone!' },
          { word: 'name', phonetic: '/neɪm/', meaning: 'n. 名字', example: 'My name is Anna.' },
          { word: 'from', phonetic: '/frɒm/', meaning: 'prep. 来自', example: 'I am from China.' },
          { word: 'work', phonetic: '/wɜːk/', meaning: 'v. 工作', example: 'I work in a hospital.' },
          { word: 'student', phonetic: '/ˈstjuːdənt/', meaning: 'n. 学生', example: 'She is a university student.' }
        ],
        grammar: `自我介绍常用句型："My name is..."（我的名字是...）、"I am from..."（我来自...）、"I am a..."（我是一名...）。"How are you?" 是最常见的问候语，回答通常用 "I am fine, thank you."。疑问词 What（什么）、Where（哪里）、How（怎样）用于提问信息。`,
        keyPoints: [
          '"My name is..." = 我的名字是...',
          '"I am from..." = 我来自...',
          '"How are you?" = 你好吗？（日常问候必备）',
          'What/Where/How 是最常用的疑问词'
        ]
      },
      {
        id: 'b03',
        title: '数字、时间与日期',
        titleEn: 'Numbers, Time and Dates',
        difficulty: 2,
        duration: '15 min',
        english: `Let us learn numbers from one to ten: one, two, three, four, five, six, seven, eight, nine, ten. What time is it? It is three o'clock. It is half past three. It is a quarter to four. Today is Monday, July 15th. My birthday is on September 20th. The meeting is at 2 PM on Wednesday.`,
        chinese: `让我们学习从一到十的数字：one, two, three, four, five, six, seven, eight, nine, ten。现在几点了？三点整。三点半。差一刻四点。今天是7月15日星期一。我的生日是9月20日。会议在周三下午2点。`,
        vocabulary: [
          { word: 'number', phonetic: '/ˈnʌmbə/', meaning: 'n. 数字', example: 'Can you say the numbers in English?' },
          { word: 'time', phonetic: '/taɪm/', meaning: 'n. 时间', example: 'What time is it now?' },
          { word: 'o\'clock', phonetic: '/əˈklɒk/', meaning: 'adv. ...点钟', example: 'It is six o\'clock.' },
          { word: 'quarter', phonetic: '/ˈkwɔːtə/', meaning: 'n. 一刻钟', example: 'It is a quarter past nine.' },
          { word: 'birthday', phonetic: '/ˈbɜːθdeɪ/', meaning: 'n. 生日', example: 'Happy birthday to you!' }
        ],
        grammar: `表达时间："It is + 数字 + o'clock"（...点整）、"half past + 数字"（...点半）、"a quarter past/to + 数字"（过/差一刻...点）。表达日期用序数词：July 15th（7月15日），September 20th（9月20日）。介词搭配：at + 具体时刻，on + 星期/日期，in + 月份/年份。`,
        keyPoints: [
          '时间表达：o\'clock（整点）、half past（半点）、quarter to/past（一刻）',
          '日期用序数词：1st, 2nd, 3rd, 4th...',
          '介词搭配：at + 时刻，on + 星期/日期，in + 月/年'
        ]
      },
      {
        id: 'b04',
        title: '颜色、衣物与日常物品',
        titleEn: 'Colors, Clothes and Daily Objects',
        difficulty: 2,
        duration: '12 min',
        english: `Common colors include red, blue, green, yellow, black, white, orange, purple, pink, and brown. I am wearing a blue shirt and black pants today. She has a red bag. The book on the table is mine. Please pass me the cup. I need a pen to write. Where is my phone? It is on the chair.`,
        chinese: `常见的颜色有红色、蓝色、绿色、黄色、黑色、白色、橙色、紫色、粉色和棕色。我今天穿着蓝色衬衫和黑色裤子。她有一个红色的包。桌子上的书是我的。请把杯子递给我。我需要一支笔来写字。我的手机在哪里？它在椅子上。`,
        vocabulary: [
          { word: 'color', phonetic: '/ˈkʌlə/', meaning: 'n. 颜色', example: 'What is your favorite color?' },
          { word: 'wear', phonetic: '/weə/', meaning: 'v. 穿着', example: 'She is wearing a red dress.' },
          { word: 'shirt', phonetic: '/ʃɜːt/', meaning: 'n. 衬衫', example: 'This shirt is too small.' },
          { word: 'table', phonetic: '/ˈteɪbəl/', meaning: 'n. 桌子', example: 'The keys are on the table.' },
          { word: 'need', phonetic: '/niːd/', meaning: 'v. 需要', example: 'I need some help.' }
        ],
        grammar: `描述穿着用现在进行时："I am wearing..."（我正穿着...）。物主代词：my（我的）、your（你的）、his（他的）、her（她的）、mine（我的东西）、yours（你的东西）。方位介词：on（在...上面）、in（在...里面）、under（在...下面）、next to（在...旁边）。`,
        keyPoints: [
          '现在进行时："I am wearing..." = 我正穿着...',
          '物主代词：my/your/his/her → mine/yours/his/hers',
          '方位介词：on/in/under/next to'
        ]
      },
      {
        id: 'b05',
        title: '家庭与职业',
        titleEn: 'Family and Occupations',
        difficulty: 2,
        duration: '15 min',
        english: `There are five people in my family: my father, my mother, my elder brother, my younger sister, and me. My father is a doctor. He works in a hospital. My mother is a teacher. She teaches English at a primary school. My brother is an engineer. My sister is still a student. I am a software developer. I love my family very much.`,
        chinese: `我家有五口人：爸爸、妈妈、哥哥、妹妹和我。我的爸爸是一名医生。他在医院工作。我的妈妈是一名老师。她在小学教英语。我的哥哥是一名工程师。我的妹妹还是一名学生。我是一名软件开发者。我非常爱我的家人。`,
        vocabulary: [
          { word: 'family', phonetic: '/ˈfæməli/', meaning: 'n. 家庭', example: 'I love my family.' },
          { word: 'father', phonetic: '/ˈfɑːðə/', meaning: 'n. 父亲', example: 'My father is very kind.' },
          { word: 'doctor', phonetic: '/ˈdɒktə/', meaning: 'n. 医生', example: 'The doctor is very patient.' },
          { word: 'engineer', phonetic: '/ˌendʒɪˈnɪə/', meaning: 'n. 工程师', example: 'He is a software engineer.' },
          { word: 'developer', phonetic: '/dɪˈveləpə/', meaning: 'n. 开发者', example: 'She is a web developer.' }
        ],
        grammar: `家庭成员称谓：father（父亲）、mother（母亲）、brother（兄弟）、sister（姐妹）、elder（年长的）、younger（年幼的）。职业表达："My father is a doctor."（我爸爸是医生）。一般现在时用于描述常态和职业。第三人称单数动词加s：he works, she teaches。`,
        keyPoints: [
          '家庭成员：father/mother/brother/sister',
          '职业表达："Somebody is a/an + 职业"',
          '第三人称单数：he/she + 动词s（works, teaches）'
        ]
      },
      {
        id: 'b06',
        title: '点餐与购物',
        titleEn: 'Ordering Food and Shopping',
        difficulty: 3,
        duration: '15 min',
        english: `Welcome to our restaurant! Can I see the menu, please? Sure. What would you like to order? I would like a bowl of tomato soup and a chicken sandwich, please. Would you like something to drink? Yes, a cup of coffee, please. How much is it? It is twenty-five dollars. Here you are. Thank you!`,
        chinese: `欢迎光临我们的餐厅！请给我看一下菜单好吗？好的。您想点些什么？我想要一碗番茄汤和一个鸡肉三明治。您想喝点什么吗？是的，请来一杯咖啡。多少钱？二十五美元。给您。谢谢！`,
        vocabulary: [
          { word: 'menu', phonetic: '/ˈmenjuː/', meaning: 'n. 菜单', example: 'Can I see the menu?' },
          { word: 'order', phonetic: '/ˈɔːdə/', meaning: 'v. 点餐 n. 订单', example: 'Are you ready to order?' },
          { word: 'soup', phonetic: '/suːp/', meaning: 'n. 汤', example: 'The soup is delicious.' },
          { word: 'sandwich', phonetic: '/ˈsænwɪtʃ/', meaning: 'n. 三明治', example: 'I made a chicken sandwich.' },
          { word: 'dollar', phonetic: '/ˈdɒlə/', meaning: 'n. 美元', example: 'It costs ten dollars.' }
        ],
        grammar: `点餐常用句型："I would like..."（我想要...）、"Can I have...?"（我可以要...吗？）。礼貌请求用 "Would you like...?"（您想要...吗？）。询问价格用 "How much is it?"（多少钱？）。量词搭配：a bowl of（一碗）、a cup of（一杯）、a piece of（一块/片）。`,
        keyPoints: [
          '点餐句型："I would like..." = 我想要...',
          '询问价格："How much is it?" = 多少钱？',
          '量词：a bowl of / a cup of / a piece of'
        ]
      }
    ]
  },

  newconcept: {
    id: 'newconcept',
    name: '新概念英语',
    nameEn: 'New Concept English',
    icon: '📖',
    color: '#ef4444',
    colorLight: '#fee2e2',
    description: '经典《新概念英语》四册体系，从基础对话到高级文章，循序渐进培养英语综合能力。',
    level: 'A1-C1',
    lessons: [
      // ===== 第一册：基础入门 =====
      {
        id: 'nc101',
        title: '第一册·Lesson 1 打扰一下',
        titleEn: 'Book 1 · Excuse Me',
        difficulty: 1,
        duration: '10 min',
        english: `Excuse me! Yes? Is this your handbag? Pardon? Is this your handbag? Yes, it is. Thank you very much.`,
        chinese: `打扰一下！什么事？这是你的手提包吗？请再说一遍？这是你的手提包吗？是的，是我的。非常感谢。`,
        vocabulary: [
          { word: 'excuse', phonetic: '/ɪkˈskjuːz/', meaning: 'v. 原谅，打扰', example: 'Excuse me, is this your seat?' },
          { word: 'handbag', phonetic: '/ˈhændbæɡ/', meaning: 'n. 手提包', example: 'She put her keys in her handbag.' },
          { word: 'pardon', phonetic: '/ˈpɑːdən/', meaning: 'intj. 请再说一遍', example: 'Pardon? I did not hear you.' },
          { word: 'thank', phonetic: '/θæŋk/', meaning: 'v. 感谢', example: 'Thank you for your help.' }
        ],
        grammar: `"Excuse me" 是日常用语，用于打扰别人或引起注意。"Pardon?" 表示没听清，请求对方重复。一般疑问句结构："Is this your...?"（这是你的...吗？），肯定回答用 "Yes, it is."，否定回答用 "No, it is not."。物主代词：my（我的）、your（你的）、his（他的）、her（她的）。`,
        keyPoints: [
          '"Excuse me" = 打扰一下/劳驾',
          '"Pardon?" = 请再说一遍（没听清时使用）',
          '一般疑问句："Is this your...?" → "Yes, it is." / "No, it is not."',
          '基础礼貌用语：Thank you very much'
        ]
      },
      {
        id: 'nc102',
        title: '第一册·Lesson 2 这是你的吗',
        titleEn: 'Book 1 · Is This Yours',
        difficulty: 1,
        duration: '10 min',
        english: `Is this your pen? Yes, it is. Is this your book? No, it is not. Whose book is this? It is my book. Here you are. Thank you. You are welcome. Is this your coat? Yes, it is. Thank you very much. Not at all.`,
        chinese: `这是你的钢笔吗？是的，是我的。这是你的书吗？不，不是我的。这是谁的书？是我的书。给你。谢谢。不客气。这是你的外套吗？是的，是我的。非常感谢。不客气。`,
        vocabulary: [
          { word: 'pen', phonetic: '/pen/', meaning: 'n. 钢笔', example: 'I need a pen to write.' },
          { word: 'whose', phonetic: '/huːz/', meaning: 'pron. 谁的', example: 'Whose car is this?' },
          { word: 'coat', phonetic: '/kəʊt/', meaning: 'n. 外套', example: 'Put on your coat. It is cold.' },
          { word: 'welcome', phonetic: '/ˈwelkəm/', meaning: 'adj. 受欢迎的', example: 'You are welcome.' }
        ],
        grammar: `特殊疑问词 whose（谁的）用于询问物品归属："Whose book is this?"（这是谁的书？）。"Here you are" 是递交物品时的常用语。礼貌回应感谢的多种表达："You are welcome"、"Not at all"、"That is all right"均可表示"不客气"。名词单复数：pen/pens, book/books。`,
        keyPoints: [
          '"Whose + 名词 + is this?" = 这是谁的...？',
          '"Here you are." = 给你（递交物品时使用）',
          '回应感谢："You are welcome." / "Not at all."',
          '一般疑问句的肯否定回答'
        ]
      },
      {
        id: 'nc103',
        title: '第一册·Lesson 3 你好，我是新来的',
        titleEn: 'Book 1 · Hello, I Am New Here',
        difficulty: 1,
        duration: '12 min',
        english: `Hello. My name is Robert. Are you a new student? Yes, I am. What nationality are you? I am Italian. Are you a teacher? No, I am not. What is your job? I am a computer operator. What about you? I am an engineer. Nice to meet you, Robert. Nice to meet you, too. Come and meet our new teacher. This is Mr. Blake. How do you do? How do you do?`,
        chinese: `你好。我的名字叫罗伯特。你是一名新学生吗？是的，我是。你是哪国人？我是意大利人。你是一名老师吗？不，我不是。你的工作是什么？我是一名电脑操作员。你呢？我是一名工程师。很高兴认识你，罗伯特。我也很高兴认识你。来见见我们的新老师。这是布莱克先生。你好。你好。`,
        vocabulary: [
          { word: 'nationality', phonetic: '/ˌnæʃəˈnæləti/', meaning: 'n. 国籍', example: 'What is your nationality?' },
          { word: 'Italian', phonetic: '/ɪˈtæliən/', meaning: 'n./adj. 意大利人(的)', example: 'She is Italian.' },
          { word: 'operator', phonetic: '/ˈɒpəreɪtə/', meaning: 'n. 操作员', example: 'He is a machine operator.' },
          { word: 'engineer', phonetic: '/ˌendʒɪˈnɪə/', meaning: 'n. 工程师', example: 'My brother is an engineer.' }
        ],
        grammar: `询问国籍："What nationality are you?"（你是哪国人？）。be动词的用法：I am, You are, He/She is。不定冠词a/an的选择：元音音素前用an（an engineer, an Italian），辅音音素前用a（a teacher, a student）。初次见面的正式问候："How do you do?"（你好），回答也是"How do you do?"。`,
        keyPoints: [
          '询问国籍："What nationality are you?"',
          'be动词：I am / You are / He is / She is',
          '不定冠词a/an：元音音素前用an',
          '正式问候："How do you do?"（初次见面）'
        ]
      },

      // ===== 第二册：实践与进步 =====
      {
        id: 'nc201',
        title: '第二册·Lesson 1 私人谈话',
        titleEn: 'Book 2 · A Private Conversation',
        difficulty: 3,
        duration: '15 min',
        english: `Last week I went to the theatre. I had a very good seat. The play was very interesting, but I did not enjoy it. A young man and a young woman were sitting behind me. They were talking loudly. I got very angry. I could not hear the actors. I turned round. I looked at the man and the woman angrily. They did not pay any attention. In the end, I could not bear it. I turned round again. "I cannot hear a word!" I said angrily. "It is none of your business," the young man said rudely. "This is a private conversation!"`,
        chinese: `上周我去了剧院。我有一个很好的座位。话剧很有趣，但我却无法享受。一男一女坐在我后面。他们大声说话。我非常生气。我听不见演员的声音。我转过身去。我生气地看着那个男人和那个女人。他们毫不理会。最后，我再也受不了了。我又转过身去。"我一个字都听不见！"我生气地说。"这不关你的事，"那个年轻人粗鲁地说。"这是私人谈话！"`,
        vocabulary: [
          { word: 'theatre', phonetic: '/ˈθɪətə/', meaning: 'n. 剧院', example: 'We went to the theatre last night.' },
          { word: 'loudly', phonetic: '/ˈlaʊdli/', meaning: 'adv. 大声地', example: 'He spoke loudly so everyone could hear.' },
          { word: 'angrily', phonetic: '/ˈæŋɡrəli/', meaning: 'adv. 生气地', example: 'She looked at him angrily.' },
          { word: 'attention', phonetic: '/əˈtenʃən/', meaning: 'n. 注意', example: 'They did not pay any attention.' },
          { word: 'bear', phonetic: '/beə/', meaning: 'v. 忍受', example: 'I cannot bear the noise.' },
          { word: 'rudely', phonetic: '/ˈruːdli/', meaning: 'adv. 粗鲁地', example: 'He spoke rudely to the waiter.' }
        ],
        grammar: `一般过去时：表示过去发生的动作，动词用过去式（went, had, was, did not enjoy, were, could not）。过去进行时："were sitting"（正在坐着），表示过去某时刻正在进行的动作。turn round = 转过身。pay attention = 注意。bear = 忍受（can/could not bear）。"none of your business" = 不关你的事。直接引语用引号标出。`,
        keyPoints: [
          '一般过去时：went, had, was, could not（规则+不规则动词）',
          '过去进行时：was/were + doing（过去正在进行的动作）',
          '词组搭配：turn round（转身）、pay attention（注意）、bear it（忍受）',
          '"none of your business" = 不关你的事（口语常用）'
        ]
      },
      {
        id: 'nc202',
        title: '第二册·Lesson 2 早餐还是午餐',
        titleEn: 'Book 2 · Breakfast or Lunch',
        difficulty: 3,
        duration: '14 min',
        english: `It was Sunday. I never get up early on Sundays. I sometimes stay in bed until lunchtime. Last Sunday I got up very late. I looked out of the window. It was dark outside. "What a day!" I thought. "It is raining again." Just then, the telephone rang. It was my aunt Lucy. "I have just arrived by train," she said. "I am coming to see you." "But I am still having breakfast," I said. "What are you doing?" she asked. "I am having breakfast," I repeated. "Dear me," she said. "Do you always get up so late? It is one o'clock!"`,
        chinese: `那天是星期天。我星期天从不早起。我有时在床上待到午饭时间。上个星期天我起得很晚。我望向窗外。外面很暗。"多糟糕的天气！"我想。"又下雨了。"就在那时，电话响了。是我的露西姨妈。"我刚坐火车到，"她说。"我来看你。""但我还在吃早餐，"我说。"你在做什么？"她问。"我在吃早餐，"我重复道。"天哪，"她说。"你总是这么晚起床吗？已经一点了！"`,
        vocabulary: [
          { word: 'until', phonetic: '/ənˈtɪl/', meaning: 'prep./conj. 直到', example: 'I waited until 5 o\'clock.' },
          { word: 'dark', phonetic: '/dɑːk/', meaning: 'adj. 黑暗的', example: 'It was dark outside.' },
          { word: 'ring', phonetic: '/rɪŋ/', meaning: 'v. 响(过去式rang)', example: 'The phone rang at midnight.' },
          { word: 'arrive', phonetic: '/əˈraɪv/', meaning: 'v. 到达', example: 'She arrived by train.' },
          { word: 'repeat', phonetic: '/rɪˈpiːt/', meaning: 'v. 重复', example: 'Could you repeat that?' }
        ],
        grammar: `频度副词位置：never/sometimes/always 放在实义动词前（I never get up, I sometimes stay）。感叹句："What a day!"（多糟糕的天气！），结构为 What + a/an + 名词。现在进行时："It is raining"（正在下雨）、"I am having breakfast"（我正在吃早餐）。by + 交通工具："by train"（坐火车）。just + 现在完成时："I have just arrived"（我刚到）。`,
        keyPoints: [
          '频度副词位置：always/usually/sometimes/never 放动词前',
          '感叹句："What + a/an + 名词(+ 主语 + 谓语)!"',
          '现在进行时：is/am/are + doing',
          'by + 交通工具：by train/bus/plane'
        ]
      },
      {
        id: 'nc203',
        title: '第二册·Lesson 3 请给我寄张明信片',
        titleEn: 'Book 2 · Please Send Me a Card',
        difficulty: 3,
        duration: '14 min',
        english: `Postcards always spoil my holidays. Last summer, I went to Italy. I visited museums and sat in public gardens. A friendly waiter taught me a few words of Italian. Then he lent me a book. I read a few lines, but I did not understand a word. Every day I thought about postcards. My holidays passed quickly, but I did not send any cards to my friends. On the last day I made a big decision. I got up early and bought thirty-seven cards. I spent the whole day in my room, but I did not write a single card!`,
        chinese: `明信片总是毁了我的假期。去年夏天，我去了意大利。我参观了博物馆，坐在公园里。一位友好的服务员教了我几句意大利语。然后他借给我一本书。我读了几行，但一个字也没看懂。每天我都想着明信片的事。我的假期过得很快，但我没有给朋友寄任何明信片。最后一天我做了个重大决定。我早早起床，买了三十七张明信片。我在房间里待了一整天，但一张明信片也没写！`,
        vocabulary: [
          { word: 'spoil', phonetic: '/spɔɪl/', meaning: 'v. 破坏，毁掉', example: 'The rain spoiled our picnic.' },
          { word: 'lend', phonetic: '/lend/', meaning: 'v. 借出(过去式lent)', example: 'He lent me his book.' },
          { word: 'decision', phonetic: '/dɪˈsɪʒən/', meaning: 'n. 决定', example: 'I made a big decision.' },
          { word: 'single', phonetic: '/ˈsɪŋɡəl/', meaning: 'adj. 单一的', example: 'Not a single card was written.' },
          { word: 'public', phonetic: '/ˈpʌblɪk/', meaning: 'adj. 公共的', example: 'We sat in a public garden.' }
        ],
        grammar: `一般过去时：went, visited, sat, taught, lent, read, thought, passed, did not send, made, got up, bought, spent, did not write。a few + 可数名词复数（几个）：a few words, a few lines。a little + 不可数名词（一点）。"teach sb sth"（教某人某事）："taught me a few words"。"lend sb sth"（借给某人某物）："lent me a book"。make a decision = 做决定。spend time in + 地点 = 在某地度过时间。`,
        keyPoints: [
          '一般过去时：大量不规则动词过去式（went/sat/taught/lent/read/thought/made/bought/spent）',
          'a few + 可数名词 vs a little + 不可数名词',
          '双宾语动词：teach sb sth / lend sb sth',
          'make a decision = 做决定'
        ]
      },

      // ===== 第三册：培养技能 =====
      {
        id: 'nc301',
        title: '第三册·Lesson 1 逃遁的美洲狮',
        titleEn: 'Book 3 · A Puma at Large',
        difficulty: 4,
        duration: '18 min',
        english: `Pumas are large, cat-like animals which are found in America. When reports came into London Zoo that a wild puma had been spotted forty-five miles south of London, they were not taken seriously. However, as the evidence began to accumulate, experts from the Zoo felt obliged to investigate. The search proved difficult, for the puma was often observed at one place in the morning and at another place twenty miles away in the evening. Wherever it went, it left behind it a trail of dead deer and small animals. Paw prints were seen in a number of places and puma fur was found clinging to bushes. Several people complained of "cat-like noises" at night. The experts were now fully convinced that the animal really was a puma, but where had it come from?`,
        chinese: `美洲狮是体型很大、像猫一样的动物，产于美洲。当报告传到伦敦动物园说在伦敦以南45英里处有人发现了一只野生美洲狮时，这些报告并没有被认真对待。然而，随着证据不断积累，动物园的专家们觉得有必要进行调查。搜寻工作很困难，因为美洲狮经常早上在一个地方出现，晚上却在20英里外的另一个地方出现。无论它走到哪里，身后都留下一条死鹿和小动物的踪迹。在许多地方都看到了爪印，美洲狮的毛也发现挂在灌木丛上。几个人抱怨晚上听到"像猫一样的叫声"。专家们现在完全相信这只动物确实是一只美洲狮，但它是从哪里来的呢？`,
        vocabulary: [
          { word: 'spot', phonetic: '/spɒt/', meaning: 'v. 发现，认出', example: 'A wild puma was spotted nearby.' },
          { word: 'accumulate', phonetic: '/əˈkjuːmjəleɪt/', meaning: 'v. 积累', example: 'Evidence began to accumulate.' },
          { word: 'oblige', phonetic: '/əˈblaɪdʒ/', meaning: 'v. 迫使，使必须', example: 'They felt obliged to investigate.' },
          { word: 'convince', phonetic: '/kənˈvɪns/', meaning: 'v. 使确信', example: 'I am convinced that he is right.' },
          { word: 'trail', phonetic: '/treɪl/', meaning: 'n. 踪迹', example: 'The dog followed the trail.' },
          { word: 'cling', phonetic: '/klɪŋ/', meaning: 'v. 粘附(过去式clung)', example: 'Fur was found clinging to bushes.' }
        ],
        grammar: `定语从句："animals which are found in America"（在美洲发现的动物）。同位语从句："reports that a wild puma had been spotted"（发现野生美洲狮的报告）。过去完成时（被动）："had been spotted"（已被发现），表示在过去的报告之前已发生的动作。as引导时间状语从句："as the evidence began to accumulate"（随着证据不断积累）。wherever引导让步状语从句："Wherever it went"（无论它走到哪里）。过去分词作宾补："found clinging to bushes"（发现挂在灌木丛上）。be convinced that = 确信。`,
        keyPoints: [
          '定语从句：which/that 引导，修饰名词',
          '同位语从句：that 引导，解释名词内容',
          '过去完成时（被动）：had been + 过去分词',
          'wherever 让步从句：无论...到哪里',
          '分词作宾补：find sth doing'
        ]
      },
      {
        id: 'nc302',
        title: '第三册·Lesson 2 十三等于一',
        titleEn: 'Book 3 · Thirteen Equals One',
        difficulty: 4,
        duration: '16 min',
        english: `Our vicar is always raising money for one cause or another, but he has never managed to get enough money to have the church clock repaired. The big clock which used to strike the hours day and night was damaged many years ago and has been silent ever since. One night, however, our vicar woke up with a start: the clock was striking the hours! Looking at his watch, he saw that it was one o\'clock, but the bell struck thirteen times before it stopped. Armed with a torch, the vicar went up into the clock tower to see what was going on. In the torchlight, he caught sight of a figure whom he immediately recognized as Bill Wilkins, our local grocer.`,
        chinese: `我们的牧师总是在为这样或那样的原因筹钱，但他从未设法筹到足够的钱来修理教堂的钟。那个曾经日夜报时的大钟很多年前就坏了，从那以后一直沉默。然而，一天晚上，我们的牧师猛然惊醒：大钟正在报时！他看了看手表，发现是一点钟，但钟敲了十三下才停下来。牧师拿着手电筒，爬上钟楼去看个究竟。在手电筒的光下，他看到一个人影，他立刻认出那是我们的本地杂货商比尔·威尔金斯。`,
        vocabulary: [
          { word: 'vicar', phonetic: '/ˈvɪkə/', meaning: 'n. 牧师', example: 'The vicar is always raising money.' },
          { word: 'cause', phonetic: '/kɔːz/', meaning: 'n. 事业，原因', example: 'He raises money for a good cause.' },
          { word: 'repair', phonetic: '/rɪˈpeə/', meaning: 'v./n. 修理', example: 'The clock needs to be repaired.' },
          { word: 'torch', phonetic: '/tɔːtʃ/', meaning: 'n. 手电筒', example: 'He was armed with a torch.' },
          { word: 'recognize', phonetic: '/ˈrekəɡnaɪz/', meaning: 'v. 认出', example: 'I recognized him immediately.' }
        ],
        grammar: `现在进行时表反复动作："is always raising money"（总是筹钱），always与进行时连用表示反复或令人烦恼。have sth done（使某事被做）："have the church clock repaired"（找人修理教堂钟）。used to do（过去常常）："which used to strike the hours"（过去常报时）。现在完成时："has been silent ever since"（从那以后一直沉默）。before引导时间状语从句："struck thirteen times before it stopped"（敲了十三下才停）。过去分词短语作状语："Armed with a torch"（拿着手电筒）。catch sight of = 瞥见。recognize sb as = 认出某人是。`,
        keyPoints: [
          'always + 进行时：表示反复/令人烦恼的动作',
          'have sth done：使某事被做（找人做某事）',
          'used to do：过去常常（现在不再）',
          '现在完成时：has/have + 过去分词',
          '分词短语作状语：Armed with..., the vicar went up...'
        ]
      },

      // ===== 第四册：流利英语 =====
      {
        id: 'nc401',
        title: '第四册·Lesson 1 发现雕塑',
        titleEn: 'Book 4 · Finding Fossils',
        difficulty: 5,
        duration: '20 min',
        english: `We can read of things that happened 5,000 years ago in the Near East, where people first learned to write. But there are some parts of the world where even now people cannot write. The only way they can preserve their history is to recount it as sagas — legends handed down from one generation of storytellers to another. These legends are useful because they can tell us something about migrations of people who lived long ago, but none could write down what they did. Anthropologists wondered where the remote ancestors of the Polynesian peoples now living in the Pacific Islands came from.`,
        chinese: `我们可以读到5000年前近东地区发生的事情，那里的人们最早学会了书写。但世界上有些地方，即使到了现在，人们仍然不会写字。他们保存历史的唯一方法就是将其作为英雄传说来讲述——从一代说书人传给另一代说书人的传说。这些传说是有用的，因为它们可以告诉我们一些关于远古人类迁徙的信息，但没有人能够写下他们所做的事情。人类学家想知道，现在居住在太平洋岛屿上的波利尼西亚人的远祖是从哪里来的。`,
        vocabulary: [
          { word: 'preserve', phonetic: '/prɪˈzɜːv/', meaning: 'v. 保存', example: 'They preserve their history as sagas.' },
          { word: 'recount', phonetic: '/rɪˈkaʊnt/', meaning: 'v. 讲述', example: 'He recounted the story of his journey.' },
          { word: 'saga', phonetic: '/ˈsɑːɡə/', meaning: 'n. 英雄传说', example: 'The saga was handed down for generations.' },
          { word: 'migration', phonetic: '/maɪˈɡreɪʃən/', meaning: 'n. 迁徙', example: 'They study the migration of ancient peoples.' },
          { word: 'ancestor', phonetic: '/ˈænsəstə/', meaning: 'n. 祖先', example: 'Their ancestors came from Asia.' },
          { word: 'anthropologist', phonetic: '/ˌænθrəˈpɒlədʒɪst/', meaning: 'n. 人类学家', example: 'Anthropologists study human cultures.' }
        ],
        grammar: `定语从句（关系副词where）："in the Near East, where people first learned to write"（在近东，那里的人们最早学会书写）。过去分词作后置定语："legends handed down from one generation"（从一代传下来的传说）。现在分词作后置定语："peoples now living in the Pacific Islands"（现在居住在太平洋岛屿上的民族）。the only way to do sth（做某事的唯一方法）："The only way they can preserve their history is to recount it"。because引导原因状语从句。what引导宾语从句："write down what they did"（写下他们所做的事）。wonder + wh-从句："wondered where... came from"（想知道从哪里来）。`,
        keyPoints: [
          'where引导定语从句：修饰表示地点的名词',
          '过去分词作定语：handed down（被传下来的）',
          '现在分词作定语：living in...（居住在...的）',
          'what引导宾语从句：write down what they did',
          'wonder + wh-从句：想知道...'
        ]
      },
      {
        id: 'nc402',
        title: '第四册·Lesson 2 不要伤害蜘蛛',
        titleEn: 'Book 4 · Spare That Spider',
        difficulty: 5,
        duration: '18 min',
        english: `Why, you may wonder, should spiders be our friends? Because they destroy so many insects, and insects include some of the greatest enemies of the human race. Insects would make it impossible for us to live in the world; they would devour all our crops and kill our flocks and herds, if it were not for the protection we get from insect-eating animals. We owe a lot to the birds and beasts who eat insects, but all of them put together kill only a fraction of the number destroyed by spiders. Moreover, unlike some of the other insect eaters, spiders never do the least harm to us or our belongings.`,
        chinese: `你可能会想，为什么蜘蛛应该是我们的朋友？因为它们消灭了如此多的昆虫，而昆虫中包括人类最大的敌人。如果不是因为有食虫动物的保护，昆虫将使我们无法在这个世界上生存；它们会吞噬我们所有的庄稼，杀死我们的牛羊。我们深受食虫鸟兽之恩，但它们全部加起来杀死的昆虫数量也不过是蜘蛛所消灭的一小部分。此外，与其他食虫动物不同，蜘蛛对我们或我们的财物绝不会造成任何伤害。`,
        vocabulary: [
          { word: 'destroy', phonetic: '/dɪˈstrɔɪ/', meaning: 'v. 消灭，破坏', example: 'Spiders destroy many insects.' },
          { word: 'devour', phonetic: '/dɪˈvaʊə/', meaning: 'v. 吞噬', example: 'Insects would devour all our crops.' },
          { word: 'flock', phonetic: '/flɒk/', meaning: 'n. 羊群', example: 'They killed our flocks and herds.' },
          { word: 'fraction', phonetic: '/ˈfrækʃən/', meaning: 'n. 一小部分', example: 'Only a fraction of the number.' },
          { word: 'belongings', phonetic: '/bɪˈlɒŋɪŋz/', meaning: 'n. 财物', example: 'Spiders never harm our belongings.' }
        ],
        grammar: `疑问句中的插入语："Why, you may wonder, should spiders be our friends?"（you may wonder是插入语）。Because引导原因状语从句。虚拟语气（与现在事实相反）："if it were not for..."（如果不是因为...）、"they would devour..."（它们会吞噬...），主句用would + 动词原形，if从句用过去式。make it impossible for sb to do sth（使某人不可能做某事）："Insects would make it impossible for us to live"。owe a lot to sb（深受某人之恩）。put together（加在一起）。a fraction of（一小部分）。unlike + 名词（与...不同）。do harm to（对...造成伤害）。`,
        keyPoints: [
          '虚拟语气（与现在事实相反）：if + 过去式, would + 动词原形',
          'if it were not for... = 如果不是因为...',
          'make it + adj. + for sb + to do：使某人做某事成为...',
          'owe a lot to sb = 深受某人之恩',
          'unlike + n. = 与...不同'
        ]
      }
    ]
  },

  bbc: {
    id: 'bbc',
    name: 'BBC短篇',
    nameEn: 'BBC Short Articles',
    icon: '📰',
    color: '#3b82f6',
    colorLight: '#dbeafe',
    description: '精选BBC英语学习素材，涵盖新闻、文化、科技等主题，提升阅读理解和听力能力。',
    level: 'B1-B2',
    lessons: [
      {
        id: 'bbc01',
        title: '远程工作的兴起与挑战',
        titleEn: 'The Rise and Challenges of Remote Work',
        difficulty: 3,
        duration: '15 min',
        english: `The COVID-19 pandemic has fundamentally changed the way we work. Millions of people around the world have shifted from working in offices to working from home. While remote work offers flexibility and eliminates commuting time, it also presents challenges such as isolation, blurred boundaries between work and personal life, and difficulty in team collaboration. Many companies are now adopting a hybrid approach, combining both office and remote work. Experts suggest that the future of work will likely be a balance between the two, with employees having more control over where and how they work.`,
        chinese: `新冠疫情从根本上改变了我们的工作方式。全球数百万人从办公室办公转向居家办公。虽然远程工作提供了灵活性并节省了通勤时间，但它也带来了孤独感、工作与个人生活界限模糊以及团队协作困难等挑战。许多公司现在正在采用混合模式，结合办公室和远程工作。专家建议，未来的工作方式可能是两者之间的平衡，员工将拥有更多关于在哪里工作以及如何工作的自主权。`,
        vocabulary: [
          { word: 'pandemic', phonetic: '/pænˈdemɪk/', meaning: 'n. 大流行病', example: 'The pandemic affected the global economy.' },
          { word: 'fundamentally', phonetic: '/ˌfʌndəˈmentəli/', meaning: 'adv. 根本地', example: 'The policy has fundamentally changed.' },
          { word: 'flexibility', phonetic: '/ˌfleksəˈbɪləti/', meaning: 'n. 灵活性', example: 'Remote work offers more flexibility.' },
          { word: 'eliminate', phonetic: '/ɪˈlɪmɪneɪt/', meaning: 'v. 消除', example: 'Technology eliminates the need for travel.' },
          { word: 'isolation', phonetic: '/ˌaɪsəˈleɪʃən/', meaning: 'n. 孤独，隔离', example: 'Working from home can cause isolation.' },
          { word: 'hybrid', phonetic: '/ˈhaɪbrɪd/', meaning: 'adj. 混合的', example: 'A hybrid work model is becoming popular.' }
        ],
        grammar: `现在完成时："has changed"（已经改变），表示过去发生并对现在有影响的动作。While引导对比从句："While remote work offers... it also presents..."（虽然远程工作提供了...它也带来了...）。现在进行时："are now adopting"（正在采用），表示当前正在进行的趋势。suggest后接宾语从句表示建议或推测。`,
        keyPoints: [
          '现在完成时：has/have + 过去分词，表示过去影响现在',
          'While引导对比：While A..., B also...（虽然A...，B也...）',
          '现在进行时：is/are + doing，表示当前趋势',
          'suggest + that从句：表示建议或推测'
        ]
      },
      {
        id: 'bbc02',
        title: '气候变化与可持续生活',
        titleEn: 'Climate Change and Sustainable Living',
        difficulty: 4,
        duration: '18 min',
        english: `Climate change is one of the most pressing issues facing our planet today. Rising global temperatures, extreme weather events, and melting ice caps are clear signs of a warming world. Scientists warn that we must take urgent action to reduce carbon emissions. Individuals can contribute by adopting sustainable lifestyles: using public transportation, reducing plastic waste, eating less meat, and switching to renewable energy sources. Governments and corporations also play a crucial role in tackling this crisis through policy changes and green innovation. The transition to a low-carbon economy requires collective effort from all sectors of society.`,
        chinese: `气候变化是我们星球今天面临的最紧迫的问题之一。全球气温上升、极端天气事件和冰盖融化是全球变暖的明显迹象。科学家警告说，我们必须采取紧急行动减少碳排放。个人可以通过采取可持续的生活方式做出贡献：使用公共交通、减少塑料垃圾、少吃肉以及转向可再生能源。政府和企业也通过政策变革和绿色创新在应对这一危机中发挥关键作用。向低碳经济的转型需要社会各界的共同努力。`,
        vocabulary: [
          { word: 'pressing', phonetic: '/ˈpresɪŋ/', meaning: 'adj. 紧迫的', example: 'Climate change is a pressing issue.' },
          { word: 'emission', phonetic: '/ɪˈmɪʃən/', meaning: 'n. 排放', example: 'We must reduce carbon emissions.' },
          { word: 'sustainable', phonetic: '/səˈsteɪnəbəl/', meaning: 'adj. 可持续的', example: 'We need sustainable development.' },
          { word: 'renewable', phonetic: '/rɪˈnjuːəbəl/', meaning: 'adj. 可再生的', example: 'Solar energy is renewable.' },
          { word: 'collective', phonetic: '/kəˈlektɪv/', meaning: 'adj. 集体的', example: 'This requires collective effort.' },
          { word: 'transition', phonetic: '/trænˈzɪʃən/', meaning: 'n. 转型', example: 'The transition to clean energy is underway.' }
        ],
        grammar: `动名词作主语："Rising global temperatures... are clear signs"（上升的全球气温...是明显的迹象）。情态动词must表示必须："we must take urgent action"（我们必须采取紧急行动）。by + doing表示方式："by adopting sustainable lifestyles"（通过采取可持续生活方式）。play a role in + doing："在...方面发挥作用"。require +名词："需要..."。`,
        keyPoints: [
          '情态动词must：表示必须、紧迫性',
          'by + doing：表示通过某种方式',
          'play a role in + n./doing：在...中发挥作用',
          'require + n.：表示需要某物'
        ]
      },
      {
        id: 'bbc03',
        title: '人工智能如何改变教育',
        titleEn: 'How AI is Transforming Education',
        difficulty: 4,
        duration: '16 min',
        english: `Artificial intelligence is revolutionizing the education sector in ways that were unimaginable just a decade ago. AI-powered tools can now personalize learning experiences, adapting to each student's pace and learning style. Intelligent tutoring systems provide instant feedback, helping students identify and overcome their weaknesses. Language learning apps use speech recognition to help learners improve their pronunciation. However, educators emphasize that AI should complement rather than replace human teachers. The emotional intelligence, creativity, and mentorship that teachers provide cannot be replicated by machines. The most effective approach combines AI technology with human guidance to create an optimal learning environment.`,
        chinese: `人工智能正在以十年前难以想象的方式革新教育领域。AI驱动的工具现在可以个性化学习体验，适应每个学生的节奏和学习风格。智能辅导系统提供即时反馈，帮助学生发现并克服弱点。语言学习应用使用语音识别帮助学习者改善发音。然而，教育工作者强调，AI应该补充而不是取代人类教师。教师提供的情商、创造力和指导是机器无法复制的。最有效的方法是将AI技术与人类指导相结合，创造最佳的学习环境。`,
        vocabulary: [
          { word: 'revolutionize', phonetic: '/ˌrevəˈluːʃənaɪz/', meaning: 'v. 彻底改变', example: 'AI is revolutionizing healthcare.' },
          { word: 'personalize', phonetic: '/ˈpɜːsənəlaɪz/', meaning: 'v. 个性化', example: 'The app personalizes content for each user.' },
          { word: 'adapt', phonetic: '/əˈdæpt/', meaning: 'v. 适应', example: 'The system adapts to your level.' },
          { word: 'complement', phonetic: '/ˈkɒmplɪment/', meaning: 'v. 补充', example: 'AI complements human teachers.' },
          { word: 'replicate', phonetic: '/ˈreplɪkeɪt/', meaning: 'v. 复制', example: 'This effect cannot be replicated.' },
          { word: 'optimal', phonetic: '/ˈɒptɪməl/', meaning: 'adj. 最佳的', example: 'We need an optimal solution.' }
        ],
        grammar: `现在进行时表示趋势："is revolutionizing"（正在革新）。that引导定语从句："ways that were unimaginable"（难以想象的方式）。should + 动词原形表示建议："AI should complement"（AI应该补充）。rather than表示"而不是"："complement rather than replace"（补充而不是取代）。被动语态："cannot be replicated"（不能被复制）。`,
        keyPoints: [
          '现在进行时表趋势：is/are + doing',
          'that定语从句：修饰先行词',
          'should + 动词原形：表示建议',
          'rather than：而不是（表选择）',
          '被动语态：cannot be + 过去分词'
        ]
      },
      {
        id: 'bbc04',
        title: '城市绿化与身心健康',
        titleEn: 'Urban Greening and Mental Well-being',
        difficulty: 3,
        duration: '14 min',
        english: `Studies have shown that spending time in green spaces can significantly improve our mental health. In increasingly urbanized worlds, parks and gardens provide a much-needed escape from the stress of city life. Researchers found that people who live near green spaces report lower levels of anxiety and depression. Trees and plants not only improve air quality but also reduce noise pollution. Many cities are now investing in vertical gardens, rooftop farms, and urban forests. These green initiatives benefit both the environment and the residents. As one researcher noted, "Nature is not a luxury, but a necessity for urban well-being."`,
        chinese: `研究表明，在绿色空间中度过的时间可以显著改善我们的心理健康。在日益城市化的世界中，公园和花园提供了一个逃离城市生活压力的急需的出口。研究人员发现，住在绿地附近的人报告的焦虑和抑郁水平较低。树木和植物不仅改善空气质量，还减少噪音污染。许多城市现在正在投资垂直花园、屋顶农场和城市森林。这些绿色倡议既有利于环境也有利于居民。正如一位研究人员指出的，"自然不是奢侈品，而是城市福祉的必需品。"`,
        vocabulary: [
          { word: 'significantly', phonetic: '/sɪɡˈnɪfɪkəntli/', meaning: 'adv. 显著地', example: 'Exercise significantly improves health.' },
          { word: 'urbanized', phonetic: '/ˈɜːbənaɪzd/', meaning: 'adj. 城市化的', example: 'We live in an urbanized world.' },
          { word: 'anxiety', phonetic: '/æŋˈzaɪəti/', meaning: 'n. 焦虑', example: 'She suffers from anxiety.' },
          { word: 'initiative', phonetic: '/ɪˈnɪʃətɪv/', meaning: 'n. 倡议，举措', example: 'The government launched a new initiative.' },
          { word: 'necessity', phonetic: '/nəˈsesəti/', meaning: 'n. 必需品', example: 'Water is a necessity for life.' }
        ],
        grammar: `现在完成时："Studies have shown that..."（研究表明...），that引导宾语从句。who引导定语从句："people who live near green spaces"（住在绿地附近的人）。not only... but also...（不仅...而且...）连接并列内容。as引导方式状语从句："As one researcher noted"（正如一位研究人员指出的）。直接引语用引号标注。`,
        keyPoints: [
          '现在完成时：have/has + 过去分词',
          'who定语从句：修饰人',
          'not only... but also...：不仅...而且...',
          'as引导方式状语：正如...'
        ]
      },
      {
        id: 'bbc05',
        title: '社交媒体对青少年的影响',
        titleEn: 'The Impact of Social Media on Teenagers',
        difficulty: 4,
        duration: '17 min',
        english: `Social media has become an integral part of teenagers' lives, with many spending several hours a day on platforms like Instagram, TikTok, and YouTube. While these platforms offer opportunities for connection and self-expression, concerns are growing about their impact on mental health. Studies have linked excessive social media use to increased rates of anxiety, depression, and poor sleep quality among young people. The constant comparison with others' carefully curated online lives can lead to feelings of inadequacy. Parents and educators are calling for better digital literacy education and stronger regulations to protect young users. Some countries have already introduced laws limiting social media access for minors.`,
        chinese: `社交媒体已成为青少年生活的重要组成部分，许多人每天在Instagram、TikTok和YouTube等平台上花费数小时。虽然这些平台提供了联系和自我表达的机会，但人们对其对心理健康的影响越来越担忧。研究将过度使用社交媒体与年轻人中焦虑、抑郁和睡眠质量差的比率上升联系起来。与他人精心策划的在线生活的不断比较可能导致不足感。家长和教育工作者呼吁更好的数字素养教育和更严格的法规来保护年轻用户。一些国家已经出台了限制未成年人使用社交媒体的法律。`,
        vocabulary: [
          { word: 'integral', phonetic: '/ˈɪntɪɡrəl/', meaning: 'adj. 不可或缺的', example: 'Technology is an integral part of modern life.' },
          { word: 'excessive', phonetic: '/ɪkˈsesɪv/', meaning: 'adj. 过度的', example: 'Excessive use of phones is harmful.' },
          { word: 'curate', phonetic: '/kjʊəˈreɪt/', meaning: 'v. 策划，精心安排', example: 'She curated her online profile carefully.' },
          { word: 'inadequacy', phonetic: '/ɪnˈædɪkwəsi/', meaning: 'n. 不足，不够好', example: 'He felt a sense of inadequacy.' },
          { word: 'regulation', phonetic: '/ˌreɡjuˈleɪʃən/', meaning: 'n. 法规', example: 'New regulations were introduced.' }
        ],
        grammar: `with复合结构："with many spending several hours"（许多人花费数小时）。while引导让步从句："While these platforms offer..."（虽然这些平台提供...）。link A to B："将A与B联系起来"。lead to + n./doing："导致..."。call for + n.："呼吁/要求..."。现在完成时："have linked"、"have already introduced"表示已发生的动作。`,
        keyPoints: [
          'with复合结构：with + 宾语 + 宾补',
          'while让步从句：虽然...',
          'link A to B：将A与B联系',
          'lead to + n./doing：导致...',
          'call for + n.：呼吁/要求'
        ]
      }
    ]
  },

  business: {
    id: 'business',
    name: '商务英语',
    nameEn: 'Business English',
    icon: '💼',
    color: '#f59e0b',
    colorLight: '#fef3c7',
    description: '专注于职场商务场景，涵盖会议、邮件、谈判、汇报等核心商务沟通技能。',
    level: 'B1-C1',
    lessons: [
      {
        id: 'bus01',
        title: '商务邮件写作要点',
        titleEn: 'Essentials of Business Email Writing',
        difficulty: 3,
        duration: '15 min',
        english: `Dear Mr. Johnson, I am writing to follow up on our discussion during last week's conference call regarding the proposed partnership. As discussed, we are very interested in exploring this opportunity further. Could you please send us the detailed proposal at your earliest convenience? I have attached our company profile for your reference. Please do not hesitate to contact me if you have any questions. I look forward to hearing from you soon. Best regards, Sarah Chen, Business Development Manager.`,
        chinese: `尊敬的约翰逊先生，我写信是想跟进我们上周电话会议中关于拟议合作事宜的讨论。如前所述，我们非常有兴趣进一步探讨这一机会。能否请您在方便时尽早将详细方案发送给我们？我已附上我们公司的简介供您参考。如有任何问题，请随时与我联系。期待您的回复。此致敬礼，陈莎拉，业务发展经理。`,
        vocabulary: [
          { word: 'follow up', phonetic: '/ˈfɒləʊ ʌp/', meaning: 'v. 跟进', example: 'I will follow up on this matter next week.' },
          { word: 'regarding', phonetic: '/rɪˈɡɑːdɪŋ/', meaning: 'prep. 关于', example: 'I am writing regarding your inquiry.' },
          { word: 'proposal', phonetic: '/prəˈpəʊzəl/', meaning: 'n. 提案', example: 'Please review our proposal.' },
          { word: 'attach', phonetic: '/əˈtætʃ/', meaning: 'v. 附上', example: 'I have attached the report.' },
          { word: 'hesitate', phonetic: '/ˈhezɪteɪt/', meaning: 'v. 犹豫', example: 'Please do not hesitate to contact me.' }
        ],
        grammar: `商务邮件开头："I am writing to..."（我写信是为了...）。"as discussed"（如前所述）是商务常用表达。"Could you please...?" 是礼貌请求句式。"at your earliest convenience"（在您方便时尽早）是商务邮件常用语。"Please do not hesitate to contact me"（请随时联系我）是邮件结尾常用客套话。"I look forward to hearing from you"（期待您的回复），look forward to + doing。`,
        keyPoints: [
          '邮件开头："I am writing to..." = 我写信是为了...',
          '礼貌请求："Could you please...?"',
          '常用短语："at your earliest convenience" = 尽早',
          '结尾客套："Please do not hesitate to..." = 请随时...',
          '期待回复："I look forward to + doing"'
        ]
      },
      {
        id: 'bus02',
        title: '主持会议与发言',
        titleEn: 'Chairing Meetings and Speaking Up',
        difficulty: 4,
        duration: '18 min',
        english: `Good morning everyone, thank you for joining today's meeting. Let's start by reviewing the agenda. The first item is the Q3 sales report. Sarah, could you walk us through the key figures? Thank you, Sarah. Moving on to the next item, we need to discuss the marketing strategy for the upcoming product launch. I'd like to hear everyone's input on this. John, what are your thoughts? I think we should focus on digital marketing. That's a good point. Let's put that in the action items. Before we wrap up, are there any other issues? Great, let's summarize the action items and adjourn the meeting.`,
        chinese: `大家早上好，感谢参加今天的会议。让我们先回顾一下议程。第一项是第三季度销售报告。莎拉，能否为我们介绍一下关键数据？谢谢你，莎拉。接下来，我们需要讨论即将推出的产品发布的营销策略。我想听听大家的意见。约翰，你怎么看？我认为我们应该专注于数字营销。说得很好。让我们把这个列入行动事项。在结束之前，还有其他问题吗？很好，让我们总结行动事项并结束会议。`,
        vocabulary: [
          { word: 'agenda', phonetic: '/əˈdʒendə/', meaning: 'n. 议程', example: 'Let us review the agenda.' },
          { word: 'walk through', phonetic: '/wɔːk θruː/', meaning: 'v. 逐步讲解', example: 'Can you walk us through the process?' },
          { word: 'input', phonetic: '/ˈɪnpʊt/', meaning: 'n. 意见，建议', example: 'I would like your input on this.' },
          { word: 'action item', phonetic: '/ˈækʃən ˈaɪtəm/', meaning: 'n. 行动事项', example: 'Let us add this to the action items.' },
          { word: 'adjourn', phonetic: '/əˈdʒɜːn/', meaning: 'v. 休会，结束', example: 'We will adjourn the meeting now.' }
        ],
        grammar: `主持会议句型："Let's start by..."（让我们从...开始）、"Moving on to..."（接下来...）。请求发言："Could you walk us through...?"（能否为我们讲解...？）。征求意见："I'd like to hear everyone's input"（我想听听大家的意见）、"What are your thoughts?"（你怎么看？）。肯定回应："That's a good point"（说得好）。结束会议："Before we wrap up"（在结束之前）、"Let's summarize"（让我们总结）。`,
        keyPoints: [
          '开场："Let\'s start by..." = 让我们从...开始',
          '过渡："Moving on to..." = 接下来...',
          '征求意见："What are your thoughts?"',
          '肯定："That\'s a good point." = 说得好',
          '结束："Before we wrap up..." = 在结束之前...'
        ]
      },
      {
        id: 'bus03',
        title: '商务谈判策略与表达',
        titleEn: 'Negotiation Strategies and Expressions',
        difficulty: 4,
        duration: '20 min',
        english: `Thank you for meeting with us today. We have reviewed your proposal carefully and we believe there is room for negotiation on the pricing. Our target price is 15% lower than your quoted rate. We understand that you need to maintain your profit margins, but we are looking for a long-term partnership. If you can meet us halfway, we are prepared to increase our order volume significantly. What would be the minimum quantity you would need to justify this price reduction? Let me discuss this with my team and get back to you by Friday. We appreciate your flexibility and look forward to reaching a mutually beneficial agreement.`,
        chinese: `感谢您今天与我们会面。我们已仔细审阅了您的提案，我们认为在定价方面还有谈判空间。我们的目标价格比您报价低15%。我们理解您需要保持利润率，但我们寻求的是长期合作关系。如果您能在价格上做出让步，我们准备大幅增加订单量。要使这个降价合理化，您需要的最低数量是多少？让我和团队商量一下，周五前给您回复。我们感谢您的灵活性，期待达成互利的协议。`,
        vocabulary: [
          { word: 'negotiation', phonetic: '/nɪˌɡəʊʃiˈeɪʃən/', meaning: 'n. 谈判', example: 'The negotiation lasted three hours.' },
          { word: 'quote', phonetic: '/kwəʊt/', meaning: 'v. 报价', example: 'They quoted us a price of $500.' },
          { word: 'margin', phonetic: '/ˈmɑːdʒɪn/', meaning: 'n. 利润率', example: 'We need to maintain our profit margins.' },
          { word: 'partnership', phonetic: '/ˈpɑːtnəʃɪp/', meaning: 'n. 合作关系', example: 'We value our partnership with you.' },
          { word: 'justified', phonetic: '/ˈdʒʌstɪfaɪd/', meaning: 'adj. 有正当理由的', example: 'The price increase is justified.' },
          { word: 'mutually', phonetic: '/ˈmjuːtʃuəli/', meaning: 'adv. 双方地', example: 'A mutually beneficial agreement.' }
        ],
        grammar: `谈判表达："there is room for negotiation"（有谈判空间）。"meet us halfway"（各让一步/折中）。条件句："If you can..., we are prepared to..."（如果您能...，我们准备...）。"What would be..." 是礼貌询问。使役表达："justify this price reduction"（使降价合理化）。get back to + 人："给某人回复"。"look forward to reaching"中look forward to + doing。`,
        keyPoints: [
          '谈判空间："there is room for negotiation"',
          '折中表达："meet us halfway" = 各让一步',
          '条件句："If you can..., we are prepared to..."',
          '回复承诺："get back to you by + 时间"',
          '互利协议："mutually beneficial agreement"'
        ]
      },
      {
        id: 'bus04',
        title: '工作汇报与数据展示',
        titleEn: 'Work Reports and Data Presentation',
        difficulty: 4,
        duration: '16 min',
        english: `I'd like to present our team's performance for the last quarter. Overall, we exceeded our revenue target by 12%, generating $2.5 million in sales. Our customer acquisition cost decreased by 20% compared to the previous quarter, while our retention rate improved from 75% to 82%. However, there are areas that need improvement. Our conversion rate on mobile platforms remains below the industry average. To address this, we plan to redesign the mobile user interface in Q4. I recommend allocating an additional $50,000 to the development team for this project. Does anyone have questions about these figures?`,
        chinese: `我想汇报我们团队上个季度的表现。总体而言，我们的收入超过目标12%，创造了250万美元的销售额。与上一季度相比，我们的获客成本下降了20%，而留存率从75%提高到82%。然而，仍有一些方面需要改进。我们在移动平台的转化率仍低于行业平均水平。为解决这个问题，我们计划在第四季度重新设计移动用户界面。我建议为开发团队追加5万美元的预算用于此项目。有人对这些数据有疑问吗？`,
        vocabulary: [
          { word: 'exceed', phonetic: '/ɪkˈsiːd/', meaning: 'v. 超过', example: 'We exceeded our sales target.' },
          { word: 'revenue', phonetic: '/ˈrevənjuː/', meaning: 'n. 收入', example: 'Our revenue grew by 15%.' },
          { word: 'acquisition', phonetic: '/ˌækwɪˈzɪʃən/', meaning: 'n. 获得，获客', example: 'Customer acquisition cost is rising.' },
          { word: 'retention', phonetic: '/rɪˈtenʃən/', meaning: 'n. 留存', example: 'Our retention rate is 82%.' },
          { word: 'conversion', phonetic: '/kənˈvɜːʃən/', meaning: 'n. 转化', example: 'The conversion rate needs improvement.' },
          { word: 'allocate', phonetic: '/ˈæləkeɪt/', meaning: 'v. 分配', example: 'We allocated budget to the project.' }
        ],
        grammar: `汇报开头："I'd like to present..."（我想汇报...）。对比表达："compared to the previous quarter"（与上季度相比）、"from... to..."（从...到...）。转折："However, there are areas that need improvement"（然而，有需要改进的地方）。目的表达："To address this, we plan to..."（为解决这个问题，我们计划...）。建议句型："I recommend doing..."（我建议做...）。疑问邀请："Does anyone have questions about...?"（有人对...有疑问吗？）。`,
        keyPoints: [
          '汇报开头："I\'d like to present..."',
          '数据对比："compared to..." / "from X to Y"',
          '转折表达："However, there are areas that..."',
          '建议句型："I recommend + doing/n."',
          '邀请提问："Does anyone have questions about...?"'
        ]
      },
      {
        id: 'bus05',
        title: '客户服务与投诉处理',
        titleEn: 'Customer Service and Handling Complaints',
        difficulty: 3,
        duration: '15 min',
        english: `Good afternoon, thank you for contacting customer support. How may I help you today? I understand your frustration with the delayed delivery. I sincerely apologize for the inconvenience this has caused. Let me look into this matter right away. I can see that your order was shipped on Monday but appears to be delayed in transit. Here is what I can do for you: I will contact the shipping company immediately to locate your package, and I will issue a full refund for the shipping cost. Additionally, I would like to offer you a 20% discount on your next purchase as a gesture of goodwill. Is there anything else I can assist you with?`,
        chinese: `下午好，感谢您联系客户支持。今天我能为您做什么？我理解您对延迟配送的不满。对于由此给您带来的不便，我真诚地道歉。让我立刻调查此事。我可以看到您的订单已于周一发货，但似乎在运输中被延误了。这是我能为您做的：我将立即联系运输公司定位您的包裹，并为您全额退还运费。此外，作为善意的表示，我想为您提供下次购物的8折优惠。还有其他我能帮您的吗？`,
        vocabulary: [
          { word: 'frustration', phonetic: '/frʌˈstreɪʃən/', meaning: 'n. 挫折，不满', example: 'I understand your frustration.' },
          { word: 'apologize', phonetic: '/əˈpɒlədʒaɪz/', meaning: 'v. 道歉', example: 'I apologize for the delay.' },
          { word: 'inconvenience', phonetic: '/ˌɪnkənˈviːniəns/', meaning: 'n. 不便', example: 'Sorry for the inconvenience.' },
          { word: 'refund', phonetic: '/ˈriːfʌnd/', meaning: 'n. 退款', example: 'We will issue a full refund.' },
          { word: 'goodwill', phonetic: '/ˌɡʊdˈwɪl/', meaning: 'n. 善意', example: 'As a gesture of goodwill.' },
          { word: 'assist', phonetic: '/əˈsɪst/', meaning: 'v. 协助', example: 'How may I assist you?' }
        ],
        grammar: `客服开场白："How may I help you today?"（今天我能为您做什么？）。表达理解："I understand your frustration"（我理解您的不满）。道歉句型："I sincerely apologize for + n."（我为...真诚道歉）。调查表达："Let me look into this"（让我调查此事）。解决方案："Here is what I can do for you"（这是我能为您做的）。善意补偿："as a gesture of goodwill"（作为善意的表示）。结束询问："Is there anything else I can assist you with?"（还有其他需要帮助的吗？）。`,
        keyPoints: [
          '客服开场："How may I help you today?"',
          '表达同理心："I understand your frustration"',
          '道歉句型："I apologize for + n."',
          '提供方案："Here is what I can do for you"',
          '结束询问："Is there anything else I can assist you with?"'
        ]
      }
    ]
  },

  procurement: {
    id: 'procurement',
    name: '采购英语',
    nameEn: 'Procurement English',
    icon: '🛒',
    color: '#8b5cf6',
    colorLight: '#ede9fe',
    description: '专为采购专业人士设计，涵盖询价、招标、合同、供应商管理等采购全流程英语。',
    level: 'B2-C1',
    lessons: [
      {
        id: 'pro01',
        title: '询价与报价沟通',
        titleEn: 'Inquiry and Quotation Communication',
        difficulty: 3,
        duration: '15 min',
        english: `Dear Supplier, We are currently sourcing raw materials for our manufacturing facility and would like to request a quotation for the following items: 5,000 units of stainless steel brackets (specifications attached), 2,000 meters of industrial-grade rubber tubing, and 500 units of high-temperature resistant valves. Could you please provide your best price, lead time, and minimum order quantity for each item? We require delivery to our warehouse in Shanghai no later than October 15th. Please include payment terms and any applicable volume discounts in your quotation. We look forward to your prompt response.`,
        chinese: `尊敬的供应商，我们目前正在为我们的制造工厂采购原材料，希望对以下物品请求报价：5,000个不锈钢支架（规格见附件）、2,000米工业级橡胶管和500个耐高温阀门。能否请您提供每件物品的最优价格、交货周期和最低订购量？我们要求在10月15日之前交付到我们上海的仓库。请在报价中包含付款条款和适用的批量折扣。期待您的及时回复。`,
        vocabulary: [
          { word: 'source', phonetic: '/sɔːs/', meaning: 'v. 采购，寻源', example: 'We are sourcing materials from overseas.' },
          { word: 'quotation', phonetic: '/kwəʊˈteɪʃən/', meaning: 'n. 报价', example: 'Please send us your quotation.' },
          { word: 'specification', phonetic: '/ˌpesɪfɪˈkeɪʃən/', meaning: 'n. 规格', example: 'The specifications are attached.' },
          { word: 'lead time', phonetic: '/liːd taɪm/', meaning: 'n. 交货周期', example: 'What is the lead time for this order?' },
          { word: 'minimum order quantity', phonetic: '/ˈmɪnɪməm ˈɔːdə ˈkwɒntəti/', meaning: 'n. 最低订购量(MOQ)', example: 'The MOQ is 1,000 units.' },
          { word: 'volume discount', phonetic: '/ˈvɒljuːm ˈdɪskaʊnt/', meaning: 'n. 批量折扣', example: 'We offer volume discounts for large orders.' }
        ],
        grammar: `采购询价句型："We would like to request a quotation for..."（我们希望请求...的报价）。"Could you please provide..."（能否请您提供...）是礼貌请求。要求交付："We require delivery to... no later than..."（我们要求在...之前交付到...）。"Please include... in your quotation"（请在报价中包含...）。采购术语缩写：MOQ（Minimum Order Quantity，最低订购量）、RFQ（Request for Quotation，询价单）。`,
        keyPoints: [
          '询价句型："We would like to request a quotation for..."',
          '交货要求："delivery to... no later than..."',
          '采购术语：MOQ（最低订购量）、Lead time（交货周期）',
          '批量折扣："volume discount"',
          '付款条款："payment terms"'
        ]
      },
      {
        id: 'pro02',
        title: '招标流程与标书评估',
        titleEn: 'Tendering Process and Bid Evaluation',
        difficulty: 5,
        duration: '20 min',
        english: `The tendering process begins with the publication of a Request for Proposal (RFP), which outlines the project scope, technical requirements, and evaluation criteria. Qualified suppliers are invited to submit their bids by the specified deadline. All bids will be evaluated based on three main criteria: technical capability (40%), commercial competitiveness (35%), and past performance (25%). The evaluation committee will conduct a thorough review of each submission, including site visits and reference checks for shortlisted candidates. The contract will be awarded to the bidder offering the best overall value, not necessarily the lowest price. Unsuccessful bidders will be notified and provided with feedback on their submissions.`,
        chinese: `招标流程从发布招标请求（RFP）开始，其中概述了项目范围、技术要求和评估标准。合格的供应商被邀请在规定截止日期前提交投标。所有投标将根据三个主要标准进行评估：技术能力（40%）、商业竞争力（35%）和过往业绩（25%）。评估委员会将对每份提交材料进行彻底审查，包括对入围候选人的现场考察和背景调查。合同将授予提供最佳整体价值的投标方，而不一定是最低价格者。未中标者将被通知并提供关于其提交材料的反馈。`,
        vocabulary: [
          { word: 'tender', phonetic: '/ˈtendə/', meaning: 'v./n. 招标，投标', example: 'We will tender for the project.' },
          { word: 'proposal', phonetic: '/prəˈpəʊzəl/', meaning: 'n. 提案，标书', example: 'Please submit your proposal by Friday.' },
          { word: 'bid', phonetic: '/bɪd/', meaning: 'n./v. 投标', example: 'Three companies bid for the contract.' },
          { word: 'criterion', phonetic: '/kraɪˈtɪəriən/', meaning: 'n. 标准(复数criteria)', example: 'What are the evaluation criteria?' },
          { word: 'shortlist', phonetic: '/ˈʃɔːtlɪst/', meaning: 'v. 入围 n. 入围名单', example: 'Five suppliers were shortlisted.' },
          { word: 'award', phonetic: '/əˈwɔːd/', meaning: 'v. 授予(合同)', example: 'The contract was awarded to ABC Corp.' }
        ],
        grammar: `被动语态在采购文档中大量使用："bids will be evaluated"（投标将被评估）、"The contract will be awarded"（合同将被授予）。现在分词作后置定语："a Request for Proposal (RFP), which outlines..."（概述...的招标请求）。based on + n.（基于...）："evaluated based on three main criteria"。not necessarily（不一定）表示部分否定："not necessarily the lowest price"（不一定是最低价格）。过去分词作定语："shortlisted candidates"（入围候选人）。`,
        keyPoints: [
          '被动语态：采购文档的核心语态',
          '评估标准："evaluated based on..."',
          '部分否定："not necessarily..." = 不一定...',
          '采购术语：RFP（招标请求）、Bid（投标）、Shortlist（入围）',
          '授予合同："The contract will be awarded to..."'
        ]
      },
      {
        id: 'pro03',
        title: '采购合同条款与谈判',
        titleEn: 'Contract Terms and Negotiation',
        difficulty: 5,
        duration: '18 min',
        english: `Before signing the purchasing contract, both parties must carefully review all terms and conditions. Key clauses include: delivery schedule with penalties for late delivery, quality assurance requirements with inspection rights, warranty period and coverage, force majeure provisions, and dispute resolution mechanisms. The payment terms specify a 30% advance payment upon order confirmation, 60% upon delivery, and 10% retention to be released after the warranty period. We would like to negotiate the retention rate down to 5% and extend the warranty period from 12 to 18 months. Both parties should agree on the liquidated damages clause before finalizing the contract.`,
        chinese: `在签署采购合同之前，双方必须仔细审查所有条款和条件。关键条款包括：附带延迟交付罚金的交付时间表、含检验权的质量保证要求、保修期和范围、不可抗力条款以及争议解决机制。付款条款规定订单确认时预付30%，交付时支付60%，10%保留金在保修期后释放。我们希望将保留金比例降至5%，并将保修期从12个月延长至18个月。双方应在最终确定合同前就违约金条款达成一致。`,
        vocabulary: [
          { word: 'clause', phonetic: '/klɔːz/', meaning: 'n. 条款', example: 'This clause needs revision.' },
          { word: 'penalty', phonetic: '/ˈpenəlti/', meaning: 'n. 罚金，处罚', example: 'There is a penalty for late delivery.' },
          { word: 'warranty', phonetic: '/ˈwɒrənti/', meaning: 'n. 保修', example: 'The warranty period is 12 months.' },
          { word: 'force majeure', phonetic: '/fɔːs mæˈʒɜː/', meaning: 'n. 不可抗力', example: 'The delay was due to force majeure.' },
          { word: 'retention', phonetic: '/rɪˈtenʃən/', meaning: 'n. 保留金', example: '10% retention will be held.' },
          { word: 'liquidated damages', phonetic: '/ˈlɪkwɪdeɪtɪd ˈdæmɪdʒɪz/', meaning: 'n. 违约金', example: 'Liquidated damages apply to late delivery.' }
        ],
        grammar: `合同用语常使用情态动词must/should表示义务："both parties must carefully review"（双方必须仔细审查）。并列列举用冒号和逗号："Key clauses include: A, B, and C"。付款结构描述："30% advance payment..., 60% upon delivery, and 10% retention"（30%预付款...，60%交付时，10%保留金）。谈判表达："We would like to negotiate... down to..."（我们希望将...谈判降至...）和"extend... from... to..."（将...从...延长到...）。before + doing（在...之前）："before finalizing the contract"。`,
        keyPoints: [
          '合同义务："both parties must..." = 双方必须...',
          '付款结构："X% advance / Y% upon delivery / Z% retention"',
          '谈判降价："negotiate... down to..."',
          '延长期限："extend... from X to Y"',
          '采购术语：Force majeure（不可抗力）、Retention（保留金）、Liquidated damages（违约金）'
        ]
      },
      {
        id: 'pro04',
        title: '供应商评估与管理',
        titleEn: 'Supplier Evaluation and Management',
        difficulty: 4,
        duration: '16 min',
        english: `Effective supplier management is critical to maintaining a resilient supply chain. We evaluate our suppliers quarterly using a comprehensive scorecard that measures four key performance indicators: on-time delivery rate, defect rate, price competitiveness, and responsiveness to issues. Suppliers scoring below 80% receive a formal improvement plan with a 90-day remediation period. Those who fail to improve face termination of the partnership. Top-performing suppliers are eligible for preferred supplier status, which includes benefits such as priority ordering and extended payment terms. We also conduct annual on-site audits to verify compliance with quality standards and ethical sourcing practices.`,
        chinese: `有效的供应商管理对于维护弹性供应链至关重要。我们每季度使用综合评分卡评估供应商，衡量四个关键绩效指标：准时交付率、缺陷率、价格竞争力和问题响应速度。得分低于80%的供应商将收到正式的改进计划，并有90天的整改期。未能改进的供应商将面临终止合作关系。表现优异的供应商有资格获得首选供应商地位，其中包括优先订购和延长付款期限等福利。我们还进行年度现场审核，以验证是否符合质量标准和道德采购实践。`,
        vocabulary: [
          { word: 'resilient', phonetic: '/rɪˈzɪliənt/', meaning: 'adj. 有弹性的', example: 'We need a resilient supply chain.' },
          { word: 'scorecard', phonetic: '/ˈskɔːkɑːd/', meaning: 'n. 评分卡', example: 'We use a supplier scorecard.' },
          { word: 'defect', phonetic: '/ˈdiːfekt/', meaning: 'n. 缺陷', example: 'The defect rate must be below 2%.' },
          { word: 'remediation', phonetic: '/rɪˌmiːdiˈeɪʃən/', meaning: 'n. 整改', example: 'The remediation period is 90 days.' },
          { word: 'termination', phonetic: '/ˌtɜːmɪˈneɪʃən/', meaning: 'n. 终止', example: 'Termination of the contract.' },
          { word: 'audit', phonetic: '/ˈɔːdɪt/', meaning: 'n./v. 审核', example: 'We conduct annual audits.' }
        ],
        grammar: `动名词作主语："Effective supplier management is critical"（有效的供应商管理至关重要）。现在分词作后置定语："suppliers scoring below 80%"（得分低于80%的供应商）、"Top-performing suppliers"（表现优异的供应商）。which引导非限制性定语从句："preferred supplier status, which includes benefits"（首选供应商地位，其中包括福利）。those who...（那些...的人/供应商）。fail to + 动词原形（未能...）："fail to improve"。eligible for + n.（有资格获得...）："eligible for preferred supplier status"。`,
        keyPoints: [
          '动名词作主语：采购管理文档常用',
          '现在分词定语："suppliers scoring..."',
          '定语从句："status, which includes..."',
          '供应商管理术语：KPI、Scorecard、Remediation、Audit',
          '"fail to + 动词原形" = 未能...'
        ]
      },
      {
        id: 'pro05',
        title: '库存管理与物流协调',
        titleEn: 'Inventory Management and Logistics Coordination',
        difficulty: 4,
        duration: '17 min',
        english: `Our inventory management system tracks stock levels in real time across all warehouses. When inventory falls below the reorder point, the system automatically generates a purchase order. We maintain a safety stock equivalent to two weeks of average consumption to buffer against supply disruptions. For inbound logistics, we use a combination of sea freight for bulk orders and air freight for urgent items. The customs clearance process typically takes three to five business days. We require all suppliers to use our standard packaging specifications and provide accurate shipping documents, including commercial invoices, packing lists, and certificates of origin.`,
        chinese: `我们的库存管理系统实时跟踪所有仓库的库存水平。当库存降至再订货点以下时，系统会自动生成采购订单。我们维持相当于两周平均消耗量的安全库存，以缓冲供应中断的风险。对于入库物流，我们对于大宗订单使用海运，紧急物品使用空运。清关流程通常需要三到五个工作日。我们要求所有供应商使用我们的标准包装规格，并提供准确的运输文件，包括商业发票、装箱单和原产地证书。`,
        vocabulary: [
          { word: 'inventory', phonetic: '/ˈɪnvəntri/', meaning: 'n. 库存', example: 'We need to reduce inventory costs.' },
          { word: 'reorder point', phonetic: '/riːˈɔːdə pɔɪnt/', meaning: 'n. 再订货点', example: 'Stock is below the reorder point.' },
          { word: 'safety stock', phonetic: '/ˈseɪfti stɒk/', meaning: 'n. 安全库存', example: 'We maintain two weeks of safety stock.' },
          { word: 'freight', phonetic: '/freɪt/', meaning: 'n. 货运', example: 'Sea freight is cheaper than air freight.' },
          { word: 'customs clearance', phonetic: '/ˈkʌstəmz ˈklɪərəns/', meaning: 'n. 清关', example: 'Customs clearance takes five days.' },
          { word: 'commercial invoice', phonetic: '/kəˈmɜːʃəl ˈɪnvɔɪs/', meaning: 'n. 商业发票', example: 'A commercial invoice is required for customs.' }
        ],
        grammar: `时间状语从句："When inventory falls below..."（当库存降至...以下时）。不定式作目的状语："to buffer against supply disruptions"（以缓冲供应中断）。equivalent to + n.（相当于...）："equivalent to two weeks of average consumption"。a combination of A and B（A和B的组合）。require sb to do sth（要求某人做某事）："We require all suppliers to use..."。including + n.（包括...）用于列举："including commercial invoices, packing lists, and certificates of origin"。`,
        keyPoints: [
          '时间状语从句："When... falls below..."',
          '目的状语："to buffer against..." = 以缓冲...',
          '相当于："equivalent to + n."',
          '要求句型："require sb to do sth"',
          '物流术语：Safety stock、Freight、Customs clearance、Commercial invoice'
        ]
      }
    ]
  },

  procurementCategories: {
    id: 'procurementCategories',
    name: '品类采购英语',
    nameEn: 'Category-Specific Procurement English',
    icon: '🏭',
    color: '#0891b2',
    colorLight: '#cffafe',
    description: '针对不同采购品类的专业英语，涵盖电子、纺织、食品、机械、化工等行业的采购术语与实战场景。',
    level: 'B2-C1',
    lessons: [
      {
        id: 'procCat01',
        title: '电子产品采购英语',
        titleEn: 'Electronics Procurement English',
        difficulty: 4,
        duration: '18 min',
        english: `We are sourcing electronic components for our new IoT product line, specifically the RTL8720 chipset, 4-layer FR-4 PCBs, and USB-C connectors. The chipset must operate within a -40°C to 85°C temperature range with ESD protection up to 8kV contact discharge. All components must be RoHS-compliant and supplied with full material declarations. Our standard MOQ is 10,000 units, but we are prepared to start with 3,000 for the initial pilot run. Could you confirm the 12-week lead time and provide an IPC-A-610 Class 2 inspection report? We also require conformal coating on all PCBs for humidity resistance. Please share your failure analysis process for any DOA units exceeding 0.3%.`,
        chinese: `我们正在为新的物联网产品线采购电子元器件，具体为RTL8720芯片组、4层FR-4印制电路板和USB-C连接器。该芯片组必须在-40°C至85°C温度范围内工作，并提供高达8kV接触放电的ESD防护。所有元器件必须符合RoHS标准，并提供完整的物料声明。我们的标准最低订购量为10,000件，但首批试产可从3,000件开始。能否请您确认12周的交货周期，并提供IPC-A-610二级检验报告？我们还要求所有PCB进行三防漆涂覆以防潮。请分享针对超过0.3%的到货不良品(DOA)的失效分析流程。`,
        vocabulary: [
          { word: 'PCB', phonetic: '/ˌpiː siː ˈbiː/', meaning: 'n. 印制电路板', example: 'The PCB must pass electrical testing.' },
          { word: 'RoHS', phonetic: '/rɒhs/', meaning: 'n. 有害物质限制指令', example: 'All parts must be RoHS-compliant.' },
          { word: 'ESD', phonetic: '/ˌiː es ˈdiː/', meaning: 'n. 静电放电', example: 'ESD protection prevents component damage.' },
          { word: 'chipset', phonetic: '/ˈtʃɪpset/', meaning: 'n. 芯片组', example: 'The chipset controls device functions.' },
          { word: 'lead time', phonetic: '/liːd taɪm/', meaning: 'n. 交货周期', example: 'The lead time is 12 weeks.' },
          { word: 'conformal coating', phonetic: '/kənˈfɔːməl ˈkəʊtɪŋ/', meaning: 'n. 三防漆/保形涂覆', example: 'Conformal coating protects against moisture.' }
        ],
        grammar: `电子采购技术规格表达："must operate within a... temperature range"（必须在...温度范围内工作）、"up to 8kV contact discharge"（高达8kV接触放电）。合规要求句型："must be RoHS-compliant"（必须符合RoHS标准）。MOQ谈判句型："Our standard MOQ is..., but we are prepared to start with..."（我们的标准最低订购量为...，但首批可从...开始）。请求确认："Could you confirm... and provide...?"（能否确认...并提供...？）。缩写术语在口语中通常按字母逐个读出（如 ESD、PCB、RoHS）。`,
        keyPoints: [
          '技术规格："operate within a... range" / "up to..."',
          '合规要求："must be RoHS-compliant"',
          'MOQ谈判："prepared to start with... for the pilot run"',
          '请求确认："Could you confirm... and provide...?"',
          '电子术语：PCB、RoHS、ESD、Conformal coating、DOA'
        ]
      },
      {
        id: 'procCat02',
        title: '纺织服装采购英语',
        titleEn: 'Textile and Apparel Procurement English',
        difficulty: 3,
        duration: '16 min',
        english: `We are looking for a reliable manufacturer to produce 50,000 pieces of cotton-polyester T-shirts under an ODM arrangement. The fabric should be 180 GSM single jersey with a 20s yarn count, and colorfastness must reach Grade 4 or above for both washing and rubbing. Please review the attached tech pack for detailed specifications, including stitching, labeling, and packaging requirements. Our AQL inspection standard is 2.5 for major defects and 4.0 for minor defects. The MOQ per color is 2,000 pieces, with a total lead time of 45 days including sampling and bulk production. Could you send us a lab dip for approval before bulk dyeing? We also require OEKO-TEX certification for all materials.`,
        chinese: `我们正在寻找可靠的制造商以ODM方式生产50,000件棉涤T恤。面料应为180克重单面平纹布，纱支为20支，水洗和摩擦色牢度均须达到4级或以上。请查阅附件的技术资料包以了解详细规格，包括缝纫、标签和包装要求。我们的AQL检验标准为：主要缺陷2.5，次要缺陷4.0。每个颜色的最低订购量为2,000件，包括打样和大货生产在内的总交货周期为45天。能否在大货染色前先寄送色样供我们确认？我们还要求所有材料均通过OEKO-TEX认证。`,
        vocabulary: [
          { word: 'GSM', phonetic: '/ˌdʒiː es ˈem/', meaning: 'n. 克重(克/平方米)', example: 'The fabric is 180 GSM.' },
          { word: 'colorfastness', phonetic: '/ˈkʌləfɑːstnəs/', meaning: 'n. 色牢度', example: 'Colorfastness must reach Grade 4.' },
          { word: 'tech pack', phonetic: '/tek pæk/', meaning: 'n. 技术资料包', example: 'Please follow the tech pack.' },
          { word: 'AQL inspection', phonetic: '/ˌeɪ kjuː ˈel ɪnˈspekʃən/', meaning: 'n. 可接受质量水平检验', example: 'AQL inspection follows ISO standards.' },
          { word: 'OEM/ODM', phonetic: '/ˌəʊ iː ˈem/', meaning: 'n. 代工生产/原始设计制造', example: 'We offer both OEM and ODM services.' },
          { word: 'lab dip', phonetic: '/læb dɪp/', meaning: 'n. 实验室色样', example: 'Please send a lab dip for approval.' }
        ],
        grammar: `规格要求句型："The fabric should be... with a..."（面料应为...，纱支为...）。质量标准："colorfastness must reach Grade..."（色牢度须达到...级）。资料引用："Please review the attached tech pack for..."（请查阅附件技术资料包以了解...）。检验标准表达："AQL inspection standard is 2.5 for major defects"（主要缺陷的AQL检验标准为2.5）。请求确认："Could you send us... for approval before...?"（能否在...前寄送...供确认？）。时间安排："total lead time of 45 days including..."（包括...在内共45天的总交货周期）。`,
        keyPoints: [
          '规格要求："should be... with a..."',
          '质量标准："must reach Grade..."',
          '检验标准："AQL 2.5 for major defects"',
          '色样确认："send a lab dip for approval before bulk dyeing"',
          '纺织术语：GSM、Colorfastness、Tech pack、Lab dip、OEM/ODM'
        ]
      },
      {
        id: 'procCat03',
        title: '食品饮料采购英语',
        titleEn: 'Food and Beverage Procurement English',
        difficulty: 3,
        duration: '15 min',
        english: `We are sourcing frozen mango puree and retort pouch packaging for our beverage line. The supplier must hold a valid HACCP certificate and comply with FDA food safety regulations. The puree should have a minimum shelf life of 18 months at -18°C, with each batch accompanied by a Certificate of Analysis specifying Brix, pH, and microbial counts. Cold chain logistics must be maintained end-to-end, with temperature monitoring records provided for every shipment. The lot number and production date must be clearly printed on each retort pouch. Our MOQ is 20 tons per month, with delivery to our DC in California. Please confirm your REACH compliance for the packaging materials as well.`,
        chinese: `我们正在为饮料产品线采购冷冻芒果原浆和蒸煮袋包装。供应商须持有有效的HACCP证书，并符合FDA食品安全法规。原浆在-18°C下保质期不少于18个月，每批次须附分析证书，注明糖度、pH值和微生物指标。冷链物流须全程维持，每次发货须提供温度监控记录。每个蒸煮袋上须清晰印有批号和生产日期。我们的最低订购量为每月20吨，交付至加州配送中心。另请确认包装材料也符合REACH法规。`,
        vocabulary: [
          { word: 'HACCP', phonetic: '/ˈhæsəp/', meaning: 'n. 危害分析与关键控制点', example: 'The factory is HACCP-certified.' },
          { word: 'shelf life', phonetic: '/ʃelf laɪf/', meaning: 'n. 保质期', example: 'The shelf life is 18 months.' },
          { word: 'cold chain', phonetic: '/kəʊld tʃeɪn/', meaning: 'n. 冷链', example: 'Cold chain must be maintained.' },
          { word: 'FDA', phonetic: '/ˌef diː ˈeɪ/', meaning: 'n. 美国食品药品监督管理局', example: 'The product is FDA-compliant.' },
          { word: 'lot number', phonetic: '/lɒt ˈnʌmbə/', meaning: 'n. 批号', example: 'Check the lot number for traceability.' },
          { word: 'COA', phonetic: '/ˌsiː əʊ ˈeɪ/', meaning: 'n. 分析证书', example: 'Each batch ships with a COA.' }
        ],
        grammar: `合规要求句型："must hold a valid... certificate"（须持有有效的...证书）、"comply with... regulations"（符合...法规）。规格表达："a minimum shelf life of 18 months at -18°C"（在-18°C下不少于18个月的保质期）。被动结构强调要求："must be maintained end-to-end"（须全程维持）、"must be clearly printed on"（须清晰印在...上）。伴随状态："with each batch accompanied by..."（每批次附有...）、"with temperature monitoring records provided"（提供温度监控记录）。MOQ表达："Our MOQ is... per month"（我们的最低订购量为每月...）。`,
        keyPoints: [
          '合规要求："must hold a valid HACCP certificate"',
          '规格表达："minimum shelf life of... at..."',
          '冷链要求："must be maintained end-to-end"',
          '追溯标识："lot number and production date"',
          '食品术语：HACCP、Shelf life、Cold chain、FDA、COA、REACH'
        ]
      },
      {
        id: 'procCat04',
        title: '机械设备采购英语',
        titleEn: 'Machinery and Equipment Procurement English',
        difficulty: 5,
        duration: '20 min',
        english: `We are procuring a fully automatic CNC machining center for our plant in Vietnam. The equipment must carry CE marking and comply with the Machinery Directive 2006/42/EC. The contract should include installation, commissioning, and operator training by your engineers over a two-week period. We require a 24-month warranty covering both parts and labor, plus a guaranteed supply of critical spare parts for at least 10 years. Please confirm whether Factory Acceptance Testing (FAT) will be conducted at your facility before shipment, and Site Acceptance Testing (SAT) at our plant after installation. The total lead time is 16 weeks, including manufacturing and testing. We also need detailed operation and maintenance manuals in English.`,
        chinese: `我们正在为越南工厂采购一台全自动CNC加工中心。设备须带有CE标志并符合机械指令2006/42/EC。合同应包含贵方工程师为期两周的安装、调试和操作员培训。我们要求24个月保修，涵盖零部件和人工，并保证关键备件至少供应10年。请确认是否在发货前于贵方工厂进行工厂验收测试(FAT)，并在安装后于我方工厂进行现场验收测试(SAT)。总交货周期为16周，包括制造和测试。我们还需要详细的英文操作和维护手册。`,
        vocabulary: [
          { word: 'commissioning', phonetic: '/kəˈmɪʃənɪŋ/', meaning: 'n. 调试/试运行', example: 'Commissioning takes two weeks.' },
          { word: 'CE marking', phonetic: '/ˌsiː ˈiː ˈmɑːkɪŋ/', meaning: 'n. CE认证标志', example: 'The machine carries CE marking.' },
          { word: 'spare parts', phonetic: '/speə pɑːts/', meaning: 'n. 备件', example: 'Spare parts are guaranteed for 10 years.' },
          { word: 'warranty', phonetic: '/ˈwɒrənti/', meaning: 'n. 保修', example: 'The warranty covers parts and labor.' },
          { word: 'installation', phonetic: '/ˌɪnstəˈleɪʃən/', meaning: 'n. 安装', example: 'Installation is included in the contract.' },
          { word: 'FAT/SAT', phonetic: '/fæt sæt/', meaning: 'n. 工厂验收/现场验收测试', example: 'FAT is done before shipment.' }
        ],
        grammar: `设备采购规格句型："must carry CE marking and comply with..."（须带有CE标志并符合...）。合同包含项："The contract should include..."（合同应包含...）。保修表达："a 24-month warranty covering both parts and labor"（涵盖零部件和人工的24个月保修）。保证供应："guaranteed supply of... for at least 10 years"（保证至少10年供应...）。验收测试："FAT will be conducted at... before shipment"（发货前在...进行FAT）。时间安排："including manufacturing and testing"（包括制造和测试）。`,
        keyPoints: [
          '合规要求："carry CE marking and comply with..."',
          '合同包含："should include installation, commissioning, and training"',
          '保修条款："warranty covering parts and labor"',
          '备件保证："guaranteed supply of spare parts for 10 years"',
          '验收测试：FAT（工厂验收）、SAT（现场验收）'
        ]
      },
      {
        id: 'procCat05',
        title: '化工原料采购英语',
        titleEn: 'Chemical Materials Procurement English',
        difficulty: 5,
        duration: '18 min',
        english: `We are sourcing industrial-grade titanium dioxide with a minimum purity of 99.0% for our coating production. The supplier must provide an up-to-date Safety Data Sheet (SDS) for each shipment and comply with EU REACH regulations. As this is classified as a non-hazardous material, standard transport applies, but for our acetone orders, please ensure proper UN number labeling and DG packaging for hazardous transport. Each batch requires a Certificate of Analysis confirming purity grade, heavy metal content, and particle size distribution. Our annual demand is approximately 500 tons, with quarterly deliveries. Please confirm your capacity to meet REACH registration and provide documentation for customs clearance of all shipments.`,
        chinese: `我们正在为涂料生产采购工业级二氧化钛，最低纯度99.0%。供应商须为每次发货提供最新的安全数据表(SDS)，并符合欧盟REACH法规。由于该物质被归类为非危险品，适用常规运输；但对于我们的丙酮订单，请确保正确标注UN编号并使用危险品(DG)包装进行危险品运输。每批次须提供分析证书，确认纯度等级、重金属含量和粒度分布。我们的年需求量约500吨，按季度交付。请确认贵方具备REACH注册能力，并为所有发货提供清关文件。`,
        vocabulary: [
          { word: 'MSDS/SDS', phonetic: '/ˌem es diː ˈes/', meaning: 'n. 安全数据表', example: 'An SDS must accompany each shipment.' },
          { word: 'purity grade', phonetic: '/ˈpjʊərəti ɡreɪd/', meaning: 'n. 纯度等级', example: 'The purity grade is 99.0%.' },
          { word: 'hazardous material', phonetic: '/ˈhæzədəs məˈtɪəriəl/', meaning: 'n. 危险品/危化品', example: 'Hazardous materials need special packaging.' },
          { word: 'REACH', phonetic: '/riːtʃ/', meaning: 'n. 欧盟化学品注册法规', example: 'The product complies with REACH.' },
          { word: 'UN number', phonetic: '/ˌjuː ˈen ˈnʌmbə/', meaning: 'n. 联合国危险货物编号', example: 'Label the UN number clearly.' },
          { word: 'COA', phonetic: '/ˌsiː əʊ ˈeɪ/', meaning: 'n. 分析证书', example: 'The COA confirms purity.' }
        ],
        grammar: `化工规格句型："with a minimum purity of 99.0%"（最低纯度99.0%）、"classified as a non-hazardous material"（被归类为非危险品）。合规要求："must provide... and comply with..."（须提供...并符合...）。条件与对比："As this is..., standard transport applies, but for... please ensure..."（由于这是...，适用常规运输，但对于...请确保...）。被动结构强调标签："ensure proper UN number labeling and DG packaging"（确保正确标注UN编号并使用DG包装）。确认能力："confirm your capacity to meet..."（确认贵方具备满足...的能力）。`,
        keyPoints: [
          '纯度规格："minimum purity of 99.0%"',
          '安全合规："must provide an SDS and comply with REACH"',
          '危化品运输："UN number labeling and DG packaging"',
          '分析证书："COA confirming purity, heavy metals, particle size"',
          '化工术语：SDS、Purity grade、REACH、UN number、COA、DG packaging'
        ]
      },
      {
        id: 'procCat06',
        title: '储能行业采购英语',
        titleEn: 'Energy Storage Industry Procurement English',
        difficulty: 5,
        duration: '20 min',
        english: `We are procuring lithium iron phosphate (LFP) battery cells with a capacity of 280Ah and a nominal voltage of 3.2V for our utility-scale energy storage system. The supplier must meet UL 1973 certification for stationary battery applications and provide a Battery Management System (BMS) with cell-level monitoring. We require a minimum cycle life of 6,000 cycles at 80% depth of discharge (DoD). The system must comply with IEC 62619 safety standards for industrial batteries. Please provide your best FOB pricing, estimated delivery time, and thermal management specifications. We also need documentation for grid connection approval, including test reports for overcharge protection and thermal runaway prevention.`,
        chinese: `我们正在为公用事业级储能系统采购磷酸铁锂(LFP)电池电芯，容量280Ah，标称电压3.2V。供应商须满足UL 1973固定式电池应用认证，并提供具备电芯级监控的电池管理系统(BMS)。我们要求在80%放电深度(DoD)下最低循环寿命达6,000次。系统须符合IEC 62619工业电池安全标准。请提供最优FOB报价、预计交货时间及热管理规格。我们还需要并网审批文件，包括过充保护和热失控预防的测试报告。`,
        vocabulary: [
          { word: 'LFP battery', phonetic: '/ˌel ef ˈpiː ˈbætri/', meaning: 'n. 磷酸铁锂电池', example: 'LFP batteries are widely used in energy storage.' },
          { word: 'nominal voltage', phonetic: '/ˈnɒmɪnəl ˈvəʊltɪdʒ/', meaning: 'n. 标称电压', example: 'The nominal voltage is 3.2V.' },
          { word: 'BMS', phonetic: '/ˌbiː em ˈes/', meaning: 'n. 电池管理系统', example: 'The BMS monitors cell-level performance.' },
          { word: 'cycle life', phonetic: '/ˈsaɪkəl laɪf/', meaning: 'n. 循环寿命', example: 'The cycle life is 6,000 cycles.' },
          { word: 'DoD', phonetic: '/ˌdiː əʊ ˈdiː/', meaning: 'n. 放电深度', example: '80% DoD means deep discharge.' },
          { word: 'thermal runaway', phonetic: '/ˈθɜːməl ˈrʌnəweɪ/', meaning: 'n. 热失控', example: 'Thermal runaway prevention is critical.' }
        ],
        grammar: `储能采购规格句型："with a capacity of... and a nominal voltage of..."（容量...标称电压...）。认证要求："must meet... certification for... applications"（须满足...应用认证）。条件规格："a minimum cycle life of... at... depth of discharge"（在...放电深度下最低循环寿命...）。合规标准："comply with... safety standards for..."（符合...安全标准）。请求报价："provide your best FOB pricing, estimated delivery time, and..."（提供最优FOB报价、预计交货时间及...）。文件需求："documentation for..., including test reports for..."（...文件，包括...测试报告）。`,
        keyPoints: [
          '储能规格："capacity of 280Ah, nominal voltage of 3.2V"',
          '认证要求："UL 1973 certification, IEC 62619 standards"',
          '电池术语：LFP, BMS, DoD, cycle life, thermal runaway',
          '报价请求："FOB pricing, delivery time, thermal management specs"',
          '并网审批："grid connection approval, overcharge protection"'
        ]
      },
      {
        id: 'procCat07',
        title: '新能源行业采购英语',
        titleEn: 'Renewable Energy Industry Procurement English',
        difficulty: 5,
        duration: '22 min',
        english: `Our company is sourcing monocrystalline solar panels with a power output of 550W and module efficiency above 21% for a 100MW solar farm project. The panels must be certified to IEC 61215 and IEC 61730 standards and have a linear power output warranty of 25 years. For the wind energy component, we need 4MW class wind turbine generators with a hub height of 100 meters, compliant with IEC 61400 standards. We also require a hybrid inverter system compatible with both solar DC input and battery storage, supporting grid-tied and off-grid operation modes. Please provide a detailed Bill of Materials (BOM), country of origin, and anti-dumping compliance documentation. The total project timeline is 18 months, with phased delivery expected.`,
        chinese: `我公司正在为100MW光伏电站项目采购功率550W、组件效率21%以上的单晶硅太阳能电池板。电池板须通过IEC 61215和IEC 61730标准认证，并具有25年线性功率输出保修。在风电部分，我们需要4MW级风力发电机组，轮毂高度100米，符合IEC 61400标准。我们还需要一套兼容太阳能直流输入和电池储能的混合逆变器系统，支持并网和离网运行模式。请提供详细物料清单(BOM)、原产国及反倾销合规文件。项目总工期18个月，预计分期交付。`,
        vocabulary: [
          { word: 'monocrystalline', phonetic: '/ˌmɒnəˈkrɪstəlaɪn/', meaning: 'adj. 单晶的', example: 'Monocrystalline panels have higher efficiency.' },
          { word: 'module efficiency', phonetic: '/ˈmɒdjuːl ɪˈfɪʃənsi/', meaning: 'n. 组件效率', example: 'Module efficiency is above 21%.' },
          { word: 'wind turbine', phonetic: '/wɪnd ˈtɜːbaɪn/', meaning: 'n. 风力涡轮机', example: 'The wind turbine has a 4MW capacity.' },
          { word: 'hybrid inverter', phonetic: '/ˈhaɪbrɪd ɪnˈvɜːtə/', meaning: 'n. 混合逆变器', example: 'A hybrid inverter supports solar and battery.' },
          { word: 'grid-tied', phonetic: '/ɡrɪd taɪd/', meaning: 'adj. 并网的', example: 'The system supports grid-tied operation.' },
          { word: 'BOM', phonetic: '/ˌbiː əʊ ˈem/', meaning: 'n. 物料清单', example: 'Please provide a detailed BOM.' }
        ],
        grammar: `新能源采购规格句型："sourcing... with a power output of... and module efficiency above..."（采购功率...组件效率...以上的...）。认证与保修："certified to... standards and have a... warranty of... years"（通过...标准认证并具有...年保修）。设备需求："need... with a hub height of..., compliant with..."（需要轮毂高度...符合...的...）。兼容性描述："compatible with both... and..., supporting... and... operation modes"（兼容...和...，支持...和...运行模式）。项目时间："total project timeline is..., with phased delivery expected"（项目总工期...，预计分期交付）。`,
        keyPoints: [
          '光伏规格："550W power output, 21% module efficiency"',
          '认证标准："IEC 61215, IEC 61730, IEC 61400"',
          '新能源术语：monocrystalline, wind turbine, hybrid inverter, grid-tied/off-grid',
          '合规文件："BOM, country of origin, anti-dumping documentation"',
          '项目交付："phased delivery, 18-month timeline"'
        ]
      }
    ]
  },

  // ===== BBC 中长篇 =====
  bbcFeatures: {
    id: 'bbcFeatures',
    name: 'BBC中长篇',
    nameEn: 'BBC Feature Articles',
    icon: '📖',
    color: '#dc2626',
    colorLight: '#fee2e2',
    description: '精选 BBC 深度特稿、国际事务、科学、文化、健康等代表性中长篇英语文章，每篇配有完整原文、中文翻译、音频朗读与逐句逐词解析。',
    level: 'B2-C2',
    lessons: [
      {
        id: 'bbcF01',
        title: '气候变化与北极冰盖消融',
        titleEn: 'Climate Change and the Melting Arctic Ice',
        difficulty: 4,
        duration: '15 min',
        english: `Scientists have warned that the Arctic is warming at a rate nearly four times faster than the rest of the planet, according to a landmark study published this week. The research, conducted by an international team of climate experts, reveals that the Arctic Circle has lost approximately one-third of its winter ice cover over the past four decades. This dramatic reduction in sea ice has profound implications for global weather patterns, rising sea levels, and the delicate ecosystems that depend on frozen habitats. Indigenous communities living in the far north are already experiencing the consequences firsthand, as traditional hunting grounds disappear and coastal villages face increasing erosion from storm surges. The researchers emphasise that without immediate and coordinated international action to reduce greenhouse gas emissions, the Arctic could experience ice-free summers as early as 2035. They argue that this tipping point would trigger a cascade of environmental changes that would be extremely difficult to reverse.`,
        chinese: `科学家警告说，根据本周发表的一项里程碑式研究，北极变暖的速度比地球其他地区快近四倍。这项由国际气候专家团队进行的研究显示，在过去四十年中，北极圈已失去了约三分之一的冬季冰盖。海冰的大幅减少对全球天气模式、海平面上升以及依赖冰冻栖息地的脆弱生态系统产生了深远影响。生活在远北地区的原住民社区已经亲身体验到了这些后果，传统狩猎场正在消失，沿海村庄面临着日益严重的风暴潮侵蚀。研究人员强调，如果不立即采取协调一致的国际行动来减少温室气体排放，北极最早可能在2035年经历无冰夏天。他们认为，这一临界点将引发一系列极难逆转的环境变化。`,
        vocabulary: [
          { word: 'Arctic', phonetic: '/ˈɑːktɪk/', meaning: 'n./adj. 北极（的）', example: 'The Arctic is warming rapidly.' },
          { word: 'landmark', phonetic: '/ˈlændmɑːk/', meaning: 'adj. 里程碑式的', example: 'A landmark study was published.' },
          { word: 'implications', phonetic: '/ˌɪmplɪˈkeɪʃənz/', meaning: 'n. 影响，后果（复数）', example: 'The implications are profound.' },
          { word: 'indigenous', phonetic: '/ɪnˈdɪdʒənəs/', meaning: 'adj. 原住民的', example: 'Indigenous communities face challenges.' },
          { word: 'erosion', phonetic: '/ɪˈrəʊʒən/', meaning: 'n. 侵蚀', example: 'Coastal erosion is increasing.' },
          { word: 'greenhouse gas', phonetic: '/ˈɡriːnhaʊs ɡæs/', meaning: 'n. 温室气体', example: 'We must reduce greenhouse gas emissions.' }
        ],
        grammar: `被动语态在科学报道中大量使用："is warming"（正在变暖）、"has lost"（已失去）。分词短语作定语："conducted by an international team"（由国际团队进行的）。条件句："without immediate action, the Arctic could experience..."（如果不立即采取行动，北极可能经历...）。名词性从句："They argue that this tipping point would trigger..."（他们认为这一临界点将引发...）。`,
        keyPoints: [
          '科学报道被动语态："is warming", "has lost"',
          '条件句结构："without... could experience..."',
          '关键术语：Arctic, sea ice, greenhouse gas, tipping point',
          '因果表达："trigger a cascade of"（引发连锁）',
          '时间表达："as early as 2035"（最早在2035年）'
        ]
      },
      {
        id: 'bbcF02',
        title: '人工智能对未来工作的影响',
        titleEn: 'How Artificial Intelligence Will Reshape the Future of Work',
        difficulty: 4,
        duration: '18 min',
        english: `Artificial intelligence is poised to transform the global workforce in ways that were unimaginable just a decade ago, according to leading economists and technology analysts. A comprehensive report released by the World Economic Forum predicts that while automation may displace approximately 85 million jobs worldwide by 2025, it will also create around 97 million new roles that do not yet exist today. The shift is expected to be particularly disruptive in manufacturing, transportation, and administrative sectors, where routine tasks can be easily automated. However, experts argue that rather than eliminating human workers entirely, AI will augment human capabilities and create new categories of employment that require uniquely human skills such as creativity, emotional intelligence, and complex problem-solving. The challenge, they note, lies in ensuring that workers whose jobs are displaced by automation have access to retraining and education programmes that can equip them for the new economy. Governments and businesses must invest heavily in lifelong learning initiatives to prevent widening inequality between those who can adapt to technological change and those who cannot.`,
        chinese: `根据领先的经济学家和技术分析师的观点，人工智能将以十年前难以想象的方式改变全球劳动力市场。世界经济论坛发布的一份综合报告预测，虽然自动化可能在2025年前取代全球约8,500万个工作岗位，但它也将创造约9,700万个目前尚不存在的新职位。这一转变预计将在制造业、交通运输业和行政领域产生特别大的冲击，因为这些领域的常规任务可以轻松实现自动化。然而，专家们认为，人工智能不会完全取代人类工作者，而是将增强人类能力，并创造需要创造力、情商和复杂问题解决等独特人类技能的新就业类别。他们指出，挑战在于确保因自动化而失业的工人能够获得再培训和教育项目，使他们为新经济做好准备。政府和企业必须大力投资终身学习计划，以防止能够适应技术变革的人和不能适应的人之间不平等差距扩大。`,
        vocabulary: [
          { word: 'artificial intelligence', phonetic: '/ˌɑːtɪˈfɪʃəl ɪnˈtelɪdʒəns/', meaning: 'n. 人工智能', example: 'AI is transforming the workforce.' },
          { word: 'displace', phonetic: '/dɪsˈpleɪs/', meaning: 'v. 取代，使失业', example: 'Automation may displace millions of jobs.' },
          { word: 'disruptive', phonetic: '/dɪsˈrʌptɪv/', meaning: 'adj. 颠覆性的', example: 'The shift will be disruptive.' },
          { word: 'augment', phonetic: '/ɔːɡˈment/', meaning: 'v. 增强', example: 'AI will augment human capabilities.' },
          { word: 'retraining', phonetic: '/riːˈtreɪnɪŋ/', meaning: 'n. 再培训', example: 'Workers need retraining programmes.' },
          { word: 'initiative', phonetic: '/ɪˈnɪʃətɪv/', meaning: 'n. 倡议，计划', example: 'The government launched a new initiative.' }
        ],
        grammar: `预测表达："is poised to transform"（即将改变）。让步从句："while automation may displace... it will also create..."（虽然自动化可能取代...但也将创造...）。分词短语作状语："requiring uniquely human skills"（需要独特的人类技能）。名词性从句："The challenge lies in ensuring that..."（挑战在于确保...）。不定式表目的："to prevent widening inequality"（以防止不平等扩大）。`,
        keyPoints: [
          '预测句型："is poised to"（即将）',
          '让步结构："while... also..."（虽然...但也...）',
          '关键术语：automation, displace, augment, retraining',
          '抽象名词用法："widening inequality"（日益扩大的不平等）',
          '投资表达："invest heavily in"（大力投资）'
        ]
      },
      {
        id: 'bbcF03',
        title: '太空探索的新纪元',
        titleEn: 'A New Era of Space Exploration',
        difficulty: 4,
        duration: '16 min',
        english: `The successful landing of the Perseverance rover on the surface of Mars in February 2021 marked the beginning of what scientists are calling a new golden age of space exploration. Unlike previous missions that focused primarily on gathering geological data, Perseverance carries sophisticated instruments designed to search for signs of ancient microbial life and to collect rock samples that will eventually be returned to Earth for detailed analysis. The mission also carried Ingenuity, a small helicopter that became the first human-made vehicle to achieve powered, controlled flight on another planet. This technological breakthrough has opened up entirely new possibilities for exploring planetary surfaces that were previously inaccessible to wheeled rovers. Meanwhile, the international space community has set its sights on returning humans to the Moon through the Artemis programme, which aims to establish a sustainable lunar presence by the end of this decade as a stepping stone for eventual crewed missions to Mars. Private companies such as SpaceX have dramatically reduced the cost of launching payloads into orbit, making space more accessible than ever before.`,
        chinese: `2021年2月，毅力号火星车成功登陆火星表面，标志着科学家所称的太空探索新黄金时代的开始。与以往主要收集地质数据的任务不同，毅力号搭载了旨在搜寻古代微生物生命迹象的精密仪器，并将收集最终送回地球进行详细分析的岩石样本。该任务还搭载了"机智号"小型直升机，它成为首架在另一颗行星上实现动力可控飞行的人造飞行器。这一技术突破为探索轮式火星车以前无法到达的行星表面开辟了全新的可能性。与此同时，国际航天界已将通过阿尔忒弥斯计划让人类重返月球作为目标，该计划旨在本十年末建立可持续的月球存在，作为最终载人火星任务的跳板。SpaceX等私营公司大幅降低了向轨道发射有效载荷的成本，使太空比以往任何时候都更加触手可及。`,
        vocabulary: [
          { word: 'rover', phonetic: '/ˈrəʊvə/', meaning: 'n. 火星车，探测器', example: 'The rover landed on Mars.' },
          { word: 'sophisticated', phonetic: '/səˈfɪstɪkeɪtɪd/', meaning: 'adj. 精密的，复杂的', example: 'Sophisticated instruments were used.' },
          { word: 'microbial', phonetic: '/maɪˈkrəʊbiəl/', meaning: 'adj. 微生物的', example: 'They search for microbial life.' },
          { word: 'breakthrough', phonetic: '/ˈbreɪkθruː/', meaning: 'n. 突破', example: 'A technological breakthrough was achieved.' },
          { word: 'sustainable', phonetic: '/səˈsteɪnəbl/', meaning: 'adj. 可持续的', example: 'A sustainable lunar presence.' },
          { word: 'payload', phonetic: '/ˈpeɪləʊd/', meaning: 'n. 有效载荷', example: 'The rocket carries a heavy payload.' }
        ],
        grammar: `对比表达："Unlike previous missions that focused on..., Perseverance carries..."（与以往任务不同，毅力号搭载了...）。分词短语作定语："designed to search for..."（旨在搜寻...）。定语从句："that will eventually be returned to Earth"（最终将被送回地球的）。现在完成时用法："has opened up"（已经开辟了）。目的表达："as a stepping stone for eventual crewed missions"（作为最终载人任务的跳板）。`,
        keyPoints: [
          '对比句型："Unlike... that..., [subject] carries..."',
          '分词定语："designed to", "aiming to"',
          '关键术语：rover, microbial, breakthrough, payload',
          '现在完成时："has opened up", "has set its sights on"',
          '比喻表达："stepping stone"（跳板/基石）'
        ]
      },
      {
        id: 'bbcF04',
        title: '全球粮食危机与可持续农业',
        titleEn: 'The Global Food Crisis and Sustainable Agriculture',
        difficulty: 4,
        duration: '17 min',
        english: `The United Nations has issued an urgent warning that the world is facing an unprecedented food security crisis, with an estimated 345 million people currently experiencing acute hunger across more than 80 countries. The crisis has been driven by a combination of factors including armed conflicts, extreme weather events linked to climate change, economic disruptions caused by the pandemic, and rising costs of fertilisers and fuel. In response, agricultural scientists and policymakers are increasingly turning their attention to sustainable farming practices that could help build resilience against future shocks. Techniques such as precision agriculture, which uses satellite data and artificial intelligence to optimise crop yields while minimising water and chemical usage, are being adopted by farmers in both developed and developing nations. Additionally, researchers are exploring drought-resistant crop varieties and regenerative farming methods that restore soil health and capture carbon from the atmosphere. Experts stress that addressing the food crisis will require not only technological innovation but also fundamental changes to global supply chains, trade policies, and food distribution systems to ensure that nutritious food reaches those who need it most.`,
        chinese: `联合国发出紧急警告，世界正面临前所未有的粮食安全危机，估计有3.45亿人在80多个国家经历严重的饥饿。这场危机由多种因素共同驱动，包括武装冲突、与气候变化相关的极端天气事件、疫情造成的经济中断，以及化肥和燃料成本的上升。作为回应，农业科学家和政策制定者正越来越多地关注可持续农业实践，以帮助增强抵御未来冲击的能力。精准农业等技术正在被发达和发展中国家的农民采用，该技术利用卫星数据和人工智能来优化作物产量，同时最大限度地减少水和化学品的使用。此外，研究人员正在探索抗旱作物品种和再生农业方法，以恢复土壤健康并从大气中捕获碳。专家强调，解决粮食危机不仅需要技术创新，还需要对全球供应链、贸易政策和粮食分配系统进行根本性变革，以确保营养食品送达最需要的人手中。`,
        vocabulary: [
          { word: 'unprecedented', phonetic: '/ʌnˈpresɪdentɪd/', meaning: 'adj. 前所未有的', example: 'An unprecedented food crisis.' },
          { word: 'acute', phonetic: '/əˈkjuːt/', meaning: 'adj. 严重的，急性的', example: 'People experience acute hunger.' },
          { word: 'resilience', phonetic: '/rɪˈzɪliəns/', meaning: 'n. 韧性，恢复力', example: 'Build resilience against shocks.' },
          { word: 'precision agriculture', phonetic: '/prɪˈsɪʒən ˈæɡrɪkʌltʃə/', meaning: 'n. 精准农业', example: 'Precision agriculture uses AI.' },
          { word: 'drought-resistant', phonetic: '/draʊt rɪˈzɪstənt/', meaning: 'adj. 抗旱的', example: 'Drought-resistant crop varieties.' },
          { word: 'regenerative', phonetic: '/rɪˈdʒenərətɪv/', meaning: 'adj. 再生的', example: 'Regenerative farming methods.' }
        ],
        grammar: `现在完成时表状态："has issued"（已发出）。伴随状语："with an estimated 345 million people currently experiencing..."（约3.45亿人正在经历...）。被动语态："are being adopted by farmers"（正被农民采用）。分词短语作定语："linked to climate change"（与气候变化相关的）。并列结构："not only... but also..."（不仅...而且...）。不定式表目的："to ensure that nutritious food reaches those who need it most"（确保营养食品送达最需要的人）。`,
        keyPoints: [
          '危机表达："unprecedented food security crisis"',
          '伴随结构："with... experiencing..."',
          '被动语态："are being adopted"',
          '关键术语：resilience, precision agriculture, regenerative',
          '并列结构："not only... but also..."'
        ]
      },
      {
        id: 'bbcF05',
        title: '心理健康：现代社会的隐形挑战',
        titleEn: 'Mental Health: The Hidden Challenge of Modern Society',
        difficulty: 4,
        duration: '16 min',
        english: `Mental health has emerged as one of the most pressing public health challenges of the twenty-first century, affecting people of all ages, backgrounds, and income levels across the globe. According to the World Health Organization, depression is now the leading cause of disability worldwide, with more than 280 million people currently living with the condition. The pandemic exacerbated an already concerning situation, with rates of anxiety and depression rising by more than 25 percent during the first year of the global health crisis alone. Despite the scale of the problem, mental health services remain chronically underfunded in most countries, and the stigma surrounding mental illness continues to prevent millions of people from seeking the help they desperately need. Campaigners argue that treating mental health with the same urgency and seriousness as physical health is not only a moral imperative but also an economic necessity, given that the global economy loses an estimated one trillion dollars each year in productivity due to depression and anxiety. Innovative approaches such as digital therapy platforms and community-based support networks are showing promising results, particularly in reaching younger populations who are often reluctant to engage with traditional mental health services.`,
        chinese: `心理健康已成为二十一世纪最紧迫的公共卫生挑战之一，影响着全球各个年龄、背景和收入水平的人群。据世界卫生组织统计，抑郁症目前是全球致残的首要原因，超过2.8亿人正患有该疾病。疫情加剧了本已令人担忧的状况，仅在全球健康危机的第一年，焦虑和抑郁的发病率就上升了25%以上。尽管问题规模庞大，但大多数国家的心理健康服务长期资金不足，围绕精神疾病的污名化仍然阻碍着数百万人寻求他们迫切需要的帮助。活动人士认为，将心理健康与身体健康同等紧迫和认真地对待，不仅是道德上的必然要求，也是经济上的必要举措，因为抑郁症和焦虑症每年导致全球经济损失约一万亿美元的生产力。数字治疗平台和社区支持网络等创新方法正在显示出可喜的成果，特别是在接触往往不愿使用传统心理健康服务的年轻群体方面。`,
        vocabulary: [
          { word: 'pressing', phonetic: '/ˈpresɪŋ/', meaning: 'adj. 紧迫的', example: 'A pressing public health challenge.' },
          { word: 'exacerbate', phonetic: '/ɪɡˈzæsəbeɪt/', meaning: 'v. 加剧，恶化', example: 'The pandemic exacerbated the situation.' },
          { word: 'stigma', phonetic: '/ˈstɪɡmə/', meaning: 'n. 污名，偏见', example: 'The stigma surrounding mental illness.' },
          { word: 'imperative', phonetic: '/ɪmˈperətɪv/', meaning: 'n./adj. 必要的，当务之急', example: 'A moral imperative.' },
          { word: 'productivity', phonetic: '/ˌprɒdʌkˈtɪvəti/', meaning: 'n. 生产力', example: 'Losses in productivity.' },
          { word: 'innovative', phonetic: '/ˈɪnəvətɪv/', meaning: 'adj. 创新的', example: 'Innovative approaches are showing results.' }
        ],
        grammar: `现在完成时表已完成："has emerged as"（已成为）。伴随状语："with more than 280 million people currently living with..."（超过2.8亿人正患有...）。让步从句："Despite the scale of the problem, mental health services remain..."（尽管问题规模庞大，心理健康服务仍然...）。动名词阻止表达："prevent millions of people from seeking..."（阻碍数百万人寻求...）。分词短语作状语："given that the global economy loses..."（鉴于全球经济损失...）。`,
        keyPoints: [
          '紧迫性表达："has emerged as one of the most pressing"',
          '伴随结构："with... living with..."',
          '让步表达："Despite..., ... remain..."',
          '阻止句型："prevent... from..."',
          '关键术语：exacerbate, stigma, imperative, productivity'
        ]
      },
      {
        id: 'bbcF06',
        title: '文化遗产保护与现代科技的融合',
        titleEn: 'Cultural Heritage Protection Meets Modern Technology',
        difficulty: 4,
        duration: '15 min',
        english: `In a remarkable collaboration between archaeologists and technology companies, cutting-edge digital tools are being used to preserve and protect the world's most endangered cultural heritage sites. Using a combination of three-dimensional laser scanning, drone photography, and artificial intelligence, researchers have created incredibly detailed digital replicas of ancient temples, historic monuments, and priceless artefacts that are at risk from war, natural disasters, and the effects of climate change. The project, known as Open Heritage, has already documented more than two hundred sites across fifty countries, including the ancient city of Palmyra in Syria and the Buddhist temples of Bagan in Myanmar. These digital archives serve not only as a permanent record in case the original structures are destroyed, but also as educational resources that allow people around the world to explore these cultural treasures virtually. For communities that have been displaced by conflict or natural disasters, the ability to access detailed digital reconstructions of their cultural heritage provides an important link to their identity and history. The team hopes that their work will inspire similar efforts to document and protect the intangible cultural heritage that is equally at risk of being lost forever.`,
        chinese: `在考古学家与科技公司之间的一项卓越合作中，尖端数字工具正被用于保护和保存世界上最濒危的文化遗产地。通过结合三维激光扫描、无人机摄影和人工智能，研究人员创建了对面临战争、自然灾害和气候变化威胁的古代寺庙、历史纪念碑和无价文物的极其详细的数字复制品。这个被称为"开放遗产"的项目已经记录了50个国家200多个遗址，包括叙利亚的巴尔米拉古城和缅甸蒲甘的佛教寺庙。这些数字档案不仅是原始结构被毁情况下的永久记录，也是让世界各地的人们能够虚拟探索这些文化珍宝的教育资源。对于因冲突或自然灾害而流离失所的社区来说，能够访问其文化遗产的详细数字重建，为他们的身份认同和历史提供了重要的联系。团队希望他们的工作能够启发类似的努力，去记录和保护同样面临永远消失风险的无形文化遗产。`,
        vocabulary: [
          { word: 'archaeologist', phonetic: '/ˌɑːkiˈɒlədʒɪst/', meaning: 'n. 考古学家', example: 'Archaeologists use digital tools.' },
          { word: 'endangered', phonetic: '/ɪnˈdeɪndʒəd/', meaning: 'adj. 濒危的', example: 'Endangered cultural heritage sites.' },
          { word: 'replica', phonetic: '/ˈreplɪkə/', meaning: 'n. 复制品', example: 'Digital replicas of ancient temples.' },
          { word: 'artefact', phonetic: '/ˈɑːtɪfækt/', meaning: 'n. 文物，手工艺品', example: 'Priceless artefacts are at risk.' },
          { word: 'displaced', phonetic: '/dɪsˈpleɪst/', meaning: 'adj. 流离失所的', example: 'Communities displaced by conflict.' },
          { word: 'intangible', phonetic: '/ɪnˈtændʒəbl/', meaning: 'adj. 无形的', example: 'Intangible cultural heritage.' }
        ],
        grammar: `被动语态进行时："are being used to preserve"（正被用于保护）。分词短语作状语："Using a combination of..."（使用...的组合）。定语从句："that are at risk from..."（面临...风险的）。并列结构："not only as... but also as..."（不仅是...也是...）。不定式表目的："to explore these cultural treasures virtually"（虚拟探索这些文化珍宝）。关系代词引导定语从句："that is equally at risk of being lost"（同样面临消失风险的）。`,
        keyPoints: [
          '被动进行时："are being used"',
          '并列结构："not only as... but also as..."',
          '关键术语：endangered, replica, artefact, displaced',
          '分词短语作状语："Using a combination of..."',
          '目的表达："allow people to explore"'
        ]
      }
    ]
  }
};

// 导出课程数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COURSE_DATA;
}
