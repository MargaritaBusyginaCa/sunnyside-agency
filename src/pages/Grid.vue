<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const myGitHub = "https://github.com/MargaritaBusyginaCa";
</script>

<template>
  <div class="with-text transform">
    <h2>{{ t("grid.transform_title") }}</h2>
    <p>{{ t("grid.transform_text") }}</p>
    <div class="link">
      <a :href="myGitHub" target="_blank">{{ t("learn_more") }}</a>
      <div class="underline yellow"></div>
    </div>
  </div>
  <div class="image-background transform"></div>

  <div class="image-background stand-out"></div>
  <div class="with-text stand-out">
    <h2>{{ t("grid.stand_out_title") }}</h2>
    <p>{{ t("grid.stand_out_text") }}</p>
    <div class="link">
      <a :href="myGitHub" target="_blank">{{ t("learn_more") }}</a>
      <div class="underline coral"></div>
    </div>
  </div>

  <div class="image-background graphic-design">
    <h3>{{ t("grid.graphic_title") }}</h3>
    <p>{{ t("grid.graphic_text") }}</p>
  </div>
  <div class="image-background photography">
    <h3>{{ t("grid.photo_title") }}</h3>
    <p>{{ t("grid.photo_text") }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

img {
  width: 100%;
  height: 100%;
}
.with-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  padding: 100px;
  h2 {
    font-size: 40px;
    letter-spacing: -0.29px;
    margin: 0;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    font-family: $font_secondary;
    color: $dark_grey_blue;
  }
  .link {
    width: fit-content;
    position: relative;
    a {
      text-transform: uppercase;
      text-decoration: none;
      color: black;
      font-size: 15px;
      letter-spacing: 1px;
      font-weight: $primary_font_weight;
    }
    .underline {
      position: absolute;
      height: 10px;
      width: 100%;
      bottom: -1px;
      left: -3px;
      z-index: -1;
      border-radius: 10px;
      opacity: 0.3;

      &.yellow {
        background-color: $yellow;
      }
      &.coral {
        background-color: $red;
      }
    }
    &:hover .underline {
      opacity: 1;
    }
  }
}
.image-background {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-position: center;
  background-size: cover;
  color: $dark_cyan;
  h3 {
    font-size: 28px;
  }
  p {
    text-align: center;
    width: 50%;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: -0.11px;
    margin-bottom: 100px;
  }
  &.transform {
    background-image: url("/images/desktop/image-transform.jpg");
  }
  &.stand-out {
    background-image: url("/images/desktop/image-stand-out.jpg");
  }
  &.graphic-design {
    background-image: url("/images/desktop/image-graphic-design.jpg");
  }
  &.photography {
    background-image: url("/images/desktop/image-photography.jpg");
  }
}

@media (max-width: 1140px) {
  .with-text {
    padding: 0 40px;
    gap: 10px;
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 18px;
    }
  }
}
@media (max-width: 785px) {
  .image-background {
    height: 500px;
    p {
      width: 90%;
      margin: 0 0 40px 0;
    }
  }
  .with-text {
    text-align: center;
    padding: 50px;
  }
  .image-background.transform {
    order: 1;
  }
  .with-text.transform {
    order: 2;
  }
  .image-background.stand-out {
    order: 3;
  }
  .with-text.stand-out {
    order: 4;
  }
  .image-background.graphic-design {
    order: 5;
  }
  .image-background.photography {
    order: 6;
  }
}
</style>
