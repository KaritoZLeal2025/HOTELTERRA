<template>
  <div>
    <div class="q-pa-md">
      <HeaderComponent />
    </div>

    <div class="q-pa-md">
      <HeroCarousel />
    </div>

    <DiscoverSection />
        
    <HistorySection />

    <TestimoniosSection/>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import HeroCarousel from '../components/HeroCarousel.vue'
import DiscoverSection from '../components/DiscoverSection.vue'
import HistorySection from '../components/HistorySection.vue'
import TestimoniosSection from '../components/TestimoniosSection.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    HeroCarousel,
    DiscoverSection,
    HistorySection,
    TestimoniosSection,
    FooterComponent
  }
}
</script>