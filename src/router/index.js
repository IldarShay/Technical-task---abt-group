import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/pages/MainView"),
  },
  {
    path: "/create_form",
    name: "create",
    component: () => import("@/pages/CreateForm"),
  },
  {
    path: "/edit_form",
    name: "edit",
    component: () => import("@/pages/EditForm"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
