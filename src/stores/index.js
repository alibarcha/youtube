// stores/counter.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        sidebarState: false,
        apiKey: 'AIzaSyCR66l5NerjSuFY0dHgVLBbtQw-Damu7dk',
        channelData: null,
        videoData: null,
    }),
    getters: {
        getChannelAvatar: (state) => state.channelData?.items[0]?.snippet?.thumbnails?.default?.url || '',
        getChannelTitle: (state) => state.channelData?.items[0]?.snippet?.title || '',
        getSubscriberCount: (state) => state.channelData?.items[0]?.statistics?.subscriberCount || 0,
    },

    actions: {
        sidebarToggle() {
            this.sidebarState = !this.sidebarState
        },

        async fetchChannelData(channelId) {
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}=${this.apiKey}`);
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