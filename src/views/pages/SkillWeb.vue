<template>
    <div>
        <lyc-paragraph type="block">
            <div v-for="index in 8" :key="index" class="skill-item">
                <div class="skill-item__check">
                    <ImageInstance :image="`leaf-sm-${index % 4}`" />
                </div>
                <p>{{ $t(`skill.webList[${index - 1}]`) }}</p>
            </div>
        </lyc-paragraph>
        <lyc-paragraph type="block">
            <div v-for="index in 8" :key="index" class="skill-item">
                <div class="skill-item__check">
                    <ImageInstance :image="`leaf-sm-${index % 4}`" />
                </div>
                <p>{{ $t(`skill.otherList[${index - 1}]`) }}</p>
            </div>
        </lyc-paragraph>
    </div>
</template>

<script setup lang="ts">
import { $t } from "@/plugins/i18n";
import ImageInstance from "@/components/ImageInstance.vue";

</script>

<style lang="scss" scoped>
.lyc-paragraph {
    background-color: #fff;
    border-color: $color-background-4;
    white-space: pre-wrap;
    padding: 16px 24px;
}

.skill-item {
    display: flex;

    &__check {
        margin-top: 16px;
        margin-right: 8px;
        width: 30px;
        height: 30px;
        flex-shrink: 0;
        position: relative;
    }
}
</style>