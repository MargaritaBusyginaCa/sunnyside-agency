<script setup>
const images = [
  {
    name: "milk bottles",
    desktopPath: "/images/desktop/image-gallery-milkbottles.jpg",
  },
  {
    name: "oranges",
    desktopPath: "/images/desktop/image-gallery-orange.jpg",
  },
  {
    name: "ice cream cone",
    desktopPath: "/images/desktop/image-gallery-cone.jpg",
  },
  {
    name: "sugar cubes",
    desktopPath: "/images/desktop/image-gallery-sugarcubes.jpg",
  },
];
</script>

<template>
  <div class="gallery">
    <img
      v-for="img in images"
      :key="img.name"
      :src="img.desktopPath"
      :alt="img.name"
    />
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  display: flex;
  img {
    width: 25%;
  }
}
@media (max-width: 785px) {
  .gallery {
    display: grid;
    grid-template-columns: 50% 50%;
    img {
      width: 100%;
    }
  }
}
</style>
