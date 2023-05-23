<template>
  <div class="card py-1">
    <div class="card-body">
      <p>{{ title }}</p>
      <h3>{{ count }}</h3>
      <ArgonBadge :color="badge.color">{{ badge.label }}</ArgonBadge>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Steps",
  },
  count: {
    type: String,
    default: "11.4K",
  },
  badge: {
    type: Object,
    label: String,
    color: String,
    default: () => ({
      color: "success",
    }),
  },
});
</script>
