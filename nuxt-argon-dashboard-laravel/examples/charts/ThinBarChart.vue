<template>
  <div class="card h-100">
    <div class="p-3 card-body">
      <h6>{{ title }}</h6>
      <div class="pt-3 chart">
        <apexchart
          type="bar"
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
    default: "Consumption per day",
  },
  height: {
    type: [Number, String],
    default: 190,
  },
  chartOptions: {
    type: Object,
    default: () => ({
      chart: {
        type: "bar",
      },
      colors: ["#3A416F"],

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "45%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return +val + " Watts";
          },
        },
      },
    }),
  },
  series: {
    type: Array,
    default: () => [
      {
        name: "Watts",
        data: [150, 230, 380, 220, 420, 200, 70],
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
