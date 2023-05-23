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
    default: 150,
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
      colors: ["#4BB543"],
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
        name: "Visitors",
        data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
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
