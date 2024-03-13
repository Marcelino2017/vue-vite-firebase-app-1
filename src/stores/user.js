import { defineStore } from "pinia";
import { 
    createUserWithEmailAndPassword, 
    signOut, 
    signInWithEmailAndPassword, 
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebaseConfig/firebase";
import router from "../router";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: null,
        loading: false,
        loadingSesion: false
    }),
    /* Las acciones son el equivalente de los métodos en los componentes. */
    actions: {
        async registerUser(email, password) {
            this.loading = true;
            try {
                const { user } = await createUserWithEmailAndPassword(
                    auth, 
                    email, 
                    password
                );

                this.userData = { email: user.email, uid: user.uid }
                router.push('/')
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        },
        async loginUser(email, password) {
            this.loading = true;
            try {
                const { user } = await signInWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid }
                router.push('/')
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
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
        },
        async currentUser() {
            return new Promise((resolve, reject) => {
                const unsubcribe = onAuthStateChanged(auth, (user) => {
                    if (user) {
                        this.userData = { email: user.email, uid: user.uid }
                    } else {
                        this.userData = null;
                    }
                    resolve(user);
                }, (e) => reject(e))

                return unsubcribe;
            })
        }
    }
})