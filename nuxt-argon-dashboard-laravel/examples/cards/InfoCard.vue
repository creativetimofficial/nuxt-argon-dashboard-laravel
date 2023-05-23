<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex">
        <p>{{ title }}</p>
        <div class="ms-auto">
          <ArgonBadge :color="badge.color">{{ badge.text }}</ArgonBadge>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <p class="mb-0">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  badge: {
    type: Object,
    text: String,
    color: String,
    default: () => ({
      color: "success",
      text: "Moderate",
    }),
  },
});
</script>
