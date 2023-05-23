<template>
  <div class="card h-100">
    <div class="card-header">
      <h5 class="mb-0 text-capitalize">{{ title }}</h5>
    </div>
    <div class="card-body pt-0">
      <ul class="list-group list-group-flush list">
        <li
          v-for="(
            { brand: { logo, link }, label, progress: { percentage, color } },
            index
          ) of list"
          :key="index"
          class="list-group-item px-0"
        >
          <div class="row align-items-center">
            <div class="col-auto">
              <a :href="link" class="avatar rounded-circle">
                <img alt="Image placeholder" :src="logo" />
              </a>
            </div>
            <div class="col">
              <h6>{{ label }}</h6>
              <div class="progress progress-xs mb-0">
                <div
                  :class="`progress-bar bg-${color}`"
                  role="progressbar"
                  :aria-valuenow="percentage"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :style="{ width: percentage + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  list: {
    type: Array,
    required: true,
    label: String,
    brand: {
      type: Object,
      logo: String,
      link: String,
    },
    progress: {
      type: Object,
      percentage: Number,
      color: String,
    },
  },
});
</script>
