<template>
  <div class="page-experience">
    <lyc-paragraph type="block">
      <div class="job-info">
        <h3>{{ $t("experience.seniority.title") }}</h3>
        <p>{{ $t("experience.seniority.value") }}</p>
      </div>
      <div class="job-info">
        <h3>{{ $t("experience.accumulate.title") }}</h3>
        <p>{{ $t("experience.accumulate.value") }}</p>
      </div>
    </lyc-paragraph>

    <transition name="fade" mode="out-in">
      <lyc-timeline v-if="!isLoading" :data="work" direction="left">
        <template #dot="{ index }">
          <div style="position: relative">
            <ImageInstance :image="`leaf-${(index % 4) + 1}`" :rotate="`${index * 3}deg`" width="100px" top="-25px"
              left="-70px" />
          </div>
        </template>
        <template #content="{ item }">
          <lyc-card shadow>
            <template #title>
              <div class="job-header">
                <div class="job-header__title">
                  <span class="bold">{{ item.title[lang] }}</span>
                  <span style="margin: 0px 8px"> / </span>
                  <span> {{ item.company[lang] }} </span>
                </div>
                <div class="job-header__date">{{ item.date.join(" ~ ") }}</div>
              </div>
            </template>
            <div>
              <div v-for="tag in item.tags" :key="tag.id" :class="['job-tag', { [`is-${tag.type}`]: true }]">
                {{ tag.label[lang] }}
              </div>
              <p class="job-description">{{ item.description[lang] }}</p>
            </div>
            <div class="job-tools">{{ item.tools }}</div>
            <div class="job-more">
              <lyc-list numbered>
                <lyc-list-item v-for="(more, index) in item.more?.list" :key="index">
                  {{ more[lang] }}
                  <lyc-list v-if="more.list">
                    <lyc-list-item v-for="(submore, indexSub) in more.list[lang]" :key="indexSub">
                      {{ submore }}
                    </lyc-list-item>
                  </lyc-list>
                </lyc-list-item>
              </lyc-list>
              <a v-if="item.more?.link" :href="item.more.link.link" target="”_blank”"> {{ item.more.link[lang] }} </a>
              <div v-if="item.more?.img" class="job-image">
                <img :src="item.more.img" :alt="item.id" />
              </div>
            </div>
          </lyc-card>
        </template>
      </lyc-timeline>
      <lyc-card :header="false" :shadow="false" class="is-loading-card" v-else="isLoading">
        <div class="is-loading-content">
          <div class="loading">
            <div class="dot dot--1"></div>
            <div class="dot dot--2"></div>
            <div class="dot dot--3"></div>
          </div>
          <div class="fish">
            <ImageInstance image="fish-3" width="45px" bottom="0" rotate="-45deg" />
          </div>
        </div>
      </lyc-card>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { $t } from "@/plugins/i18n";
import api from "@/api";
import { storeToRefs } from "pinia";
import { ref, reactive, computed, watch, onMounted } from "vue";
import ImageInstance from "@/components/ImageInstance.vue";
import { useLangStore } from "@/stores/lang";

// 初始狀態槽
const store = useLangStore();
// 當前語言
const { currentLang } = storeToRefs(store);

let work = reactive([] as JobType[]);
const lang = computed(() => {
  return currentLang.value.split("-")[0] as keyof LangVariantType;
});

const isLoading = ref(true as boolean);

async function listJobs() {
  isLoading.value = true;
  const response = (await api.listJobs()) as ResponseInterface;
  work = response.data;
  isLoading.value = false;
}


watch(currentLang, () => {
  listJobs();
});

onMounted(() => {
  listJobs();
});
</script>

<style scoped lang="scss">
.lyc-card:deep() {
  max-width: 800px;
  width: calc(100vw - 32px);
  background-color: $color-white;
  border-color: $color-background-2;

  .lyc-card__header {
    border-color: $color-background-2 !important;
  }
}



.lyc-button.is-primary {
  background-color: $color-background-2;
}

@include mobile-device {
  .lyc-timeline {
    padding: 0px;
  }
}

@include desktop-device {
  .lyc-timeline {
    padding: 16px;
  }
}

.job-tools {
  border-top: solid 3px $color-background-2;
  border-bottom: solid 3px $color-background-2;
  padding: 8px 0px;
  font-weight: bold;
  font-size: 16px;
}

.job-image {
  width: 100%;

  &>img {
    width: 100%;
  }
}

.job-tag {
  display: inline-block;
  padding: 4px 16px;
  border-radius: 16px;
  margin-right: 8px;
  margin-bottom: 8px;
  color: #fff;

  &.is-full-time {
    background-color: $color-red;
  }

  &.is-part-time {
    background-color: $color-yellow;
  }

  &.is-code {
    background-color: $color-blue;
  }

  &.is-other {
    background-color: $color-gray;
  }

  &.is-design {
    background-color: $color-purple;
  }
}

.job-header {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  &__title {
    flex: 4;
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;

    & span {
      white-space: nowrap;
    }
  }

  &__date {
    flex-shrink: 0;
    flex: 1;
    text-align: right;
    min-width: 200px;
  }
}

.job-description {
  white-space: pre-wrap;
  margin-top: 0;
}

.page-experience {
  display: flex;
  align-items: center;
  flex-direction: column;

  .lyc-paragraph {
    max-width: 816px;
    width: calc(100vw - 16px);
    background-color: $color-white;
    border-color: $color-background-2;
    white-space: pre-wrap;
    padding: 16px 24px;
    margin-bottom: 16px;

    & .job-info {
      display: flex;

      & h3 {
        font-weight: bold;
        flex-shrink: 0;
        min-width: 100px;
        width: 30%;
        margin-right: 8px;
      }
    }
  }
}

.is-loading-card {
  background-color: transparent;
}

.is-loading-content {
  width: 300px;
  height: 300px;
  margin: 0px auto;
  position: relative;

  & .fish {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;
    height: 150px;
    animation: rotate-float 5s -2s linear infinite;
  }

  & .loading {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .dot {
      width: 0px;
      height: 0px;
      margin: 0px 10px;
      transform: translate(-30px, -30px);
      border-radius: 100%;
      background-color: transparent;
      position: relative;

      &::before,
      &::after {
        content: "";
        @include setPositionAbs();
        width: 60px;
        height: 60px;
        border-radius: 100%;
        border: solid 2px $color-white;
        animation: ripple 3s -1s linear infinite;
      }

      &--1 {
        &::before {
          animation-duration: 6s;
          animation-delay: -4s;
        }

        &::after {
          animation-duration: 7s;
          animation-delay: -2s;
        }
      }

      &--2 {
        &::before {
          animation-duration: 5s;
          animation-delay: -3s;
        }

        &::after {
          animation-duration: 6s;
          animation-delay: -2s;
        }
      }

      &--3 {
        &::before {
          animation-duration: 7s;
          animation-delay: -2s;
        }

        &::after {
          animation-duration: 5s;
          animation-delay: -3s;
        }
      }
    }
  }

}</style>
