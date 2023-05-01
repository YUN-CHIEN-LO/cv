<script setup lang="ts">
import api from "@/api";
import { storeToRefs } from "pinia";
import { onMounted, reactive, watch } from "vue";
import { useLangStore } from "@/stores/lang";

// 初始狀態槽
const store = useLangStore();
// 當前語言
const { currentLang } = storeToRefs(store);
// 能力清單
const skillData = reactive({ data: [] as { title: string; id: string; list: string[] }[] });

/**
 * 請求能力清單
 */
const listSkills = () =>
  api.listSkills(store.currentLang).then((res) => {
    skillData.data = res.data;
  });

onMounted(() => {
  listSkills();
});

watch(currentLang, () => {
  listSkills();
});
</script>

<template>
  <lyc-row v-for="block in skillData.data" :key="block.id">
    <lyc-column min-width="300px">
      <lyc-header type="h4"> {{ block.title }} </lyc-header>
      <lyc-paragraph style="padding: 0px">
        <lyc-list numbered>
          <lyc-list-item v-for="(item, index) in block.list" :key="index">{{ item }}</lyc-list-item>
        </lyc-list>
      </lyc-paragraph>
    </lyc-column>
  </lyc-row>
</template>
