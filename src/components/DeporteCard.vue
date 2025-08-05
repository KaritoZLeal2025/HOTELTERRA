<template>
  <q-card class="deporte-card">
    <q-img :src="deporte.imagen" :alt="deporte.nombre" style="height: 200px;" />

    <q-card-section class="q-pa-md">
      <div class="text-h6 charm-bold text-terracota">{{ deporte.nombre }}</div>

      <q-rating
        v-if="deporte.estrellas"
        :model-value="deporte.estrellas"
        max="5"
        size="20px"
        color="amber"
        icon="star"
        readonly
        class="q-mt-sm"
      />

      <div class="q-mt-xs text-subtitle2 text-grey-7">Precio: €{{ deporte.precio }}</div>

      <div class="q-mt-sm charm-regular">{{ deporte.descripcion }}</div>

      <q-btn
        @click="$emit('ver-detalles', deporte)"
        label="Ver Detalles"
        flat
        color="terracota"
        class="q-mt-md"
      />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'DeporteCard',
  props: {
    deporte: Object
  }
}
</script>

<style scoped>
.deporte-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.deporte-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
