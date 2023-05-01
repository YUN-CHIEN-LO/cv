<template>
  <lyc-row>
    <lyc-column :flex="2">
      <lyc-header style="margin: 0px">
        {{ $t("basic.name") }}
      </lyc-header>
      <lyc-header type="h3">
        {{ $t("basic.name.lang") }}
      </lyc-header>
      <lyc-paragraph style="padding: 0px" type="quote">
        <lyc-list>
          <lyc-list-item>
            {{ $t("basic.email") }}
          </lyc-list-item>
          <lyc-list-item>
            {{ $t("basic.location") }}
          </lyc-list-item>
          <lyc-list-item>
            {{ $t("basic.birth") }}
          </lyc-list-item>
        </lyc-list>
      </lyc-paragraph>
    </lyc-column>
    <lyc-column min-width="300px">
      <img style="width: 100%" src="@/assets/lyc-picture.png" alt="LYC picture" />
    </lyc-column>
  </lyc-row>
</template>
