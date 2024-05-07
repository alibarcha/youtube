<template>
  <header class="grid shadow-1 py-2">
    <!-- logo -->
    <div class="col-3 flex align-items-center justify-content-start">
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
      <div class="flex md:ml-3 pointer"><youtube /></div>
    </div>
    <!-- search box -->
    <div class="col-6 flex align-items-center justify-content-center">
      <InputGroup class="max-h-3rem border-round-3xl">
        <InputText
          ref="searchInput"
          placeholder="Search"
          v-model="searchValue"
          class="max-h-3rem shadow-none border-round-left-3xl outline-none"
          :class="searchType ? 'border-right-none' : ''"
          @input="userTypeText"
        />
        <!-- :autofocus="true" -->
        <InputGroupAddon
          v-if="searchType"
          @click="clearSearchText"
          class="px-0 border-left-none cursor-pointer"
        >
          <i class="pi pi-times"></i
        ></InputGroupAddon>
        <InputGroupAddon
          class="border-round-right-3xl md:px-4 font-bold bg-gray-50 cursor-pointer"
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
        class="md:ml-3 ml-1"
      />
    </div>
    <!-- icons -->
    <div class="col-3 flex align-items-center justify-content-end">
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
        class="md:mx-3"
        icon="pi pi-bell"
        severity="secondary"
        rounded
        text
        size="large"
        v-tooltip.bottom="'Notification'"
        placeholder="Bottom"
        @click="toggleNotificationMenu"
        aria-haspopup="true"
        aria-controls="notificationsMenu"
      />
      <!-- menu -->
      <Menu
        ref="notificationsMenu"
        id="notificationsMenu"
        class="w-full md:w-26rem h-26rem"
        :model="notificationsItems"
        :popup="true"
      />

      <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png"
        class="md:mr-2 pointer"
        shape="circle"
        size="normal"
        style="background-color: #ece9fc"
        aria-haspopup="true"
        aria-controls="accountMenu"
        @click="toggleAccountMenu"
      />
      <!-- menu -->
      <Menu
        :model="accountItems"
        class="w-full md:w-20rem"
        ref="accountMenu"
        id="accountMenu"
        :popup="true"
      >
        <template #start>
          <span class="inline-flex align-items-center gap-1 px-2 py-2">
            <svg
              width="35"
              height="40"
              viewBox="0 0 35 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-2rem"
            >
              <path
                d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                fill="var(--primary-color)"
              />
              <path
                d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                fill="var(--text-color)"
              />
            </svg>
            <span class="font-medium text-xl font-semibold"
              >PRIME<span class="text-primary">APP</span></span
            >
          </span>
        </template>
        <template #submenuheader="{ item }">
          <span class="text-primary font-bold">{{ item.label }}</span>
        </template>
        <template #item="{ item, props }">
          <a v-ripple class="flex align-items-center" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            <span
              v-if="item.shortcut"
              class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
              >{{ item.shortcut }}</span
            >
          </a>
        </template>
        <template #end>
          <button
            v-ripple
            class="relative overflow-hidden w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround"
          >
            <Avatar
              image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
              class="mr-2"
              shape="circle"
            />
            <span class="inline-flex flex-column">
              <span class="font-bold">Amy Elsner</span>
              <span class="text-sm">Admin</span>
            </span>
          </button>
        </template>
      </Menu>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useMainStore } from "../stores/index";
import Avatar from "primevue/avatar";
import youtube from "../components/icons/youtube.vue";
import Button from "primevue/button";
import IconField from "primevue/iconfield";
import InputText from "primevue/inputtext";
import InputIcon from "primevue/inputicon";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import Menu from "primevue/menu";

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
};

// notificationsMenu
const notificationsMenu = ref();
const notificationsItems = ref([
  {
    label: "Notifications",
    items: [
      {
        label: "Refresh",
      },
      {
        label: "Export",
      },
    ],
  },
]);

const toggleNotificationMenu = (event) => {
  notificationsMenu.value.toggle(event);
};

// profile account menu

const accountMenu = ref();

const accountItems = ref([
  {
    separator: true,
  },
  {
    label: "Documents",
    items: [
      {
        label: "Google Account",
        icon: "pi pi-google",
      },
      {
        label: "YouTube",
        icon: "pi pi-youtube",
      },
      {
        label: "Logout",
        icon: "pi pi-sign-out",
        shortcut: "⌘+Q",
      },
    ],
  },
  {
    label: "Profile",
    items: [
      {
        label: "Settings",
        icon: "pi pi-cog",
        shortcut: "⌘+O",
      },
      {
        label: "Help",
        icon: "pi pi-question-circle",
        badge: 2,
      },
      {
        label: "Send feedback",
        icon: "pi pi-send",
        badge: 2,
      },
    ],
  },
  {
    separator: true,
  },
]);

const toggleAccountMenu = (event) => {
  accountMenu.value.toggle(event);
};
</script>

<style scoped>


</style>