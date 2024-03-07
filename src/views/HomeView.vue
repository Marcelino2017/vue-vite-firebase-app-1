<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user.js'

const userStore = useUserStore();


</script>

<template>
    <h1>Home</h1>
    <p>{{ userStore.userData }} </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
