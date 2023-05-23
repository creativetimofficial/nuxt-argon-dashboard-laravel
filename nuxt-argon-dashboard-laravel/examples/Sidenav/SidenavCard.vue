<template>
  <div id="sidenavCard" class="card card-plain shadow-none">
    <img
      class="w-60 mx-auto"
      src="@/assets/img/illustrations/icon-documentation.svg"
      alt="sidebar_illustration"
    />
    <div class="p-3 card-body text-center w-100 pt-0">
      <div class="docs-info">
        <h6 class="mb-0 up">
          {{ card.title }}
        </h6>
        <p class="text-xs font-weight-bold">{{ card.description }}</p>
        <a
          v-for="({ label, route, color }, index) of card.links"
          :key="index"
          :href="route"
          target="_blank"
          :class="`btn btn-${color} btn-sm w-100 ${
            index === 0 ? 'mb-3' : 'mb-0'
          }`"
          >{{ label }}</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
    title: String,
    description: String,
    links: {
      type: Array,
      label: String,
      route: String,
      color: String,
    },
  },
});
</script>
