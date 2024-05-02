<template>
  <header class="grid px-3">
    <!-- logo -->
    <div class="col-2 flex align-items-center">
      <div>
        <Button
          @click="store.sidebarToggle"
          icon="pi pi-bars"
          severity="secondary"
          rounded
          text
          size="large"
        />
      </div>
      <div class="flex ml-3 pointer"><youtube /></div>
    </div>
    <!-- search -->
    <div class="col-8 flex align-items-center justify-content-center">
      <IconField>
        <InputIcon class="pi pi-search"> </InputIcon>
        <InputText v-model="value1" class="w-64" />
      </IconField>

      <Button
        icon="pi pi-microphone"
        severity="secondary"
        rounded
        size="large"
        v-tooltip.bottom="'Search with your voice'"
        placeholder="Bottom"
        class="ml-4"
      />
    </div>
    <!-- icons -->
    <div class="col-2 flex align-items-center justify-content-evenly border-1">
      <Button
        icon="pi pi-video"
        severity="secondary"
        rounded
        text
        size="large"
        v-tooltip.bottom="'Create'"
        placeholder="Bottom"
      />
      <Button
        icon="pi pi-bell"
        severity="secondary"
        rounded
        text
        size="large"
        v-tooltip.bottom="'Notification'"
        placeholder="Bottom"
      />

      <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png"
        class="mr-2 pointer"
        shape="circle"
        size="normal"
        style="background-color: #ece9fc"
      />
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useMainStore } from "../stores/index";
import Avatar from "primevue/avatar";
import youtube from "../components/icons/youtube.vue";
import Button from "primevue/button";
import IconField from "primevue/iconfield";
import InputText from "primevue/inputtext";
import InputIcon from "primevue/inputicon";

const store = useMainStore();

const value1 = ref("sjhsk");
</script>

<style scoped>
header{
 border: 1px solid;
}
.col{
    border: 1px solid;
}

</style>