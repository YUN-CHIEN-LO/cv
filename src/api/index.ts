import zh from "@/languages/zh-TW.json";
import en from "@/languages/en-US.json";

export default {
  // 請求能力清單
  listSkills: (lang: string) => {
    return Promise.resolve({
      data: lang === "en-US" ? en["skills.list"] : zh["skills.list"],
    });
  },
};
