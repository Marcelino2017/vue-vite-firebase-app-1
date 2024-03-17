import { collection, query, getDocs, where } from "firebase/firestore/lite";
import { defineStore } from "pinia";
import { db, auth } from "../firebaseConfig/firebase";
import { ref } from "vue";



export const useDatabaseStore = defineStore('database', {
    state: () => ({
        documents: ref([]),
    }),
    actions: {
        async getUrls() {
            try {
                const q = query(
                    collection(db, "urls"), 
                    where("user", "==", auth.currentUser.uid)
                );

                const querySnapshot = await getDocs(q);

                querySnapshot.forEach((doc) => {
                    this.documents.push({
                        id: doc.id,
                        data: doc.data(),
                    });
                });
            } catch (error) {
                console.log(error);
            } finally { 

            }
            // const document = await db.collection('document').get();
            // this.document = document.docs.map((doc) => doc.data());
        },
    },
});