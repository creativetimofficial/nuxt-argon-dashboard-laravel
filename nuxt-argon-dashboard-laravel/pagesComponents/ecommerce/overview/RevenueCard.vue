<template>
  <div class="card">
    <div class="p-3 pb-0 card-header">
      <div class="d-flex justify-content-between">
        <h6 class="mb-0">Revenue</h6>
        <button
          type="button"
          class="mb-0 btn btn-icon-only btn-rounded btn-outline-secondary ms-2 btn-sm d-flex align-items-center justify-content-center"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title
          data-bs-original-title="See which ads perform better"
        >
          <i class="fas fa-info" aria-hidden="true"></i>
        </button>
      </div>
      <div class="d-flex align-items-center">
        <span class="badge badge-md badge-dot me-4">
          <i class="bg-success"></i>
          <span class="text-xs text-dark">Facebook Ads</span>
        </span>
        <span class="badge badge-md badge-dot me-4">
          <i class="bg-dark"></i>
          <span class="text-xs text-dark">Google Ads</span>
        </span>
      </div>
    </div>
    <div class="p-3 card-body">
      <div class="chart">
        <GradientLineChart
          :chart-options="{
            colors: ['#4BB543', '#3A416F'],
            labels: [
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
            },
            legend: {
              show: false,
            },
          }"
          :series="[
            {
              name: 'Facebook Ads',
              data: [50, 100, 200, 190, 400, 350, 500, 450, 700],
            },
            {
              name: 'Google Ads',
              data: [10, 30, 40, 120, 150, 220, 280, 250, 280],
            },
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import GradientLineChart from "~~/examples/charts/GradientLineChart.vue";
</script>
