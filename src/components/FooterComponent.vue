<template>
  <footer class="footer bg-terracota text-white q-pa-md">
    <div class="text-center">
      <div class="social-icons q-mb-sm">
        <a href="#" class="social-icon">
          <q-icon name="img:https://cdn-icons-png.flaticon.com/512/124/124010.png" size="24px" />
        </a>
        <a href="#" class="social-icon">
          <q-icon name="img:https://cdn-icons-png.flaticon.com/512/2111/2111463.png" size="24px" />
        </a>
        <a href="#" class="social-icon">
          <q-icon name="img:https://cdn-icons-png.flaticon.com/512/733/733579.png" size="24px" />
        </a>
      </div>

      <div class="text-caption q-mb-xs">
        &copy; {{ currentYear }} Hecho por Luisa y Karol
      </div>

      <div class="text-caption">
        <a href="#" class="text-white" style="text-decoration: none;">Política de privacidad</a>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FooterComponent',
  setup() {
    const currentYear = ref(new Date().getFullYear())

    return {
      currentYear
    }
  }
}
</script>

<style scoped>
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 8px 0;
}

.social-icon {
  color: white;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.1);
}
</style>