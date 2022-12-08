<script setup lang="ts">
import { useServerRouter } from "@fy-/core";
import { useFyHead } from "@fy-/head";

const routerServer = useServerRouter();
routerServer.status = 404;
useFyHead({
  title: "Error 404",
});
</script>
<template>
  <div class="website__min-height items-center justify-center">
    <h1 class="h1">Error 404</h1>
    <span class="h4"> Whoops. This page has disappeared.</span>
    <div class="my-3">
      <button @click="$router.go(-1)" class="btn primary">Back</button>
    </div>
  </div>
</template>
