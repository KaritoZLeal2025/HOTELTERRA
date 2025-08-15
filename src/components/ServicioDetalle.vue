<template>
  <div class="q-pa-xl">
    <q-card class="q-pa-md q-mx-auto" style="max-width: 700px;">
      <q-img :src="servicio.imagen" :alt="servicio.nombre" style="height: 300px;" />

      <q-card-section>
        <div class="text-h5 text-terracota charm-bold">{{ servicio.nombre }}</div>
        <div class="text-subtitle2 text-grey q-mt-xs">Dificultad: {{ servicio.dificultad }}</div>
        <div class="text-subtitle2 text-grey q-mt-xs">Precio: €{{ servicio.precio }}</div>
        <q-rating 
          v-model="servicio.estrellas" 
          readonly 
          size="25px" 
          color="amber" 
          class="q-mt-sm" 
        />
        <div class="text-body1 q-mt-md">{{ servicio.descripcion }}</div>
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
  name: 'ServicioDetalle',
  setup() {
    const route = useRoute()

    const servicios = [
      {
        id: 1,
        nombre: 'Restaurante',
        imagen: 'https://i.pinimg.com/736x/98/75/7e/98757e38ea67186dbd40c713098f19eb.jpg',
        estrellas: 5,
        precio: 80,
        descripcion: 'Disfruta de una exquisita experiencia gastronómica con una variedad de opciones que van desde buffets internacionales hasta elegantes restaurantes a la carta, donde cada plato es una celebración de sabor'
      },
      {
        id: 2,
        nombre: 'Piscinas y span',
        imagen: 'https://i.pinimg.com/1200x/9e/60/05/9e60051efd42a9bbeb7d77ef94c31775.jpg',
        estrellas: 5,
        precio: 60,
        descripcion: 'Sumérgete en la serenidad de nuestras piscinas o déjate consentir en nuestros exclusivos spas. Un oasis de relajación pensado para renovar cuerpo y mente.'
      },
      {
        id: 3,
        nombre: 'Ginmasio',
        imagen: 'https://i.pinimg.com/1200x/c4/2e/af/c42eafefadddd065f36748196748fc44.jpg',
        estrellas: 5,
        precio: 20,
        descripcion: 'Mantén tu rutina fitness en nuestras modernas instalaciones equipadas con todo lo necesario para entrenamientos energizantes durante tu estancia.'
      },
      {
        id: 4,
        nombre: 'Transporte',
        imagen: 'https://i.pinimg.com/1200x/33/b4/7c/33b47cb4653af482b907e066482f7d43.jpg',
        estrellas: 5,
        precio: 50,
        descripcion: 'Contamos con traslados cómodos y seguros al aeropuerto, alquiler de vehículos y servicio de taxis para que explores la ciudad con total tranquilidad.'
      },
      {
        id: 5,
        nombre: 'Servicios para mascotas',
        imagen: 'https://i.pinimg.com/736x/eb/aa/f7/ebaaf73db9194b9e220b822fa6ea1445.jpg',
        estrellas: 5,
        precio: 180,
        descripcion: 'Tu compañero peludo también es bienvenido. Ofrecemos camas cómodas, comederos y áreas especiales para que disfrute contigo de una estancia placentera.'
      },
      {
        id: 6,
        nombre: 'Servicio de lavanderia',
        imagen: 'https://i.pinimg.com/1200x/a8/04/3f/a8043ff723a9efece7859c1c3967e5c7.jpg',
        estrellas: 5,
        precio: 170,
        descripcion: 'Para que siempre luzcas impecable, ponemos a tu disposición un servicio de lavandería confiable, rápido y profesional.'
      }
    ]

    const servicioId = parseInt(route.params.id)
    const servicioSeleccionado = servicios.find(d => d.id === servicioId)

    return {
      servicio: servicioSeleccionado
    }
  }
}
</script>

<style scoped>
.text-terracota {
  color: #5D4037;
}
</style>
