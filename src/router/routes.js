
import { createRouter, createMemoryHistory,createWebHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  {path: "/",name: "Home",component: Home},
  {path: "/skills", name: "Skills", component: () => import("../views/Skills.vue")},
  {path: "/profile",name: "Profile", component: () => import("../views/Profile.vue")},
  {path: "/contactme",name: "ContactMe", component: () => import("../views/Contactme.vue")},
  {path: "/portfolio",name: "Portfolio", component: () => import("../views/Portfolio.vue")}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
