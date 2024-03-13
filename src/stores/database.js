import { defineStore } from "pinia";
import { collection, query, getDocs, where } from "firebase/firestore/lite";
import { db, auth } from "../firebaseConfig/firebase";



export const useDatabaseStore = defineStore('database', {
    state: () => ({
        documents: [],
    }),
    actions: {
        async getUrls() {

            try {
                console.log(auth.currentUser.uid);
                const q = query(collection(db, "urls"), where("user", "==", auth.currentUser.uid));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id,doc.data());
                    this.document.push({
                        id: doc.id,
                        data: doc.data(),
                    });
                    console.log(this.document);  
                });
            } catch (error) {
                
            } finally { 

            }
            // const document = await db.collection('document').get();
            // this.document = document.docs.map((doc) => doc.data());
        },
    },
});