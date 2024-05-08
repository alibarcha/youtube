<template>
  <div class="videoCard w-full">
    <Card class=" overflow-hidden shadow-none">
      <template #header>
        <img
          alt="user header"
          src="https://primefaces.org/cdn/primevue/images/usercard.png"
        />
      </template>
      <template #content>
        <div class="flex justify-content-between ">
          <!-- avatar -->
          <div>
            <Avatar
              image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
              class="mr-3"
              shape="circle"
              style="width: 41px; height: 41px"
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
                <span class="text-sm mr-1 inline-block" style="padding: 1px 0"
                  >Geeky Shows</span
                >
                <i
                  class="pi pi-verified font-semibold"
                  style="font-size: 0.6rem"
                >
                </i>
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
              <!-- aria-haspopup="true"
              aria-controls="toolbarMenu"
              @click="toggletoolbarMenu" -->

            <!-- menu -->
            <!-- <Menu
              ref="toolbarMenu"
              id="toolbarMenu"
              class="w-16rem h-auto font-light"
              style="font-size='10px'"
              :model="toolbarMenuItems"
              :popup="true"
            >
            </Menu> -->
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

const description = ref(
  "Delivery Tracking Django REST Framework ReactJS Project"
);

const { truncateText } = useTruncate(description, 50);

// toolbarMenu
// const toolbarMenu = ref();
// const toolbarMenuItems = ref([
//   { label: "Download", icon: "pi pi-download" },
//   { label: "Search", icon: "pi pi-search" },
// ]);

// const toggletoolbarMenu = (event) => {
//   toolbarMenu.value.toggle(event);
// };
</script>

<style >

.videoCard .p-card-body{
  padding:  3px !important;
}

</style>