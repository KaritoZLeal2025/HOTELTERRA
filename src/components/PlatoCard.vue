<template>
  <div class="plato-card">
    <div class="plato-image-container">
      <img 
        v-if="plato.imagen"
        :src="plato.imagen"
        :alt="plato.name"
        class="plato-image"
      />
      <div v-else class="plato-placeholder">
        <q-icon :name="plato.icon" size="40px" />
      </div>
    </div>
    
    <div class="plato-info">
      <h3 class="plato-name">{{ plato.name }}</h3>
      <p class="plato-desc">{{ plato.description }}</p>
      <div class="plato-bottom">
        <span class="plato-price">{{ plato.price }}</span>
        <div class="plato-tags">
          <span 
            v-for="feature in plato.features"
            :key="feature"
            class="plato-tag"
          >
            {{ feature }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlatoCard',
  props: {
    plato: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.plato-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  height: 500px;
  display: flex;
  flex-direction: column;
}

.plato-card:hover {
  box-shadow: 0 5px 15px rgba(255, 133, 51, 0.3);
  background: #fff8f5;
}

.plato-image-container {
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.plato-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.plato-placeholder {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}

.plato-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.plato-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  height: 30px;
  overflow: hidden;
  line-height: 1.3;
}

.plato-card:hover .plato-name {
  color: #ff8533;
}

.plato-desc {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
  margin: 0 0 12px 0;
  height: 84px;
  overflow: hidden;
  flex: 1;
}

.plato-card:hover  {
  color: #ff7722;
}

.plato-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.plato-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #d2691e;
}

.plato-card:hover .plato-price {
  color: #ff8533;
}

.plato-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.plato-tag {
  background: #f0f0f0;
  color: #555;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
}

.plato-card:hover .plato-tag {
  background: #ffe8d6;
  color: #ff8533;
}

@media (max-width: 768px) {
  .plato-card {
    height: 350px;
  }
  
  .plato-image-container {
    height: 150px;
  }
  
  .plato-info {
    padding: 12px;
  }
  
  .plato-name {
    font-size: 1.1rem;
    height: 25px;
  }
  
  .plato-desc {
    font-size: 0.85rem;
    height: 70px;
  }
}
</style>