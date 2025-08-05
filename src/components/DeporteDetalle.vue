<template>
  <div class="q-pa-xl">
    <q-card class="q-pa-md q-mx-auto" style="max-width: 700px;">
      <q-img :src="deporte.imagen" :alt="deporte.nombre" style="height: 300px;" />

      <q-card-section>
        <div class="text-h5 text-terracota charm-bold">{{ deporte.nombre }}</div>
        <div class="text-subtitle2 text-grey q-mt-xs">Dificultad: {{ deporte.dificultad }}</div>
        <div class="text-subtitle2 text-grey q-mt-xs">Precio: €{{ deporte.precio }}</div>
        <q-rating 
          v-model="deporte.estrellas" 
          readonly 
          size="25px" 
          color="amber" 
          class="q-mt-sm" 
        />
        <div class="text-body1 q-mt-md">{{ deporte.descripcion }}</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Volver" color="terracota" @click="$router.back()" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: 'DeporteDetalle',
  setup() {
    const route = useRoute()

    const deportes = [
      {
        id: 1,
        nombre: 'Equitación',
        imagen: 'https://i.pinimg.com/1200x/02/91/cd/0291cd9e57f6ed6d0f889a1197927260.jpg',
        tipo: 'equitacion',
        dificultad: 'Alta',
        estrellas: 5,
        precio: 150,
        descripcion: 'Se pueden realizar paseos a caballo por la campiña toscana, explorando la región de una manera diferente.'      
      },
      {
        id: 2,
        nombre: 'Recorrido de viñedo en bicicleta o senderismo',
        imagen: 'https://i.pinimg.com/1200x/71/8f/fa/718ffa680051ab348713f48fd35bfea6.jpg',
        tipo: 'viñedo',
        dificultad: 'Media',
        estrellas: 4,
        precio: 80,
        descripcion: 'Explora rutas con paisajes montañosos y aire puro.'
      },
      {
        id: 3,
        nombre: 'Buceo en arrecifes',
        imagen: 'https://mx.oceana.org/wp-content/uploads/sites/17/3-1.jpg',
        tipo: 'acuaticos',
        dificultad: 'Media',
        estrellas: 5,
        precio: 200,
        descripcion: 'Descubre el mundo marino en aguas cristalinas.'
      },
      {
        id: 4,
        nombre: 'Paseo en jet ski',
        imagen: 'https://i.pinimg.com/1200x/d6/e1/99/d6e19966d032fd2af8b2429d05ad235d.jpg',
        tipo: 'acuaticos',
        dificultad: 'Alta',
        estrellas: 5,
        precio: 170,
        descripcion: 'Ofrece la emoción de la velocidad combinada con vistas impresionantes de la naturaleza, se puede realizar solo o con pajera.'
      },
      {
        id: 5,
        nombre: 'Parques de aventuras',
        imagen: 'https://i.pinimg.com/1200x/ae/2f/8c/ae2f8c2e1f94d1714d63a08045d7ba4f.jpg',
        tipo: 'aire',
        dificultad: 'Media',
        estrellas: 5,
        precio: 200,
        descripcion: 'Parques de aventura en toda la región, con actividades como tirolesas y puentes colgantes.'
      },
      {
        id: 6,
        nombre: 'Parapente',
        imagen: 'https://i.pinimg.com/1200x/d0/da/09/d0da0948ac44fd031bde65d7f6e93200.jpg',
        tipo: 'aire',
        dificultad: 'Media',
        estrellas: 5,
        precio: 200,
        descripcion: 'Se puede practicar en las colinas toscanas, ofreciendo vistas impresionantes, ideal para niños y adultos. '
      }
    ]

    const deporteId = parseInt(route.params.id)
    const deporte = deportes.find(d => d.id === deporteId)

    return {
      deporte
    }
  }
}
</script>

<style scoped>
.text-terracota {
  color: #5D4037;
}
</style>
