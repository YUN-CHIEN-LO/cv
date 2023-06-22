import LayoutFrame from "@/components/LayoutFrame.vue";
import { createRouter, createWebHistory } from "vue-router";

let history = createWebHistory();
let routes = [
  {
    name: "dashboard",
    path: "/",
    redirect: "/home",
    component: LayoutFrame,
    children: [
      { path: "home", name: "home", component: () => import("@/views/home/HomeIndex.vue") },
      {
        path: "single-page",
        name: "single-page",
        component: () => import("@/views/SinglePage.vue"),
      },
    ],
  },
];

export default createRouter({ history, routes });
