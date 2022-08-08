<script setup>
import { ref } from "vue";

const username = ref("");
</script>

<template>
  <main>
    <h3>Ingresa tu usuario</h3>
    <input type="text" placeholder="Usuario" v-model="username" />
  </main>
</template>
