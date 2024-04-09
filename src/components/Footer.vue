<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const myGitHub = "https://github.com/MargaritaBusyginaCa";
const socials = [
  "/images/icon-facebook.svg",
  "/images/icon-instagram.svg",
  "/images/icon-twitter.svg",
  "/images/icon-pinterest.svg",
];
</script>

<template>
  <footer>
    <div class="logo">
      <img src="/images/logo-footer.svg" alt="sunny side logo" />
    </div>
    <div class="links">
      <a :href="myGitHub" target="_blank">{{ t("nav.about") }}</a>
      <a :href="myGitHub" target="_blank">{{ t("nav.services") }}</a>
      <a :href="myGitHub" target="_blank">{{ t("nav.projects") }}</a>
    </div>
    <div class="socials">
      <a v-for="icon in socials" :key="icon" :href="myGitHub" target="_blank"
        ><img :src="icon" alt="social-media-icon" />
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
footer {
  padding: 72px 0;
  background-color: $cyan;
  display: flex;
  flex-direction: column;
  align-items: center;
  .links {
    padding: 40px 0 88px 0;
    display: flex;
    gap: 60px;
    a {
      text-decoration: none;
      color: $moderate_cyan;
      font-family: $font_secondary;
      &:hover {
        color: $white;
      }
    }
  }
  .socials {
    display: flex;
    gap: 28px;
    img:hover {
      cursor: pointer;
      filter: brightness(0) invert(1);
    }
  }
}
</style>
