<template>
  <div class="deportes-page">
    <HeaderComponent />
    
    <DeportesHero />
    
    <DeportesGrid />
    
   
    
    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from './HeaderComponent.vue' // banner
import FooterComponent from './FooterComponent.vue' //lo de abajo
import DeportesHero from './DeportesHero.vue' //laimagencomotempradadeverano
import DeportesGrid from './DeportesGrid.vue' //las habitaciones

export default defineComponent({
  name: 'DeportesPage',
  components: {
    HeaderComponent,
    FooterComponent,
    DeportesHero,
    DeportesGrid
  
  }
})
</script>

<style scoped>
.Deportes-page {
  background: linear-gradient(180deg, #f9f6f1 0%, #f5f2ed 50%, #f9f6f1 100%);
  min-height: 100vh;
}
</style>