<template>
  <q-card class="servicio-card">
    <q-img :src="servicio.imagen" :alt="servicio.nombre" style="height: 200px;" />

    <q-card-section class="q-pa-md">
      <div class="text-h6 charm-bold text-terracota">{{ servicio.nombre }}</div>

      <q-rating
        v-if="servicio.estrellas"
        :model-value="servicio.estrellas"
        max="5"
        size="20px"
        color="amber"
        icon="star"
        readonly
        class="q-mt-sm"
      />

      <div class="q-mt-xs text-subtitle2 text-grey-7">Precio: €{{ servicio.precio }}</div>

      <div class="q-mt-sm charm-regular">{{ servicio.descripcion }}</div>

      <q-btn
        @click="$emit('ver-detalles', servicio)"
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
  name: 'ServicioCard',
  props: {
    servicio: Object
  }
}
</script>

<style scoped>
.servicio-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.servicio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
