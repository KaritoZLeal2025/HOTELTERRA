<template>
  <div class="habitaciones-grid q-pa-xl">
    

    <div class="row q-col-gutter-xl">
      <div 
        class="col-12 col-md-6 col-lg-4" 
        v-for="(habitacion, index) in habitacionesFiltradas" 
        :key="index"
      >
        <HabitacionCard 
          :habitacion="habitacion"
          
        />
      </div>
    </div>

   
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import HabitacionCard from './HabitacionCard.vue'

export default {
  name: 'HabitacionesGrid',
  components: {
    HabitacionCard
  },
  setup() {
    const filtroCapacidad = ref(null)
    const filtroPrecio = ref(null)

    const opcionesCapacidad = [
      { label: 'Todas', value: null },
      { label: '1-2 personas', value: 2 },
      { label: '3-4 personas', value: 4 },
      { label: '5+ personas', value: 5 }
    ]

    const opcionesPrecio = [
      { label: 'Todos los precios', value: null },
      { label: 'Hasta €150', value: 150 },
      { label: '€150 - €250', value: 250 },
      { label: 'Más de €250', value: 999 }
    ]

    const habitaciones = [
      {
        id: 1,
        nombre: 'Habitación Clásica Toscana',
        imagen: '/images/habitacion1.jpeg',
        capacidad: 2,
        tamano: '28 m²',
        precio: 120,
        estrellas: 4,
        descripcion: 'Una acogedora habitación que captura la esencia de la campiña toscana con vigas de madera originales y vistas a los viñedos.',
        amenidades: ['Wi-Fi', 'Aire acondicionado', 'Minibar', 'Vista al mar']
      },
      {
        id: 2,
        nombre: 'Suite Premium Rústica',
        imagen: '/images/habitacion2.jpeg',
        capacidad: 2,
        tamano: '45 m²',
        precio: 180,
        estrellas: 5,
        descripcion: 'Amplia suite con decoración rústica y modernas comodidades, ideal para una escapada romántica.',
        amenidades: ['Terraza Privada', 'Vista Panorámica', 'Jacuzzi']
      },
      {
        id: 3,
        nombre: 'Habitación Familiar Tradicional',
        imagen: '/images/habitacion3.jpeg',
        capacidad: 4,
        tamano: '55 m²',
        precio: 220,
        estrellas: 4,
        descripcion: 'Espaciosa habitación familiar con dos camas matrimoniales y área de estar, perfecta para familias.',
        amenidades: ['2 camas', 'Cocina', 'Balcón', 'Sofá cama']
      },
      {
        id: 4,
        nombre: 'Suite de Lujo "Bella Vista"',
        imagen: '/images/habitacion4.jpeg',
        capacidad: 2,
        tamano: '65 m²',
        precio: 280,
        estrellas: 5,
        descripcion: 'Exclusiva suite con vistas espectaculares al mar y servicios premium para una experiencia de lujo.',
        amenidades: ['Vista al mar', 'Servicio a la habitación', 'Piscina privada', 'Champagne de bienvenida']
      },
      {
        id: 5,
        nombre: 'Habitación "Olivo"',
        imagen: '/images/habitacion5.jpeg',
        capacidad: 2,
        tamano: '32 m²',
        precio: 95,
        estrellas: 3,
        descripcion: 'Acogedora habitación económica con todas las comodidades básicas para una estancia confortable.',
        amenidades: ['Wi-Fi', 'TV Satelital', 'Baño privado']
      },
      {
        id: 6,
        nombre: 'Villa Privada "Borgo Antico"',
        imagen: '/images/habitacion6.jpeg',
        capacidad: 6,
        tamano: '120 m²',
        precio: 450,
        estrellas: 5,
        descripcion: 'Lujosa villa independiente con piscina privada, múltiples habitaciones y servicio personalizado.',
        amenidades: ['Piscina Privada', '3 habitaciones', 'Cocina completa', 'Jardín privado']
      }
    ]

    const habitacionesFiltradas = computed(() => {
      let filtered = [...habitaciones]

      if (filtroCapacidad.value !== null) {
        filtered = filtered.filter(h => {
          if (filtroCapacidad.value === 5) {
            return h.capacidad >= 5
          }
          return h.capacidad <= filtroCapacidad.value
        })
      }

      if (filtroPrecio.value !== null) {
        filtered = filtered.filter(h => {
          if (filtroPrecio.value === 150) return h.precio <= 150
          if (filtroPrecio.value === 250) return h.precio > 150 && h.precio <= 250
          if (filtroPrecio.value === 999) return h.precio > 250
          return true
        })
      }

      return filtered
    })

    const limpiarFiltros = () => {
      filtroCapacidad.value = null
      filtroPrecio.value = null
    }

   

    return {
      filtroCapacidad,
      filtroPrecio,
      opcionesCapacidad,
      opcionesPrecio,
      habitacionesFiltradas,
      limpiarFiltros
      
    }
  }
}
</script>

<style scoped>
.habitaciones-grid {
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f9f6f1 0%, #f5f2ed 100%);
  border-radius: 20px;
}

.filters-section {
  background: rgba(255, 255, 255, 0.7);
  padding: 24px;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(93, 64, 55, 0.1);
}

.filter-select {
  border-radius: 8px;
}

.text-terracota {
  color: #5D4037;
}

@media (max-width: 768px) {
  .habitaciones-grid {
    padding: 40px 16px;
    border-radius: 0;
  }
  
  .filters-section {
    padding: 16px;
  }
}
</style>