<template>
  <div class="q-pa-xl bg-amber-1 text-center">
    <div class="text-h3 text-weight-bold text-terracota1 q-mb-sm charm-bold centered-title">
      Descubre la Italia que no conoces.
    </div>

    <div class="text-body1 text-grey-8 q-mb-lg charm-regular" style="margin-top: 2vh;">
      Sumérgete en la belleza rural de Italia con experiencias únicas que mezclan cultura, gastronomía y paisajes inolvidables.
    </div>

    <div class="text-body1 text-grey-8 q-mb-lg charm-regular">
      Descubre un rincón donde el tiempo se detiene y cada detalle cuenta una historia.
    </div>

    <div class="text-body1 text-grey-8 q-mb-lg charm-regular">
      Vive Italia como nunca antes: lenta, profunda y maravillosamente real.
    </div>

    <ImagenesGrid :imagenes="imagenesItalia" />
  </div>
</template>

<script>
import ImagenesGrid from './ImagenesGrid.vue'

export default {
  name: 'DiscoverSection',
  components: {
    ImagenesGrid
  },
  props: {
    imagenesItalia: {
      type: Array,
      required: true,
      default: () => [
        "https://i.pinimg.com/736x/94/a5/b1/94a5b1ddcd7b7b9401f4970851b26640.jpg",
        "https://i.pinimg.com/736x/54/c8/b8/54c8b813c3223ab9b5d267b839421e8a.jpg",
        "https://i.pinimg.com/736x/d5/7d/29/d57d29dc02400acdb5adf937b09b622f.jpg"
      ]
    }
  }
}
</script>

<style scoped>
.centered-title {
  text-align: center;
  width: 100%;
}

.bg-amber-1 {
  background: #f0ebdc !important;
}

.text-body1 {
  text-align: center;
}
</style>