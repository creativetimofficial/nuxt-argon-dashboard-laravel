<template>
  <div class="card h-100">
    <div class="card-header">
      <h5 class="mb-0 text-capitalize">{{ title }}</h5>
    </div>
    <div class="card-body pt-0">
      <ul class="list-group list-group-flush">
        <li
          v-for="(
            { image, profile: { name, link }, badge: { label, color } }, index
          ) of members"
          :key="index"
          class="list-group-item px-0"
        >
          <div class="row align-items-center">
            <div class="col-auto d-flex align-items-center">
              <a href="javascript:;" class="avatar">
                <img class="border-radius-lg" :alt="name" :src="image" />
              </a>
            </div>
            <div class="col ml-2">
              <h6 class="mb-0">
                <a :href="link">{{ name }}</a>
              </h6>
              <span :class="`badge  badge-${color} badge-sm`">{{ label }}</span>
            </div>
            <div class="col-auto">
              <button type="button" class="btn btn-outline-primary btn-xs mb-0">
                Add
              </button>
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
    default: "Team members",
  },
  members: {
    type: Array,
    required: true,
    image: String,
    profile: {
      type: Object,
      name: String,
      link: String,
    },
    badge: {
      type: Object,
      label: String,
      color: String,
    },
  },
});
</script>
