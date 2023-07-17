<template>
  <div class="container">
    <page-landing>
      <p class="landing-text">{{ $t("basic.portfolio") }}</p>
      <img class="landing-image" :src="signatureUrl" alt="YUN-CHIEN-LO" />
      <p class="landing-text">{{ $t("basic.jobTitle") }}</p>
    </page-landing>
    <PageSummary />
    <PageNavigate />
  </div>
</template>

<script setup lang="ts">
import { $t } from "@/plugins/i18n";
import signatureUrl from "@/assets/signature.PNG";
import PageLanding from "@/views/home/PageLanding.vue";
import PageSummary from "@/views/home/PageSummary.vue";
import PageNavigate from "@/views/home/PageNavigate.vue";
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  overflow-x: hidden;
  background-color: $color-background-3;

  & .landing-image {
    width: 100%;
  }
  & .landing-text {
    text-align: center;
    color: $color-white;
  }
}
</style>
