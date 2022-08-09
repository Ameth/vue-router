import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      // redirect: "/",
      redirect: { name: "home" },
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sesion",
      name: "sesion",
      // component: () => import("../views/SessionView.vue"),
      components: {
        default: () => import("../views/LoginView.vue"),
        registro: () => import("../views/RegisterView.vue"),
      },
      // children: [
      //   {
      //     path: "",
      //     components: {
      //       default: () => import("../views/LoginView.vue"),
      //       registro: () => import("../views/RegisterView.vue"),
      //     },
      //   },
      // ],
    },
    {
      path: "/about",
      name: "about",
      alias: ["/acerca", "/info", "/contact"],
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/chats",
      name: "chats",
      component: () => import("../views/ChatView.vue"),
      children: [
        {
          path: ":idChat",
          name: "chat",
          component: () => import("../views/ChatDetailView.vue"),
          // props: true,
          // props: {
          //   idChat: "3",
          // },
          props: (route) => {
            return {
              query: route.query,
              idChat: route.params.idChat,
            };
          },
        },
      ],
    },
  ],
});

export default router;
