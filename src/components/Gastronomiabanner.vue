<template>
  <div class="gastronomia-banner">
    <div class="banner-overlay">
      <div class="container">
        <div class="banner-content">
          <h1>Gastronomía</h1>
          <p>No solo hospedamos tu cuerpo, tambien, deleitamos tu paladar</p>

          <div class="banner-features">
            <div class="feature-item">
              <span>Cocina Gourmet</span>
            </div>
            <div class="feature-item">
              <span>Chefs Expertos</span>
            </div>
            <div class="feature-item">
              <span>Ingredientes Premium</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Gastronomiabanner",
});
</script>

<style scoped>
.gastronomia-banner {
  background-image: url("https://i.pinimg.com/originals/11/c3/43/11c343f04d0c0bf85a74bfccfd872f01.gif");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 70vh;
  min-height: 400px;
  position: relative;
  z-index: 1;

  background-color: #8b4513;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
}

.banner-content {
  color: white;
  text-align: center;
  z-index: 3;
  position: relative;
}

.banner-content h1 {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.banner-content p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.banner-features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.8rem 1.2rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  font-weight: 500;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .gastronomia-banner {
    height: 60vh;
    min-height: 500px;
    background-attachment: scroll;
  }

  .banner-content h1 {
    font-size: 2.5rem;
  }

  .banner-content p {
    font-size: 1.1rem;
  }

  .banner-features {
    gap: 1rem;
  }

  .feature-item {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
  }

  .container {
    padding: 0 1rem;
  }
}
</style>