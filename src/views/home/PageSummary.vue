<template>
  <div class="page-summary">
    <lyc-main>
      <lyc-article>
        <lyc-row>
          <lyc-column>
            <div class="page-summary__picture">
              <ImageInstance image="fish-3" width="45px" bottom="0px" right="20px" />
              <ImageInstance image="fish-2" width="36px" bottom="30px" right="60px" />
              <div class="page-summary__head-shot">
                <img src="/assets/lyc-picture.png" alt="YUN-CHIEN-LO" />
              </div>
            </div>
            <lyc-paragraph type="block">
              {{ $t("summary.a") }}
            </lyc-paragraph>
          </lyc-column>
          <lyc-column>
            <lyc-paragraph type="block">
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
      </lyc-article>
    </lyc-main>
  </div>
</template>

<script setup lang="ts">
import { $t } from "@/plugins/i18n";
import { useLangStore } from "@/stores/lang";
import { LANG_TYPE as TYPE } from "@/plugins/i18n";
import ImageInstance from "@/components/ImageInstance.vue";

// 初始狀態槽
const store = useLangStore();
</script>

<style scoped lang="scss">
.page-summary {
  & > .lyc-main > .lyc-article {
    padding-top: 240px;
    overflow: visible;
  }
  &__picture {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  &__head-shot {
    width: 300px;
    height: 300px;
    border-radius: 100%;
    overflow: hidden;
    margin-top: -60px;
    & > img {
      height: 100%;
    }
  }
  .lyc-paragraph {
    position: relative;
    min-width: 300px;
    z-index: 100;
    :deep(.lyc-paragraph__footnote) {
      color: $color-font;
    }
    &.is-block {
      background-color: #fff;
      border: none;
    }
  }
}
</style>
