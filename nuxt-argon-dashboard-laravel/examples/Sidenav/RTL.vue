<template>
  <aside
    id="sidenav-main"
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 ms-4 fixed-end me-3 rotate-caret"
    :class="`${navStore.sidenavType}`"
  >
    <div class="sidenav-header">
      <i
        id="iconSidenav"
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
      ></i>
      <NuxtLink class="m-0 navbar-brand" to="/">
        <img :src="logo" class="navbar-brand-img mb-2" alt="main_logo" />

        <span class="ms-2 font-weight-bold h5">Argon</span>
      </NuxtLink>
    </div>
    <hr class="mt-0 horizontal dark" />
    <SidenavList isRTL />
  </aside>
</template>
<script setup>
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/logo.svg";

import { useNavStore } from "~~/stores/NavStore";
const navStore = useNavStore();
</script>
<style scoped>
.router-link-active {
  color: "#212529";
}
</style>
