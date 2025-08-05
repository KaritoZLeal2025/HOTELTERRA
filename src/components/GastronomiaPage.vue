<template>
  <div class="gastronomia-page">
    <HeaderComponent />
    
    <Gastronomiabanner />
    
    <Gastronomiainformacion />

    <FooterComponent />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from './HeaderComponent.vue'
import Gastronomiabanner from './Gastronomiabanner.vue'
import Gastronomiainformacion from './Gastronomiainformacion.vue'
import FooterComponent from './FooterComponent.vue'

export default defineComponent({
  name: 'GastronomiaPage',
  components: {
    HeaderComponent,
    FooterComponent,
    Gastronomiabanner,
    Gastronomiainformacion
  }
})
</script>

<style scoped>
.gastronomia-page {
  background: linear-gradient(180deg, #f9f6f1 0%, #f5f2ed 50%, #f9f6f1 100%);
  min-height: 100vh;
}
</style>