<template>
    <div>
        <lyc-row v-if="!isLoading">
            <a v-for="project in projects" :key="project.id" class="project" :href="project.url" target="”_blank”">
                <img :src="project.img" :alt="project.title.en" />
            </a>
        </lyc-row>
    </div>
</template>

<script setup lang="ts">
import api from "@/api";
import { storeToRefs } from "pinia";
import { ref, reactive, computed, watch, onMounted } from "vue";
import { useLangStore } from "@/stores/lang";

// 初始狀態槽
const store = useLangStore();
// 當前語言
const { currentLang } = storeToRefs(store);

let projects = reactive([] as ProjectType[]);
const lang = computed((): string => {
    return currentLang.value.split("-")[0] as keyof LangVariantType;
});

const isLoading = ref(true as boolean);


async function listProjects() {
    isLoading.value = true;
    const response = (await api.listProjects()) as ResponseInterface;
    projects = response.data;
    isLoading.value = false;
}

watch(currentLang, () => {
    listProjects();
});

onMounted(() => {
    listProjects();
});


</script>

<style lang="scss" scoped>
.project {
    & img {
        width: 100%;
    }
}

@include mobile-device() {
    .project {
        width: 100%;
    }
}

@include tablet-device() {
    .project {
        width: 50%;
    }
}
@include tablet-device() {
    .project {
        width: 30%;
    }
}
</style>