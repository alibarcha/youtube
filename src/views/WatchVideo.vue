<template>
  <div class="grid lg:mx-6 mx-1">
    <div class="xl:col-8 col-12 ">
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
        <span @click="toggleComments = !toggleComments" class="font-semibold">{{ totalComments }} Comments</span>
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
        <div v-if="loadingMoreComments" class="loading-more">Loading more comments...</div>
      </div>
    </div>
    <div class="xl:col-4 col-12 lg:mt-0 mt-4 xl:px-4 flex flex-column gap-3">
      <!-- tabs header -->
      <div>
        <TabsHeader :tabs="tabs"></TabsHeader>
      </div>

      <VideoCard v-for="(video, index) in videos" :key="index" :item="video" :avatar="false" />
      <div v-if="loadingMore" class="loading-more">Loading more...</div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import WatchVideoCard from "@/components/WatchVideoCard.vue";
import Accordion from "@/components/Accordion.vue";
import Button from "primevue/button";
import { useRoute } from "vue-router";
import { getRelativeTime } from '../composables/getRelativeTime';
import { useFetch } from "@/composables/fetch.js";
import Comment from "@/components/Comment.vue";
import CommentForm from "@/components/CommentForm.vue";
import VideoCard from "@/components/VideoCard.vue";
import { useMainStore } from "@/stores/index.js";
import TabsHeader from "@/components/TabsHeader.vue";

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
const loadingMoreComments = ref(false);
const commentPageToken = ref(null);

// state for videos
const videos = ref([]);

// state for loading more videos
const loadingMore = ref(false);

// state for page token
const pageToken = ref(null);

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
    commentPageToken.value = null; // Reset pagination token for comments
  }
};

// computed property to get total comments
const totalComments = computed(() => {
  if (videoData.value && videoData.value.items && videoData.value.items.length > 0) {
    return videoData.value.items[0].statistics.commentCount;
  }
  return 0;
});

// Fetch comments
const { data: commentsData, error: commentsError, isLoading: commentsLoading, getRequest: getCommentsRequest } = useFetch();
const fetchCommentsData = async () => {
  const apiKey = store.apiKey;
  if (!apiKey) {
    console.error('API key is missing');
    return;
  }

  const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${apiKey}`
    + (commentPageToken.value ? `&pageToken=${commentPageToken.value}` : '');

  try {
    loadingMoreComments.value = true;
    await getCommentsRequest(url);
    if (commentsData.value && commentsData.value.items) {
      comments.value = [...comments.value, ...commentsData.value.items.map(item => ({
        id: item.id,
        username: item.snippet.topLevelComment.snippet.authorDisplayName,
        avatar: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
        text: item.snippet.topLevelComment.snippet.textOriginal,
        timestamp: item.snippet.topLevelComment.snippet.publishedAt,
        likes: item.snippet.topLevelComment.snippet.likeCount,
        replies: item.replies ? item.replies.comments.map(reply => ({
          id: reply.id,
          username: reply.snippet.authorDisplayName,
          avatar: reply.snippet.authorProfileImageUrl,
          text: reply.snippet.textOriginal,
          timestamp: reply.snippet.publishedAt,
          likes: reply.snippet.likeCount,
          replies: [],
        })) : [],
      }))];
      commentPageToken.value = commentsData.value.nextPageToken || null;
    }
  } catch (err) {
    console.error(err);
  } finally {
    loadingMoreComments.value = false;
  }
};

// Add user comment
const addUserComment = (comment) => {
  comments.value.unshift(comment);
};

// Fetch more videos
const { data: moreVideosData, error: moreVideosError, getRequest: getMoreVideosRequest } = useFetch();
const fetchMoreVideos = async () => {
  const apiKey = store.apiKey;
  if (!apiKey) {
    console.error('API key is missing');
    return;
  }

  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=5&regionCode=US&key=${apiKey}`
    + (pageToken.value ? `&pageToken=${pageToken.value}` : '');

  try {
    loadingMore.value = true;
    await getMoreVideosRequest(url);
    if (moreVideosData.value && moreVideosData.value.items) {
      videos.value = [...videos.value, ...moreVideosData.value.items];
      pageToken.value = moreVideosData.value.nextPageToken || null;
    }
  } catch (err) {
    console.error(err);
  } finally {
    loadingMore.value = false;
  }
};

// Handle scrolling
const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    if (commentPageToken.value && !loadingMoreComments.value) {
      console.log("Fetching more comments...");
      fetchCommentsData();
    }
    if (pageToken.value && !loadingMore.value) {
      console.log("Fetching more videos...");
      fetchMoreVideos();
    }
  }
};

const tabs = ref([
  { title: 'All' },
  { title: 'Javascript' },
  { title: 'Responsive' },
  { title: 'History' },
]);

onMounted(() => {
  fetchVideoData();
  fetchCommentsData();
  fetchMoreVideos();
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>





<style scoped></style>
