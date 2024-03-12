import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";
import { useUserStore } from "./stores/user.js";

const requireAuth = async(to, from, next) => {
    const userStore = useUserStore();
    userStore.loadingSesion = true;
    const user = await userStore.currentUser();
    
    if (user) {
        next();
    } else {
        next('/login');
    }
    userStore.loadingSesion = false;
};

const routes = [
    {
        path: "/", 
        component: HomeView, 
        beforeEnter: requireAuth,
    },
    {
        path: "/login", 
        component: LoginView
    },
    {
        path: "/register", 
        component: RegisterView
    },
];

const router = createRouter({
    routes,
    history: createMemoryHistory(import.meta.env.BASE_URL),
});

export default router;