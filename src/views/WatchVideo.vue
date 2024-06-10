<template>
  <div class="grid  lg:mx-6  mx-1">
    <div class="xl:col-8  col-12 ">
      <WatchVideoCard :videoId="videoId" :channelId="channelId" @updateDescription="handleUpdateDescription">
      </WatchVideoCard>
      <Accordion>
        <span class="font-semibold">{{ videoDescription.views }} views</span>
        <span class="font-semibold ml-2"> {{ getRelativeTime(videoDescription.date
        ) }}</span>
        <div class="mt-2 text-sm line-height-3">
          {{ videoDescription.des }}
        </div>
      </Accordion>

      <div class="flex align-items-center">
        <span @click="toggleComments = !toggleComments" class="font-semibold">123 Comments</span>
        <div>
          <Button label="Sort by" icon="pi pi-align-left" size="small"
            class="text-black-alpha-90 hover-bg-transparent ml-3" severity="secondary" text />
        </div>

      </div>
      <!--  comment form -->
      <div class=" py-3 ">
        <CommentForm @userComment="addUserComment" />
      </div>
      <!-- comments -->
      <div>
        <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
      </div>
    </div>
    <div class="xl:col-4 col-12 lg:mt-0 mt-4 xl:px-4 flex flex-column gap-3">
      <!-- <VideoCard :avatar="false" v-for="i in 4" :key="i" /> -->
      {{ commentsData }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import WatchVideoCard from "@/components/WatchVideoCard.vue";
import VideoCard from "@/components/VideoCard.vue";
import Accordion from "@/components/Accordion.vue";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import { useRoute } from "vue-router";
import { getRelativeTime } from '../composables/getRelativeTime';
import { useFetch } from "@/composables/fetch.js";

import Comment from "../components/Comment.vue"
import CommentForm from "../components/CommentForm.vue"
import { useMainStore } from "../stores/index.js";
const store = useMainStore();

// Get the route object
const route = useRoute();


// get specific video id
const videoId = route.params.id;

// accordion content
const videoDescription = ref({});
const handleUpdateDescription = (description) => {
  videoDescription.value = description;
};

// state for channelId
const  channelId = ref(null);

const { data, error, isLoading, getRequest } = useFetch();
const fetchVideoData = async () => {
  const apiKey = store.apiKey;
  if (!apiKey) {
    console.error('API key is missing');
    return;
  }
  await getRequest(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`);
  if (  data.value.items && data.value.items.length > 0) {
    const videoData = data.value.items[0];
    channelId.value = videoData.snippet.channelId;
  }
};






// comments

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
    }, {
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

// fetch comments
const { data: commentsData, error: commentsError, isLoading: commentsLoading, getRequest: getCommentsRequest } = useFetch();
const fetchCommentsData = async () => {
  const apiKey = store.apiKey;
  if (!apiKey) {
    console.error('API key is missing');
    return;
  }
  await getCommentsRequest(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${store.apiKey}`);
  // if (commentsData.value && commentsData.value.items) {
  //   comments.value = commentsData.value.items.map(item => ({
  //     id: item.id,
  //     username: item.snippet.topLevelComment.snippet.authorDisplayName,
  //     avatar: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
  //     text: item.snippet.topLevelComment.snippet.textOriginal,
  //     timestamp: item.snippet.topLevelComment.snippet.publishedAt,
  //     replies: item.replies ? item.replies.comments.map(reply => ({
  //       id: reply.id,
  //       username: reply.snippet.authorDisplayName,
  //       avatar: reply.snippet.authorProfileImageUrl,
  //       text: reply.snippet.textOriginal,
  //       timestamp: reply.snippet.publishedAt,
  //       replies: [],
  //     })) : [],
  //   }));
  // }
};


console.log(' commentsData', commentsData)


onMounted(() => {
  fetchVideoData();
  fetchCommentsData();
});

</script>

<style scoped></style>