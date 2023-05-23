<template>
  <nav aria-label="breadcrumb">
    <ol
      class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb"
      :class="{ 'me-sm-6': !isRTL }"
    >
      <li class="text-sm breadcrumb-item">
        <a :class="navStore.navFixed ? 'text-dark' : 'text-white'">
          <i class="ni ni-box-2"></i>
        </a>
      </li>
      <li
        class="text-sm breadcrumb-item"
        :class="navStore.navFixed ? 'text-dark' : 'text-white'"
      >
        <a
          class="opacity-8"
          :class="navStore.navFixed ? 'text-dark' : 'text-white'"
          href="#"
          >{{ currentRouteDirectory || currentDirectory }}</a
        >
      </li>
      <li
        class="text-sm breadcrumb-item active"
        :class="navStore.navFixed ? 'text-dark' : 'text-white'"
        aria-current="page"
      >
        {{ currentRouteName || currentPage }}
      </li>
    </ol>
    <h6
      class="mb-0 font-weight-bolder"
      :class="navStore.navFixed ? 'text-dark' : 'text-white'"
    >
      {{ currentRouteName || currentPage }}
    </h6>
  </nav>
</template>

<script setup>
import { useNavStore } from "~~/stores/NavStore";
const navStore = useNavStore();
defineProps({
  currentPage: {
    type: String,
    default: "Default",
  },
  currentDirectory: {
    type: String,
    default: "Dashboard",
  },
  isRTL: {
    type: Boolean,
    default: false,
  },
});

const currentRouteName = computed(() => {
  const route = useRoute();

  const file = route.path.split("/").slice(-1)[0];
  const name = file.split("-");
  for (const i in name) {
    name[i] = name[i][0]?.toUpperCase() + name[i].substring(1);
  }
  const fulllRouteName = name.join(" ");
  return fulllRouteName;
});

const currentRouteDirectory = computed(() => {
  const route = useRoute();
  const dir = route.path.split("/")[1];
  return dir.charAt(0).toUpperCase() + dir.slice(1);
});
</script>
