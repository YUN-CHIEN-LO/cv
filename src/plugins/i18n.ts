import { createI18n } from "vue-i18n";
import zh from "@/languages/zh-TW.json";
import en from "@/languages/en-US.json";

type MessageSchema = typeof zh;

export enum LANG_TYPE {
  zh = "zh-TW",
  en = "en-US",
}

let locale: string = LANG_TYPE.en;

// 判斷之前是否有改過語系, 讀取紀錄
if (localStorage.getItem("i18nLang")) {
  // 必須先賦予一個變數, 不然 TS 會出現 "類型 'string | null' 不可指派給類型 'string'。類型 'null' 不可指派給類型 'string'。" 的錯誤
  const localeData = localStorage.getItem("i18nLang");
  locale = localeData !== null ? localeData : LANG_TYPE.en;
} else {
  localStorage.setItem("i18nLang", locale);
}

const i18n = createI18n<[MessageSchema], LANG_TYPE.zh | LANG_TYPE.en>({
  legacy: false, // 要把 legacy 設為 false，才可以使用 Composition API
  locale,
  fallbackLocale: LANG_TYPE.en,
  globalInjection: true,
  messages: {
    [LANG_TYPE.zh]: zh,
    [LANG_TYPE.en]: en,
  },
});

export default i18n;
