<template>
  <div class="grid border-1  mx-8">
    <div class="lg:col-8 border-1">
      <WatchVideoCard></WatchVideoCard>
    </div>
    <div class="lg:col-4 lg:mt-0 mt-4 px-4 flex flex-column gap-3">
      <VideoCard :avatar="false" v-for="i in 5" :key="i" />
    </div>
  </div>
</template>

<script setup>
import WatchVideoCard from "@/components/WatchVideoCard.vue";
import VideoCard from "@/components/VideoCard.vue";
</script>

<style>

</style>