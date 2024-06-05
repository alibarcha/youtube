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
// import { useFetch } from './composables/fetch';

// const { data, error, isLoading, getRequest, postRequest } = useFetch();
// const fetchData=()=>{
//     postRequest('https://jsonplaceholder.typicode.com/posts', {
//     "userId": 1000,
//     "id": 1000,
//     "title": "Ali Haider",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },)
// }





</script>



<style></style>
