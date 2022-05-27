import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/BlocoHome.vue"),
    },
    {
      path: "/categorias",
      name: "categorias",
      component: () => import("../views/BlocoCategoria.vue"),
    },
    {
      path: "/perfil",
      name: "perfil",
      component: () => import("../views/BlocoPerfil.vue"),
    },
    {
      path: "/mensagens",
      name: "mensagens",
      component: () => import("../views/BlocoMensagens.vue"),
    },
    {
      path: "/config",
      name: "config",
      component: () => import("../views/BlocoConfig.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/TelaLogin.vue"),
    },
    {
      path: "/caminho",
      name: "caminho",
      component: () => import("../views/BlocoCaminho.vue"),
    },
  ],
});

export default router;
