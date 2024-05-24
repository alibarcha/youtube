<template>
  <div class="grid">
    <div
      class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 px-2"
      v-for="i in 12"
      :key="i"
    >
      <VideoCard :avatar="true"  />
    </div>
  </div>
</template>

<script setup>
import VideoCard from "@/components/VideoCard.vue";

</script>

<style scoped>
.grid {
  padding: 10px;
}

.col-12 {
  padding: 10px;
}
.border-1 {
  border: 1px solid #ccc;
}
</style>
