<template>
  <div class="mb-4 card">
    <div class="pb-0 card-header">
      <h6>{{ title }}</h6>
    </div>
    <div class="px-0 pt-0 pb-2 card-body">
      <div class="p-0 table-responsive">
        <table class="table mb-0 align-items-center">
          <thead>
            <tr>
              <th
                v-for="(header, index) of headers"
                :key="index"
                :class="index >= 1 ? 'text-center ps-2' : ''"
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(
                { title: listTitle, order, values, info, image, icon }, index
              ) in lists"
              :key="index"
            >
              <td>
                <div class="px-3 py-1 d-flex">
                  <ArgonAvatar
                    :image="image"
                    class="me-3"
                    border-radius="lg"
                    alt="avatar image"
                  />
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ listTitle }}</h6>
                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                      <span class="text-success">{{ order }}</span>
                      orders
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-center mb-0 text-sm font-weight-bold">
                  {{ values[0] }}
                </p>
              </td>
              <td class="text-sm align-middle">
                <p class="text-center mb-0 text-sm font-weight-bold">
                  {{ values[1] }}
                </p>
              </td>
              <td class="align-middle text-center">
                <div
                  class="text-center px-3 py-1 d-flex justify-content-center align-items-center"
                >
                  <p class="mb-0 text-sm font-weight-bold">
                    {{ values[2] }}
                  </p>
                  <i class="mt-1 text-sm ms-1" :class="`ni ni-${icon}`"></i>
                  <ArgonButton
                    v-if="info"
                    size="sm"
                    color="secondary"
                    variant="outline"
                    class="btn-icon-only btn-rounded mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-3"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    :data-bs-original-title="info"
                  >
                    <i class="fas fa-info" aria-hidden="true"></i>
                  </ArgonButton>
                </div>
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
  title: {
    type: String,
    default: "",
  },
  headers: {
    type: Array,
    default: () => [],
  },
  lists: {
    type: Array,
    required: true,
    values: Array,
    title: String,
    order: String,
    info: String,
    image: String,
    icon: String,
  },
});
</script>
