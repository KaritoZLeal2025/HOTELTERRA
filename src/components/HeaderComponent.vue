<template>
  <q-toolbar class="bg-white text-black shadow-2 rounded-borders toolbar-custom">
    <div class="toolbar-container">
      <div class="logo-section">
        <router-link
          to="/"
          class="text-h3 text-weight-bold text-terracota charm-bold toolbar-title"
          style="text-decoration: none"
        >
          TERRACOTA
        </router-link>
      </div>

      <div class="navigation-menu">
        <q-btn
          flat
          label="Habitaciones"
          class="text-terracota charm-regular nav-btn"
          to="/habitaciones"
        />
        
        <q-btn
          flat
          label="Deportes"
          class="text-terracota charm-regular nav-btn"
          to="/deportes"
        />
        
        <q-btn
          flat
          label="Gastronomia"
          class="text-terracota charm-regular nav-btn"
          to="/gastronomia"
        />
        
        <q-btn
          flat
          label="Servicios"
          class="text-terracota charm-regular nav-btn"
          to="/servicios"
        />
      </div>

      <div class="auth-buttons">
        <q-btn
          unelevated
          label="Mis Reservas"
          class="text-white bg-terracota charm-regular auth-btn"
        />
      </div>
    </div>
  </q-toolbar>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.toolbar-custom {
  padding: 0 20px;
  min-height: 70px;
  width: 100%;
  overflow: hidden;
}

.toolbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
}

.logo-section {
  flex-shrink: 0;
  min-width: fit-content;
}

.toolbar-title {
  font-size: 1.8rem !important;
  white-space: nowrap;
}

.navigation-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 30px;
  flex-wrap: nowrap;
  overflow: hidden;
}

.nav-btn {
  font-size: 0.95rem !important;
  padding: 6px 12px !important;
  letter-spacing: 0.5px;
  flex-shrink: 0;
  white-space: nowrap;
}

.auth-buttons {
  flex-shrink: 0;
  min-width: fit-content;
}

.auth-btn {
  font-size: 0.9rem !important;
  padding: 7px 16px !important;
  border-radius: 4px !important;
  text-transform: capitalize;
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .toolbar-container {
    gap: 15px;
  }
  
  .toolbar-title {
    font-size: 1.5rem !important;
  }
  
  .navigation-menu {
    gap: 20px;
  }
  
  .nav-btn {
    font-size: 0.85rem !important;
    padding: 5px 10px !important;
  }
  
  .auth-btn {
    font-size: 0.8rem !important;
    padding: 6px 12px !important;
  }
}

@media (max-width: 768px) {
  .toolbar-custom {
    padding: 10px 15px;
    min-height: auto;
  }
  
  .toolbar-container {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  
  .logo-section,
  .navigation-menu,
  .auth-buttons {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  .toolbar-title {
    font-size: 1.6rem !important;
    text-align: center;
  }
  
  .navigation-menu {
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .nav-btn {
    font-size: 0.8rem !important;
    padding: 5px 8px !important;
    min-width: 100px;
  }
  
  .auth-btn {
    font-size: 0.8rem !important;
    padding: 6px 14px !important;
  }
}

@media (max-width: 480px) {
  .toolbar-custom {
    padding: 10px;
  }
  
  .toolbar-title {
    font-size: 1.4rem !important;
  }
  
  .navigation-menu {
    gap: 8px;
  }
  
  .nav-btn {
    font-size: 0.75rem !important;
    padding: 4px 6px !important;
    min-width: 80px;
  }
  
  .auth-btn {
    font-size: 0.75rem !important;
    padding: 5px 12px !important;
  }
}
</style>
