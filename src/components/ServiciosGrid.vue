<template>
  <div class="servicios-grid q-pa-xl">
    <div class="row q-col-gutter-xl">
      <div 
        class="col-12 col-md-6 col-lg-4" 
        v-for="(servicio, index) in servicios" 
        :key="index"
      >
      
        <ServicioCard 
          :servicio="servicio"
          @ver-detalles="onVerDetalles"
        />
      </div>
    </div>

    <div v-if="servicios.length === 0" class="text-center q-mt-xl">
      <q-icon name="search_off" size="64px" color="grey-4" />
      <div class="text-h6 text-grey-6 q-mt-md charm-regular">
        No hay servicio disponibles por ahora.
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ServicioCard from './ServicioCard.vue'

export default {
  name: 'ServiciosGrid',
  components: { ServicioCard },
  setup() {
    const router = useRouter()

    const servicios = ref([
      {
        id: 1,
        nombre: 'Restaurante',
        imagen: 'https://i.pinimg.com/736x/98/75/7e/98757e38ea67186dbd40c713098f19eb.jpg',
        estrellas: 5,
        precio: 80,
        descripcion: 'Ofrecen opciones gastronómicas variadas, desde buffets hasta restaurantes a la carta.'
      },
      {
        id: 2,
        nombre: 'Piscinas y spas',
        imagen: 'https://i.pinimg.com/1200x/9e/60/05/9e60051efd42a9bbeb7d77ef94c31775.jpg',
        estrellas: 5,
        precio: 60,
        descripcion: ' Permiten a los huéspedes relajarse y disfrutar de momentos de ocio.'
      },
      {
        id: 3,
        nombre: 'Gimnasio',
        imagen: 'https://i.pinimg.com/1200x/c4/2e/af/c42eafefadddd065f36748196748fc44.jpg',
        estrellas: 5,
        precio: 20,
        descripcion: 'Para aquellos que desean mantenerse activos durante su estancia.'
      },
      {
        id: 4,
        nombre: 'Transporte',
        imagen: 'https://i.pinimg.com/1200x/4b/d5/e4/4bd5e40dd789413ce1a66e085a229c3b.jpg',
        estrellas: 5,
        precio: 50,
        descripcion: 'El transporte privado puede ser en vehículos particulares o servicios como transporte especial'
      },
      {
        id: 5,
        nombre: 'Servicios para mascotas',
        imagen: 'https://i.pinimg.com/736x/eb/aa/f7/ebaaf73db9194b9e220b822fa6ea1445.jpg',
        estrellas: 5,
        precio: 180,
        descripcion: 'Ofrecemos servicios específicos para mascotas,comederos y áreas de paseo. '
      },
      {
        id: 6,
        nombre: 'Servicio de lavandería',
        imagen: 'https://i.pinimg.com/1200x/a8/04/3f/a8043ff723a9efece7859c1c3967e5c7.jpg',
        estrellas: 5,
        precio: 170,
        descripcion: 'Para el cuidado de la ropa de los huéspedes. '
      }
    ])

    const onVerDetalles = (servicio) => {
      router.push(`/servicios/${servicio.id}`)
    }

    return {
      servicios,
      onVerDetalles
    }
  }
}
</script>

<style scoped>
.servicios-grid {
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f9f6f1 0%, #f5f2ed 100%);
  border-radius: 20px;
}
@media (max-width: 768px) {
  .servicios-grid {
    padding: 40px 16px;
    border-radius: 0;
  }
}
</style>
