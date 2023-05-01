<template>
    <div class="score-bar">
        <div class="score-bar__wrapper">
            <div class="score-bar__score" :style="{ width: `${props.score / props.max * 100}%` }">
                <div class="score-bar__score__color">
                    <p class="score-bar__score__number">{{ score }}</p>
                </div>
            </div>
        </div>
        <p class="score-bar__max">{{ max }}</p>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    max: {
        type: Number,
        default: 1,
    },
    score: {
        type: Number,
        default: 0,
    }
})
</script>

<style lang="scss" scoped>
.score-bar {
    width: 100%;
    display: flex;
    align-items: center;


    &__wrapper {
        flex: 1;
        height: 32px;
        background-color: #fff;
        border: solid 2px #fff;
        border-radius: 16px;
        overflow: hidden;
    }

    &__score {
        height: 100%;

        &__color {
            position: relative;
            height: 100%;
            width: 100%;
            background: linear-gradient(90deg, #6aee6f 0%, #fc6b5a 100%);
            animation: grow 0.8s ease-in-out;
        }

        &__number {
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
            margin: 0;
            color: #fff;
            font-weight: bold;
        }
    }

    &__max {
        margin: 0;
        margin-left: 16px;
    }
}

@include keyframes(grow) {
    0% {
        width: 50%;
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        width: 100%;
        opacity: 1;
    }
}</style>