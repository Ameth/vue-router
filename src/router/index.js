import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/404View.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/404",
      name: "error404",
      component: NotFoundView,
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404",
    },
    {
      path: "/home",
      // redirect: "/",
      redirect: { name: "home" },
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: false,
      },
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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/chats",
      name: "chats",
      component: () => import("../views/ChatView.vue"),
      children: [
        {
          path: ":idChat(\\d+)",
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
          // meta: {
          //   requiresAuth: false,
          // },
        },
      ],
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from) => {
  // console.log(from);
  // console.log(to);
  // if (to.name == "about") {
  //   // return { name: "sesion" };
  //   return false;
  // }
  // if (to.meta.requiresAuth) {
  //   // to.meta.requiresAuth = false;
  //   return {
  //     name: "home",
  //     query: {
  //       redirect: to.fullPath,
  //     },
  //   };
  // }
});

export default router;
