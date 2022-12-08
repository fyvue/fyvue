<script setup lang="ts">
import App from "./App.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <App />
    </template>
    <template #fallback>
      <DefaultLoader
        id="app-suspender"
        :force="true"
        :show-loading-text="false"
      />
    </template>
  </Suspense>
</template>
