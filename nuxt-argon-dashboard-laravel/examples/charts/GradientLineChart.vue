<template>
  <apexchart
    type="area"
    :height="height"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
defineProps({
  height: {
    type: [Number, String],
    default: 290,
  },
  chartOptions: {
    type: Object,
    default: () => ({
      colors: ["#4BB543", "#3A416F"],
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
    }),
  },
  series: {
    type: Array,
    default: () => [
      {
        name: "Mobile Apps",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      },
      {
        name: "Websites",
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
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
