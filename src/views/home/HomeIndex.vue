<template>
  <div class="container">
    <HomePage />
    <SummaryPage />
    <AboutPage />
    <QuickNavigator />
  </div>
</template>

<script setup lang="ts">
import HomePage from "@/views/home/HomePage.vue";
import SummaryPage from "@/views/home/SummaryPage.vue";
import AboutPage from "@/views/home/AboutPage.vue";
import QuickNavigator from "@/views/home/components/QuickNavigator.vue";
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  overflow-x: hidden;
  background-color: $color-background;
}
</style>
