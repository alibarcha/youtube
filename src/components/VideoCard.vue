<template>
  <div class="videoCard w-full">
    <Card class="overflow-hidden shadow-none cursor-pointer">
      <template #header>
        <div >
          <iframe
            width="100%"
            height="190"
            src="https://www.youtube.com/embed/uEEWkR1A0Qo?si=plt5lTN27R42wlF-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </template>
      <template #content>
        <div class="flex justify-content-between" @click="watchvideoPage">
          <!-- avatar -->
          <div v-if="avatar">
            <Avatar
              image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
              class="mr-3"
              shape="circle"
              style="width: 41px; height: 41px"
              @click.stop="profilePage"
            />
          </div>
          <!-- content -->
          <div>
            <div>
              <span class="font-medium pt-1 inline-block">{{
                truncateText
              }}</span>
            </div>

            <div class="flex flex-column align-items-start">
              <div class="text-gray-600">
                <span v-if="name" class="text-sm mr-2 inline-block" style="padding: 1px 0"
                  >Geeky Shows
                <i
                  class="pi pi-verified font-semibold"
                  style="font-size: 0.7rem"
                >
                </i>
                </span
                >
              </div>
              <div class="flex align-items-center text-gray-600">
                <span class="text-sm">474 views</span>
                <span class="px-1 text-gray-500">•</span>
                <span class="text-sm">5 days ago </span>
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
import Menu from "primevue/menu";
import { useTruncate } from "../composables/useTruncate.js";

import router from "@/router/index.js";

const props = defineProps({
  name:{
    type:Boolean,
    default:true
  },
  avatar: {
    type: Boolean,
    default: true,
  },
});

const description = ref(
  "Delivery Tracking Django REST Framework ReactJS Project Delivery Tracking Django"
);

const { truncateText } = useTruncate(description, 45);

const watchvideoPage = () => {
  router.push("/watch");
};

const profilePage = () => {
  router.push("/profile");
};
</script>

<style >

.videoCard .p-card-body{
  padding:  3px !important;
}

</style>

<style scoped>
.videoCard:hover iframe{
 transform: scale(1.02);
 transition: all 0.3s ease;
}
</style>