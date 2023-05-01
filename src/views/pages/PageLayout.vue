<template>
  <div class="page-layout">
    <div class="page-layout__background">
      <div class="river">
        <div class="waves">
          <ImageInstance image="waves" width="80px" />
        </div>
        <div class="waves waves--sm">
          <ImageInstance image="waves" width="60px" />
        </div>
      </div>
      <ImageInstance
        image="leaves-group-1"
        width="30vw"
        min-width="100px"
        right="-10vw"
        top="-10vh"
      />
      <ImageInstance
        image="leaves-group-3"
        width="30vw"
        min-width="100px"
        left="-10vw"
        bottom="-10vh"
      />
    </div>
    <div class="page-layout__content" id="scroll-target">
      <lyc-main>
        <lyc-article>
          <lyc-header class="page-layout__title" underline> {{ $t(currentMetaTitle) }} </lyc-header>
          <router-view></router-view>
        </lyc-article>
      </lyc-main>
      <PageNavigate />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, watch } from "vue";
import { $t } from "@/plugins/i18n";
import PageNavigate from "@/views/home/PageNavigate.vue";
import ImageInstance from "@/components/ImageInstance.vue";

// 初始路由
const route = useRoute();
// 當前路由名稱
const currentMetaTitle = computed(() => route.meta.title);

function scrollToTop() {
  const scrollDom = document.getElementById("scroll-target") as HTMLElement;
  scrollDom.scrollTo({ top: 0, behavior: "smooth" });
}

watch(route, () => {
  scrollToTop();
});
</script>

<style scoped lang="scss">
.page-layout {
  padding-top: 60px;
  &__background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    pointer-events: none;
    background-color: rgba($color-background-3, 0.5);
    opacity: 0.5;
    & .river {
      @include setPositionAbs();
      width: 60vw;
      height: 100vh;
      background-color: $color-background-4;
      border-top-left-radius: 50%;
      border-bottom-right-radius: 50%;
      @include shadow(0px 0px 50px 50px $color-background-4);
      .waves {
        @include setPositionAbs();
        transform: translate(0% -50%);
        left: 0;
        width: 100px;
        height: 100vh;
        opacity: 0.4;
        & .image-instance {
          position: relative !important;
          height: 50vh;
          margin-top: 50vh;
          :deep(img) {
            height: 100%;
          }
        }
        &--sm {
          left: 100%;
          & .image-instance {
            margin-top: 0vh;
            height: 50vh;
          }
        }
      }
    }
  }
  &__title {
    text-align: center;
    border-color: $color-background-2;
  }
  &__content {
    position: absolute;
    width: 100vw;
    height: calc(100vh - 60px);
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 100;
  }
}
</style>
