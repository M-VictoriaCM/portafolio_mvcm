
import { createRouter, createMemoryHistory,createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { useUserStore } from "../stores/user-store";



const routes = [
  {path: "/",name: "Home",component: Home},
  {path: "/skills", name: "Skills", component: () => import("../views/Skills.vue")},
  {path: "/profile",name: "Profile", component: () => import("../views/Profile.vue")},
  {path: "/contactme",name: "ContactMe", component: () => import("../views/Contactme.vue")},
  {path: "/portfolio",name: "Portfolio", component: () => import("../views/Portfolio.vue")},
  {path: "/admin", name: "Admin", component: () => import("../views/Admin.vue"), meta: {auth:true}},
  {path: "/login", name:"Login", component: () => import("../views/Login.vue")},
  {path: "/protected", name:"Protected", component: () => import("../views/Protected.vue"), meta: {auth:true}},
  {path: "/register", name:"Register", component: () => import("../views/RegisterPage.vue")},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(async(to, from, next) => {
  const requiredAuth =to.meta.auth;

  const userStore = useUserStore();

  //si existe el token en el localStorage
  if(userStore.token){
    return next();
  }  

  if(requiredAuth || sessionStorage.getItem("user")){
    await userStore.refreshToken();
    if(userStore.token){
      return next();
    }
    return next({name: "Login"});
  }
  return next();
  
});

export default router;
