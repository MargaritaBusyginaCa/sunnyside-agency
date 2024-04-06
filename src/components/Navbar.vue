<script setup>
import { useI18n } from "vue-i18n";
import logo from "/images/logo.svg";
const { t, locale } = useI18n();
const myGitHub = "https://github.com/MargaritaBusyginaCa";
function changeLocale() {
  locale.value = locale.value === "en" ? "fr" : "en";
}
</script>

<template>
  <nav>
    <div class="logo">
      <img :src="logo" alt="sunny side logo" />
    </div>
    <div class="links">
      <a :href="myGitHub" target="_blank">{{ t("nav.about") }}</a>
      <a :href="myGitHub" target="_blank">{{ t("nav.services") }}</a>
      <a :href="myGitHub" target="_blank">{{ t("nav.projects") }}</a>
      <button @click="changeLocale">{{ t("nav.change_lang") }}</button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
nav {
  position: absolute;
  top: 0;
  display: flex;
  width: calc(100% - 80px);
  justify-content: space-between;
  padding: 34px 40px;
  align-items: baseline;
  .links {
    display: flex;
    align-items: baseline;
    gap: 47px;
    a {
      text-decoration: none;
      color: $white;
      font-size: 18px;
      font-family: $font_secondary;
      letter-spacing: -0.13px;
    }
    button {
      background-color: $white;
      font-family: $font_primary;
      font-weight: $primary_font_weight;
      font-size: 15px;
      border: none;
      padding: 16px 32px;
      border-radius: 28px;
      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }
}
</style>
