<template>
  <div>
    <page-landing>
      <lyc-header>找不到頁面...</lyc-header>
      <router-link style="width: 100%" to="/">
        <lyc-button style="width: 100%" size="large" alone color="primary">
          {{ $t("layout.backToHome") }}
        </lyc-button>
      </router-link>
    </page-landing>
  </div>
</template>

<script setup lang="ts">
import PageLanding from "@/views/home/PageLanding.vue";
import { $t } from "@/plugins/i18n";
</script>

<style lang="scss" scoped>
.page-landing:deep() {
  overflow: hidden;
  & .image-instance.leaf {
    opacity: 0;
    animation: fade-out 0.5s linear;
  }
  & .fish > .image-instance {
    opacity: 0;
    animation: fade-out 1s linear;
  }
  & .background {
    opacity: 0;
    animation: fade-out 2s linear;
  }
}
.lyc-header {
  color: #fff;
}

@include keyframes(fade-out) {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
