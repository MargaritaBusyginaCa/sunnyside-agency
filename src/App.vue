<script setup>
import { useI18n } from "vue-i18n";
import Navbar from "@/components/Navbar.vue";
import Hero from "./pages/Hero.vue";
const { t } = useI18n();
</script>

<template>
  <main>
    <section class="hero-section">
      <Navbar />
      <Hero />
    </section>
    <p>{{ $t("greeting") }}</p>
  </main>
</template>

<style lang="scss">
@import "@/assets/scss/global.scss";
@import "@/assets/scss/variables.scss";
main {
}
</style>
