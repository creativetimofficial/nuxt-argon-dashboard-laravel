<template>
  <div class="card z-index-2">
    <div class="p-3 pb-0 card-header">
      <h6>Bubble Chart</h6>
    </div>
    <div class="p-3 card-body">
      <div class="chart">
        <apexchart
          type="bubble"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        colors: ["#4BB543", "#3A416F"],
        fill: {
          type: "solid",
        },
        chart: {
          height: 350,
          type: "bubble",
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "3D Bubble Chart",
        },
        xaxis: {
          tickAmount: 9,
          type: "numeric",
          labels: {
            rotate: 0,
          },
        },
        yaxis: {
          max: 350,
        },
        theme: {
          palette: "palette",
        },
      },
      series: [
        {
          name: "Dataset 1",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 6, {
            min: 100,
            max: 300,
          }),
        },
        {
          name: "Dataset 2",
          data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 6, {
            min: 5,
            max: 300,
          }),
        },
      ],
    };
  },

  mounted() {
    this.$nextTick(() => {
      window.dispatchEvent(new Event("resize"));
    });
  },
  methods: {
    generateData(baseval, count, yrange) {
      let i = 0;
      const series = [];
      while (i < count) {
        const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        const y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        series.push([x, y, z]);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        baseval += 86400000;
        i++;
      }
      return series;
    },
  },
};
</script>
