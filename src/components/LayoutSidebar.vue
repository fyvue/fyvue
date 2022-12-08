<script lang="ts" setup>
import {
  InformationCircleIcon,
  BellIcon,
  HomeIcon,
} from "@heroicons/vue/24/solid";
const links = [
  {
    name: "Home",
    to: "/",
    icon: HomeIcon,
  },
  {
    name: "Help",
    to: "/help",
    icon: InformationCircleIcon,
  },
  {
    name: "Notifications",
    to: "/notifs",
    icon: BellIcon,
  },
];
</script>

<template>
  <NavSide :links="links" class="bg-fv-neutral-50 dark:bg-fv-neutral-900" />
</template>
