<template>
  <div class="page" ref="container">
    <lyc-main>
      <lyc-article>
        <lyc-header type="h3" underline>{{ $t("basic.title") }} </lyc-header>
        <lyc-row>
          <lyc-column :flex="1">
            <div class="page__head-shot">
            </div>
          </lyc-column>
          <lyc-column :flex="3">
            <lyc-paragraph type="quote">
              <p> {{ $t("basic.name") }} {{ $t("basic.nameLang") }} </p>
              <p> {{ $t("basic.birth") }} </p>
              <p> {{ $t("basic.location") }} </p>
              <p> {{ $t("basic.email") }} </p>
              <p> {{ $t("education.brief") }} </p>
            </lyc-paragraph>
          </lyc-column>

        </lyc-row>
      </lyc-article>
    </lyc-main>
  </div>
</template>

<script setup lang="ts">
import { $t } from "@/plugins/i18n";


</script>

<style lang="scss" scoped>
.page {
  background-color: #fff;
  margin-top: 60px;
  height: calc(100vh - 60px);
  overflow-x: hidden;
  overflow-y: auto;

  &__head-shot {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    overflow: hidden;

    &>img {
      height: 100%;
    }
  }
}
</style>
