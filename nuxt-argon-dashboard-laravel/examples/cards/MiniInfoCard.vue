<template>
  <div class="card">
    <div class="card-body">
      <div
        class="text-center shadow icon icon-shape"
        :class="`bg-gradient-${icon.background}`"
      >
        <i :class="`opacity-10 ni ni-${icon.component}`" aria-hidden="true"></i>
      </div>
      <h5 class="mt-3 mb-0" v-html="title"></h5>
      <p class="mb-0">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: Object,
    required: true,
    component: String,
    background: String,
    default: () => ({
      component: "curved-next",
      background: "success",
    }),
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
