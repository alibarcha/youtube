<template>
  <div class="logo-container">
    <!-- Responsive SVG logo -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :width="svgWidth" 
      :height="svgHeight"  
      aria-hidden="true"
    >
      <!-- Background path with a custom color -->
      <path
        fill="#059669"
        d="M23.5,6.6c-0.3-1.2-1.2-2.2-2.4-2.5C18.9,3.6,12,3.6,12,3.6s-6.9,0-9.1,0.5c-1.1,0.3-2.1,1.3-2.4,2.5
         C0,8,0,12,0,12s0,4,0.5,5.4c0.3,1.2,1.2,2.2,2.4,2.5c2.2,0.5,9.1,0.5,9.1,0.5s6.9,0,9.1-0.5c1.1-0.3,2.1-1.3,2.4-2.5
         C24,16,24,12,24,12S24,8,23.5,6.6z"
      />
      <!-- Play button -->
      <path fill="#FFFFFF" d="M9.5,15.5l6.5-3.5l-6.5-3.5V15.5z" />
    </svg>

    <span class="logo-text">YouWatch</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Reactive SVG width and height based on screen size
const svgWidth = ref(31);
const svgHeight = ref(31);


const updateSvgSize = () => {
  if (window.innerWidth <= 660) {
    svgWidth.value = 23;  
    svgHeight.value = 23; 
  } else {
    svgWidth.value = 31; 
    svgHeight.value = 31;  
  }
};

window.addEventListener('resize', updateSvgSize);


updateSvgSize();

</script>

<style scoped>
.logo-container {
  display: flex !important;
  align-items: center !important;
}

.logo-text {
  font-size: 1rem;
  color: #059669;
  font-weight: 600;
  padding-left: 3px;
}

@media (max-width: 660px) {
  .logo-text {
    font-size: 0.6rem;
    font-weight: 600;
  }
}
</style>
