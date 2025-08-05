<template>
  <div class="hero-section q-pa-md">
    <q-img
      src="https://images.pexels.com/photos/8431104/pexels-photo-8431104.jpeg"
      style="height: 450px; width: 100%;"
      class="rounded-borders hero-image"
    >
      <div class="absolute-full hero-overlay"></div>
      <div class="absolute-bottom text-center q-pb-xl hero-content">
        <div class="text-h2 text-white charm-bold hero-title">
            Temporada de Verano
        </div>
        <div class="text-h6 text-white charm-regular hero-subtitle q-mt-md">
          Disfruta de las habitaciones exclusivas de esta temporada.
        </div>
      </div>
    </q-img>
  </div>
</template>

<script>
export default {
  name: 'HabitacionesHero'
}
</script>

<style scoped>
.hero-section {

  margin: 0 auto;
}

.hero-image {
  position: relative;
}

.hero-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(93, 64, 55, 0.7)
  );
}

.hero-content {
  z-index: 2;
}

.hero-title {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  letter-spacing: 2px;
}

.hero-subtitle {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  font-style: italic;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 0 16px;
  }
  
  .hero-title {
    font-size: 1.8rem !important;
  }
  
  .hero-subtitle {
    font-size: 1rem !important;
  }
}
</style>