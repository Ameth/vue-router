<template>
  <div>
    <aside>
      <div v-for="chat in chats" :key="chat.id">
        <RouterLink :to="`/chats/${chat.id}`">{{ chat.name }}</RouterLink>
      </div>
    </aside>
    <article>
      <h2>
        <RouterView />
      </h2>
    </article>
  </div>
</template>

<script setup>
import { ref, reactive, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const chats = reactive([
  { id: 1, name: "Ameth" },
  { id: 2, name: "Gabriel" },
  { id: 3, name: "Andres" },
  { id: 4, name: "Victor" },
  { id: 5, name: "Ronald" },
  { id: 6, name: "Ana" },
  { id: 7, name: "Maria" },
  { id: 8, name: "Elkin" },
]);

// watch(
//   () => route.params,
//   (value) => {
//     console.log("params", value);
//   },
//   { inmediate: true }
// );

watchEffect(() => {
  console.log("params", route.params);

  // Aqui puedo utilizar la llamada a una función para obtener los datos desde un servidor (ej. fetchData())
  // const fetchdata = async () => {
  //   //...
  // }
});
</script>