<script setup lang="ts">
import { useFyHead } from "@fy-/head";

useFyHead({
  title: "Welcome - Website",
  metas: [{ name: "description", content: "My super website" }],
});
</script>
<template>
  <div>
    <section class="website__container fui-typo">
      <h1>Welcome to fyvue</h1>
      <div>
        <a href="https://github.com/fyvue" target="_blank" class="btn primary"
          >About fyvue</a
        >
      </div>
    </section>
    <section class="website__container fui-typo">
      <h2>Examples</h2>
      <h3>Breadcrumb</h3>
      <NavBreadcrumb
        :nav="[
          { name: 'fyvue', to: '/' },
          { name: 'Components', to: '/components' },
          { name: 'UI', to: '/components/ui' },
          { name: 'FyBreadcrumb' },
        ]"
      />
      <h3>Modal</h3>
      <DefaultModal title="Test title" id="Test"><p>Hello</p></DefaultModal>
      <button @click="$eventBus.emit('TestModal', true)" class="btn primary">
        Test modal
      </button>
      <h3>And more...</h3>
      <p>
        <a href="https://github.com/fyvue" target="_blank"
          >https://github.com/fyvue/ui/tree/main/src</a
        >
      </p>
    </section>
  </div>
</template>
