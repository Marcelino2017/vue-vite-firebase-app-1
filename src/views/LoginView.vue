<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore();

const textMayuscula = computed(() => userStore.userData.toUpperCase())          

</script>

<template>
    <h1>Login</h1>
    <p>mayuscula - {{ textMayuscula }} </p>
    <p>minuscula - {{ userStore.textMinuscula }} </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
