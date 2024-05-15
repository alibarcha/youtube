<template>
  <div class="accordion-item my-3 border-round-2xl bg-gray-100">
    <div
      class="accordion-header p-3 border-round-2xl bg-gray-100 cursor-pointer over max-h-6rem"
      v-if="!isOpen"
      @click="toggleAccordion"
    >
      <slot></slot>
      <Button
        v-if="!isOpen"
        label="more"
        rounded
        class="bg-transparent text-black-alpha-90 border-0 outline-none p-0 border-transparent"
      />
    </div>
    <div class="accordion-content p-3" :class="{ active: isOpen }">
      <slot></slot>
      <div class="footer">
        <Button
          label="Show less"
          rounded
          class="bg-transparent text-black-alpha-90 border-0 outline-none p-0 border-transparent mt-2"
          @click="isOpen = false"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "primevue/button";

const isOpen = ref(false);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>

.accordion-content {
  display: none;
}
.accordion-content.active {
  display: block;
}
</style>
