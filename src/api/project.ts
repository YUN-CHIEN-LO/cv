import { uniqueId } from "lodash";

const projectList = [
  {
    id: uniqueId("proj"),
    url: "https://yun-chien-lo.github.io/typescript-tic-tac-toe/",
    img: "https://i.imgur.com/4spDtTx.png",
    title: {
      zh: "",
      en: "",
    } as LangVariantType,
  },
  {
    id: uniqueId("proj"),
    url: "https://yun-chien-lo.github.io/LYC2021/indexCh.html",
    img: "https://i.imgur.com/6xbXEV3.png",
    title: {
      zh: "",
      en: "",
    } as LangVariantType,
  },
  {
    id: uniqueId("proj"),
    url: "https://yun-chien-lo.github.io/demo/index.html",
    img: "https://i.imgur.com/2Hfz2Xw.png",
    title: {
      zh: "個人資料表",
      en: "Personal Info Table",
    } as LangVariantType,
  },
  {
    id: uniqueId("proj"),
    url: "https://codepen.io/ycl/full/MWjXPvd",
    img: "https://i.imgur.com/pffwuoE.png",
    title: {
      zh: "",
      en: "",
    } as LangVariantType,
  },
  {
    id: uniqueId("proj"),
    url: "https://codepen.io/ycl/full/KKNZxag",
    img: "https://i.imgur.com/NKayWvW.png",
    title: {
      zh: "",
      en: "",
    } as LangVariantType,
  },
] as ProjectType[];








export default projectList;




