<template>
  <div class="quick-navigator mobile-none">
    {{ activeLabel }}
    <div
      :class="['quick-navigator__tab', { 'is-active': tabIsActive(3) }]"
      @click="handleTabClick(3)"
    >
      <ImageInstance image="leaf-1" width="42px" />
    </div>
    <div
      :class="['quick-navigator__tab', { 'is-active': tabIsActive(2) }]"
      @click="handleTabClick(2)"
    >
      <ImageInstance image="leaf-2" width="42px" />
    </div>
    <div
      :class="['quick-navigator__tab', { 'is-active': tabIsActive(1) }]"
      @click="handleTabClick(1)"
    >
      <ImageInstance image="leaf-3" width="42px" />
    </div>
    <ImageInstance
      class="fish"
      image="fish-2"
      width="36px"
      :bottom="`${activeLabel * 50 + 8 - 25}px`"
      right="calc(3vh + 5px)"
      :rotate="`${down ? '90deg' : '0deg'}`"
    />
  </div>
</template>

<script setup lang="ts">
import ImageInstance from "@/views/home/components/ImageInstance.vue";
import { ref } from "vue";

const activeLabel = ref(3 as number);
const down = ref(true as boolean);
const tabIsActive = (tab: number): boolean => activeLabel.value === tab;
const handleTabClick = (tab: number): void => {
  down.value = activeLabel.value > tab;
  activeLabel.value = tab;
};
</script>

<style scoped lang="scss">
.quick-navigator {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 2100;
  width: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__tab {
    width: 52px;
    height: 52px;
    cursor: pointer;
    @include setTransition(transform 0.3s ease-in-out);
    margin-bottom: 8px;
    &:hover {
      transform: scale(1.2);
    }
    &.is-active {
      transform: scale(1.4);
    }
  }
  & > .image-instance {
    position: relative !important;
  }
  .fish {
    position: fixed !important;
    pointer-events: none;
  }
}
</style>
