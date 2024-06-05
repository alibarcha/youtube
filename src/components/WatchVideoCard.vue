<template>
  <div class="videoCard w-full">
    <Card class="overflow-hidden shadow-none">
      <template #header>
        <div>
          <iframe width="100%" height="410" :src="`https://www.youtube.com/embed/${videoId}`"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="border-round-lg"></iframe>
        </div>
      </template>
      <template #content>
        <span class="font-bold mb-3 mt-2 inline-block text-black-alpha-90">{{ videoTitle }}</span>
        <div class="flex md:flex-row flex-column md:justify-content-between">
          <div class="flex align-items-center ">
            <!-- Avatar  -->
            <div>
              <RouterLink to="/profile">
                <Avatar :image="channelAvatarUrl"
                  class="mr-3 cursor-pointer" shape="circle" style="width: 41px; height: 41px" />
              </RouterLink>
            </div>
            <!-- content -->
            <div class="flex flex-column align-items-start">
              <div class="text-gray-600">
                <span class="text-sm font-semibold mr-2 inline-block">{{ channelTitle }}</span>
                <i class="pi pi-verified font-semibold" style="font-size: 0.7rem">
                </i>
              </div>
              <div class="flex align-items-center text-gray-600">
                <span class="text-sm">{{ formattedSubscriberCount }} subscribers </span>
              </div>
            </div>
            <div class="md:ml-4 ml-2">
              <Button label="Subscribe" rounded class="bg-black-alpha-90  border-0 " />
            </div>
          </div>
          <!-- tools -->
          <div class="md:mt-0 mt-3">
            <ButtonGroup severity="secondary" rounded>
              <Button :label="formattedLikeCount"  icon="pi pi-thumbs-up" severity="secondary" rounded />
              <Button label="10" icon="pi pi-thumbs-down" severity="secondary" rounded />
            </ButtonGroup>
            <Button label="Share" icon="pi pi-reply" severity="secondary" rounded class="mx-2" />
            <Button icon="pi pi-ellipsis-h" class="md:mt-0 mt-2" severity="secondary" rounded />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref,watch } from "vue";
import Card from "primevue/card";
import Button from "primevue/button";
import ButtonGroup from "primevue/buttongroup";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import { useTruncate } from "../composables/useTruncate.js";
import { formatViewCount } from '../composables/formatViews';
import { getRelativeTime } from '../composables/getRelativeTime';
import { useFetch } from '../composables/fetch.js';
import { useMainStore } from "../stores/index.js";
const store = useMainStore();

const props = defineProps({
  videoId: {
    type: String,
    default: ''
  }
})

const description = ref(
  "Delivery Tracking Django REST Framework ReactJS Project Delivery Tracking Django"
);

const { truncateText } = useTruncate(description, 45);

// fetch specific video
const videoTitle = ref('');
const channelTitle = ref('');
const channelAvatarUrl = ref('');
const formattedSubscriberCount = ref('');
const formattedLikeCount = ref('');

const { data, error, isLoading, getRequest, postRequest } = useFetch();

const fetchData = () => {
  const apiKey = store.apiKey;
  if (!apiKey) {
    console.error('API key is missing');
    return;
  }
  getRequest(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${props.videoId}&key=${apiKey}`);
};

watch(data, (newData) => {
  if (newData && newData.items && newData.items.length > 0) {
    const videoData = newData.items[0];
    videoTitle.value = videoData.snippet.title;
    channelTitle.value = videoData.snippet.channelTitle;
    formattedSubscriberCount.value = formatViewCount(videoData.statistics.subscriberCount);
    formattedLikeCount.value = formatViewCount(videoData.statistics.likeCount);
    channelAvatarUrl.value = 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png';
  }
});

fetchData();

console.log(data)






</script>

<style>
.videoCard .p-card-body {
  padding: 3px !important;
}
</style>