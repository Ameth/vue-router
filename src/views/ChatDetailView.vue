<template>
  <!-- {{ this.$route.params }} -->
  <div v-for="msg in misMensajes" :key="msg.id">
    {{ msg.text }}
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const mensajes = [
  { id: 1, text: "Chat 1", autor: 1 },
  { id: 2, text: "Chat 2", autor: 2 },
  { id: 3, text: "Chat 3", autor: 3 },
  { id: 4, text: "Chat 4", autor: 4 },
  { id: 5, text: "Chat 5", autor: 5 },
  { id: 6, text: "Chat 6", autor: 6 },
  { id: 7, text: "Chat 7", autor: 7 },
];

// console.log(route.params.idChat);

const misMensajes = computed(() => {
  return mensajes.filter((item) => item.autor == route.params.idChat);
});
</script>