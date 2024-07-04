import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/Layout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
