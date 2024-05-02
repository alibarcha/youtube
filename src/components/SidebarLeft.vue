
<template>
  <div class="card flex justify-content-center">
    <Sidebar v-model:visible="store.sidebarState">
      <template #container="{ closeCallback }">
        <div class="flex flex-column h-full">
          <div
            class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0"
          >
            <span class="inline-flex align-items-center gap-2">
              <Button
                @click="store.sidebarToggle"
                icon="pi pi-bars"
                severity="secondary"
                rounded
                text
                size="large"
              />
              <div class="flex pointer"><youtube /></div>
            </span>
          </div>
          <div class="overflow-y-auto">
            <ul class="list-none p-3 m-0">
              <li>
                <ul class="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-home mr-3"></i>
                      <span class="font-medium">Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-tiktok mr-3"></i>
                      <span class="font-medium">Shorts</span>
                    </a>
                  </li>

                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-youtube mr-3"></i>
                      <span class="font-medium">Subscriptions</span>
                      <span
                        class="inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle"
                        style="min-width: 1.5rem; height: 1.5rem"
                        >3</span
                      >
                    </a>
                  </li>
                  <hr
                    class="mb-3 mx-3 border-top-1 border-none surface-border"
                  />
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <span class="font-bold">You</span>
                      <i class="pi pi-angle-right ml-2"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-address-book mr-3"></i>
                      <span class="font-medium">Your channel</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-history mr-3"></i>
                      <span class="font-medium">History</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-list-check mr-3"></i>
                      <span class="font-medium">Playlist</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-video mr-3"></i>
                      <span class="font-medium">Your videos</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-clock mr-3"></i>
                      <span class="font-medium">Watch later</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-thumbs-up mr-3"></i>
                      <span class="font-medium">Liked videos</span>
                    </a>
                  </li>
                </ul>

                <!-- subsciptions -->
                <ul class="list-none p-0 m-0 overflow-hidden">
                  <hr
                    class="mb-3 mx- border-top-1 border-none surface-border"
                  />
                  <div class="pl-3 mb-2 font-semibold">Subscriptions</div>
                  <li v-for="a in 5" :key="a">
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer px-3 py-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <Avatar
                        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                        class="mr-3"
                        shape="circle"
                      />
                      <span>Ali Haider </span>
                    </a>
                  </li>
                </ul>

                <!-- Explore -->
                <ul class="list-none p-0 m-0 overflow-hidden">
                  <hr
                    class="mb-3 mx- border-top-1 border-none surface-border"
                  />
                  <div class="pl-3 mb-2 font-semibold">Explore</div>
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-bullseye mr-3"></i>
                      <span class="font-medium">Trending</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-headphones mr-3"></i>
                      <span class="font-medium">Music</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-objects-column mr-3"></i>
                      <span class="font-medium">Gaming</span>
                    </a>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-id-card mr-3"></i>
                      <span class="font-medium">News</span>
                    </a>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-trophy mr-3"></i>
                      <span class="font-medium">Sports</span>
                    </a>
                  </li>
                </ul>

                <!-- tools -->
                <ul class="list-none p-0 m-0 overflow-hidden">
                  <hr
                    class="mb-3 mx- border-top-1 border-none surface-border"
                  />

                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-cog mr-3"></i>
                      <span class="font-medium">Setting</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-flag mr-3"></i>
                      <span class="font-medium">Report history</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-question-circle mr-3"></i>
                      <span class="font-medium">Help</span>
                    </a>
                    <a
                      v-ripple
                      class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    >
                      <i class="pi pi-comments mr-3"></i>
                      <span class="font-medium">Send feedback</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
            <a
              v-ripple
              class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
            >
              <Avatar
                image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                shape="circle"
              />
              <span class="font-bold">Amy Elsner</span>
            </a>
          </div>
        </div>
      </template>
    </Sidebar>
  </div>
</template>

<script setup>
import { useMainStore } from "../stores/index";
import { ref } from "vue";
import Sidebar from "primevue/sidebar";
import youtube from "../components/icons/youtube.vue";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
const store = useMainStore();

const visible = ref(store.sidebarState);
</script>
