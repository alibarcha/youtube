// stores/counter.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        sidebarState: false,
        apiKey:'AIzaSyBbXAddBvdstmRLhVUjR-MqkiGlFX7cL2o',
    }),
    getters: {

    },

    actions: {
        sidebarToggle (){
            this.sidebarState=!this.sidebarState
        }

    },
})