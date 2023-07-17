import { defineStore } from "pinia";

interface SidebarState {
  // 側邊欄是否開啟
  open: boolean;
}

export const useSidebarStore = defineStore("sidebar", {
  state: (): SidebarState => ({
    // 側邊欄是否開啟
    open: false as boolean,
  }),
  getters: {
    // 取得 側邊欄是否開啟
    isOpen: (state) => state.open,
  },
  actions: {
    /**
     * 更新側邊欄開啟狀態
     * @param {boolean} open - 是否開啟
     */
    setSidebar(open: boolean) {
      this.open = open;
    },
  },
});
