<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import arrowDown from "/images/icon-arrow-down.svg";
</script>
<template>
  <div>
    <h1>{{ t("hero") }}</h1>
    <img :src="arrowDown" alt="arrow pointing down" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  gap: 50px;
  h1 {
    font-size: 56px;
    text-transform: uppercase;
    letter-spacing: 8.75px;
    color: $white;
    text-align: center;
  }
}
@media (max-width: 785px) {
  div {
    margin-top: 80px;
    img {
      height: 170px;
    }
  }
}
</style>
