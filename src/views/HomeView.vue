<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();

const username = ref("");

const login = () => {
  // router.push({
  //   path: "/chats",
  //   name: "chat",
  //   // query: {
  //   //   search: "arjona",
  //   // },
  //   params: {
  //     idChat: username.value,
  //   },
  //   // replace: true,
  // });
  // Movernos entre el historial del navegador hacia adelante (+1, +2) o hacia atras (-1, -2), relativo a la ruta donde estamos
  // router.go(-1);
};
</script>

<template>
  <main>
    <h3>Ingresa tu usuario</h3>
    <input type="text" placeholder="Usuario" v-model="username" />
    <button @click="login">Iniciar sesión</button>
  </main>
</template>
