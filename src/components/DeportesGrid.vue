<template>
  <div class="deportes-grid q-pa-xl">
    <div class="row q-col-gutter-xl">
      <div 
        class="col-12 col-md-6 col-lg-4" 
        v-for="(deporte, index) in deportes" 
        :key="index"
      >
        <DeporteCard 
          :deporte="deporte"
          @ver-detalles="onVerDetalles"
        />
      </div>
    </div>

    <div v-if="deportes.length === 0" class="text-center q-mt-xl">
      <q-icon name="search_off" size="64px" color="grey-4" />
      <div class="text-h6 text-grey-6 q-mt-md charm-regular">
        No hay deportes disponibles por ahora.
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import DeporteCard from './DeporteCard.vue'

export default {
  name: 'DeportesGrid',
  components: { DeporteCard },
  setup() {
    const router = useRouter()

    const deportes = ref([
      {
        id: 1,
        nombre: 'Equitación',
        imagen: 'https://i.pinimg.com/1200x/08/8e/5a/088e5af1956674cdd4a240b6aa39a6c3.jpg',
        tipo: 'equitacion',
        dificultad: 'Alta',
        estrellas: 5,
        precio: 150,
        descripcion: 'Aventura extrema con equitacion entre la naturaleza.'
      },
      {
        id: 2,
        nombre: 'Recorrido de viñedo en bicicleta',
        imagen: 'https://i.pinimg.com/1200x/40/e3/f3/40e3f33f739fd8c0d8874c6ad653e004.jpg',
        tipo: 'viñedo',
        dificultad: 'Media',
        estrellas: 4,
        precio: 80,
        descripcion: 'Explora rutas en bicicleta o senderismo con paisajes de viñeo y aire puro.'
      },
      {
        id: 3,
        nombre: 'Buceo en arrecifes',
        imagen: 'https://i.pinimg.com/1200x/bc/7a/42/bc7a4224f0b199606f380ec596b5572a.jpg',
        tipo: 'acuaticos',
        dificultad: 'Media',
        estrellas: 5,
        precio: 200,
        descripcion: 'Descubre el mundo marino en aguas cristalinas.'
      },
      {
        id: 4,
        nombre: 'Paseo en jet ski',
        imagen: 'https://i.pinimg.com/736x/2d/5b/15/2d5b15f202ca1c6047c5729ae041a343.jpg',
        tipo: 'acuaticos',
        dificultad: 'Alta',
        estrellas: 5,
        precio: 170,
        descripcion: 'Ofrece la emoción de la velocidad combinada con vistas impresionantes de la naturaleza.'
      },
      {
        id: 5,
        nombre: 'Parques de aventura',
        imagen: 'https://i.pinimg.com/1200x/25/c6/5f/25c65f1d55dd3e4292d3e87cce52abd5.jpg',
        tipo: 'aire',
        dificultad: 'Media',
        estrellas: 5,
        precio: 170,
        descripcion: 'Ofrece la emoción de las alturas.'
      },
      {
        id: 6,
        nombre: 'Parapente',
        imagen: 'https://i.pinimg.com/736x/56/e8/2f/56e82fa740a1d877e02585bf432cfa3c.jpg',
        tipo: 'aire',
        dificultad: 'Media',
        estrellas: 5,
        precio: 170,
        descripcion: 'Ofrece la emoción de la velocidad combinada con vistas impresionantes de la naturaleza.'
      }
    ])

    const onVerDetalles = (deporte) => {
      router.push(`/deportes/${deporte.id}`)
    }

    return {
      deportes,
      onVerDetalles
    }
  }
}
</script>

<style scoped>
.deportes-grid {
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f9f6f1 0%, #f5f2ed 100%);
  border-radius: 20px;
}
@media (max-width: 768px) {
  .deportes-grid {
    padding: 40px 16px;
    border-radius: 0;
  }
}
</style>
