<template>
  <div class="grid border-1 lg:mx-8 mx-1">
    <div class="xl:col-8  col-12 border-1">
      <WatchVideoCard></WatchVideoCard>
      <Accordion>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam labore fuga autem, in voluptatum repellat,
        reiciendis omnis ex soluta, rerum distinctio blanditiis facere beatae recusandae? Placeat, voluptas quo? Quia,
        nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident quam dolor esse reiciendis
        mollitia voluptatem enim? Incidunt quae perspiciatis voluptatem sunt, fugiat nihil voluptate omnis, aperiam
        quibusdam fuga dignissimos?
      </Accordion>

      <div class="flex align-items-center">
        <h4>123 Comments</h4>
        <div>
          <Button label="Sort by" icon="pi pi-align-left" size="small"
            class="text-black-alpha-90 hover-bg-transparent ml-3" severity="secondary" text />
        </div>

      </div>
      <!--  comment form -->
      <div class=" py-2 border-1">
        <CommentForm @userComment="addUserComment" />
      </div>
      <!-- comments -->
      <div class=" ">
        <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
      </div>
    </div>
    <div class="xl:col-4 col-12 lg:mt-0 mt-4 xl:px-4 flex flex-column gap-3">
      <VideoCard :avatar="false" v-for="i in 5" :key="i" />
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
    username: 'User1',
    avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    text: 'This is a comment',
    timestamp: '1 hour ago',
    replies: [],
  },
  {
    id: 2,
    username: 'User2',
    avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    text: 'This is a comment 2',
    timestamp: '2 hour ago',
    replies: [{
      id: 3,
      username: 'nested User',
      avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
      text: 'This is a nested comment',
      timestamp: '20 hour ago',
      replies: [],
    },],
  },
]);



// userComment
const addUserComment = (comment) => {
  comments.value.push(comment);
  console.log(comment)
}

</script>

<style scoped></style>