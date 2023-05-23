<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-md-6">
        <h5 class="mb-0 text-white">Charts</h5>
        <p class="mb-0 text-sm text-white">
          Charts on this page use Chart.js - Simple yet flexible JavaScript
          charting for designers & developers.
        </p>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-md-6">
        <DefaultLineChart />
      </div>
      <div class="mt-4 col-md-6 mt-md-0">
        <div class="card z-index-2">
          <div class="pb-0 card-header mb-0">
            <h6>Gradient Line Chart</h6>
          </div>
          <div class="p-3 card-body">
            <div class="chart">
              <GradientLineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-md-6">
        <BarChart />
      </div>
      <div class="mt-4 col-md-6 mt-md-0">
        <div class="card z-index-2">
          <div class="p-3 pb-0 card-header">
            <h6>Bar Chart Horizontal</h6>
          </div>
          <div class="p-3 card-body">
            <div class="chart">
              <BarChartHorizontal height="340" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-md-6">
        <MixedChart />
      </div>
      <div class="mt-4 col-md-6 mt-md-0">
        <BubbleChart />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-md-6">
        <div class="card z-index-2">
          <div class="p-3 pb-0 card-header">
            <h6>Doughnut Chart</h6>
          </div>
          <div class="p-3 card-body">
            <div class="chart d-flex justify-content-center">
              <DoughnutChart />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 col-md-6 mt-md-0">
        <div class="card z-index-2">
          <div class="p-3 pb-0 card-header">
            <h6>Pie Chart</h6>
          </div>
          <div class="p-3 card-body">
            <div class="chart d-flex justify-content-center">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-md-6">
        <RadarChart />
      </div>
      <div class="mt-4 col-md-6 mt-md-0">
        <PolarChart />
      </div>
    </div>
  </div>
</template>
<script setup>
import DefaultLineChart from "~~/examples/charts/DefaultLineChart.vue";
import GradientLineChart from "~~/examples/charts/GradientLineChart.vue";
import BarChart from "~~/pagesComponents/pages/widgets/BarChart.vue";
import BarChartHorizontal from "~~/examples/charts/BarChartHorizontal.vue";
import MixedChart from "~~/pagesComponents/pages/widgets/MixedChart.vue";
import BubbleChart from "~~/pagesComponents/pages/widgets/BubbleChart.vue";
import DoughnutChart from "~~/examples/charts/DoughnutChart.vue";
import PieChart from "~~/examples/charts/PieChart.vue";
import RadarChart from "~~/pagesComponents/pages/widgets/RadarChart.vue";
import PolarChart from "~~/pagesComponents/pages/widgets/PolarChart.vue";

definePageMeta({
  layout: "default",
  middleware: ["auth"],
});
</script>
