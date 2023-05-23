<template>
  <apexchart
    :width="width"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
defineProps({
  chartOptions: {
    type: Object,
    default: () => ({
      chart: {
        type: "donut",
      },
      colors: ["#2152ff", "#3A416F", "#f53939", "#a8b8d8", "#4BB543"],
      labels: ["Creative Tim", "Github", "Bootsnipp", "Dev.to", "Codeinwp"],
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
    default: () => [15, 20, 12, 60, 20],
  },
  width: {
    type: [Number, String],
    default: 400,
  },
});
onMounted(() => {
  nextTick(() => {
    window.dispatchEvent(new Event("resize"));
  });
});
</script>
