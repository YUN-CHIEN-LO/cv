import { defineStore } from "pinia";
import { LANG_TYPE as TYPE } from "@/plugins/i18n";

interface LangState {
  // 當前語系
  currentLang: string;
}

export const useLangStore = defineStore("lang", {
  state: (): LangState => ({
    // 當前語系
    currentLang: TYPE.en as string,
  }),
  getters: {
    // 是否為英文版
    isEng: (state) => state.currentLang === TYPE.en,
  },
  actions: {
    /**
     * 初始語系
     */
    initLanguage() {
      this.currentLang = (localStorage.getItem("i18nLang") ?? TYPE.en) as string;
    },
    /**
     * 更變語系
     *
     * @returns {String} 新語系
     */
    changeLanguage() {
      // 更新當前語系
      this.currentLang = this.isEng ? TYPE.zh : TYPE.en;
      // 更新 local storage
      localStorage.setItem("i18nLang", this.currentLang);
      return this.currentLang;
    },
  },
});
