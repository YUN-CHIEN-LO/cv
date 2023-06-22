<template>
  <div
    class="image-instance img absolute"
    :style="{ ...props, transform: `rotate(${props.rotate})` }"
  >
    <img :src="getUrl()" :alt="props.image" />
  </div>
</template>

<script setup lang="ts">
import leafSm1Url from "@/assets/leaf-sm-1.PNG";
import leafSm2Url from "@/assets/leaf-sm-2.PNG";
import leafSm3Url from "@/assets/leaf-sm-3.PNG";
import leafSm4Url from "@/assets/leaf-sm-4.PNG";
import leaf1Url from "@/assets/leaf-1.PNG";
import leaf2Url from "@/assets/leaf-2.PNG";
import leaf3Url from "@/assets/leaf-3.PNG";
import leaf4Url from "@/assets/leaf-4.PNG";
import fish1Url from "@/assets/fish-1.GIF";
import fish2Url from "@/assets/fish-2.GIF";
import fish3Url from "@/assets/fish-3.GIF";
import fish4Url from "@/assets/fish-4.GIF";

const props = defineProps({
  width: {
    type: String,
    default: "30px",
  },
  minWidth: {
    type: String,
    default: "auto",
  },
  rotate: {
    type: String,
    default: "0deg",
  },
  top: {
    type: String,
    default: "auto",
  },
  left: {
    type: String,
    default: "auto",
  },
  right: {
    type: String,
    default: "auto",
  },
  bottom: {
    type: String,
    default: "auto",
  },
  image: {
    type: String,
    default: "leaf-sm-1",
  },
});

const getUrl = () => {
  switch (props.image) {
    case "leaf-sm-1":
      return leafSm1Url;
    case "leaf-sm-2":
      return leafSm2Url;
    case "leaf-sm-3":
      return leafSm3Url;
    case "leaf-sm-4":
      return leafSm4Url;
    case "leaf-1":
      return leaf1Url;
    case "leaf-2":
      return leaf2Url;
    case "leaf-3":
      return leaf3Url;
    case "leaf-4":
      return leaf4Url;
    case "fish-1":
      return fish1Url;
    case "fish-2":
      return fish2Url;
    case "fish-3":
      return fish3Url;
    case "fish-4":
      return fish4Url;
    default:
      return leafSm1Url;
  }
};
</script>

<style scoped lang="scss">
.absolute {
  position: absolute;
  transform: translate(-50%, -50%);
}
.img {
  transform-origin: center center;
  @include setTransition(opacity 0.3s 0.1s ease-in-out);
  & > img {
    width: 100%;
    @include setTransition(transform 0.3s 0.1s ease-in-out);
  }
}
</style>
