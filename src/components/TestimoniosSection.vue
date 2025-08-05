<template>
  <div id="testimonios" class="q-pa-xl bg-amber-1">
    <div class="container">
      <div class="text-h3 text-terracota text-weight-bold q-mb-xl charm-bold text-center">
        Lo que dicen nuestros huéspedes
      </div>

      <q-carousel
        v-model="slide"
        animated
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        height="auto"
        class="testimonial-carousel"
      >
        <q-carousel-slide :name="1" class="q-pa-none">
          <div class="row justify-center">
            <div class="col-12 col-md-8">
              <div class="testimonial-card">
                <div class="rating q-mb-md">
                  <q-icon name="mdi-star" color="amber" size="24px" v-for="n in 5" :key="n" />
                </div>
                <q-icon name="mdi-format-quote-open" color="terracota" size="48px" class="quote-icon" />
                <div class="text-h5 text-grey-9 charm-regular q-mb-sm text-center">
                  "Una experiencia toscana auténtica"
                </div>
                <div class="text-body1 text-grey-7 charm-regular q-mb-lg text-center">
                  Terracota superó todas nuestras expectativas. Desde la atención personalizada hasta los detalles en la decoración, todo fue perfecto. Volveremos sin duda.
                </div>
                <div class="text-subtitle1 text-terracota charm-bold text-center">
                  — María González, Madrid
                </div>
              </div>
            </div>
          </div>
        </q-carousel-slide>





        <q-carousel-slide :name="2" class="q-pa-none">
          <div class="row justify-center">
            <div class="col-12 col-md-8">
              <div class="testimonial-card">
                <div class="rating q-mb-md">
                  <q-icon name="mdi-star" color="amber" size="24px" v-for="n in 5" :key="n" />
                </div>
                <q-icon name="mdi-format-quote-open" color="terracota" size="48px" class="quote-icon" />
                <div class="text-h5 text-grey-9 charm-regular q-mb-sm text-center">
                  "El lugar perfecto para desconectar"
                </div>
                <div class="text-body1 text-grey-7 charm-regular q-mb-lg text-center">
                  La combinación de lujo y rusticidad es impresionante. Los atardeceres desde nuestra habitación fueron inolvidables. La gastronomía local es exquisita.
                </div>
                <div class="text-subtitle1 text-terracota charm-bold text-center">
                  — Thomas Müller, Berlín
                </div>
              </div>
            </div>
          </div>
        </q-carousel-slide>




        
        <q-carousel-slide :name="3" class="q-pa-none">
          <div class="row justify-center">
            <div class="col-12 col-md-8">
              <div class="testimonial-card">
                <div class="rating q-mb-md">
                  <q-icon name="mdi-star" color="amber" size="24px" v-for="n in 4" :key="n" />
                  <q-icon name="mdi-star-outline" color="amber" size="24px" />
                </div>
                <q-icon name="mdi-format-quote-open" color="terracota" size="48px" class="quote-icon" />
                <div class="text-h5 text-grey-9 charm-regular q-mb-sm text-center">
                  "Romántico y acogedor"
                </div>
                <div class="text-body1 text-grey-7 charm-regular q-mb-lg text-center">
                  Celebramos nuestro aniversario aquí y fue mágico. El personal preparó una cena especial con productos locales. Solo sugeriría más opciones vegetarianas.
                </div>
                <div class="text-subtitle1 text-terracota charm-bold text-center">
                  — Sophie Laurent, París
                </div>
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TestimoniosSection',
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
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-carousel {
  background: transparent;
  box-shadow: none;
}

.testimonial-card {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(93, 64, 55, 0.1);
  position: relative;
  margin: 20px;
}

.quote-icon {
  opacity: 0.2;
  position: absolute;
  top: 20px;
  right: 30px;
}

.rating {
  display: flex;
  justify-content: center;
}

.bg-amber-1 {
  background: #f0ebdc !important;
}

.text-terracota {
  color: #5D4037;
}

/* Estilos para móvil */
@media (max-width: 768px) {
  .testimonial-card {
    padding: 30px 20px;
    margin: 10px;
  }
  
  .quote-icon {
    top: 10px;
    right: 15px;
    size: 36px;
  }
  
  #testimonios {
    padding: 40px 16px;
  }
}
</style>