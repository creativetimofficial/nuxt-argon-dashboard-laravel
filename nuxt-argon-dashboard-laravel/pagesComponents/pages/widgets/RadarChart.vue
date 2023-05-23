<template>
  <div class="card z-index-2">
    <div class="p-3 pb-0 card-header">
      <h6>{{ title }}</h6>
    </div>
    <div class="p-5 card-body">
      <div class="chart">
        <apexchart
          type="radar"
          height="350"
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
    default: "Radar Chart",
  },
  chartOptions: {
    type: Object,
    default: () => ({
      chart: {
        height: 350,
        type: "radar",
      },

      xaxis: {
        categories: [
          "English",
          "Maths",
          "Physics",
          "Chemistry",
          "Biology",
          "History",
        ],
      },
    }),
  },
  series: {
    type: Array,
    default: () => [
      {
        name: "Student A",
        data: [65, 75, 70, 80, 60, 80],
      },
      {
        name: "Student B",
        data: [54, 65, 60, 70, 70, 75],
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
