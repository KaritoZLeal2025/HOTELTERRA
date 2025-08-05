<template>
  <div class="gastronomia-informacion">

    <section class="menu-section">
      <div class="container">
        <div class="section-header text-center q-mb-xl">
          <h2 class="section-title">
            <span class="title-accent">Nuestros Platos</span>
            <span class="title-main">Destacados</span>
          </h2>
          <p class="section-subtitle">
            Una selección de nuestras especialidades más valoradas, 
            preparadas con ingredientes de la más alta calidad
          </p>
        </div>

        <PlatosGrid />
      </div>
    </section>

    
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import PlatosGrid from './PlatosGrid.vue'

export default defineComponent({
  name: 'Gastronomiainformacion',
  components: {
    PlatosGrid
  }
})
</script>

<style scoped>
.gastronomia-informacion {
  font-family: 'Crimson Text', 'Georgia', serif;
}

.menu-section {
  padding: 80px 0;
  background: #faf8f3;
}

.section-header {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.title-accent {
  display: block;
  font-style: italic;
  color: #d2691e;
  font-size: 0.7em;
  font-weight: 300;
}

.title-main {
  display: block;
  color: #8b4513;
  font-weight: 700;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #6d4c41;
  font-style: italic;
  max-width: 600px;
  margin: 1rem auto 0;
}

.experience-section {
  padding: 80px 0;
  background: #f7f4ef;
}

.experience-content {
  padding-left: 2rem;
}

.experience-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #5d4037;
  margin-bottom: 2rem;
}

.experience-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.exp-feature {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.exp-icon {
  color: #d2691e;
  font-size: 1.3rem;
}




@media (max-width: 768px) {
  .menu-section,
  .experience-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .experience-content {
    padding-left: 0;
    margin-top: 2rem;
  }
}
</style>