<template>
  <div class="card blur shadow-blur">
    <div class="card-body">
      <div class="d-flex">
        <p class="mb-0" :class="isRTL ? 'ms-5' : 'me-5'">
          {{ title }}
        </p>
        <ArgonSwitch :id="id" :name="image.label" :checked="state" />
      </div>
      <img class="img-fluid pt-3 pb-2" :src="image.src" :alt="image.alt" />
      <p class="mb-0">{{ image.label }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: "",
  },
  image: {
    type: Object,
    src: String,
    alt: String,
    label: String,
    default: () => {},
  },
  title: {
    type: String,
    default: "On",
  },
  state: {
    type: Boolean,
    default: true,
  },
  isRTL: {
    type: Boolean,
    default: false,
  },
});
</script>
