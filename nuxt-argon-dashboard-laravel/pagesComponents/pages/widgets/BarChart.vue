<template>
  <div class="card z-index-2">
    <div class="p-3 pb-0 card-header">
      <h6>{{ title }}</h6>
    </div>
    <div class="p-3 card-body">
      <div class="chart">
        <apexchart
          type="bar"
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
    default: "Bar Chart",
  },
  chartOptions: {
    type: Object,
    default: () => ({
      chart: {
        height: 300,
        type: "bar",
      },
      colors: ["#3A416F"],
      fill: {
        type: "solid",
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
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
        name: "Sales by Age",
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
