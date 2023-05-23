<template>
  <div class="col-md-4 col-12">
    <div class="card card-plain text-center">
      <div class="card-body">
        <div
          :class="`icon icon-shape bg-gradient-${icon.color} shadow text-center border-radius-md mb-2`"
        >
          <i
            :class="`${icon.component} text-lg opacity-10`"
            aria-hidden="true"
          ></i>
        </div>
        <p class="text-sm font-weight-bold mb-2">
          {{ description }}
        </p>
        <h5 class="font-weight-bolder" v-html="value"></h5>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  icon: {
    type: Object,
    required: true,
    component: String,
    color: String,
  },
  description: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
});
</script>
