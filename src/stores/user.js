import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebaseConfig/firebase";
import router from "../router";

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
                router.push('/')
            } catch (error) {
                console.log(error);
            }
        },
        async loginUser(email, password) {
            try {
                const { user } = await signInWithEmailAndPassword(auth, email, password)
                console.log(user);
                this.userData = { email: user.email, uid: user.uid }
                router.push('/')
            } catch (error) {
                console.log(error);
            }
        },
        async logoutUser() {
            try {
                await signOut(auth);
                this.userData = null;
                router.push('/login')
                console.log('Usuario deslogueado');
            } catch (error) {
                console.log(error);
            }
        }
    }
})