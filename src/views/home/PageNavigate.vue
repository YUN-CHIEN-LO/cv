<template>
  <div class="page-navigate">
    <lyc-main>
      <lyc-article>
        <lyc-row>
          <div class="fish">
            <ImageInstance image="fish-4" width="40px" rotate="45deg" />
          </div>
          <div class="fish fish--2">
            <ImageInstance image="fish-1" width="36px" rotate="45deg" />
          </div>
          <router-link
            to="/page/about"
            :class="['page-navigate__link', { 'is-active': isActive('about') }]"
          >
            <ImageInstance class="leaves" image="leaf-1" width="100%" rotate="20deg" />
            <div class="page-navigate__label">{{ $t("about.title") }}</div>
          </router-link>
          <router-link
            to="/page/experience"
            :class="['page-navigate__link', { 'is-active': isActive('experience') }]"
          >
            <ImageInstance class="leaves" image="leaf-2" width="100%" rotate="20deg" />
            <div class="page-navigate__label">{{ $t("experience.title") }}</div>
          </router-link>
          <router-link
            to="/page/skill"
            :class="['page-navigate__link', { 'is-active': isActive('skill') }]"
          >
            <ImageInstance class="leaves" image="leaf-3" width="100%" rotate="20deg" />
            <div class="page-navigate__label">{{ $t("skill.title") }}</div>
          </router-link>
          <!-- <router-link
            to="/page/project"
            :class="['page-navigate__link', { 'is-active': isActive('project') }]"
          >
            <ImageInstance class="leaves" image="leaf-4" width="100%" rotate="20deg" />
            <div class="page-navigate__label"></div>
            <div class="page-navigate__label">{{ $t("project.title") }}</div>
          </router-link> -->
        </lyc-row>
        <lyc-row v-if="currentActivePage!=='home'">
          <router-link style="width: 100%" to="/">
            <lyc-button style="width: 100%" size="large" alone color="primary">
              {{ $t("layout.backToHome") }}
            </lyc-button>
          </router-link>
        </lyc-row>
      </lyc-article>
    </lyc-main>
  </div>
</template>

<script setup lang="ts">
import { $t } from "@/plugins/i18n";
import { useRoute } from "vue-router";
import { computed } from "vue";
import ImageInstance from "@/components/ImageInstance.vue";

// 初始路由
const route = useRoute();
// 當前路由名稱
const currentActivePage = computed(() => route.name);
/**
 * 是否為當前頁籤
 * @param {String} tab - 頁籤
 * @returns {Boolean}
 */
function isActive(tab: string): boolean {
  return  (currentActivePage.value as String).includes(tab);
}
</script>

<style scoped lang="scss">
.page-navigate {
  min-height: 30vh;
  width: 100vw;
  position: relative;
  .lyc-article {
    overflow: visible;
  }
  .lyc-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .fish {
    position: absolute;
    width: 100px;
    height: 100px;
    animation: swim 30s infinite linear;
    & .image-instance {
      animation: swim-fish 5s infinite linear alternate-reverse;
    }
    &--2 {
      animation-delay: -4s;
      padding-top: 100px;
      & .image-instance {
        animation-delay: -0.2s;
      }
    }
  }
  &__board {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  &__link {
    position: relative;
    flex: 1;
    max-width: 200px;
    min-width: 160px;
    transform: translateY(0px);
    & > .leaves {
      position: relative !important;
    }
    &:nth-child(odd) {
      transform: translateY(-50px);
    }
    &.is-active {
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.3;
    }
  }
  &__label {
    width: 100%;
    text-align: center;

    color: $color-white;
    font-size: 20px;
    background-color: $color-background-2;
    @include setPositionAbs();
  }
}

@include keyframes(swim) {
  0% {
    left: -100px;
  }
  100% {
    left: calc(100% + 100px);
  }
}

@include keyframes(swim-fish) {
  0% {
    top: 50%;
  }
  100% {
    top: calc(50% - 50px);
  }
}
</style>
