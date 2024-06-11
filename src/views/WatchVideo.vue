<template>
  <div class="grid lg:mx-6 mx-1">
    <div class="xl:col-8 col-12">
      <WatchVideoCard :videoId="videoId" :channelId="channelId" @updateDescription="handleUpdateDescription">
      </WatchVideoCard>
      <Accordion>
        <span class="font-semibold">{{ videoDescription.views }} views</span>
        <span class="font-semibold ml-2">{{ getRelativeTime(videoDescription.date) }}</span>
        <div class="mt-2 text-sm line-height-3">
          {{ videoDescription.des }}
        </div>
      </Accordion>

      <div class="flex align-items-center">
        <span @click="toggleComments = !toggleComments" class="font-semibold">{{ comments.length }} Comments</span>
        <div>
          <Button label="Sort by" icon="pi pi-align-left" size="small"
            class="text-black-alpha-90 hover-bg-transparent ml-3" severity="secondary" text />
        </div>
      </div>
      <!-- comment form -->
      <div class="py-3">
        <CommentForm @userComment="addUserComment" />
      </div>
      <!-- comments -->
      <div>
        <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
      </div>
    </div>
    <div class="xl:col-4 col-12 lg:mt-0 mt-4 xl:px-4 flex flex-column gap-3">
      <!-- <VideoCard :avatar="false" v-for="i in 4" :key="i" /> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import WatchVideoCard from "@/components/WatchVideoCard.vue";
import Accordion from "@/components/Accordion.vue";
import Button from "primevue/button";
import { useRoute } from "vue-router";
import { getRelativeTime } from '../composables/getRelativeTime';
import { useFetch } from "@/composables/fetch.js";
import Comment from "@/components/Comment.vue";
import CommentForm from "@/components/CommentForm.vue";
import { useMainStore } from "@/stores/index.js";

// Initialize the store
const store = useMainStore();

// Get the route object
const route = useRoute();

// get specific video id
const videoId = route.params.id;

// state for channelId
const channelId = ref(null);

// state for video description
const videoDescription = ref({});

// state for comments
const comments = ref([]);

// Handle description update
const handleUpdateDescription = (description) => {
  videoDescription.value = description;
};

// Fetch video data and set channelId
const { data: videoData, error: videoError, isLoading: videoLoading, getRequest: getVideoRequest } = useFetch();
const fetchVideoData = async () => {
  const apiKey = store.apiKey;
  if (!apiKey) {
    console.error('API key is missing');
    return;
  }
  await getVideoRequest(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`);
  if (videoData.value && videoData.value.items && videoData.value.items.length > 0) {
    const video = videoData.value.items[0];
    channelId.value = video.snippet.channelId;
  }
};

// Fetch comments
const { data: commentsData, error: commentsError, isLoading: commentsLoading, getRequest: getCommentsRequest } = useFetch();
const fetchCommentsData = async () => {
  const apiKey = store.apiKey;
  if (!apiKey) {
    console.error('API key is missing');
    return;
  }
  await getCommentsRequest(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${apiKey}`);
  if (commentsData.value && commentsData.value.items) {
    comments.value = commentsData.value.items.map(item => ({
      id: item.id,
      username: item.snippet.topLevelComment.snippet.authorDisplayName,
      avatar: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
      text: item.snippet.topLevelComment.snippet.textOriginal,
      timestamp: item.snippet.topLevelComment.snippet.publishedAt,
      likes:item.snippet.topLevelComment.snippet.likeCount,
      replies: item.replies ? item.replies.comments.map(reply => ({
        id: reply.id,
        username: reply.snippet.authorDisplayName,
        avatar: reply.snippet.authorProfileImageUrl,
        text: reply.snippet.textOriginal,
        timestamp: reply.snippet.publishedAt,
        likes:reply.snippet.likeCount,
        replies: [],
      })) : [],
    }));
  }
};
console.log('comments data',commentsData)
// Add user comment
const addUserComment = (comment) => {
  comments.value.unshift(comment);
  console.log(comment);
};

// Fetch data on component mount
onMounted(() => {
  fetchVideoData();
  fetchCommentsData();
});
</script>

<style scoped></style>
