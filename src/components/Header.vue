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
    <!-- search box -->
    <div class="col-8 flex align-items-center justify-content-center">
      <InputGroup class="w-8 h-3rem border-round-3xl">
        <InputText
          ref="searchInput"
          placeholder="Search"
          v-model="searchValue"
          class="w-full h-3rem shadow-none border-round-left-3xl outline-none"
          :class="searchType ? 'border-right-none' : ''"
          @input="userTypeText"
        />
        <InputGroupAddon
          v-if="searchType"
          @click="clearSearchText"
          class="px-0 border-left-none border-right-none cursor-pointer"
        >
          <i class="pi pi-times"></i
        ></InputGroupAddon>
        <InputGroupAddon
          class="border-round-right-3xl px-4 font-bold bg-gray-50 cursor-pointer"
        >
          <i class="pi pi-search"></i>
        </InputGroupAddon>
      </InputGroup>

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
import { ref, watch } from "vue";
import { useMainStore } from "../stores/index";
import Avatar from "primevue/avatar";
import youtube from "../components/icons/youtube.vue";
import Button from "primevue/button";
import IconField from "primevue/iconfield";
import InputText from "primevue/inputtext";
import InputIcon from "primevue/inputicon";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";

const store = useMainStore();

// search box
const searchInput = ref(null);
const searchValue = ref(null);
const searchType = ref(false);
const userTypeText = () => {
  searchType.value = searchValue.value !== "";
};
watch(searchValue, (newVal) => {
  searchType.value = newVal !== "";
});
const clearSearchText = () => {
  searchValue.value = "";
   focusInput();
};

const focusInput=()=>{
  if(searchInput.value){
    searchInput.value.focus();
  }
  else {
    console.warn('searchInput is not ready to be focused');
  }
}

</script>

<style scoped>
header{
 border: 1px solid;
}
.col{
    border: 1px solid;
}

</style>