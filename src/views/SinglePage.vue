<script setup lang="ts">
import { ref, onMounted, Vue } from "vue";
import { useRouter, useRoute } from "vue-router";
import SingleBasic from "@/components/SingleBasic.vue";
import SingleSummary from "@/components/SingleSummary.vue";
import SingleEducation from "@/components/SingleEducation.vue";
import SingleSkills from "@/components/SingleSkills.vue";

// 使用路由
const router = useRouter();
const route = useRoute();

const container = ref(null); // 捲動容器
const basic = ref(null); // 基本資料
const summary = ref(null); // 簡介
const education = ref(null); // 學歷
const skills = ref(null); // 能力

/**
 * 捲動制區塊
 * @param {string} hash - 區塊鍵值
 */
function scrollToHash(hash: string) {
  const target = (hash ?? "").replace(/^#/, "");
  if (!target.length) return;
  const yOffset = -60;
  const element = document.getElementById(target) as HTMLElement;
  if (!element) return;
  const containerDom = container.value as Vue;
  const y = element.getBoundingClientRect().top + containerDom.scrollTop + yOffset;
  containerDom.scrollTo({ top: y, behavior: "smooth" });
}

/**
 * 是否捲動至
 * @param {number} scrollTop - 捲動高度
 * @param {HTMLElement} reference - 辨別區塊
 * @returns {Boolean}
 */
function isSCrollTo(scrollTop: number, reference: Vue): boolean {
  return reference && scrollTop <= (reference.$el as HTMLElement)?.offsetTop;
}

/**
 * 更新路由 Hash
 * @param {string} hash - 區塊鍵值
 */
function pushRoute(hash: string) {
  router.push({ name: "single-page", hash: `#${hash}` });
}

/**
 * 處理蹶動事件
 * @param {Event} event - 捲動事件
 */
function handleScroll(event: Event) {
  const target = event.currentTarget as HTMLElement;
  const scrollTop = target?.scrollTop + 60;
  if (isSCrollTo(scrollTop, basic.value)) {
    pushRoute("basic");
    return;
  }
  if (isSCrollTo(scrollTop, summary.value)) {
    pushRoute("summary");
    return;
  }
  if (isSCrollTo(scrollTop, education.value)) {
    pushRoute("education");
    return;
  }
  if (isSCrollTo(scrollTop, skills.value)) {
    pushRoute("skills");
    return;
  }
}

onMounted(() => {
  scrollToHash(route.hash);
});
</script>

<template>
  <div class="page" ref="container" @scroll="handleScroll">
    <lyc-main>
      <lyc-article>
        <!-- 基本資料 -->
        <SingleBasic ref="basic" />

        <!-- 簡介 -->
        <router-link
          ref="summary"
          class="section-header"
          to="#summary"
          @click.native="scrollToHash('summary')"
        >
          <lyc-header id="summary" underline type="h2"> {{ $t("summary") }} </lyc-header>
        </router-link>
        <SingleSummary />

        <!-- 學歷 -->
        <router-link
          ref="education"
          class="section-header"
          to="#education"
          @click.native="scrollToHash('education')"
        >
          <lyc-header id="education" underline type="h2"> {{ $t("education") }} </lyc-header>
        </router-link>
        <SingleEducation />

        <!-- 能力 -->
        <router-link
          ref="skills"
          class="section-header"
          to="#skills"
          @click.native="scrollToHash('skills')"
        >
          <lyc-header id="skills" underline type="h2"> {{ $t("skills") }} </lyc-header>
        </router-link>
        <SingleSkills />
      </lyc-article>
    </lyc-main>
  </div>
</template>

<style lang="scss" scoped>
.section-header {
  text-decoration: none;
}
.page {
  height: calc(100vh - 60px);
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
