<script setup>
import { ref } from 'vue'
import { storeToRefs } from "pinia";
import { useUserStore } from '../stores/user.js'

const userStore = useUserStore();
const {userData} = storeToRefs(userStore)
console.log(userData);


</script>

<template>
    <h1>Home</h1>
    <p>usuario: {{ userData?.email }}</p>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
