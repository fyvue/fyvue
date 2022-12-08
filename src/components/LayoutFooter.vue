<script setup lang="ts">
// Standarised svg icons (1 path, fill=currentColor)
// https://github.com/fyvue/ui/tree/main/src/components/icons
import { FacebookIcon, TwitterIcon, VkIcon, TiktokIcon, YoutubeIcon } from "@fy-/ui";
</script>
<template>
  <footer class="website__footer">
    <div class="website__container">
      <div class="flex items-center justify-between">
        <p class="p">&copy; Website 2022</p>
        <div class="inline-flex gap-3">
          <button type="button" class="btn neutral round !p-1.5">
            <FacebookIcon class="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </button>
          <button type="button" class="btn neutral round !p-1.5">
            <TwitterIcon class="w-5 h-5 text-sky-500 dark:text-sky-400" />
          </button>
          <button type="button" class="btn neutral round !p-1.5">
            <VkIcon class="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </button>
          <button type="button" class="btn neutral round !p-1.5">
            <TiktokIcon
              class="w-5 h-5 text-neutral-600 dark:text-neutral-400"
            />
          </button>
          <button type="button" class="btn neutral round !p-1.5">
            <YoutubeIcon
              class="w-5 h-5 text-red-600 dark:text-red-400"
            />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
