<template>
  <li class="nav-item">
    <NuxtLink class="nav-link" :to="to">
      <span class="sidenav-mini-icon"> {{ miniIcon }} </span>
      <span class="sidenav-normal"> {{ text }} </span>
    </NuxtLink>
  </li>
</template>
<script setup>
defineProps({
  to: {
    type: [Object, String],
    required: true,
  },
  miniIcon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
