<script setup>
import { ref } from 'vue'
import { storeToRefs } from "pinia";
import { useUserStore } from '../stores/user.js'
import { useDatabaseStore } from '../stores/database.js'

const userStore = useUserStore();
const databaseStore = useDatabaseStore();

databaseStore.getUrls()

</script>

<template>
    <h1>Home</h1>
    <p>usuario: {{ userStore?.userData?.email }}</p>
    <ul>
      <li v-for="item of databaseStore.documents" :key="item.id" >
          {{ item.id}} 
          <br> 
          {{ item.data.name}}
          <br>
          {{ item.data.url}}
      </li>
    </ul>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
