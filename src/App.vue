<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Baskervville+SC:wght@400..700&display=swap');

:root {
  --color-terracota: #5D4037;
  --color-terracota-light: rgba(93, 64, 55, 0.1);
  --bg-light: #f9f6f1;
  --bg-amber-light: #f0ebdc;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Charm', cursive;
}

.charm-regular {
  font-family: "Charm", cursive;
  font-weight: 400;
  font-style: normal;
}

.charm-bold {
  font-family: "Charm", cursive;
  font-weight: 700;
  font-style: normal;
}

#q-app {
  background-color: var(--bg-light);
  overflow-x: hidden;
}

.bg-terracota {
  background: var(--color-terracota) !important;
}

.text-terracota, .text-terracota1 {
  letter-spacing: 1px;
  color: var(--color-terracota);
}

.q-btn--flat.text-terracota:hover {
  background: var(--color-terracota-light);
}

.q-menu {
  box-shadow: 0 3px 15px rgba(0,0,0,0.2);
  border-radius: 8px;
}

.q-carousel, .q-btn, .q-img {
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .q-pa-md {
    padding: 16px;
  }
  
  .text-h3 {
    font-size: 1.8rem;
  }
}
</style>