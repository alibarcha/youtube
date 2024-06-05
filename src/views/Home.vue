<template>
  <div class="grid">

    <div v-if="loading">
      loading...
    </div>
    <div v-else-if="error">{{ error.message }}</div>

    <div v-else class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 px-2" v-for="(item, i) in videos.items" :key="i">
      <VideoCard :item="item" :avatar="true" />
    </div>

  </div>


</template>

<script setup>
import VideoCard from "@/components/VideoCard.vue";
import { ref, onMounted } from "vue";
import { useFetch } from '../composables/fetch.js';
import { useMainStore } from "../stores/index";
const store = useMainStore();

// get data
const { data: videos, error, isLoading: loading, getRequest, postRequest } = useFetch();

const fetchData = () => {
  const apiKey = store.apiKey;
  if (!apiKey) {
    console.error('API key is missing');
    return;
  }
  getRequest(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=3&regionCode=US&key=${store.apiKey}`);
}

fetchData();





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
