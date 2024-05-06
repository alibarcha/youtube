<template>
  <div>
    <Header />
    <SidebarLeft />
  </div>

  <RouterView />
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import SidebarLeft from "./components/SidebarLeft.vue";
</script>



<style scoped>

</style>
