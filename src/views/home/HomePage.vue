<script setup lang="ts">
import signatureUrl from "@/assets/signature.PNG";
import ImageInstance from "@/views/home/components/ImageInstance.vue";
</script>

<template>
  <div class="home">
    <div class="back-ground">
      <ImageInstance image="leaf-1" width="180px" top="-9%" right="-20%" />
      <ImageInstance image="leaf-3" width="220px" top="0%" right="0%" rotate="-90deg" />
      <ImageInstance image="leaf-3" width="220px" top="-20%" right="0%" rotate="-90deg" />
      <ImageInstance
        class="desktop-only"
        image="leaf-4"
        width="270px"
        top="10px"
        left="-10vw"
        rotate="30deg"
      />
      <ImageInstance image="leaf-3" width="270px" bottom="10px" left="24px" rotate="30deg" />
      <ImageInstance class="desktop-only" image="leaf-1" width="210px" top="-10px" left="-10px" />
      <ImageInstance class="desktop-only" image="leaf-2" width="240px" bottom="-4vh" right="-4vw" />
      <ImageInstance image="leaf-3" width="80px" top="5%" left="17%" rotate="-8deg" />
      <ImageInstance image="leaf-1" width="270px" bottom="-100px" left="-100px" />
      <div class="fish fish--4">
        <ImageInstance image="fish-4" width="50px" bottom="0px" rotate="-45deg" />
      </div>
      <ImageInstance
        class="desktop-only"
        image="leaf-4"
        width="270px"
        bottom="-120px"
        right="30%"
      />
      <ImageInstance class="desktop-only" image="leaf-1" width="270px" top="-102px" right="30%" />
    </div>
    <div class="middle-ground">
      <div class="fish fish--2">
        <ImageInstance image="fish-2" width="48px" bottom="0px" rotate="45deg" />
      </div>
      <ImageInstance
        class="desktop-only"
        image="leaf-3"
        width="180px"
        top="-12%"
        right="50%"
        rotate="12deg"
      />
      <div class="fish fish--1">
        <ImageInstance
          class="desktop-only"
          image="fish-1"
          width="50px"
          bottom="0px"
          rotate="-45deg"
        />
      </div>
      <div class="fish fish--3">
        <ImageInstance image="fish-3" width="36px" bottom="0px" rotate="45deg" />
      </div>
      <ImageInstance image="leaf-3" width="150px" bottom="100px" right="10vw" />
      <ImageInstance class="desktop-only" image="leaf-1" width="164px" bottom="0vh" right="25vw" />
      <ImageInstance image="leaf-3" width="134px" top="100px" left="10vw" rotate="27deg" />
      <ImageInstance
        class="desktop-only"
        image="leaf-2"
        width="134px"
        bottom="80px"
        left="40vw"
        rotate="27deg"
      />
      <div class="spot-light"></div>
    </div>
    <div class="fore-ground">
      <ImageInstance image="leaf-4" width="160px" top="50%" left="-10px" rotate="-30deg" />
      <ImageInstance image="leaf-4" width="120px" top="30%" right="-10px" rotate="-90deg" />
      <ImageInstance
        class="desktop-only"
        image="leaf-1"
        width="100px"
        bottom="10vh"
        left="5vw"
        rotate="30deg"
      />
      <ImageInstance
        class="desktop-only"
        image="leaf-3"
        width="78px"
        top="20vh"
        left="30vw"
        rotate="73deg"
      />
      <ImageInstance
        class="desktop-only"
        image="leaf-1"
        width="70px"
        top="10vh"
        right="30vw"
        rotate="63deg"
      />
      <ImageInstance class="desktop-only" image="leaf-sm-1" width="30px" top="30vh" right="33vw" />
      <ImageInstance
        class="desktop-only"
        image="leaf-sm-3"
        width="36px"
        bottom="29vh"
        left="27vw"
      />
      <ImageInstance
        class="desktop-only"
        image="leaf-sm-2"
        width="48px"
        bottom="24vh"
        right="18vw"
      />
      <ImageInstance class="desktop-only" image="leaf-sm-4" width="48px" top="24vh" right="18vw" />
      <ImageInstance image="leaf-sm-1" width="48px" top="24vh" left="10vw" />
      <ImageInstance image="leaf-sm-2" width="48px" top="50vh" left="5vw" rotate="-42deg" />
    </div>
    <div class="img signature">
      <lyc-header type="h3"> {{ $t("basic.portfolio") }} </lyc-header>
      <img :src="signatureUrl" alt="YUN-CHIEN-LO" />
      <lyc-header type="h3"> {{ $t("basic.title") }} </lyc-header>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.back-ground {
  opacity: 0.7;
}
.spot-light {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background-color: $color-background-2;
  border-radius: 100%;
  box-shadow: 0px 0px 100px 100px $color-background-2;
  opacity: 0.5;
}
.home {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background-color: $color-background;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signature {
  z-index: 2000;
  margin-top: -60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 300px;
  }
  & .lyc-header {
    color: $color-white;
    text-align: center;
    &.is-h2 {
      font-size: 24px;
    }
    &.is-h3 {
      font-size: 16px;
    }
  }
}
.fish {
  transform-origin: top left;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  &--1 {
    width: 10vw;
    height: 40vw;
    animation: swim 12s -7s infinite linear;
  }
  &--2 {
    width: 30vw;
    height: 50vw;
    animation: swim 17s -5s infinite linear reverse;
  }
  &--3 {
    width: 20vh;
    height: 20vh;
    animation: swim 10s infinite linear reverse;
  }
  &--4 {
    width: 50vw;
    height: 30vw;
    animation: swim 15s infinite linear;
  }
}

@media only screen and (max-width: 400px) {
  .desktop-only {
    opacity: 0;
  }
}

@include keyframes(swim) {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
