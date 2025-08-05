<template>
  <div id="habitaciones" class="q-pa-xl relative-position" :style="backgroundStyle">
    <div class="overlay"></div>
    
    <div class="container">
      <div class="content-wrapper">
        <div class="text-h3 text-white text-weight-bold q-mb-md charm-bold text-center">
          Nuestra Historia
        </div>
        
        <div class="text-body1 text-white q-mb-md charm-regular text-center">
          Fundado en 1985, Terracota nació del sueño de la familia Bianchi por compartir la auténtica esencia de la Toscana. Lo que comenzó como una pequeña casa de campo se ha convertido en un refugio de lujo rústico reconocido internacionalmente.
        </div>
        
        <div class="text-body1 text-white q-mb-md charm-regular flex flex-center">
          <q-icon name="mdi-award" color="amber" class="q-mr-sm" />
          Premio a la Excelencia en Turismo 2022
        </div>
        
        <div class="text-body1 text-white q-mb-md charm-regular flex flex-center">
          <q-icon name="mdi-leaf" color="green" class="q-mr-sm" />
          Certificación de Turismo Sostenible desde 2018
        </div>
        
        
        </div>
      </div>
    </div>
  
</template>

<script>
export default {
  name: 'HistorySection',
  setup() {
    const backgroundStyle = {
      backgroundImage: 'url(https://images.pexels.com/photos/15919503/pexels-photo-15919503.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '60vh'
    }

    return {
      backgroundStyle
    }
  }
}
</script>

<style scoped>
#habitaciones {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.content-wrapper {
  background-color: rgba(93, 64, 55, 0.644);
  padding: 40px;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  #habitaciones {
    padding: 20px;
    min-height: 80vh;
  }
  
  .content-wrapper {
    padding: 30px 20px;
    width: 90%;
  }
  
  .text-body1 {
    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
  }
}
</style>