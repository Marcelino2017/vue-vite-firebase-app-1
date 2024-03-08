import { defineStore } from "pinia";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig/firebase";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: null
    }),
    /* Las acciones son el equivalente de los métodos en los componentes. */
    actions: {
        async registerUser(email, password) {
            try {
                const { user } = await createUserWithEmailAndPassword(
                    auth, 
                    email, 
                    password
                );
                console.log(user);
                this.userData = { email: user.email, uid: user.uid }
            } catch (error) {
                console.log(error);
            }
        }
    }
})