<template>
  <lyc-main class="summary">
    <div class="spot-light"></div>
    <lyc-article>
      <lyc-row>
        <lyc-column>
          <div class="head-shot__wrapper">
            <ImageInstance image="fish-3" width="45px" bottom="0px" right="20px" />
            <ImageInstance image="fish-2" width="36px" bottom="30px" right="60px" />
            <div class="head-shot">
              <img :src="headShotUrl" />
            </div>
          </div>
          <lyc-paragraph type="block" color="primary">
            <lyc-header style="margin-bottom: 0px" type="h5">
              {{ $t("basic.name") }} {{ $t("basic.name.lang") }}
            </lyc-header>
            <ImageInstance image="leaf-1" width="120px" right="-60px" top="50%" />
            <lyc-list class="info">
              <lyc-list-item>{{ $t("basic.title") }}</lyc-list-item>
              <lyc-list-item>{{ $t("basic.location") }}</lyc-list-item>
              <lyc-list-item>{{ $t("basic.email") }}</lyc-list-item>
              <lyc-list-item>{{ $t("basic.birth") }}</lyc-list-item>
            </lyc-list>
          </lyc-paragraph>
        </lyc-column>
        <lyc-column>
          <lyc-paragraph style="padding: 32px 0px">
            {{ $t("summary.a") }}
          </lyc-paragraph>
          <lyc-paragraph type="block" color="primary">
            <lyc-header style="margin-bottom: 0px" type="h5">
              {{ $t("education.school") }}
            </lyc-header>
            <ImageInstance image="leaf-3" width="80px" right="0px" top="-40px" />
            <ImageInstance image="leaf-2" width="30px" right="60px" top="-10px" rotate="-42deg" />
            <div class="info">
              <div v-if="store.currentLang === TYPE.en">
                {{ $t("education.diploma") }}
                <span class="single-highlight">{{ $t("education.department") }} </span>
              </div>
              <div v-else>
                <span class="single-highlight">{{ $t("education.department") }} </span>
                {{ $t("education.diploma") }}
              </div>
            </div>
            <template #footnote>
              {{ $t("education.graduate") }}
            </template>
          </lyc-paragraph>
        </lyc-column>
      </lyc-row>
    </lyc-article>
  </lyc-main>
</template>

<script setup lang="ts">
import { useLangStore } from "@/stores/lang";
import { LANG_TYPE as TYPE } from "@/plugins/i18n";
import ImageInstance from "@/views/home/components/ImageInstance.vue";
import headShotUrl from "@/assets/lyc-picture.PNG";
// 初始狀態槽
const store = useLangStore();
</script>

<style scoped lang="scss">
.summary {
  position: relative;
  .lyc-article {
    padding-top: 60px;
    width: 100vw;
    overflow: hidden;
  }

  .lyc-paragraph {
    position: relative;
    min-width: 300px;
    z-index: 100;
  }
  .head-shot {
    height: 240px;
    width: 240px;
    border-radius: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -60px;
    &__wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    & img {
      height: 100%;
    }
  }

  .spot-light {
    position: absolute;
    transform: translate(-50%, -50%);
    bottom: 0%;
    right: 0%;
    width: 160px;
    height: 160px;
    background-color: $color-background-3;
    border-radius: 100%;
    box-shadow: 0px 0px 100px 100px $color-background-3;
    opacity: 0.5;
    z-index: 1;
  }
}
</style>
