<script setup>
import { ref } from "vue";
import { useUserStore } from '../stores/user.js'
//import { useRouter } from 'vue-router'

const userStore = useUserStore();
//const router = useRouter()

const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  console.log(password.value.length);
  console.log(email.value);
  console.log(password.value);
 /*  if (email.value|| password.value) {
    return alert("Por favor, complete todos los campos");
  } */
  await userStore.loginUser(email.value, password.value);
};
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <input type="email" v-model.trim="email" placeholder="Ingrese email" />
      <input type="password" v-model.trim="password" placeholder="Ingrese password" />
      <button type="submit" :disabled="userStore.loading">Acceso</button>
    </form>
  </div>
</template>
