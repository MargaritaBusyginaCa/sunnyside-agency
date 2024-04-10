<script setup>
import { useI18n } from "vue-i18n";
import Navbar from "@/components/Navbar.vue";
import Hero from "./pages/Hero.vue";
import Grid from "./pages/Grid.vue";
import Clients from "./pages/Clients.vue";
import Gallery from "./pages/Gallery.vue";
import Footer from "./components/Footer.vue";
const { t } = useI18n();
</script>

<template>
  <main>
    <section class="hero-section">
      <Navbar />
      <Hero />
    </section>
    <section class="grid-section">
      <Grid />
    </section>
    <section class="client-testimonials">
      <Clients />
    </section>
    <Gallery />
    <Footer />
  </main>
</template>

<style lang="scss">
@import "@/assets/scss/global.scss";
@import "@/assets/scss/variables.scss";
main {
  .hero-section {
    width: 100%;
    height: 100vh;
    background-image: url("/images/desktop/image-header.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .grid-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 700px);
  }
  .client-testimonials {
    padding: 160px 0;
  }
}
@media (max-width: 785px) {
  main {
    .hero-section {
      background-image: url("/images/mobile/image-header.jpg");
    }
    .grid-section {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
    .client-testimonials {
      padding: 0;
    }
  }
}
</style>
