<template>
  <div class="page-landing" ref="main">
    <div class="desktop-background">
      <ImageInstance
        v-for="image in desktopBackgroundImages"
        class="leaf"
        :key="image.id"
        v-bind="image"
      />
    </div>
    <div class="ripple ripple--1"></div>

    <div class="background">
      <ImageInstance v-for="image in backgroundImages.slice(0, 2)" :key="image.id" v-bind="image" />
      <div class="fish fish--1">
        <ImageInstance image="fish-1" width="45px" bottom="0" rotate="-45deg" />
      </div>
      <ImageInstance v-for="image in backgroundImages.slice(2, 4)" :key="image.id" v-bind="image" />
      <div class="fish fish--2">
        <ImageInstance image="fish-2" width="45px" bottom="0" rotate="45deg" />
      </div>
    </div>
    <div class="spotlight spotlight--background"></div>
    <div class="middle-ground">
      <div class="fish fish--4">
        <ImageInstance image="fish-4" width="45px" bottom="0" rotate="45deg" />
      </div>
      <ImageInstance
        v-for="image in middleGroundImages"
        class="leaf"
        :key="image.id"
        v-bind="image"
      />
      <div class="ripple ripple--2"></div>
    </div>
    <div class="fish fish--3">
      <ImageInstance image="fish-3" width="60px" bottom="0" rotate="-45deg" />
    </div>
    <div class="ripple ripple--3"></div>
    <div class="spotlight"></div>
    <div class="foreground">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { uniqueId } from "lodash";
import { ImageInstanceType, default as ImageInstance } from "@/components/ImageInstance.vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const desktopBackgroundImages = [
  {
    id: uniqueId(),
    image: "leaf-1",
    width: "30vw",
    minWidth: "300px",
    top: "-100px",
    left: "20vw",
    rotate: "-12deg",
  },
  {
    id: uniqueId(),
    image: "leaf-2",
    width: "30vw",
    minWidth: "200px",
    top: "-100px",
    right: "10vw",
    rotate: "45deg",
  },
  {
    id: uniqueId(),
    image: "leaf-3",
    width: "30vw",
    minWidth: "300px",
    top: "50vh",
    right: "0vw",
    rotate: "-12deg",
  },
  {
    id: uniqueId(),
    image: "leaf-4",
    width: "30vw",
    minWidth: "240px",
    top: "50vh",
    left: "0vw",
    rotate: "-12deg",
  },
  {
    id: uniqueId(),
    image: "leaf-1",
    width: "30vw",
    minWidth: "240px",
    bottom: "50vh",
    left: "0vw",
    rotate: "-37deg",
  },
  {
    id: uniqueId(),
    image: "leaf-3",
    width: "30vw",
    minWidth: "240px",
    bottom: "-10vh",
    right: "30vw",
    rotate: "-37deg",
  },
  {
    id: uniqueId(),
    image: "leaf-1",
    width: "30vw",
    minWidth: "240px",
    top: "30vh",
    right: "-100px",
    rotate: "37deg",
  },
];

const backgroundImages = [
  {
    id: uniqueId(),
    image: "leaves-group-4",
    width: "30vw",
    minWidth: "300px",
    top: "-5vw",
    right: "-10vh",
    rotate: "-35deg",
  },
  {
    id: uniqueId(),
    image: "leaves-group-2",
    width: "40vw",
    minWidth: "360px",
    bottom: "-10vw",
    left: "-10vh",
    rotate: "100deg",
  },
  {
    id: uniqueId(),
    image: "leaves-group-1",
    width: "40vw",
    minWidth: "300px",
    top: "-10vh",
    left: "-10vh",
  },
  {
    id: uniqueId(),
    image: "leaves-group-3",
    width: "36vw",
    minWidth: "380px",
    bottom: "-10vh",
    right: "-10vh",
  },
] as ImageInstanceType[];

const middleGroundImages = [
  {
    id: uniqueId(),
    image: "leaf-3",
    width: "20vw",
    minWidth: "200px",
    left: "45%",
    top: "-3vh",
  },
  {
    id: uniqueId(),
    image: "leaf-1",
    width: "10vw",
    minWidth: "150px",
    left: "70%",
    top: "24%",
  },
  {
    id: uniqueId(),
    image: "leaf-4",
    width: "8vw",
    minWidth: "190px",
    left: "60%",
    rotate: "45deg",
  },
  {
    id: uniqueId(),
    image: "leaf-2",
    width: "10vw",
    minWidth: "120px",
    left: "30%",
    rotate: "45deg",
  },
  {
    id: uniqueId(),
    image: "leaf-2",
    width: "10vw",
    minWidth: "120px",
    right: "30%",
    rotate: "-45deg",
    bottom: "0px",
  },
  {
    id: uniqueId(),
    image: "leaf-1",
    width: "20vw",
    minWidth: "200px",
    right: "45%",
    bottom: "-3vh",
  },
  {
    id: uniqueId(),
    image: "leaf-4",
    width: "10vw",
    minWidth: "150px",
    right: "70%",
    bottom: "18%",
    rotate: "-35deg",
  },
  {
    id: uniqueId(),
    image: "leaf-3",
    width: "8vw",
    minWidth: "190px",
    right: "60%",
    rotate: "45deg",
    bottom: "0px",
  },
] as ImageInstanceType[];

