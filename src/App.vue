
<script setup>
import { useUserStore } from './stores/user.js'

const userStore = useUserStore();

</script>

<template>
  <h1>Vue</h1>
  <nav>
    <router-link to="/">Home</router-link>  |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <button @click="userStore.logoutUser" >Logout</button>
  </nav>
  <router-view />
</template>