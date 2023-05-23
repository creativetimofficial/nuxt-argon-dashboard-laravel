<template>
  <div class="mt-4 overflow-hidden card">
    <div class="p-3 card-body">
      <div class="row">
        <div class="col-lg-5">
          <div class="d-flex">
            <div
              class="text-center shadow icon icon-shape bg-gradient-success border-radius-md"
            >
              <i :class="`text-lg opacity-10 ${icon}`" aria-hidden="true"></i>
            </div>
            <div class="ms-3">
              <p class="mb-0 text-sm text-capitalize font-weight-bold">
                {{ title }}
              </p>
              <h5 class="mb-0 font-weight-bolder">{{ count }}</h5>
            </div>
          </div>
          <span
            v-for="({ label, isCompleted }, index) of labels"
            :key="index"
            class="pb-0 mt-3 badge badge-dot d-block text-start"
          >
            <i
              :class="
                isCompleted ? 'bg-gradient-success' : 'bg-gradient-secondary'
              "
            ></i>
            <span class="text-xs text-muted font-weight-bold">{{ label }}</span>
          </span>
        </div>
        <div class="my-auto col-lg-7">
          <div class="chart ms-auto">
            <apexchart
              width="240"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Consumption Per Room",
  },
  icon: {
    type: String,
    default: "ni ni-delivery-fast",
  },
  count: {
    type: Number,
    default: 0,
  },
  labels: {
    type: Array,
    default: () => [
      {
        label: "Done",
        isCompleted: true,
      },
      {
        label: "In progress",
        isCompleted: false,
      },
    ],
  },
  chartOptions: {
    type: Object,
    default: () => ({
      chart: {
        type: "donut",
      },
      labels: ["Done", "In progress"],
      colors: ["#2dce89", "#a8b8d8"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    }),
  },
  series: {
    type: Array,
    default: () => [75, 25],
  },
});
onMounted(() => {
  nextTick(() => {
    window.dispatchEvent(new Event("resize"));
  });
});
</script>
