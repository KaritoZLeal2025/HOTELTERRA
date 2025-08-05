<template>
  <q-card class="habitacion-card full-height">
    <div class="card-image-container">
      <q-img 
        :src="habitacion.imagen" 
        style="height: 280px;" 
        class="card-image"
      >
        <div class="absolute-top-right q-ma-sm">
          <q-chip 
            color="terracota" 
            text-color="white" 
            class="charm-regular price-chip"
          >
            desde €{{ habitacion.precio }}/noche
          </q-chip>
        </div>
        
        <div class="absolute-bottom-left q-ma-sm">
          <q-chip 
            color="white" 
            text-color="terracota" 
            class="charm-regular capacity-chip"
          >
            <q-icon name="people" size="xs" class="q-mr-xs" />
            {{ habitacion.capacidad }} personas
          </q-chip>
        </div>
      </q-img>
    </div>

    <q-card-section class="card-content">
      <div class="text-h5 text-terracota charm-bold card-title">
        {{ habitacion.nombre }}
      </div>
      
      <div class="row items-center q-mt-sm text-grey-7">
        <q-icon name="square_foot" size="sm" class="q-mr-xs" />
        <span class="text-subtitle2 charm-regular">{{ habitacion.tamano }}</span>
        
        <q-space />
        
        <div class="row items-center">
          <q-icon 
            v-for="n in 5" 
            :key="n"
            :name="n <= habitacion.estrellas ? 'star' : 'star_border'"
            :color="n <= habitacion.estrellas ? 'amber' : 'grey-4'"
            size="sm"
          />
        </div>
      </div>
    </q-card-section>

    <q-card-actions class="q-px-md q-pb-md">
      <q-btn
        unelevated
        color="terracota"
        text-color="white"
        class="full-width charm-regular"
        @click="verDetalles"
      >
        Ver Detalles
      </q-btn>
    </q-card-actions>

    <q-dialog v-model="dialogVisible">
      <q-card class="detail-dialog">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ habitacion.nombre }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-img :src="habitacion.imagen" style="max-height: 300px" />
          
          <div class="q-mt-md">
            <div class="text-subtitle1 text-terracota">Descripción:</div>
            <p class="text-body1 charm-regular">{{ habitacion.descripcion }}</p>
            
            <div class="row q-mt-sm">
              <div class="col-6">
                <q-icon name="people" size="sm" />
                <span class="q-ml-xs">Capacidad: {{ habitacion.capacidad }} personas</span>
              </div>
              <div class="col-6">
                <q-icon name="square_foot" size="sm" />
                <span class="q-ml-xs">Tamaño: {{ habitacion.tamano }}</span>
              </div>
              <div class="col-6 q-mt-sm">
                <q-icon name="euro_symbol" size="sm" />
                <span class="q-ml-xs">Precio: €{{ habitacion.precio }}/noche</span>
              </div>
              <div class="col-6 q-mt-sm">
                <q-icon name="star" size="sm" color="amber" />
                <span class="q-ml-xs">Calificación: {{ habitacion.estrellas }} estrellas</span>
              </div>
            </div>
            
            <div class="q-mt-md">
              <div class="text-subtitle1 text-terracota">Amenidades:</div>
              <div class="q-gutter-sm">
                <q-chip
                  v-for="amenity in habitacion.amenidades"
                  :key="amenity"
                  color="terracota-light"
                  text-color="terracota"
                  class="charm-regular"
                >
                  {{ amenity }}
                </q-chip>
              </div>
            </div>
          </div>
        </q-card-section>

        
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script>
export default {
  name: 'HabitacionCard',
  props: {
    habitacion: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    verDetalles() {
      this.dialogVisible = true;
    },
    reservar() {
      this.$emit('reservar', this.habitacion);
      this.dialogVisible = false;
    }
  }
}
</script>

<style scoped>
.habitacion-card {
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(93, 64, 55, 0.1);
  overflow: hidden;
}

.habitacion-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(93, 64, 55, 0.2);
}

.card-image-container {
  position: relative;
  overflow: hidden;
}

.card-image {
  transition: transform 0.3s ease;
}

.habitacion-card:hover .card-image {
  transform: scale(1.05);
}

.price-chip {
  font-weight: 600;
  border-radius: 20px;
}

.capacity-chip {
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.card-title {
  font-size: 1.3rem;
  line-height: 1.3;
}

.card-content {
  padding-bottom: 8px;
}

.detail-dialog {
  width: 700px;
  max-width: 80vw;
}

.text-terracota {
  color: #5D4037;
}



@media (max-width: 768px) {
  .card-title {
    font-size: 1.1rem;
  }
  
  .price-chip {
    font-size: 0.75rem;
  }
  
  .capacity-chip {
    font-size: 0.7rem;
  }
  
  .detail-dialog {
    width: 90vw;
  }
}
</style>