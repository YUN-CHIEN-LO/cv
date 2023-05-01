<script setup lang="ts">
import { useLangStore } from "@/stores/lang";
import { LANG_TYPE as TYPE } from "@/plugins/i18n";
// 初始狀態槽
const store = useLangStore();
</script>

<template>
  <lyc-row>
    <lyc-column min-width="300px">
      <lyc-paragraph type="block" style="margin-top: 0px; max-width: 500px">
        <lyc-header style="margin-bottom: 0px" type="h5"> {{ $t("education.school") }} </lyc-header>
        <div v-if="store.currentLang === TYPE.en">
          {{ $t("education.diploma") }}
          <span class="single-highlight">{{ $t("education.department") }} </span>
        </div>
        <div v-else>
          <span class="single-highlight">{{ $t("education.department") }} </span>
          {{ $t("education.diploma") }}
        </div>
        <template #footnote>
          {{ $t("education.graduate") }}
        </template>
      </lyc-paragraph>
    </lyc-column>
    <lyc-column min-width="300px"></lyc-column>
  </lyc-row>
</template>
