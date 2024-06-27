// stores/counter.js
import { defineStore } from 'pinia'
import { useFetch } from '@/composables/fetch.js';

export const useMainStore = defineStore('main', {
    state: () => ({
        sidebarState: false,
        apiKey: 'AIzaSyCR66l5NerjSuFY0dHgVLBbtQw-Damu7dk',
        channelData: null,
        videoData: null,
        searchText: '',
    }),
    getters: {
        getChannelAvatar: (state) => state.channelData?.items[0]?.snippet?.thumbnails?.default?.url || '',
        getChannelTitle: (state) => state.channelData?.items[0]?.snippet?.title || '',
        getSubscriberCount: (state) => state.channelData?.items[0]?.statistics?.subscriberCount || 0,
        getViewsCount: (state) => state.channelData?.items[0]?.statistics?.viewCount
            || 0,
        getVideosCount: (state) => state.channelData?.items[0]?.statistics?.
            videoCount
            || 0,
        getCustomUrl: (state) => state.channelData?.items[0]?.snippet?.
            customUrl
            || '',
    },

    actions: {
        sidebarToggle() {
            this.sidebarState = !this.sidebarState
        },

        async fetchChannelData(channelId) {
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${this.apiKey}`);
                const data = await response.json();
                this.channelData = data;
            } catch (err) {
                console.error("Error fetching channel data:", err);
            }
        },

        async fetchVideoData(videoId) {
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${this.apiKey}`);
                const data = await response.json();
                this.videoData = data;
            } catch (err) {
                console.error("Error fetching video data:", err);
            }
        },

    },
})