<template>
  <div class="about">
    <div class="about-background">
      <div class="spot-light"></div>
      <div class="spot-light spot-light--2"></div>
      <ImageInstance image="leaf-1" width="50vh" />
      <ImageInstance image="leaf-2" width="30vh" rotate="-45deg" />
      <ImageInstance image="leaf-3" width="40vh" rotate="90deg" />
      <ImageInstance image="leaf-4" width="50vh" rotate="90deg" />
    </div>

    <lyc-main>
      <lyc-article>
        <lyc-header class="about-title">
          <div>
            <span>{{ $t("summary.about") }}</span>
            <ImageInstance image="leaf-4" width="10vh" left="110%" top="-1vh" />
          </div>
        </lyc-header>
        <div class="about-section">
          {{ $t("summary.a") }}
        </div>
        <div class="about-section">
          畢業後我從事程式開發的工作，其中我擁有兩年的網頁系統前端工程師經驗
          (Vue)，並且很快的在團隊中擔任重要的開發成員。我從 BPM
          專案啟動一直到第一階段產品上線，都積極參與規劃與開發，大約完成 70%
          的專案內容，期間我的專業技術與團隊協作能力大幅的成長與成熟，並在後續的開發時間提供其他團隊成員程式設計建議與方向。
        </div>
        <div class="about-section">
          在團隊中的我十分注重開發的協作性，其中包括：
          <lyc-list>
            <lyc-list-item>實作方法的事前規劃</lyc-list-item>
            <lyc-list-item>準確的估工估時</lyc-list-item>
            <lyc-list-item>程式碼邏輯的清楚與注釋的嚴謹</lyc-list-item>
            <lyc-list-item>適當使用版本控制與協作輔助工具</lyc-list-item>
            <lyc-list-item
              >清楚的溝通，我習慣使用條列和圖像的方式來向其他同事溝通我的想法</lyc-list-item
            >
          </lyc-list>
        </div>
        <div class="about-section">
          身為一個軟體工程師，我具備以下的條件：
          <lyc-list>
            <lyc-list-item>邏輯清晰，可以設計清楚的資料結構與演算法</lyc-list-item>
            <lyc-list-item>
              善用 functional programming 概念與元件拆分邏輯，並且能規劃並實作複雜的 UX 功能
            </lyc-list-item>
            <lyc-list-item> 可以設計與管理專案架構與撰寫清楚的開發紀錄文件 </lyc-list-item>
            <lyc-list-item>
              評估開發可行性與研發新功能和維護遺產程式碼與更新舊有技術
            </lyc-list-item>
            <lyc-list-item> 主動、積極，並且善用資源來提出解決方案</lyc-list-item>
            <lyc-list-item> 關注當前科技發展趨勢，並且勇於學習與挑戰新技術</lyc-list-item>
          </lyc-list>
        </div>
      </lyc-article>
    </lyc-main>
  </div>
</template>

<script setup lang="ts">
import ImageInstance from "@/views/home/components/ImageInstance.vue";
</script>

<style lang="scss" scoped>
.about-background {
  position: absolute;
  top: 0;
  left: 0vw;
  & > .image-instance {
    position: relative !important;
    margin-bottom: -5vw;
  }
  .spot-light {
    position: absolute;
    transform: translate(-50%, -50%);
    bottom: 0%;
    right: -200%;
    width: 600px;
    height: 600px;
    background-color: $color-background-3;
    border-radius: 100%;
    box-shadow: 0px 0px 100px 100px $color-background-3;
    opacity: 0.5;
    &--2 {
      width: 400px;
      height: 400px;
      bottom: 20%;
      right: -100%;
      background-color: $color-background-2;
      box-shadow: 0px 0px 80px 80px $color-background-2;
    }
  }
}
.lyc-article {
  z-index: 200;
}

.about-section {
  min-width: 300px;
  width: 80%;
  margin: 0px auto;
  border: solid 3px $color-background-3;
  background-color: $color-white;
  padding: 16px;
  margin-bottom: 16px;
}
.about {
  position: relative;
}
.about-title {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    position: relative;
    & > span {
      z-index: 100;
      font-size: 48px;
    }
  }
}
</style>
