<template>
  <q-toolbar class="bg-white text-black shadow-2 rounded-borders toolbar-custom">
    <router-link to="/" class="text-h3 text-weight-bold text-terracota charm-bold toolbar-title" style="text-decoration: none">
      TERRACOTA
    </router-link>

    






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
  label="servicios" 
  class="text-terracota charm-regular nav-btn" 
  to="/servicios"
/>

    <div class="row items-center q-gutter-sm auth-buttons">
     
      <q-btn unelevated label="Mis Reservas" class="text-white bg-terracota charm-regular auth-btn" />
    </div>
  </q-toolbar>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.toolbar-custom {
  padding: 0 20px;
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toolbar-title {
  font-size: 1.8rem !important;
  margin-left: 150px; 
  margin-right: auto; 
  flex-shrink: 0;
  white-space: nowrap;
}

.navigation-menu {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-left: -100px; }

.nav-btn {
  font-size: 0.95rem !important;
  padding: 6px 12px !important;
  letter-spacing: 0.5px;
  margin-right: 50px;
  margin-left: 100px;
}

.auth-buttons {
  margin-right: 125px;
}

.auth-btn {
  font-size: 0.9rem !important;
  padding: 7px 16px !important;
  border-radius: 4px !important;
  text-transform: capitalize;
}

@media (max-width: 1024px) {
  .toolbar-title {
    font-size: 1.5rem !important;
    margin-left: 30px;
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
    flex-direction: column;
    padding: 15px;
    min-height: auto;
  }
  
  .toolbar-title {
    margin: 10px 0;
    font-size: 1.6rem !important;
    text-align: center;
    width: 100%;
    margin-left: 0;
  }
  
  .navigation-menu {
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px 0;
    width: 100%;
    margin-left: 0;
  }
  
  .nav-btn {
    font-size: 0.8rem !important;
    padding: 5px 8px !important;
    margin: 3px;
  }
  
  .auth-buttons {
    margin: 10px 0;
    width: 100%;
    justify-content: center;
  }
  
  .auth-btn {
    font-size: 0.8rem !important;
    padding: 6px 14px !important;
    margin: 0 5px;
  }
}
</style>