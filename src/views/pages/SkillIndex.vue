<template>
  <div class="page-skill">
    <div class="skill-wrapper">
      <div class="skill-navigate">
        <div v-for="tab in tabKeys" :key="tab" :class="['skill-navigate__tab', { 'is-active': isActive(tab) }]"
          @click="setActive(tab)">
          <p>{{ $t(`skill.${tab}`) }}</p>
        </div>
      </div>
      <div class="skill-panel">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { $t } from "@/plugins/i18n";
import { useRoute, useRouter } from "vue-router";

// 初始路由
const route = useRoute();
const router = useRouter();

const tabKeys = ["web", "english"];
const isActive = (tab: string): boolean => route.name === `skill-${tab}`;
const setActive = (tab: string): void => {
  router.push({ name: `skill-${tab}` })
};
</script>

<style lang="scss" scoped>
.page-skill {
  & .skill-wrapper {
    width: 100%;
  }

  & .skill-navigate {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -2px;

    &__tab {
      flex: 1;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      box-sizing: border-box;
      padding: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      @include setTransition(background-color 0.1s ease-in-out);
      margin-left: 8px;
      border: solid 2px $color-white;


      &:first-child {
        margin: 0;
      }

      & p {
        margin: 0;
      }

      &.is-active {
        background-color: $color-background-2;
        border-bottom: solid 2px $color-background-2;
        & p {
          color: $color-white;
          font-weight: bold;
        }
      }
    }
  }

  & .skill-panel {
    width: 100%;
    border-top: solid 2px $color-white;
    // @include shadow(inset 0px 50px 20px -20px $color-background-2);
    min-height: 100px;
    padding: 50px 8px;
    box-sizing: border-box;
  }
}
</style>
