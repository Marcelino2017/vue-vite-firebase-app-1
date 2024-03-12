<script setup>
import { ref } from 'vue'
import { storeToRefs } from "pinia";
import { useUserStore } from '../stores/user.js'

const userStore = useUserStore();


</script>

<template>
    <h1>Home</h1>
    <p>usuario: {{ userStore?.userData?.email }}</p>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
