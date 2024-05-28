<template>
  <div class="grid  lg:mx-6  mx-1">
    <div class="xl:col-8  col-12 ">
      <WatchVideoCard></WatchVideoCard>
      <Accordion>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam labore fuga autem, in voluptatum repellat,
        reiciendis omnis ex soluta, rerum distinctio blanditiis facere beatae recusandae? Placeat, voluptas quo? Quia,
        nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident quam dolor esse reiciendis
        mollitia voluptatem enim? Incidunt quae perspiciatis voluptatem sunt, fugiat nihil voluptate omnis, aperiam
        quibusdam fuga dignissimos?
      </Accordion>

      <div class="flex align-items-center">
        <span @click="toggleComments=!toggleComments" class="font-semibold">123 Comments</span>
        <div>
          <Button label="Sort by" icon="pi pi-align-left" size="small"
            class="text-black-alpha-90 hover-bg-transparent ml-3" severity="secondary" text />
        </div>

      </div>
      <!--  comment form -->
      <div class=" py-3 ">
        <CommentForm @userComment="addUserComment"  />
      </div>
      <!-- comments -->
      <div>
        <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
      </div>
    </div>
    <div class="xl:col-4 col-12 lg:mt-0 mt-4 xl:px-4 flex flex-column gap-3">
      <VideoCard :avatar="false" v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import WatchVideoCard from "@/components/WatchVideoCard.vue";
import VideoCard from "@/components/VideoCard.vue";
import Accordion from "@/components/Accordion.vue";
import Button from "primevue/button";
import Avatar from "primevue/avatar";

// comments
import Comment from "../components/Comment.vue"
import CommentForm from "../components/CommentForm.vue"


const comments = ref([
  {
    id: 1,
    username: 'TechGuru99',
    avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    text: 'This video was incredibly helpful, thank you!',
    timestamp: '1 hour ago',
    replies: [],
  },
  {
    id: 2,
    username: 'LearningLover',
    avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    text: 'I learned so much from this, keep up the great work!"',
    timestamp: '2 hour ago',
    replies: [{
      id: 21,
      username: 'HappyViewer',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
      text: 'This was exactly what I was looking for, thanks!',
      timestamp: '20 hour ago',
      replies: [],
    },{
      id: 22,
      username: ' TipMaster',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
      text: 'Great tips and tricks, cant wait to try them out!',
      timestamp: '1d  ago',
      replies: [],
    },],
  },
  {
    id: 10,
    username: 'DailyFan',
    avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    text: 'I always look forward to your uploads, keep them coming!',
    timestamp: '10 hour ago',
    replies: [],
  },
  {
    id: 11,
    username: 'SimplicitySeeker',
    avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    text: 'You make complex topics so easy to understand.',
    timestamp: '13 hour ago',
    replies: [],
  },
]

);



// userComment
const addUserComment = (comment) => {
  comments.value.unshift(comment);
  console.log(comment)
};



</script>

<style scoped></style>