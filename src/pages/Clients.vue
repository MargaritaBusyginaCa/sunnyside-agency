<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const clients = [
  {
    img: "/images/image-emily.jpg",
    testimonials: t("clients.emily.testimonials"),
    name: "Emily R.",
    job: t("clients.emily.job"),
  },
  {
    img: "/images/image-thomas.jpg",
    testimonials: t("clients.thomas.testimonials"),
    name: "Thomas S.",
    job: t("clients.thomas.job"),
  },
  {
    img: "/images/image-jennie.jpg",
    testimonials: t("clients.jennie.testimonials"),
    name: "Jennie F.",
    job: t("clients.jennie.job"),
  },
];
</script>

<template>
  <h3>{{ t("clients.heading") }}</h3>
  <div class="clients">
    <div v-for="client in clients" :key="client.name" class="client">
      <img :src="client.img" :alt="client.name" />
      <p class="testimonial">{{ client.testimonials }}</p>
      <p class="name">{{ client.name }}</p>
      <p class="job">{{ client.job }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
h3 {
  text-align: center;
  font-size: 20px;
  color: $grayish_blue;
  padding-bottom: 80px;
  letter-spacing: 5px;
}
.clients {
  display: flex;
  justify-content: center;
  gap: 50px;
  .client {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
      border-radius: 50%;
      height: 72px;
      width: 72px;
    }
    .testimonial {
      margin: 52px 0;
      max-width: 400px;
      font-family: $font_secondary;
      font-weight: $primary_font_weight;
      font-size: 18px;
      line-height: 32px;
      letter-spacing: -0.13px;
      color: $dark_grey_blue;
    }
    .name {
      font-size: 18px;
      font-weight: $primary_font_weight;
      margin: 0;
    }
    .job {
      font-size: 14px;
      font-family: $font_secondary;
      color: $grayish_blue;
    }
  }
}
@media (max-width: 785px) {
  h3 {
    padding: 64px 0;
    font-size: 16px;
    letter-spacing: 4px;
  }
  .clients {
    flex-direction: column;
    padding-bottom: 80px;
    .client .testimonial {
      max-width: 80%;
      margin: 32px 0;
    }
  }
}
</style>
