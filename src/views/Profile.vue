<template>
  <div class="lg:mx-6  mx-1  profile-wrap">

    <div class="grid justify-content-center ">
      <div class="lg:col-8 col-12 ">
        <div class="flex md:flex-row flex-column md:justify-content-between">
          <div class="flex lg:align-items-center ">
            <!-- Avatar  -->
            <div>
              <Avatar :image="channelAvatarUrl" class="mr-3 lg:w-10rem w-6rem  lg:h-10rem h-6rem" shape="circle" />
            </div>
            <!-- content -->
            <div class="flex flex-column align-items-start lg:ml-2 ml-0">
              <h1 class="font-semibold m-0">
                {{ channelTitle }}
              </h1>
              <div class="flex  flex-wrap text-gray-600 my-1">
                <span> {{ getCustomUrl }}</span>
                <span class="px-1 text-gray-500">•</span>
                <span> {{ formattedSubscriberCount }} subscribers </span>
                <span class="px-1 text-gray-500">•</span>
                <span>{{ getVideosCount }} videos </span>
              </div>

              <span @click="visible = true" class="cursor-pointer mt-1 inline-block text-gray-600 mb-1">
                {{ store.channelData?.items[0]?.snippet.description }} <span
                  class="font-s emibold">...more</span></span>
              <Button label="Subscribe" rounded class="bg-black-alpha-90 mt-2  border-0 " />
            </div>

          </div>

        </div>
      </div>
    </div>

    <!-- videos content -->
    <div class="mt-4">
      <div class="card">
        <TabView>
          <TabPanel header="Home">
            <h3 class="font-bold mb-3 mt-0">All Videos</h3>
            <div class="grid">
              <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 px-2" v-for="i in 12" :key="i">
                <!-- <VideoCard :avatar="false" :name="false" /> -->
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Videos">
            <div class="grid">
              <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 px-2" v-for="i in 12" :key="i">
                <!-- <VideoCard :avatar="false" :name="false" /> -->
              </div>
            </div>
          </TabPanel>

          <TabPanel header="Live">
            <div class="mb-4 mt-2 ">
              <Button label="Latest" severity="secondary" />
              <Button label="Popular" severity="secondary" class="mx-2" />
              <Button label="Oldest" severity="secondary" />
            </div>
            <div class="grid">
              <div class="col-12 sm:col-6 md:col-6 lg:col-4 xl:col-3 px-2" v-for="i in 8" :key="i">
                <!-- <VideoCard :avatar="false" :name="false" /> -->
              </div>
            </div>
          </TabPanel>


        </TabView>
      </div>
    </div>

  </div>

  <!-- modal -->
  <Dialog v-model:visible="visible" modal header="About" :draggable="false" :style="{ width: '560px' }" dismissableMask
    :breakpoints="{ '1199px': '75vw', '575px': '380px' }">
    <p class="p-0 m-0 font-light">
      {{ store.channelData?.items[0]?.snippet.description }}
    </p>
    <!-- links -->
    <div>
      <h3 class="font-semibold mb-2">Links</h3>
      <div>
        <div class="flex align-items-center">
          <i class="pi pi-link" style="font-size: 1.4rem"></i>
          <div class="ml-3">
            <div class="m-0 font-semibold">Website</div>
            <a href="" class="inline-block ">the-{{ getCustomUrl
              }}</a>
          </div>
        </div>

      </div>

      <div class="mt-3">
        <div class="flex align-items-center">
          <i class="pi pi-discord" style="font-size: 1.4rem"></i>
          <div class="ml-3">
            <div class="m-0 font-semibold">Discord</div>
            <a href="" class="inline-block ">discord.com</a>
          </div>
        </div>

      </div>

    </div>

    <!-- Channel details -->
    <div>
      <h3 class="font-semibold mb-3">Channel details</h3>

      <div class="flex align-items-center mt-3">
        <i class="pi pi-globe" style="font-size: 1.4rem"></i>
        <div class="ml-3">
          <a href="" class="inline-block ">www.youtube.com/{{ getCustomUrl
            }}</a>
        </div>

      </div>

      <div class="flex align-items-center mt-3">
        <i class="pi pi-users" style="font-size: 1.4rem"></i>
        <div class="ml-3">
          <span href="" class="inline-block ">{{ formattedSubscriberCount }} subscribers</span>
        </div>
      </div>

      <div class="flex align-items-center mt-3">
        <i class="pi pi-video" style="font-size: 1.4rem"></i>
        <div class="ml-3">
          <span href="" class="inline-block ">{{ getVideosCount }} videos</span>
        </div>
      </div>

      <div class="flex align-items-center mt-3">
        <i class="pi pi-chart-line" style="font-size: 1.4rem"></i>
        <div class="ml-3">
          <span href="" class="inline-block ">{{ parseInt(getViewsCount).toLocaleString() }} views</span>
        </div>
      </div>

      <div class="flex align-items-center mt-3">
        <i class="pi pi-exclamation-circle" style="font-size: 1.4rem"></i>
        <div class="ml-3">
          <span href="" class="inline-block ">{{ formattedJoinDate }}</span>
        </div>
      </div>

      <div class="flex align-items-center mt-3" v-if="store.channelData?.items[0].snippet.country">
        <i class="pi pi-map-marker" style="font-size: 1.4rem"></i>
        <div class="ml-3">
          <span href="" class="inline-block ">{{
            store.channelData?.items[0].snippet.country }}</span>
        </div>
      </div>

    </div>

    <!-- actions -->
    <div class="mt-4">
      <Button label="Share channel" icon="pi pi-send" :severity="comment ? 'info' : 'secondary'" rounded
        class="border-0" />
      <Button label="Report user" icon="pi pi-flag" :severity="comment ? 'info' : 'secondary'" rounded
        class="border-0 ml-2 " />
    </div>
  </Dialog>

</template>

<script setup>
import { onMounted, ref, watch, computed } from "vue";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import Dialog from 'primevue/dialog';
import { formatViewCount } from '../composables/formatViews';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import { useFetch } from '../composables/fetch.js';

import VideoCard from "@/components/VideoCard.vue";
import { useRoute } from "vue-router";
import { useMainStore } from "../stores/index.js";
const store = useMainStore();
const route = useRoute();
const visible = ref(false);

// get specific channel id
const channelId = route.params.channelId;


// channel data
const channelTitle = ref('');
const channelAvatarUrl = ref('');
const getViewsCount = ref('');
const getVideosCount = ref('');
const formattedSubscriberCount = ref('');
const getCustomUrl = ref('');

watch(() => store.channelData, (newData) => {
  if (newData && newData.items && newData.items.length > 0) {
    channelTitle.value = store.getChannelTitle;
    channelAvatarUrl.value = store.getChannelAvatar;
    getViewsCount.value = store.getViewsCount.toLocaleString();
    getVideosCount.value = store.getVideosCount;
    getCustomUrl.value = store.getCustomUrl;
    formattedSubscriberCount.value = formatViewCount(store.getSubscriberCount);
  }
});
onMounted(() => {
  store.fetchChannelData(channelId);
})


const formattedJoinDate = computed(() => {
  if (!store.channelData || !store.channelData.items || store.channelData.items.length === 0) {
    return 'Date not available';
  }
  const dateStr = store.channelData.items[0].snippet.publishedAt;
  const date = new Date(dateStr);
  const formattedDate = date.toLocaleDateString('en-US', '');
  return `Joined ${formattedDate}`
})


</script>

<style>
.profile-wrap .p-dialog-header {
  padding: 15px auto !important;
}
</style>