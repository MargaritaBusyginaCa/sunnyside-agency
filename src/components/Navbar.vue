<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import logo from "/images/logo.svg";
import hamburger from "/images/icon-hamburger.svg";
const { t, locale } = useI18n();
const myGitHub = "https://github.com/MargaritaBusyginaCa";
const showMenu = ref(false);

function changeLocale() {
  locale.value = locale.value === "en" ? "fr" : "en";
}
function toggleHamburger() {
  showMenu.value = !showMenu.value;
  console.log(menuDisplay.value);
}
const menuDisplay = computed(() => {
  return showMenu.value ? "grid" : "none";
});
</script>

<template>
  <nav>
    <div class="logo">
      <img :src="logo" alt="sunny side logo" />
    </div>
    <div class="hamburger" @click="toggleHamburger">
      <img :src="hamburger" alt="sunny side logo" />
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
  display: flex;
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
      font-weight: $secondary_font_weight;
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
        background-color: rgba(255, 255, 255, 0.3);
        color: $white;
        cursor: pointer;
      }
    }
  }
  .hamburger {
    display: none;
  }
}
@media (max-width: 785px) {
  nav {
    padding: 32px 24px;
    .hamburger {
      display: block;
      &:hover {
        cursor: pointer;
      }
    }
    .links {
      display: v-bind(menuDisplay);
      position: fixed;
      top: 100px;
      width: 90%;
      background-color: $white;
      justify-items: center;
      align-items: center;
      padding: 50px 0;
      a {
        color: $very_dark_grayish;
        text-align: center;
        &:hover {
          color: $red;
        }
      }
      button {
        background-color: $yellow;
        &:hover {
          background-color: $red;
        }
      }
    }
  }
}
</style>
