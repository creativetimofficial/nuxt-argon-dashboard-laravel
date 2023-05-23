<template>
  <div
    :class="`card card-background card-background-mask-${background.overlay} h-100`"
  >
    <div
      class="full-background"
      :style="{
        backgroundImage: `url('${background.image}')`,
      }"
    ></div>
    <div class="card-body pt-4 text-center">
      <h6 class="text-white mb-0">{{ title }}</h6>
      <h3 class="text-white">{{ count }}</h3>
      <span :class="`badge d-block bg-gradient-${badge.color} mb-2`">{{
        badge.label
      }}</span>
      <p>{{ description }}</p>
      <a :href="action.route" class="btn btn-outline-white btn-sm px-5 mb-0">{{
        action.label
      }}</a>
    </div>
  </div>
</template>

<script setup>
import backImage from "@/assets/img/img-1-1200x1000.jpg";
defineProps({
  background: {
    type: Object,
    image: String,
    overlay: String,
    default: () => ({
      image: backImage,
      overlay: "info",
    }),
  },
  title: {
    type: String,
    default: "Statistics Card",
  },
  description: {
    type: String,
    default: "",
  },
  count: {
    type: [Number, String],
    default: "",
  },
  badge: {
    type: Object,
    color: String,
    label: String,
    default: () => ({
      color: "dark",
    }),
  },
  action: {
    type: Object,
    required: true,
    route: String,
    label: String,
  },
});
</script>
