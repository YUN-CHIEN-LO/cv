<script setup lang="ts">
import { $t } from "@/plugins/i18n";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { useLangStore } from "@/stores/lang";
import { useSidebarStore } from "@/stores/sidebar";
import { computed, onBeforeMount } from "vue";

// 快捷路由型別
type RouteType = {
  path: string;
  label: string;
};

// 初始路由
const route = useRoute();
const router = useRouter();
// 初始狀態槽
const langStore = useLangStore();
const sidebarStore = useSidebarStore();
// 初始語系
const { locale } = useI18n();

// 當前路由名稱
const currentActivePage = computed(() => route.name);

// 快捷路由
const sidebarRoutes = [
  {
    path: "/",
    label: "layout.home",
  },
  {
    path: "/page/about",
    label: "about.title",
  },
  {
    path: "/page/experience",
    label: "experience.title",
  },
  {
    path: "/page/skill",
    label: "skill.title",
  },
  // {
  //   path: "/page/project",
  //   label: "project.title",
  // },
] as RouteType[];

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
  const lang = langStore.changeLanguage();
  locale.value = lang;
}

// 側邊欄開起狀態
const sidebarOpen = computed({
  get(): boolean {
    return sidebarStore.isOpen;
  },
  set(val) {
    sidebarStore.setSidebar(val);
  },
});

/**
 * 轉導路由
 * @param {string} path - 路由
 */
function gotoRoute(path: string) {
  sidebarOpen.value = false;
  router.push(path);
}

onBeforeMount(() => {
  // 初始語系
  langStore.initLanguage();
});
</script>

<template>
  <div class="layout">
    <!-- 置頂導覽頁 -->
    <lyc-navbar>
      <lyc-button style="margin-right: 16px" square @click="sidebarOpen = true">
        <LycIcon type="hamburger" />
      </lyc-button>
      <router-link to="/">
        <lyc-link :color="getTabColor('home')" :active="isActive('home')">
          {{ $t("layout.home") }}
        </lyc-link>
      </router-link>
      <!-- <router-link to="/single-page">
        <lyc-link :color="getTabColor('single-page')" :active="isActive('single-page')">
          {{ $t("layout.singlePage") }}
        </lyc-link>
      </router-link> -->
      <div class="layout__tools">
        <lyc-button @click="handleChangeLang">{{ $t("layout.lang") }}</lyc-button>
      </div>
    </lyc-navbar>

    <!-- 路由內容 -->
    <router-view></router-view>

    <!-- 側邊欄 -->
    <lyc-modal v-model="sidebarOpen" @click="sidebarOpen = false"></lyc-modal>
    <lyc-aside width="calc(100% - 32px)" :class="{ 'is-opened': sidebarOpen }">
      <lyc-row>
        <lyc-button square @click="sidebarOpen = false">
          <LycIcon type="cross" />
        </lyc-button>
      </lyc-row>
      <lyc-button
        v-for="route in sidebarRoutes"
        size="large"
        style="margin-bottom: 16px"
        :key="route.path"
        alone
        full
        @click="gotoRoute(route.path)"
      >
        {{ $t(route.label) }}
      </lyc-button>
    </lyc-aside>
  </div>
</template>

<style lang="scss" scoped>
.lyc-navbar {
  justify-content: flex-start;
  padding: 0px 16px;
}

.lyc-aside {
  position: fixed;
  z-index: 2200;
  top: 0;
  left: 0;
  width: 0px;
  height: 100vh;
  background-color: $color-white;
  @include setTransition(width 0.3s ease-in-out);
}
@include mobile-device() {
  .lyc-aside.is-opened {
    width: 100%;
  }
}
@include large-device() {
  .lyc-aside.is-opened {
    width: 40%;
    max-width: 600px;
  }
}

.layout {
  min-width: 300px;
  &__tools {
    margin-left: auto;
  }
  .lyc-link {
    font-size: 16px;
    padding: 16px 12px;
    height: 60px;
  }
  .lyc-navbar {
    background-color: transparent;
    position: fixed;
    width: 100vw;
    top: 0px;
    min-width: 300px;
  }
}
</style>
