<template>
  <div class="card z-index-2">
    <div class="p-3 pb-0 card-header">
      <h6>{{ title }}</h6>
    </div>
    <div class="p-3 card-body">
      <div class="chart">
        <apexchart
          type="line"
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
    default: "",
  },
  height: {
    type: [Number, String],
    default: 300,
  },
  chartOptions: {
    type: Object,
    default: () => ({
      chart: {
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      colors: ["#4BB543", "#3A416F", "#17c1e8"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      legend: {
        show: false,
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    }),
  },
  series: {
    type: Array,
    default: () => [
      {
        name: "Organic Search",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      },
      {
        name: "Referral",
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
      },
      {
        name: "Direct",
        data: [40, 80, 70, 90, 30, 90, 140, 130, 200],
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
