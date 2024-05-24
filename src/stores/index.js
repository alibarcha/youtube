// stores/counter.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        sidebarState: false,
    }),
    getters: {

    },

    actions: {
        sidebarToggle (){
            this.sidebarState=!this.sidebarState
        }

    },
})