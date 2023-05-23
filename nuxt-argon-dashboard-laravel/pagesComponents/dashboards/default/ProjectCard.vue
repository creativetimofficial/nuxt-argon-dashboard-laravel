<template>
  <div class="card">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                v-for="(header, index) of headers"
                :key="index"
                :class="`text-uppercase text-dark text-xxs font-weight-bolder opacity-7 ${
                  index !== 0 ? 'ps-2' : ''
                }`"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(
                {
                  brand: { logo, name },
                  badge: { text, color },
                  progress,
                  budget,
                },
                index
              ) of items"
              :key="index"
            >
              <td>
                <div class="d-flex px-2">
                  <div>
                    <img
                      :src="logo"
                      class="avatar avatar-sm rounded-circle me-2"
                    />
                  </div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-xs">{{ name }}</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ budget }}</p>
              </td>
              <td>
                <span class="badge badge-dot me-4">
                  <i :class="`bg-${color}`"></i>
                  <span class="text-dark text-xs">{{ text }}</span>
                </span>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center">
                  <span class="me-2 text-xs">{{ progress }}%</span>
                  <div>
                    <div class="progress">
                      <div
                        :class="`progress-bar bg-${color}`"
                        role="progressbar"
                        :aria-valuenow="progress"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        :style="{ width: progress + '%' }"
                      ></div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <button class="btn btn-link text-dark mb-0">
                  <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  headers: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
    progress: Number,
    budget: String,
    brand: {
      type: Object,
      logo: String,
      name: String,
    },
    badge: {
      type: Object,
      text: String,
      color: String,
    },
  },
});
</script>
