<template>
  <div class="videoCard w-full">
    <Card class="overflow-hidden shadow-none">
      <template #header>
        <div>
          <iframe
            width="100%"
            height="410"
            src="https://www.youtube.com/embed/uEEWkR1A0Qo?si=plt5lTN27R42wlF-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="border-round-lg"
          ></iframe>
        </div>
      </template>
      <template #content>
        <span class="font-bold mb-3 mt-2 inline-block text-black-alpha-90"
          >Gross domestic product Explained</span
        >
        <div class="flex md:flex-row flex-column md:justify-content-between">
          <div class="flex align-items-center">
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
            <div class="flex flex-column align-items-start">
              <div class="text-gray-600">
                <span class="text-sm font-semibold mr-2 inline-block"
                  >Geeky Shows</span
                >
                <i
                  class="pi pi-verified font-semibold"
                  style="font-size: 0.7rem"
                >
                </i>
              </div>
              <div class="flex align-items-center text-gray-600">
                <span class="text-sm">4.34M subscribers </span>
              </div>
            </div>
            <div class="md:ml-4 ml-2">
              <Button
                label="Subscribe"
                rounded
                class="bg-black-alpha-90  border-0 "
              />
            </div>
          </div>
          <!-- tools -->
          <div class="md:mt-0 mt-3">
            <ButtonGroup severity="secondary" rounded >
              <Button
                label="53k"
                icon="pi pi-thumbs-up"
                severity="secondary"
                rounded
              />
              <Button
                label="10"
                icon="pi pi-thumbs-down"
                severity="secondary"
                rounded
              />
            </ButtonGroup>
            <Button
              label="Share"
              icon="pi pi-reply"
              severity="secondary"
              rounded
              class="mx-2"
            />
            <Button icon="pi pi-ellipsis-h" class="md:mt-0 mt-2" severity="secondary" rounded />
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
import ButtonGroup from "primevue/buttongroup";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import { useTruncate } from "../composables/useTruncate.js";

const description = ref(
  "Delivery Tracking Django REST Framework ReactJS Project Delivery Tracking Django"
);

const { truncateText } = useTruncate(description, 45);
</script>

<style >

.videoCard .p-card-body{
  padding:  3px !important;
}

</style>