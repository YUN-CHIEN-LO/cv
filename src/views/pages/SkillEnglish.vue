<template>
    <div>
        <lyc-row>
            <lyc-column flex="1">
                <p>{{ $t("skill.toefl") }}</p>
            </lyc-column>
            <lyc-column min-width="300px" flex="2">
                <ScoreBar :max="120" :score="95" />
            </lyc-column>
        </lyc-row>
        <lyc-row>
            <lyc-column flex="1">
                <p>{{ $t("skill.toeic") }}</p>
            </lyc-column>
            <lyc-column min-width="300px" flex="2">
                <ScoreBar :max="990" :score="935" />
            </lyc-column>
        </lyc-row>
    </div>
</template>

<script setup lang="ts">
import { $t } from "@/plugins/i18n";
import ScoreBar from "@/components/ScoreBar.vue"

</script>

<style lang="scss" scoped>
.lyc-column {
    & > p {
        text-align: right;
        height: 32px;
        line-height: 32px;
        margin: 0;
        font-weight: bold;
    }
}
</style>