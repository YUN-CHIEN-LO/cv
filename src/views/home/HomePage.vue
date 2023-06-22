<script setup lang="ts">
import signatureUrl from "@/assets/signature.PNG";
import ImageInstance from "@/views/home/components/ImageInstance.vue";
</script>

<template>
  <div class="home">
    <div class="back-ground">
      <ImageInstance image="leaf-1" width="18vw" top="-9%" right="-20%" />
      <ImageInstance
        image="leaf-3"
        min-width="180px"
        width="22vw"
        top="0%"
        right="0%"
        rotate="-90deg"
      />
      <ImageInstance image="leaf-3" width="22vw" top="-20%" right="0%" rotate="-90deg" />
      <ImageInstance
        image="leaf-4"
        width="32vw"
        min-width="200px"
        top="10px"
        left="-10vw"
        rotate="30deg"
      />
      <ImageInstance image="leaf-3" width="34vw" bottom="10px" left="24px" rotate="30deg" />
      <ImageInstance image="leaf-1" width="26vw" top="-10px" left="-10px" />
      <ImageInstance
        image="leaf-2"
        width="28vw"
        min-width="220px"
        bottom="-4vh"
        right="-4vw"
        rotate="90deg"
      />
      <ImageInstance image="leaf-3" width="18vw" top="5%" left="17%" rotate="-8deg" />
      <ImageInstance image="leaf-1" width="30vw" min-width="230px" bottom="-100px" left="-100px" />
      <div class="fish fish--4">
        <ImageInstance
          class="desktop-only"
          image="fish-4"
          width="50px"
          bottom="0px"
          rotate="-45deg"
        />
      </div>
      <ImageInstance image="leaf-4" width="24vw" min-width="120px" bottom="-12vw" right="30%" />
      <ImageInstance image="leaf-1" width="32vw" top="-102px" right="30%" />
    </div>
    <div class="middle-ground">
      <div class="fish fish--2">
        <ImageInstance image="fish-2" width="48px" bottom="0px" rotate="45deg" />
      </div>
      <ImageInstance image="leaf-3" width="23vw" top="-12%" right="50%" rotate="12deg" />
      <div class="fish fish--1">
        <ImageInstance image="fish-1" width="50px" bottom="0px" rotate="-45deg" />
      </div>
      <div class="fish fish--3">
        <ImageInstance image="fish-3" width="36px" bottom="0px" rotate="45deg" />
      </div>
      <ImageInstance image="leaf-3" width="24vw" min-width="150px" bottom="100px" right="10vw" />
      <ImageInstance class="desktop-only" image="leaf-1" width="20vw" bottom="0vh" right="25vw" />
      <ImageInstance image="leaf-3" width="134px" top="100px" left="10vw" rotate="27deg" />
      <ImageInstance
        class="desktop-only"
        image="leaf-2"
        width="13vw"
        bottom="80px"
        left="40vw"
        rotate="27deg"
      />
      <div class="spot-light"></div>
    </div>
    <div class="fore-ground">
      <ImageInstance image="leaf-4" width="16vw" top="50%" left="-10px" rotate="-30deg" />
      <ImageInstance image="leaf-4" width="12vw" top="30%" right="-10px" rotate="-90deg" />
      <ImageInstance
        image="leaf-1"
        width="13vw"
        min-width="80px"
        bottom="10vh"
        left="5vw"
        rotate="30deg"
      />
      <ImageInstance
        class="desktop-only"
        image="leaf-3"
        width="8vw"
        top="20vh"
        left="30vw"
        rotate="73deg"
      />
      <ImageInstance
        image="leaf-1"
        width="9vw"
        min-width="60px"
        top="10vh"
        right="30vw"
        rotate="63deg"
      />
      <ImageInstance class="desktop-only" image="leaf-sm-1" width="3vw" top="30vh" right="33vw" />
      <ImageInstance class="desktop-only" image="leaf-sm-3" width="6vw" bottom="29vh" left="27vw" />
      <ImageInstance image="leaf-sm-2" width="8vw" bottom="7vh" right="18vw" />
      <ImageInstance class="desktop-only" image="leaf-sm-4" width="4vw" top="24vh" right="18vw" />
      <ImageInstance class="desktop-only" image="leaf-sm-1" width="4vw" top="24vh" left="10vw" />
      <ImageInstance image="leaf-sm-2" width="5vw" top="50vh" left="5vw" rotate="-42deg" />
    </div>
    <div class="img signature">
      <lyc-header type="h3"> {{ $t("basic.portfolio") }} </lyc-header>
      <img :src="signatureUrl" alt="YUN-CHIEN-LO" />
      <lyc-header type="h3"> {{ $t("basic.title") }} </lyc-header>
    </div>
    <div class="footer">
      <div>{{ $t("basic.location") }}</div>
      <div>{{ $t("basic.email") }}</div>
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
  background-color: $color-background-3;
  display: flex;
  justify-content: center;
  align-items: center;
  @include shadow(10px 0px 150px 100px $color-background-3);
  margin-bottom: 30vh;
}
.signature {
  z-index: 1000;
  margin-top: -60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    min-width: 300px;
    width: 30vw;
    max-width: 600px;
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

@include keyframes(swim) {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.footer {
  z-index: 1000;
  position: absolute;
  bottom: 16px;
  right: 16px;
  padding: 16px 24px;
  box-sizing: border-box;
  min-width: 300px;
  background-color: $color-background-2;
  & > div {
    color: $color-white;
    text-align: right;
  }
}

@media only screen and (max-width: 450px) {
  .footer {
    width: calc(100% - 32px);
    & > div {
      text-align: center;
    }
  }
}
</style>
