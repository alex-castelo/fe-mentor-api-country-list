import {
  createWebHistory,
  createRouter,
  RouteRecord,
  RouteRecordRaw,
} from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    component: () => import("../views/CountryList/CountryList.vue"),
  },
  {
    path: "/country/:name",
    props: true,
    component: () => import("../views/CountryDetail/CountryDetail.vue"),
  },
];

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
