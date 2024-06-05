// stores/counter.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        sidebarState: false,
        apiKey:'AIzaSyCR66l5NerjSuFY0dHgVLBbtQw-Damu7dk',
    }),
    getters: {

    },

    actions: {
        sidebarToggle (){
            this.sidebarState=!this.sidebarState
        }

    },
})