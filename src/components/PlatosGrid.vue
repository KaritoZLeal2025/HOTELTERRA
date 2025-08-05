<template>
  <div class="platos-presentation">
    <div class="platos-list">
      <PlatoCard 
        v-for="(plato, index) in platos" 
        :key="index"
        :plato="plato" 
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import PlatoCard from './PlatoCard.vue'

export default {
  name: 'PlatosGrid',
  components: {
    PlatoCard
  },
  setup() {
    const platos = ref([
      {
        name: 'Risotto con Trufa',
        description: 'Cremoso risotto mantecado con trufa negra de Umbría, parmesano de 24 meses y mantequilla de granja.',
        price: '€28',
        imagen: 'https://i.pinimg.com/originals/ca/09/d3/ca09d3a24cfdb2fe2fb9f8e3813872b0.gif',
        icon: 'rice_bowl',
        features: ['Estacional', 'Sin Gluten']
      },
      {
        name: 'Bistec Flora',
        description: 'Corte selecto de Chianina, cocido a la parrilla con romero y sal gruesa, servido al punto.',
        price: '€45',
        imagen: 'https://i.pinimg.com/originals/e3/bc/36/e3bc36ae02c688649a8738f4445d6a1d.gif',
        icon: 'local_dining',
        features: ['Especialidad', 'Local']
      },
      {
        name: 'Creme de la fre',
        description: 'La receta secreta de la familia: bizcochos de soletilla, mascarpone, café expreso y cacao amargo.',
        price: '€12',
        imagen: 'https://i.pinimg.com/originals/8c/f7/86/8cf786ed31ceb0951f87864afce1e59a.gif',
        icon: 'cake',
        features: ['Hecho en Casa', 'Tradicional']
      },
      {
        name: 'Pasta alle Vongole',
        description: 'Linguine frescos con almejas del Adriático, ajo, perejil, vino blanco y un toque de guindilla.',
        price: '€22',
        imagen: 'https://i.pinimg.com/originals/37/6f/04/376f04b3ed53d8cf64c6e89f5ce0326b.gif',
        icon: 'ramen_dining',
        features: ['Fresco del Mar', 'Clásico']
      },
      {
        name: 'Osso Buco alla Milanese',
        description: 'Jarrete de ternera cocido lentamente con sofrito de verduras, servido con risotto azafranado.',
        price: '€38',
        imagen: 'https://i.pinimg.com/originals/3c/d2/08/3cd20821ae67e9359b7f055990b0e450.gif',
        icon: 'restaurant',
        features: ['Cocción Lenta', 'Tradicional']
      },
      {
        name: 'Panna Cotta ai Frutti',
        description: 'Delicada panna cotta de vainilla con coulis de frutos rojos de temporada y crujiente de amaretti.',
        price: '€10',
        imagen: 'https://i.pinimg.com/originals/f5/80/db/f580db8a6582d132361571df6865a984.gif',
        icon: 'icecream',
        features: ['Ligero', 'Temporada']
      },
      {
        name: 'Carpaccio di Manzo',
        description: 'Finas láminas de ternera cruda con rúcula, parmesano laminado, piñones y vinagreta de limón.',
        price: '€18',
        imagen: 'https://i.pinimg.com/originals/3c/17/db/3c17db9fc5019dd1d54599b0b9531692.gif',
        icon: 'lunch_dining',
        features: ['Crudo', 'Gourmet']
      },
      {
        name: 'Branzino in Crosta',
        description: 'Lubina fresca del Mediterráneo en costra de sal con hierbas aromáticas y aceite de oliva virgen.',
        price: '€32',
        imagen: 'https://i.pinimg.com/originals/3b/da/22/3bda22ca34273bd2221ef38b7eec6433.gif',
        icon: 'set_meal',
        features: ['Pescado Fresco', 'Mediterráneo']
      },
      {
        name: 'Gelato Artigianale',
        description: 'Selección de tres sabores de gelato artesanal: pistacho, stracciatella y limoncello.',
        price: '€8',
        imagen: 'https://i.pinimg.com/originals/9e/d5/09/9ed509c55e37064a343870f2b4f20ef9.gif',
        icon: 'ac_unit',
        features: ['Artesanal', 'Refrescante']
      }
    ])

    return {
      platos
    }
  }
}
</script>

<style scoped>
.platos-presentation {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.platos-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

@media (max-width: 768px) {
  .platos-presentation {
    padding: 15px;
  }
  
  .platos-list {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .platos-presentation {
    padding: 10px;
  }
  
  .platos-list {
    gap: 12px;
  }
}
</style>