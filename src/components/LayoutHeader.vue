<script setup lang="ts">
import { ref } from "vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
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
const query = ref<string>();
</script>
<template>
  <NavMain :links="navLinks" :showTitle="true" title="website">
    <template v-slot:logo>
      <img src="@/assets/images/logo.svg" class="h-10" />
    </template>
    <template v-slot:custom>
      <div class="fyui-nav__search">
        <form
          class=""
          @submit.prevent="
            () => {
              if (query) $router.push(`/search/${query}`);
              else {
                $router.push(`/search/`);
              }
            }
          "
        >
          <DefaultInput
            id="search"
            ref="searchInputRef"
            v-model="query"
            type="search"
            placeholder="Search..."
          >
            <template v-slot:before>
              <div class="fyuid-nav__search-icon">
                <MagnifyingGlassIcon class="w-5 h-5 text-fv-neutral-500" />
              </div>
            </template>
          </DefaultInput>
        </form>
      </div>
    </template>
  </NavMain>
</template>
