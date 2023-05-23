<template>
  <div class="card">
    <div class="text-center card-body">
      <h1 class="text-gradient" :class="`text-${color}`">
        <span class="text-lg ms-n1">{{ prefix }}</span>
        {{ "" }}
        <CountTo :start-val="0" :end-val="count" :duration="duration" />
        {{ "" }}
        <span class="text-lg ms-n1">{{ suffix }}</span>
      </h1>
      <h6 class="mb-0 font-weight-bolder">{{ title }}</h6>
      <p class="mb-0 text-sm opacity-8">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import CountTo from "vue-count-to/src";

defineProps({
  count: {
    type: Number,
    required: true,
  },
  prefix: {
    type: String,
    default: "",
  },
  suffix: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 4000,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    required: true,
    validator(value) {
      return [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
      ].includes(value);
    },
  },
});
</script>
