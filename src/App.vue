<script setup>
// import { i18nextPromise } from "@fy-/core";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutSidebar from "./components/LayoutSidebar.vue";
if (!import.meta.env.SSR) {
  /* await myStore.checkUser(), etc... */
}
/*
  await i18nextPromise(Backend, 'en-US') //You can add i18next support with this line Default namespace is translation.
  Backend must be a valid i18next backend. I'll add a default fallback for fyvue/ui when I have some time.
  You'll then have access to i18next.t via $t in options and useTranslation in composition (from @fy-/core);
  More info on https://www.i18next.com/
*/
</script>

<template>
  <div class="website min-height">
    <LayoutHeader />
    <RouterView v-slot="{ Component }">
      <Suspense timeout="0">
        <main class="website__main" id="skip-nav">
          <LayoutSidebar />
          <component :is="Component" />
          <DefaultLoader id="main" />
        </main>
        <template #fallback>
          <DefaultLoader
            id="app-router-suspender"
            :force="true"
            :show-loading-text="false"
          />
        </template>
      </Suspense>
    </RouterView>
    <LayoutFooter />
  </div>
</template>
