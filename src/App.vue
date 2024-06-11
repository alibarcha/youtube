<template>
  <div>
    <Header />
    <SidebarLeft />
  </div>

  <main>
    <RouterView />
  </main>

  <!-- <div v-if="data">
    {{ data }}
  </div>
  <div v-if="isLoading">
    loading.....
  </div>
  <div v-if="error">
    {{ error }}
  </div> -->


</template>

<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import SidebarLeft from "./components/SidebarLeft.vue";

</script>



<style></style>
