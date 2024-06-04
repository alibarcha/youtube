<template>
  <div class="grid">

    <div v-if="loading">
      loading...
    </div>
    <div v-else-if="error">{{ error.message }}</div>

    <div v-else class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 px-2" v-for="(item,i) in videos.items" :key="i">
      <VideoCard :item="item" :avatar="true"  />
    </div>

  </div>


</template>

<script setup>
import VideoCard from "@/components/VideoCard.vue";
import { ref,onMounted } from "vue";
import { useMainStore } from "../stores/index";
const store = useMainStore();

const videos = ref([]);
const loading = ref(true);
const error = ref(null);
// console.log(videos)

const fetchVideos=async()=>{
  try {
    const response=await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&regionCode=US&key=${store.apiKey}`);
    if(!response.ok){
      throw new Error('Network response was not ok')
    }
    videos.value=await response.json();
    
  } catch (err) {
    error.value=err;
  }
  finally{
    loading.value=false;
  }
};

onMounted(()=>{
  fetchVideos();
})




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
