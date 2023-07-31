import LayoutFrame from "@/components/LayoutFrame.vue";
import { createRouter, createWebHashHistory } from "vue-router";

let history = createWebHashHistory(import.meta.env.BASE_URL);
let routes = [
  {
    // 錯誤頁面
    path: "/error/:code(\\d{3})?",
    component: () => import("@/views/ErrorPage.vue"),
    name: "error",
    props: true,
    meta: {
      title: "Error",
    },
  },
  {
    name: "dashboard",
    path: "/",
    redirect: "/home",
    component: LayoutFrame,
    children: [
      { path: "home", name: "home", component: () => import("@/views/home/HomeIndex.vue") },
      {
        path: "page",
        name: "pageLayout",
        component: () => import("@/views/pages/PageLayout.vue"),
        redirect: "/page/about",
        children: [
          {
            path: "about",
            name: "about",
            component: () => import("@/views/pages/AboutIndex.vue"),
            meta: {
              title: "about.title",
            },
          },
          {
            path: "experience",
            name: "experience",
            component: () => import("@/views/pages/ExperienceIndex.vue"),
            meta: {
              title: "experience.title",
            },
          },
          {
            path: "skill",
            name: "skill",
            component: () => import("@/views/pages/SkillIndex.vue"),
            redirect: "/page/skill/web",
            meta: {
              title: "skill.title",
            },
            children:[
              {
                path: "web",
                name: "skill-web",
                component: () => import("@/views/pages/SkillWeb.vue"),
              },
              {
                path: "english",
                name: "skill-english",
                component: () => import("@/views/pages/SkillEnglish.vue"),
              }
            ]
          },
          {
            path: "project",
            name: "project",
            component: () => import("@/views/pages/ProjectIndex.vue"),
            meta: {
              title: "project.title",
            },
          },
        ],
      },
      {
        path: "single-page",
        name: "single-page",
        component: () => import("@/views/SinglePage.vue"),
      },
    ],
  },
  // 預設無匹配網址，進入錯誤頁
  {
    name: "pathMatch",
    path: "/:catchAll(.*)",
    meta: {
      hidden: true,
    },
    redirect: "/error/404",
  },
];

export default createRouter({
  history,
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
