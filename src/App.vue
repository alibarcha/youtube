<template>
  <div>
    <Header v-if="showHeader"/>
    <SidebarLeft />
  </div>

  <main  :class="{'pt-7':showHeader}">
    <RouterView />
  </main>

</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import SidebarLeft from "./components/SidebarLeft.vue";
import { useRoute } from "vue-router";

const route=useRoute();

const showHeader=computed(()=>{
  return route.name !=='NotFound';
})



</script>



<style></style>
