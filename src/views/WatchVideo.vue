<template>
  <div class="grid border-1 mx-8">
    <div class="lg:col-8 border-1">
      <WatchVideoCard></WatchVideoCard>
      <Accordion>
        Lorem, ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Accusamus consequatur vitae veniam. Soluta natus est quaerat, nesciunt
        sit amet consectetur adipisicing elit. Accusamus consequatur vitae
        veniam. Soluta natus est quaerat, nesciunt sit amet consectetur
        adipisicing elit. Accusamus consequatur vitae veniam. Soluta natus est
        quaerat, nesciunt sit amet consectetur adipisicing elit. Accusamus
        consequatur vitae veniam. Soluta natus est quaerat, nesciunt sit amet
        consectetur adipisicing elit. Accusamus consequatur vitae veniam. Soluta
        natus est quaerat, nesciunt sit amet consectetur adipisicing elit.
        Accusamus consequatur vitae veniam. Soluta natus est quaerat, nesciunt
      </Accordion>
      <!-- comments -->
      <div class="flex align-items-center">
        <h4>123 Comments</h4>
        <div>
          <Button
            label="Sort by"
            icon="pi pi-align-left"
            size="small"
            class="text-black-alpha-90 hover-bg-transparent ml-3"
            severity="secondary"
            text
          />
        </div>
      </div>

        <div
          class="flex align-items-center border-1"
        >
           <Avatar
              image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
              class="mr-3"
              shape="circle"
              style="width: 41px; height: 41px"
            />
          <div class="w-full">
          <input type="text" class="commentSearchBox" placeholder="Add a comments...">
          </div>
        </div>
    </div>
    <div class="lg:col-4 lg:mt-0 mt-4 px-4 flex flex-column gap-3">
      <VideoCard :avatar="false" v-for="i in 5" :key="i" />
    </div>
  </div>
</template>

<script setup>
import WatchVideoCard from "@/components/WatchVideoCard.vue";
import VideoCard from "@/components/VideoCard.vue";
import Accordion from "@/components/Accordion.vue";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
</script>

<style scoped>
.commentSearchBox{
  width: 100% !important;
  padding: 5px 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #909090;
  font-size: 16px;
}
.commentSearchBox:focus{
    border-bottom: 2px solid black;
}

</style>