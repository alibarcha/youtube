<template>
  <header class="grid  pt-2 fixed left-0 right-0 top-0 z-5 border-1">
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
      <router-link to="/" >
        <div class="flex md:ml-3 pointer"><youtube /></div>
      </router-link>
    </div>
    <!-- search box -->
    <div class="col-6 flex align-items-center justify-content-center">
      <InputGroup class="max-h-3rem border-round-3xl">
        <InputText
          v-focus
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
        class="w-full md:w-20rem max:h-26rem"
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
          <button
            v-ripple
            class="relative overflow-hidden w-full p-link flex align-items-center p-2 text-color hover:surface-200 border-noround"
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

        <template #submenuheader="{ item }">
          <span class="text-primary font-bold">{{ item.label }}</span>
        </template>
        <template #item="{ item, props }">
          <a v-ripple class="flex align-items-center" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-3">{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            <span
              v-if="item.shortcut"
              class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
              >{{ item.shortcut }}</span
            >
          </a>
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
]);

const toggleAccountMenu = (event) => {
  accountMenu.value.toggle(event);
};

// custom directive
const vFocus = {
  mounted: (el) => el.focus(),
};
</script>

<style scoped>
header{
  background-color: white;
}


</style>