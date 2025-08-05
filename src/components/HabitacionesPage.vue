<template>
  <div class="habitaciones-page">
    <HeaderComponent />
    
    <HabitacionesHero />
    
    <HabitacionesGrid />
    
   
    <ServiciosAdicionales />
    
    <FooterComponent />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from './HeaderComponent.vue'
import FooterComponent from './FooterComponent.vue'
import HabitacionesHero from './HabitacionesHero.vue'
import HabitacionesGrid from './HabitacionesGrid.vue'
import ServiciosAdicionales from './ServiciosAdicionales.vue'

export default defineComponent({
  name: 'HabitacionesPage',
  components: {
    HeaderComponent,
    FooterComponent,
    HabitacionesHero,
    HabitacionesGrid,
    ServiciosAdicionales
  }
})
</script>

<style scoped>
.habitaciones-page {
  background: linear-gradient(180deg, #f9f6f1 0%, #f5f2ed 50%, #f9f6f1 100%);
  min-height: 100vh;
}
</style>