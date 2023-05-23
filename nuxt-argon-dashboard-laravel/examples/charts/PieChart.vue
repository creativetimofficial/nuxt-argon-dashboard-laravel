<template>
  <apexchart
    type="pie"
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
      colors: ["#17c1e8", "#4BB543", "#3A416F", "#a8b8d8"],
      labels: ["Facebook", "Direct", "Organic", "Referral"],
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
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
    default: () => [15, 20, 12, 60],
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
