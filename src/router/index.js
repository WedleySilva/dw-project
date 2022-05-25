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
  ],
});

export default router;
