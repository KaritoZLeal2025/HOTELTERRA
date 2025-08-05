<template>
  <div class="imagenes-grid q-mt-xl">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-4" v-for="(imagen, index) in imagenes" :key="index">
        <q-img 
          :src="imagen" 
          style="height: 300px;" 
          class="rounded-borders shadow-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagenes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.imagenes-grid {
  max-width: 1200px;
  margin: 0 auto;
}
</style>