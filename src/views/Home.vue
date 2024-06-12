<template>
  <!-- tabs header -->
  <div>
    <TabsHeader :tabs="tabs"></TabsHeader>
  </div>
  <div class="grid">
    <div v-if="loading">
      Loading...
    </div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 px-2" v-for="(item, i) in videos" :key="i">
      <VideoCard :item="item" :avatar="true" />
    </div>
    <div v-if="loadingMore" class="loading-more">
      Loading more...
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import VideoCard from "@/components/VideoCard.vue";
import { useFetch } from '../composables/fetch.js';
import { useMainStore } from "../stores/index";
import TabsHeader from "@/components/TabsHeader.vue"

const store = useMainStore();
const videos = ref([]);
const pageToken = ref(null);
const loading = ref(true);
const loadingMore = ref(false);
const error = ref(null);

const { data, getRequest } = useFetch();

const fetchData = async (loadMore = false) => {
  const apiKey = store.apiKey;
  if (!apiKey) {
    console.error('API key is missing');
    return;
  }

  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=12&regionCode=US&key=${apiKey}`
    + (pageToken.value ? `&pageToken=${pageToken.value}` : '');

  try {
    if (loadMore) {
      loadingMore.value = true;
    } else {
      loading.value = true;
    }
    await getRequest(url);
    if (data.value) {
      videos.value = loadMore ? [...videos.value, ...data.value.items] : data.value.items;
      pageToken.value = data.value.nextPageToken || null;
    }
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
    loadingMore.value = false;
  }
};

const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    if (pageToken.value && !loadingMore.value) {
      fetchData(true);
    }
  }
};

const tabs = ref([
  { title: 'All' },
  { title: 'Javascript' },
  { title: 'Responsive' },
  { title: 'History' },
  { title: '4K resolution' },
  { title: 'Skills ' },
  { title: 'AI' },
  { title: 'Self-confidence' },
  { title: 'Mountains' },
  { title: 'Words' },
  { title: 'Features Phones' },
  { title: 'Watched' },
  { title: 'Thoughts' },
  { title: 'Web Development' },
  { title: 'Git' },
  { title: 'Operating System' },
])


onMounted(() => {
  fetchData();
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


<style scoped>
.grid {
  padding: 10px;
}

.col-12 {
  padding: 10px;
}
</style>
