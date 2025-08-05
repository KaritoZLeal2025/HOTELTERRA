<template>
  <div class="servicios-page">
    <HeaderComponent />

    <DeportesHero />

    <!-- 🔽 Contenedor con ID para el scroll -->
    <div id="servicios">
      <ServiciosGrid />
    </div>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from './HeaderComponent.vue'
import FooterComponent from './FooterComponent.vue'
import DeportesHero from './DeportesHero.vue'
import ServiciosGrid from './ServiciosGrid.vue'

export default defineComponent({
  name: 'ServiciosPage',
  components: {
    HeaderComponent,
    FooterComponent,
    DeportesHero,
    ServiciosGrid
  }
})
</script>

<style scoped>
.servicios-page {
  background: linear-gradient(180deg, #f9f6f1 0%, #f5f2ed 50%, #f9f6f1 100%);
  min-height: 100vh;
}
</style>
