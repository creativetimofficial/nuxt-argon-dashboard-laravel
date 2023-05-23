<template>
  <div class="card z-index-2">
    <div class="p-3 pb-0 card-header">
      <h6>{{ title }}</h6>
    </div>
    <div class="p-5 card-body">
      <div class="chart">
        <apexchart
          height="400"
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
    default: "Polar Area Chart",
  },
  chartOptions: {
    type: Object,
    default: () => ({
      chart: {
        type: "polarArea",
      },
      colors: ["#17c1e8", "#5e72e4", "#3A416F", "#a8b8d8", "#82d616"],
      labels: ["Blue", "Purple", "Grey", "Grey", "Green"],

      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    }),
  },
  series: {
    type: Array,
    default: () => [11, 16, 7, 3, 14],
  },
});
onMounted(() => {
  nextTick(() => {
    window.dispatchEvent(new Event("resize"));
  });
});
</script>
