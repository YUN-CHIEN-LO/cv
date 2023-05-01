<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { useLangStore } from "@/stores/lang";
import { computed, onBeforeMount } from "vue";

// 初始路由
const route = useRoute();
// 初始狀態槽
const store = useLangStore();
// 初始語系
const { locale } = useI18n();

// 當前路由名稱
const currentActivePage = computed(() => route.name);

/**
 * 是否為當前頁籤
 * @param {String} tab - 頁籤
 * @returns {Boolean}
 */
function isActive(tab: string): boolean {
  return tab === (currentActivePage.value as String);
}
/**
 * 頁籤顏色
 * @param {String} tab - 頁籤
 * @returns {String}
 */
function getTabColor(tab: string): string {
  return isActive(tab) ? "primary" : "default";
}
/**
 * 切換語系
 */
function handleChangeLang() {
  const lang = store.changeLanguage();
  locale.value = lang;
}

onBeforeMount(() => {
  // 初始語系
  store.initLanguage();
});
</script>

<template>
  <div class="layout">
    <lyc-navbar>
      <router-link to="/">
        <lyc-link alone size="large" :color="getTabColor('home')" :active="isActive('home')">
          {{ $t("layout.home") }}
        </lyc-link>
      </router-link>
      <router-link to="/single-page">
        <lyc-link
          alone
          size="large"
          :color="getTabColor('single-page')"
          :active="isActive('single-page')"
        >
          {{ $t("layout.singlePage") }}
        </lyc-link>
      </router-link>
      <div class="layout__tools">
        <lyc-button @click="handleChangeLang">{{ $t("layout.lang") }}</lyc-button>
      </div>
    </lyc-navbar>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.lyc-navbar {
  justify-content: flex-start;
  padding: 0px 16px;
}

.layout {
  &__tools {
    margin-left: auto;
  }
  .lyc-link {
    font-size: 16px;
    line-height: 2.4;
  }
}
</style>
