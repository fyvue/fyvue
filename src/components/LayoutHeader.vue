<script setup>
const navLinks = [
  { name: "Home", to: "/" },
  {
    name: "Submenu",
    to: "/#",
    childrens: [
      { name: "Submenu 1", to: "/submenu-1" },
      { name: "Submenu 2", to: "/submenu-2" },
    ],
  },
  { name: "Contact", to: "/contact" },
];
</script>
<template>
  <NavMain :links="navLinks" :showTitle="true" title="website">
    <template v-slot:logo>
      <img src="@/assets/images/logo.svg" class="h-10" />
    </template>
  </NavMain>
</template>
