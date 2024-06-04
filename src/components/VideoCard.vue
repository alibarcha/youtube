<template>
  <div class="videoCard w-full">
    <Card class="overflow-hidden shadow-none cursor-pointer">
      <template #header>
        <div>
          <iframe
            :src="`https://www.youtube.com/embed/${item.id}`"
            width="100%"
            height="195"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="border-round-bottom-lg"
          ></iframe>
        </div>
      </template>
      <template #content>
        <div class="flex justify-content-between" @click="watchvideoPage">
          <!-- avatar -->
          <div v-if="avatar">
            <Avatar
              :image="channelAvatar"
              class="mr-3"
              shape="circle"
              style="width: 41px; height: 41px"
              @click.stop="profilePage"
            />
          </div>
          <!-- content -->
          <div>
            <div>
              <span class="font-medium pt-1 inline-block">{{ item.snippet.title.slice(0, 45) + (item.snippet.title.length > 45 ? '...' : '') }}</span>
            </div>

            <div class="flex flex-column align-items-start">
              <div class="text-gray-600">
                <span class="text-sm mr-2 inline-block" style="padding: 1px 0">
                  {{ item.snippet.channelTitle.slice(0, 20) + (item.snippet.channelTitle.length > 20 ? '...' : '') }}
                <i class="pi pi-verified font-semibold" style="font-size: 0.7rem"></i>
                </span>
              </div>
              <div class="flex align-items-center text-gray-600">
                <span class="text-sm">{{ item.statistics.viewCount }} views</span>
                <span class="px-1 text-gray-500">•</span>
                <span class="text-sm">5 days ago</span>
              </div>
            </div>
          </div>
          <!-- icon menu -->
          <div>
            <Button
              icon="pi pi-ellipsis-v"
              severity="secondary"
              rounded
              text
              size="small"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "primevue/card";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import router from "@/router/index.js";
import { useMainStore } from "../stores/index";
const store = useMainStore();

const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
  name: {
    type: Boolean,
    default: true,
  },
  avatar: {
    type: Boolean,
    default: true,
  },
});

console.log(props.item)
const channelAvatar = ref("https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"); 

// Fetch channel avatar if needed
const fetchChannelAvatar = async (channelId) => {
  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${store.apiKey}`);
    const data = await response.json();
    channelAvatar.value = data.items[0].snippet.thumbnails.default.url;
  } catch (err) {
    console.error("Error fetching channel avatar:", err);
  }
};

// Fetch the channel avatar when the component is mounted
if (props.avatar && props.item.snippet.channelId) {
  fetchChannelAvatar(props.item.snippet.channelId);
}

const watchvideoPage = () => {
  router.push("/watch");
};

const profilePage = () => {
  router.push("/profile");
};
</script>

<style scoped>
.videoCard .p-card-body {
  padding: 3px !important;
}

.videoCard:hover iframe {
  transform: scale(1.02);
  transition: all 0.3s ease;
}
</style>
