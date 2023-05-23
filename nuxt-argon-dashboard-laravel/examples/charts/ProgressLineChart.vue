<template>
  <div class="overflow-hidden card">
    <div class="p-3 pb-0 card-header">
      <div class="d-flex align-items-center">
        <div
          class="text-center shadow icon icon-shape border-radius-md bg-gradient-success"
        >
          <i
            class="text-lg ni opacity-10"
            :class="`ni-${icon}`"
            aria-hidden="true"
          ></i>
        </div>
        <div :class="isRTL ? 'me-3' : 'ms-3'">
          <p class="mb-0 text-sm text-capitalize font-weight-bold">
            {{ title }}
          </p>
          <h5 class="mb-0 font-weight-bolder">{{ count }}</h5>
        </div>
        <div
          class="progress-wrapper w-25"
          :class="isRTL ? 'me-auto' : 'ms-auto'"
        >
          <div class="progress-info">
            <div class="progress-j">
              <span class="text-xs font-weight-bold">{{ progress }}%</span>
            </div>
          </div>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              :class="`w-${progress}`"
              role="progressbar"
              :aria-valuenow="progress"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-0 mt-3 card-body">
      <div class="chart">
        <apexchart
          :height="height"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: "Progress Line Chart",
  },
  icon: {
    type: String,
    default: "calendar-grid-58",
  },
  count: {
    type: Number,
    default: 0,
  },
  progress: {
    type: Number,
    default: 0,
  },
  height: {
    type: [String, Number],
    default: 100,
  },
  isRTL: {
    type: Boolean,
    default: false,
  },
  chartOptions: {
    type: Object,
    default: () => ({
      chart: {
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      colors: ["#2dce89"],
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      legend: {
        show: false,
      },
      yaxis: {
        show: false,
      },
    }),
  },
  series: {
    type: Array,
    default: () => [
      {
        name: "Tasks",
        data: [40, 45, 42, 41, 40, 43, 40, 42, 39],
      },
    ],
  },
});
onMounted(() => {
  nextTick(() => {
    window.dispatchEvent(new Event("resize"));
  });
});
</script>
