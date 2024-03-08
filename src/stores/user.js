import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: 'Marce@gmail.com'
    }),
    /* Los getters son exactamente 
     * el equivalente de los valores 
     *computados para el estado de un almacén 
    */
    getters: {
        textMinuscula(state) {
            return state.userData.toLowerCase()
        },
        textMayuscula(state) {
            return state.userData.toUpperCase()
        }
    },
    /* Las acciones son el equivalente de los métodos en los componentes. */
    actions: {
        registerUser(name) {
            this.userData = name
        }
    }
})