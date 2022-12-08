import { createApp as createRegularApp, createSSRApp } from "vue";
import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";
import { createFyCore } from "@fy-/core";
import { createFyUI } from "@fy-/ui";
import { createFyHead } from "@fy-/head";
import { createPinia } from "pinia";

import App from "./AppSuspender.vue";
import routes from "./routes";
import "./global.scss";

export const createApp = async (isSSR = false) => {
  const pinia = createPinia();
  const fycore = createFyCore();
  const head = createFyHead();
  const fyui = createFyUI();
  const app = isSSR ? createSSRApp(App) : createRegularApp(App);
  const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  });
  app.use(router);
  app.use(pinia);
  app.use(head);
  app.use(fycore);
  app.use(fyui);
  return { app, router, head, pinia };
};
