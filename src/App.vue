<template>
  <div>
    <Header />
    <SidebarLeft />
  </div>

  <main class="pt-8">
    <RouterView />
  </main>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import SidebarLeft from "./components/SidebarLeft.vue";




</script>



<style></style>
