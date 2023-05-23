<template>
  <div class="card z-index-2">
    <div class="p-3 pb-0 card-header">
      <h6>{{ title }}</h6>
    </div>
    <div class="p-3 card-body">
      <div class="chart">
        <apexchart
          type="line"
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
    default: "Mixed Chart",
  },
  chartOptions: {
    type: Object,
    default: () => ({
      chart: {
        height: 350,
        type: "line",
      },
      colors: ["#3A416F", "#4BB543"],
      title: {
        text: "Mixed Chart",
      },
      dataLabels: {
        enabled: false,
        enabledOnSeries: [1],
      },
      legend: {
        show: false,
      },
      stroke: {
        width: [5, 7],
        curve: "smooth",
      },
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      xaxis: {
        type: "category",
      },
    }),
  },
  series: {
    type: Array,
    default: () => [
      {
        name: "Organic Reach",
        type: "column",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      },
      {
        name: "Referral",
        type: "line",
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
