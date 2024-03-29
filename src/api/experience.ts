import { uniqueId } from "lodash";

const getTag = (type: string, label?: LangVariantType): JobTagType => {
  switch (type) {
    case "full-time":
      return {
        id: uniqueId("tag"),
        type: "full-time",
        label: { en: "Full-time", zh: "全職" },
      };
    case "part-time":
      return {
        id: uniqueId("tag"),
        type: "part-time",
        label: { en: "Part-time", zh: "兼職" },
      };
    case "web":
      return {
        id: uniqueId("tag"),
        type: "code",
        label: { en: "Web Front-end", zh: "網頁前端" },
      };
    case "program":
      return {
        id: uniqueId("tag"),
        type: "code",
        label: { en: "Programming", zh: "程式設計" },
      };
    case "art":
      return {
        id: uniqueId("tag"),
        type: "design",
        label: { en: "Art & Design", zh: "視覺設計" },
      };
    default:
      return {
        id: uniqueId("tag"),
        type: "other",
        label: label ?? { en: "", zh: "" },
      };
  }
};

const jobList = [
  {
    id: uniqueId("job"),
    date: ["2021/04", ""],
    title: {
      en: "Front-end Developer",
      zh: "網頁前端工程師",
    },
    company: {
      en: "NUEIP TECHNOLOGY",
      zh: "人易科技",
    },
    tags: [
      getTag("full-time"),
      getTag("web"),
      getTag("program"),
      getTag("other", {
        en: "SAAS system",
        zh: "SAAS 系統",
      } as LangVariantType),
    ],
    description: {
      en: 'Responsible for front-end development of the "Business Process Management (BPM)" product line, including key modules like form design, process design, organization chart, and related front-end views and back-end CRUD operations.',
      zh: "負責 「企業流程管理服務(BPM)」 產品線的前端介面開發。\n負責重點功能模組，例如「表單設計」、「流程設計」、「組織圖」，以及其相對的前台檢視功能與後台 CRUD 操作行為。",
    },
    tools:
      "Vue2 / Vuex / VueRouter / SASS / Vue-cli / JSX / Element-UI / git - github / VSCode",
    more: {
      list: [
        {
          zh: "功能模組開發：Bpm 產品主力開發，完成 虛擬組織/作業創建/表單設計/流程設計/查詢作業/作業監控 等重點功能",
          en: "Feature module development: Main developer on Bpm product, complete key feature modules such as virtual organization / task creation / form design / process design / task filtering / task monitoring",
        },
        {
          zh: "前端團隊協調與代碼審核：在團隊中，審核協作同事代碼，給予撰寫邏輯、架構拆分、程式風格等意見",
          en: "Front-end team coordination and code review: Review the code of coworkers, and give advice on writing logic, program architecture, program style, etc.",
        },
        {
          zh: "跨部門溝通：",
          en: "Interdepartmental communication and collaboration:",
          list: {
            zh: [
              "與產品規劃部同仁協調功能開發可行性、執行方式、估工估時",
              "與後端工程師溝通 api 介面設計、串接方法、功能執行方案",
              "與產品測試部同仁進行功能測試 QA",
            ],
            en: [
              "Coordinate with colleagues in the product planning department on the feasibility, execution method, and time estimation of function development",
              "Communicate with back-end engineers on api interface design and feature execution plans",
              "Conduct feature testing QA with colleagues in the product testing department",
            ],
          },
        },
        {
          zh: "其他：系統維護與技術測試",
          en: "Others: system maintenance and technical testing",
        },
      ],
    },
  },
  {
    id: uniqueId("job"),
    date: ["2020/08", "2021/02"],
    title: { en: "Software R&D Engineer", zh: "軟體研發工程師" },
    company: { en: "NVTEK ELECTRONIC", zh: "奈特視訊" },
    tags: [
      getTag("full-time"),
      getTag("program"),
      getTag("other", {
        en: "Real-time streaming",
        zh: "即時串流服務",
      } as LangVariantType),
    ],
    description: {
      en: "Designed a real-time video streaming application for a dart machine, conducting research on GStreamer, AWS Kinesis SDK, and streaming communication channels.\nDeveloped a streaming hardware device to specify the source of the dart machine's video feed and provided a backend switch functionality for game live streaming.",
      zh: "設計飛鏢機台即時視訊串流應用程式，研究 GStreamer、AWS kinesis SDK 和串流連線通道，並製作串流硬體裝置，可指定串流機台影像來源，提供遊戲直播後台的切換功能。",
    },
    tools:
      "Unity / AWS kinesis / Winform / GStreamer / Microsoft System.Net.Sockets / Raspberry Pi / Visual Studio ",
    more: {
      list: [
        {
          zh: "機台畫面串流服務：設計飛鏢機台即時視訊串流應用程式",
          en: "Dart game machine screen streaming service: Design a real-time video streaming application for a dart machine.",
        },
        {
          zh: "製作串流硬體裝置：可指定串流機台影像來源，提供遊戲直播後台的切換功能",
          en: "Build a streaming hardware device complementing the application. It can specify the video source of the streaming machine, and provide the switching function of the background of the game live broadcast",
        },
        {
          zh: "研究 AWS kinesis SDK 和串流連線通道",
          en: "Research on AWS kinesis SDK and streaming porting.",
        },
        {
          zh: "Unity 中嵌入視訊與音訊串流",
          en: "Video and Audio streaming with Unity.",
        },
        {
          zh: "其他：系統維護與技術測試",
          en: "Others: system maintenance and technical testing.",
        },
      ],
      img: "https://i.imgur.com/DfygBcp.png",
    },
  },
  {
    id: uniqueId("job"),
    date: ["2020/07", "2020/09"],
    title: { en: "Website Developer", zh: "網頁兼職助理" },
    company: { en: "NTHU Library", zh: "清大圖書館" },
    tags: [getTag("part-time"), getTag("web"), getTag("program")],
    description: {
      en: "Assist Tsinghua University Library in producing and presenting webpages for exhibitions, including webpage image design and making webpages.",
      zh: "協助清大圖書館置辦的展覽製做呈獻網頁，工作內容包括網頁形象設計以及製做網頁。",
    },
    tools: "Vue.js / Swiper.js / Skrollr.js / Bootstrap",
    more: {
      list: [
        {
          zh: "協助清大圖書館置辦的展覽製做呈獻網頁，工作內容包括網頁形象設計以及製做網頁",
          en: "Assist Tsinghua University Library in producing and presenting webpages for exhibitions, including webpage image design and making webpages.",
        },
        {
          zh: "製做的專案：「紙植物 Paper Plant」",
          en: 'The project I was in charged of is "Paper Plant"',
        },
      ],
      img: "https://i.imgur.com/qnrTvJg.png",
      link: {
        zh: "網站連結",
        en: "View Link",
        link: "https://www.lib.nthu.edu.tw/events/2020/PaperPlant/",
      },
    },
  },
  {
    id: uniqueId("job"),
    date: ["2020/02", "2020/06"],
    title: {
      en: "Animation Storyboard and Character Design",
      zh: "動畫分鏡腳本和動畫角色設計",
    },
    company: { en: "dot2dot studio", zh: "連想創意 dot2dot" },
    tags: [
      getTag("part-time"),
      getTag("art"),
      getTag("other", { en: "Animation", zh: "動畫設計" } as LangVariantType),
    ],
    description: {
      en: "I was an intern at dot2dot animation studio. My job responsibilities include scriptwriting, character design, storyboarding, and more.",
      zh: "我在 連想創意 dot2dot 動畫工作室當實習生，工作內容涵蓋「分鏡腳本設計」、「角色設計」、「故事腳本」等等。",
    },
    tools: "Storyboarder / Photoshop",
    more: {
      list: [
        {
          zh: "分鏡腳本：「今天誰來代課？(暫定)」原創動畫影集 繪製分鏡腳本共三集",
          en: 'Storyboarding:"Who\'s our sub today?" original animated series. Draw a storyboard script for a total of three episodes.',
        },
        {
          zh: "角色設計：「拾憶男孩(暫定)」動畫長片中參與角色設計",
          en: 'Character design: Participate in character design in the animated feature film "Memories Boy (Tentative)”',
        },
        {
          zh: "故事腳本：「你會唱歌嗎？」公視水果奶奶音樂MV參與故事腳本設計",
          en: 'Story script: Participated in the story script design of "Can you sing?" PTV Fruit Granny music MV',
        },
      ],
      img: "https://i.imgur.com/i1HfxbZ.png",
    },
  },
  {
    id: uniqueId("job"),
    date: ["2019/09", "2020/02"],
    title: { en: "Graphic Designer", zh: "美編製圖設計" },
    company: { en: "susuclothes", zh: "速速製衣" },
    tags: [getTag("part-time"), getTag("art")],
    description: {
      en: "Susuclothes is a custom clothing company, and I work as a freelance graphic designer. My role primarily involves adapting clients' design drafts into print-ready formats. This includes design adjustments, drawing, file conversion, and using Illustrator as the main editing tool.",
      zh: "速速製衣是一家客製化衣品的公司，我擔任的是約聘的美編製圖設計一職。\n工作內容主要是將客戶的設計稿調整成印刷所需的格式，這包含設計、描圖、轉檔等步驟，並且以 Illustrator 為主要的編輯工具。",
    },
    tools: "Illustrator",
    more: {
      list: [
        {
          zh: "協助客戶製作客製化t-shirt、帽t、旗子等織品",
          en: "Assisting clients in producing custom-made textile products such as t-shirts, caps, flags, etc.",
        },
        {
          zh: "經手約20餘組客戶",
          en: "I am in charge of the design projects for around 20 groups of clients over 6 months.",
        },
      ],
      img: "https://i.imgur.com/pAqWoTG.png",
    },
  },
  {
    id: uniqueId("job"),
    date: ["2019/03"],
    title: {
      en: "Logo Design for NTHU Harvest Project",
      zh: "清大拾穗計畫logo設計",
    },
    company: { en: "NTHU Division of Curriculum", zh: "清大教務處課務組" },
    tags: [getTag("part-time"), getTag("art")],
    description: {
      en: 'The NTHU Harvesting Talents Program is a cross-disciplinary admission channel. I designed the program\'s logo, incorporating the concept of "harvesting" by hand-picking and the idea of "abundant" through the full and hanging "grain ears." This logo design is applied to the official website, promotional printed materials, and various documents.',
      zh: "清大拾穗計畫是一個不分系多元招生的管道。\n我為拾穗計畫設計了計畫logo，結合了「拾」以手執起，以及「穗」飽滿垂墜的意向。此 Logo 設計應用於官方網站、宣傳印刷品，以及各式文件。",
    },
    tools: "Illustrator",
    more: {
      img: "https://i.imgur.com/iht1JMu.png",
    },
  },
  {
    id: uniqueId("job"),
    date: ["2018/02", "2018/04"],
    title: { en: "Character Design", zh: "角色設計師" },
    company: { en: "Rehoboth Pioneer Networking", zh: "力和博創業工作坊" },
    tags: [getTag("part-time"), getTag("art")],
    description: {
      en: "I was invited to design character elements for an escape room in a workshop. This escape room is inspired by an adventurous expedition team and takes participants on an adventure and learning journey through seven characters representing seven entrepreneurial factors.\nI designed the roles and corresponding backgrounds.",
      zh: "我受力和博創業工作坊邀請，替一場工作坊的密室逃脫設計角色元素。\n這一場密室逃脫是以探險遠征隊為發想，以分別代表七項創業因素的七個角色展開一場冒險與學習之旅。我設計七位角色的角色與三個主要關卡的相應背景。",
    },
    tools: "Photoshop",
    more: {
      img: "https://i.imgur.com/tu1fcEs.png",
    },
  },
  {
    id: uniqueId("job"),
    date: ["2017/09", "2018/01"],
    title: { en: "Graphic Designer", zh: "教材插圖與宣傳圖文" },
    company: { en: "ZU LAB", zh: "ZU創意教學" },
    tags: [getTag("part-time"), getTag("art")],
    description: {
      en: "I created educational illustrations for ZU LAB, a studio dedicated to children's science education. I also handled promotional graphic design and content management for their social media accounts.",
      zh: "ZU創意教學是一間致力於兒童科普教育的工作室。我為ZU創意教學繪製針對小學生科普教育的教材插圖，並且兼任經營粉專宣傳圖文的工作。",
    },
    tools: "Illustrator / Photoshop",
    more: {
      img: "https://i.imgur.com/wGbr8T5.png",
    },
  },
  {
    id: uniqueId("job"),
    date: ["2017/06", "2019/06"],
    title: { en: "Graphic Designer", zh: "美術工讀生" },
    company: { en: "NTHU OpenCourseWare", zh: "清大OCW開放式課程" },
    tags: [getTag("part-time"), getTag("art")],
    description: {
      en: "This was my first job after college, where I primarily designed course posters for the NTHU OpenCourseWare.\nI worked on designing promotional materials for various related events.",
      zh: "這是我上大學後的第一份工作，主要工作內容是為清大online course website 設計課程海報，並且設計周邊活動文宣品。",
    },
    tools: "Illustrator / Photoshop",
    more: {
      img: "https://i.imgur.com/KbqFgFZ.png",
    },
  },
] as JobType[];

export default jobList;
