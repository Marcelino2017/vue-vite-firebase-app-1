import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: 'marce@gmail.com'
    })
})