
<script setup>
import { useUserStore } from './stores/user.js'

const userStore = useUserStore();

</script>

<template>
  <h1>Vue</h1>
  <nav v-if="!userStore.loadingSesion">
    <router-link to="/" v-if="userStore.userData?.email" > | Home |</router-link>  
    <router-link to="/login" v-if="!userStore.userData?.email">| Login |</router-link> 
    <router-link to="/register" v-if="!userStore.userData?.email"> Register |</router-link> 
    <button @click="userStore.logoutUser" v-if="userStore.userData?.email"> Logout</button>
  </nav>
  <div v-if="userStore.loadingSesion">Cargando...</div>
  <router-view />
</template>