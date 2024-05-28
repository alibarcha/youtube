<template>
  <div class="grid lg:mx-6  mx-1 border-1 profile-wrap">
    <div class="col-8  ">
      <div class="flex md:flex-row flex-column md:justify-content-between">
        <div class="flex align-items-center ">
          <!-- Avatar  -->
          <div>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-3" shape="circle"
              style="width: 150px; height: 150px" />
          </div>
          <!-- content -->
          <div class="flex flex-column align-items-start">
            <h1 class="font-semibold m-0">Geeky Shows
            </h1>
            <div class="flex align-items-center text-gray-600 my-1">
              <span>@creativeMind </span>
              <span class="px-1 text-gray-500">•</span>
              <span>4.34M subscribers </span>
              <span class="px-1 text-gray-500">•</span>
              <span>45 videos </span>
            </div>
            <span @click="visible = true" class="cursor-pointer text-gray-600 mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit <span class="font-semibold">...more</span></span>
            <Button label="Subscribe" rounded class="bg-black-alpha-90  border-0 " />
          </div>

        </div>

      </div>
    </div>
  </div>

  <!-- modal -->
    
    <Dialog v-model:visible="visible" modal header="About" :draggable="false" :style="{ width: '560px' }"
      dismissableMask :breakpoints="{ '1199px': '75vw', '575px': '380px' }">
      <p class="p-0 m-0 font-light">
        A channel dedicated to chai and coding in HINDI. A lot happens over chai and I am a big-time chai lover. Let's
        sip tea and write some code and some chit-chat.
        Ab ye b Hindi me linkne to mat bolna, abhi ke liye itna hi likenge.
        
      </p>
      <!-- links -->
      <div>
        <h3 class="font-semibold mb-2">Links</h3>
        <div>
          <div class="flex align-items-center">
            <i class="pi pi-link" style="font-size: 1.4rem"></i>
            <div class="ml-3">
              <div class="m-0 font-semibold">Website</div>
              <a href="" class="inline-block ">the-netninja</a>
            </div>
          </div>

        </div>

        <div class="mt-3">
          <div class="flex align-items-center">
            <i class="pi pi-discord" style="font-size: 1.4rem"></i>
            <div class="ml-3">
              <div class="m-0 font-semibold">Discord</div>
              <a href="" class="inline-block ">discord.com</a>
            </div>
          </div>

        </div>

      </div>

      <!-- Channel details -->
      <div>
        <h3 class="font-semibold mb-3">Channel details</h3>

        <div class="flex align-items-center">
          <i class="pi pi-envelope" style="font-size: 1.4rem"></i>
          <div class="ml-3">
            <Button label="View email address" size="small" :severity="comment ? 'info' : 'secondary'" rounded
              class="border-0 " />
          </div>


        </div>

        <div class="flex align-items-center mt-3">
          <i class="pi pi-globe" style="font-size: 1.4rem"></i>
          <div class="ml-3">
            <a href="" class="inline-block ">www.youtube.com/@netninja</a>
          </div>

        </div>

        <div class="flex align-items-center mt-3">
          <i class="pi pi-users" style="font-size: 1.4rem"></i>
          <div class="ml-3">
            <span href="" class="inline-block ">296K subscribers</span>
          </div>
        </div>

        <div class="flex align-items-center mt-3">
          <i class="pi pi-video" style="font-size: 1.4rem"></i>
          <div class="ml-3">
            <span href="" class="inline-block ">365 videos</span>
          </div>
        </div>

        <div class="flex align-items-center mt-3">
          <i class="pi pi-chart-line" style="font-size: 1.4rem"></i>
          <div class="ml-3">
            <span href="" class="inline-block ">21,987,205 views</span>
          </div>
        </div>

        <div class="flex align-items-center mt-3">
          <i class="pi pi-map-marker" style="font-size: 1.4rem"></i>
          <div class="ml-3">
            <span href="" class="inline-block ">Pakistan</span>
          </div>
        </div>

      </div>

      <!-- actions -->
      <div class="mt-4">
        <Button label="Share channel" icon="pi pi-send" :severity="comment ? 'info' : 'secondary'" rounded
          class="border-0" />
        <Button label="Report user" icon="pi pi-flag" :severity="comment ? 'info' : 'secondary'" rounded
          class="border-0 ml-2 " />
      </div>
    </Dialog>
  
</template>

<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import Dialog from 'primevue/dialog';

const visible = ref(false);


</script>

<style>
.profile-wrap .p-dialog-header {
  padding: 15px auto !important;
}
</style>