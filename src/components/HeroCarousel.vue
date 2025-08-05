<template>
  <div>
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      style="height: 70vh; max-height: 450px;"
      class="sharp-images"
    >
      <q-carousel-slide :name="1" img-src="https://images.pexels.com/photos/1386698/pexels-photo-1386698.jpeg" />
      <q-carousel-slide :name="2" img-src="https://images.pexels.com/photos/937690/pexels-photo-937690.jpeg" />
      <q-carousel-slide :name="3" img-src="https://images.pexels.com/photos/2031967/pexels-photo-2031967.jpeg" />
      <q-carousel-slide :name="4" img-src="https://images.pexels.com/photos/4987272/pexels-photo-4987272.jpeg" />
    </q-carousel>

    <div class="search-bar q-mt-md bg-white q-pa-md shadow-2 rounded-borders">
      <div class="row q-col-gutter-md items-center justify-around">
        <q-input filled label="Zona" class="col-12 col-md-2 charm-regular" />
        <q-input filled label="Fecha de entrada" type="date" class="col-12 col-md-2 charm-regular" />
        <q-input filled label="Fecha de salida" type="date" class="col-12 col-md-2 charm-regular" />
        <q-input filled label="Personas" type="number" class="col-12 col-md-2 charm-regular" />
        <q-btn label="Reservar" color="brown-7" class="q-mt-sm q-mt-md-none charm-regular search-btn" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HeroCarousel',
  setup() {
    const slide = ref(1)
    const autoplay = ref(true)

    return {
      slide,
      autoplay
    }
  }
}
</script>

<style scoped>
.sharp-images .q-carousel__slide img {
  image-rendering: optimizeQuality;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.q-carousel {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.search-bar {
  max-width: 90%;
  margin: 0 auto;
  margin-top: -50px;
  position: relative;
  z-index: 2;
}

.search-btn {
  padding: 10px 24px !important;
  font-size: 1rem !important;
}
</style>