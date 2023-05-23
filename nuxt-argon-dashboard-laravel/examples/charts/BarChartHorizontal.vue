<template>
  <apexchart
    :height="height"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>
<script setup>
defineProps({
  height: {
    type: [Number, String],
    default: 300,
  },
  chartOptions: {
    type: Object,
    default: () => ({
      chart: {
        type: "bar",
      },
      colors: ["#3A416F"],
      fill: {
        type: "solid",
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["16-20", "21-25", "26-30", "31-36", "36-42", "42+"],
      },
    }),
  },
  series: {
    type: Array,
    default: () => [
      {
        name: "Sales by age",
        data: [15, 20, 12, 60, 20, 15],
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
