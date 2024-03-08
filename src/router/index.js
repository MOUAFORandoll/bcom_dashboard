import { createRouter, createWebHistory } from "vue-router";
// import Style from "@/views/StyleView.vue";
import Home from "@/views/HomeView.vue";

const routes = [
  // {
  //   meta: {
  //     title: "Select style",
  //   },
  //   path: "/",
  //   name: "style",
  //   component: Style,
  // },

  {
    meta: {
      title: "Login",
    },
    path: "/",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    meta: {
      title: "Dashboard",
    },
    path: "/dashboard",
    name: "dashboard",
    component: Home,
  },

  {
    meta: {
      title: "Nouvelle Mission",
    },
    path: "/mission/new",
    name: "new_mission",
    component: () => import("@/views/Missions/MissionNew.vue"),
  },
  {
    meta: {
      title: "Missions En cours",
    },
    path: "/mission/list",
    name: "list_mission",
    component: () => import("@/views/Missions/MissionsList.vue"),
  },
  {
    meta: {
      title: "sessions Control",
    },
    path: "/control/sessions",
    name: "control_session",
    component: () => import("@/views/Session/SessionListControl.vue"),
  },
  {
    meta: {
      title: "List Control",
    },
    path: "/control/list",
    name: "control_list",
    component: () => import("@/views/Session/ControlList.vue"),
  },

  {
    meta: {
      title: "Utilisateurs",
    },
    path: "/utilisateurs",
    name: "utilisateurs",
    component: () => import("@/views/Utilisateurs/UtilisateursView.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    meta: {
      title: "Ui",
    },
    path: "/ui",
    name: "ui",
    component: () => import("@/views/UiView.vue"),
  },
  {
    meta: {
      title: "politique-de-confidentialite",
    },
    path: "/politique-de-confidentialite",
    name: "politique-de-confidentialite",
    component: () => import("@/views/Politique.vue"),
  },
  {
    meta: {
      title: "Biker information",
    },
    path: "/biker-info",
    name: "biker-info",
    component: () => import("@/views/Politique.vue"),
  },
  {
    meta: {
      title: "Biker information",
    },
    path: "/controlleur-terrain-info",
    name: "controlleur-terrain-info",
    component: () => import("@/views/Politique.vue"),
  },
  {
    meta: {
      title: "Error",
    },
    path: "/:catchAll(.*)*",
    name: "error",
    component: () => import("@/views/ErrorView.vue"),
  },
];

const router = createRouter({
  base: "/",
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

router.beforeEach((to) => {
  // if (to.name != "login") {
  //   console.log(
  //     "different------------------",
  //     localStorage.getItem("keySecret"),
  //     to.name
  //   );
  //   if (localStorage.getItem("keySecret") == null) {
  //     router.push("/");
  //   }
  //   //
  // }
});
export default router;
