<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user.js'

const userStore = useUserStore();


</script>

<template>
    <h1>Register</h1>
    <button @click="userStore.registerUser('Camilo')">Ingresar</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