const main = ref();
let ctx;

const getRandomSign = (num: number): number => num * (Math.random() < 0.5 ? -1 : 1);

onMounted(() => {
  ctx = gsap.context((self) => {
    const allLeaves = self.selector(".leaf");
    allLeaves.forEach((leaf: HTMLElement | null) => {
      gsap.to(leaf, {
        scale: 1 + getRandomSign(0.2),
        rotate: getRandomSign(Math.floor(Math.random() * 31) + 50),
        translateY: "60%",
        scrollTrigger: {
          trigger: main.value,
          start: "top",
          end: "+=150%",
          scrub: true,
        },
      });
    });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<style lang="scss" scoped>
.page-landing {
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: $color-background-3;

  & .leaf {
    &:nth-child(odd) {
      :deep() {
        img {
          animation: rotate-float 70s -2s linear infinite;
        }
      }
    }
    &:nth-child(even) {
      :deep() {
        img {
          animation: rotate-float 70s -2s linear infinite reverse;
        }
      }
    }
  }

  & .fish {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;
    &--1 {
      height: 300px;
      animation: rotate-float 11s -2s linear infinite;
    }
    &--2 {
      min-height: 200px;
      height: 30vw;
      animation: rotate-float 10s -4s linear infinite reverse;
    }
    &--3 {
      min-height: 280px;
      height: 45vw;
      animation: rotate-float 20s -1s linear infinite;
    }
    &--4 {
      min-height: 240px;
      height: 33vw;
      animation: rotate-float 14s linear -3s infinite reverse;
    }
  }

  & .ripple {
    @include setPositionAbs();
    &::before,
    &::after {
      content: "";
      @include setPositionAbs();
      width: 80%;
      height: 80%;
      border-radius: 100%;
      border: solid 2px $color-white;
      animation: ripple 3s -1s linear infinite;
    }
    &::after {
      width: 20%;
      height: 20%;
      border-radius: 100%;
      border: solid 2px $color-white;
      animation: ripple 4s -2s linear infinite;
    }
    &--1 {
      top: 30%;
      left: 30%;
      width: 100px;
      height: 100px;
      &::before {
        animation-duration: 5s;
        animation-delay: -2s;
      }
    }
    &--2 {
      top: 10%;
      right: 30%;
      width: 200px;
      height: 200px;
      transform: rotate(-100deg);
      &::after {
        animation-duration: 5s;
        animation-delay: -2s;
      }
    }
    &--3 {
      top: 70%;
      left: 10%;
      width: 120px;
      height: 120px;
      transform: rotate(30deg);
    }
  }
  & > .spotlight {
    @include setPositionAbs();
    top: 50%;
    left: 50%;
    min-width: 100px;
    min-height: 100px;
    width: 30vh;
    height: 30vh;
    background-color: $color-background-2;
    border-radius: 100%;
    @include shadow(0px 0px 100px 100px $color-background-2);
    opacity: 0.3;
    &--background {
      min-width: 500px;
      min-height: 500px;
      width: 80vh;
      height: 80vh;
    }
  }
  & > .background {
    opacity: 0.8;
  }

  & > .desktop-background {
    opacity: 0;
    @include setTransition(opacity 0.3s ease-in-out);
  }

  & > .middle-ground {
    @include setTransition(opacity 0.3s ease-in-out);
  }

  & > .foreground {
    @include setPositionAbs();
    min-width: 300px;
    width: 30vw;
  }
}

@include mobile-device() {
  .page-landing {
    & .middle-ground {
      opacity: 0;
    }
    & .spotlight {
      @include shadow(0px 0px 50px 50px $color-background-2);
    }
    & .spotlight--background {
      opacity: 0;
    }
  }
}
@include large-device() {
  .page-landing {
    & .spotlight--background {
      opacity: 0.3;
    }
    & .desktop-background {
      opacity: 0.6;
    }
  }
}
@include desktop-device() {
  .page-landing {
    & .middle-ground {
      opacity: 1;
    }
  }
}
</style>
