<template>
  <div class="page-about">
    <lyc-row alignment="center">
      <lyc-column :flex="1">
        <div class="page-about__picture">
          <ImageInstance image="fish-3" width="45px" bottom="0px" right="20px" />
          <ImageInstance image="fish-2" width="36px" bottom="30px" right="60px" />
          <div class="page-about__head-shot">
            <img :src="headShotUrl" alt="YUN-CHIEN-LO" />
          </div>
        </div>
      </lyc-column>
      <lyc-column :flex="4" min-width="300px">
        <lyc-paragraph type="block">
          <lyc-header type="h5"> {{ $t("basic.name") }} {{ $t("basic.nameLang") }} </lyc-header>
          <lyc-list class="info">
            <lyc-list-item>{{ $t("basic.jobTitle") }}</lyc-list-item>
            <lyc-list-item>{{ $t("basic.location") }}</lyc-list-item>
            <lyc-list-item>{{ $t("basic.email") }}</lyc-list-item>
            <lyc-list-item>{{ $t("basic.birth") }}</lyc-list-item>
          </lyc-list>
        </lyc-paragraph>
        <lyc-paragraph type="block">
          <lyc-header style="margin-bottom: 0px" type="h5">
            {{ $t("education.school") }}
          </lyc-header>
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
    <lyc-row>
      <lyc-column>
        <lyc-paragraph type="block">
          {{ $t("about.intro") }}
          <span class="bold">{{ $t("about.introBold") }}</span>
          {{ $t("about.introTrail") }}
        </lyc-paragraph>
      </lyc-column>
    </lyc-row>
    <lyc-row gap="24px">
      <lyc-column min-width="300px">
        <lyc-paragraph type="block">
          <lyc-header type="h5"> {{ $t("about.character.title") }} </lyc-header>
          {{ $t("about.character.content") }}
          <span class="bold">
            {{ $t("about.character.contentBold") }}
          </span>
          {{ $t("about.character.contentTrail") }}
          <lyc-paragraph type="quote">
            {{ $t("about.character.adventurer.summary") }}
            <lyc-list>
              <lyc-list-item>
                {{ $t("about.character.adventurer.pros") }}
                <span class="bold">
                  {{ $t("about.character.adventurer.prosBold") }}
                </span>
              </lyc-list-item>
              <lyc-list-item>
                {{ $t("about.character.adventurer.cons") }}
              </lyc-list-item>
            </lyc-list>
            <template #footnote>
              <a href="https://www.16personalities.com/isfp-careers" target="”_blank”">
                {{ $t("about.character.adventurer.link") }}
              </a>
            </template>
          </lyc-paragraph>
        </lyc-paragraph>
        <lyc-paragraph type="block">
          <lyc-header type="h5"> {{ $t("about.work.title") }} </lyc-header>
          {{ $t("about.work.content") }}
          <span class="bold">{{ $t("about.work.contentBold") }}</span>
          {{ $t("about.work.contentTrail") }}
        </lyc-paragraph>
      </lyc-column>
      <lyc-column min-width="300px">
        <lyc-paragraph type="block">
          <lyc-header type="h5"> {{ $t("about.team.title") }} </lyc-header>
          {{ $t("about.team.content") }}
          <lyc-list class="lyc-list">
            <lyc-list-item v-for="index in 4" :key="index">
              {{ $t(`about.team.list[${index}]`) }}
            </lyc-list-item>
          </lyc-list>
        </lyc-paragraph>
        <lyc-paragraph type="block">
          <lyc-header type="h5"> {{ $t("about.logic.title") }} </lyc-header>
          {{ $t("about.logic.content") }}
          <lyc-list class="lyc-list">
            <lyc-list-item v-for="index in 4" :key="index">
              {{ $t(`about.logic.list[${index}]`) }}
            </lyc-list-item>
          </lyc-list>
        </lyc-paragraph>
        <lyc-paragraph type="block">
          <lyc-header type="h5"> {{ $t("about.future.title") }} </lyc-header>
          {{ $t("about.future.content") }}
          <lyc-list class="lyc-list">
            <lyc-list-item v-for="index in 5" :key="index">
              {{ $t(`about.future.list[${index}]`) }}
            </lyc-list-item>
          </lyc-list>
        </lyc-paragraph>
      </lyc-column>
    </lyc-row>
  </div>
</template>

<script setup lang="ts">
import { $t } from "@/plugins/i18n";
import headShotUrl from "@/assets/lyc-picture.PNG";
import ImageInstance from "@/components/ImageInstance.vue";
import { useLangStore } from "@/stores/lang";
import { LANG_TYPE as TYPE } from "@/plugins/i18n";

// 初始狀態槽
const store = useLangStore();
</script>

<style scoped lang="scss">
.page-about {
  .lyc-paragraph {
    background-color: $color-white;
    border-color: $color-background-4;
    white-space: pre-wrap;
    padding: 16px 24px;
  }

  &__picture {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  &__head-shot {
    width: 240px;
    height: 240px;
    border-radius: 100%;
    overflow: hidden;
    & > img {
      height: 100%;
    }
  }
}
</style>
