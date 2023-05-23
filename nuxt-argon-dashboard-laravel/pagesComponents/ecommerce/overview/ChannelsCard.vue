<template>
  <div class="card h-100">
    <div class="p-3 pb-0 card-header">
      <div class="d-flex justify-content-between">
        <h6 class="mb-0">Channels</h6>
        <button
          type="button"
          class="mb-0 btn btn-icon-only btn-rounded btn-outline-secondary ms-2 btn-sm d-flex align-items-center justify-content-center"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title
          data-bs-original-title="See traffic channels"
        >
          <i class="fas fa-info" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="p-3 pb-0 mt-4 card-body">
      <div class="row">
        <div class="col-7 text-start">
          <div class="chart d-flex justify-content-center">
            <PieChart
              :chart-options="{
                colors: ['#17c1e8', '#4BB543', '#3A416F', '#a8b8d8'],
                labels: ['Facebook', 'Direct', 'Organic', 'Referral'],
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
                        position: 'bottom',
                      },
                    },
                  },
                ],
              }"
              :series="[15, 20, 12, 60]"
              width="250"
            />
          </div>
        </div>
        <div class="my-auto mx-auto col-5">
          <span class="badge badge-md badge-dot me-4 d-block text-start">
            <i class="bg-info"></i>
            <span class="text-xs text-dark">Facebook</span>
          </span>
          <span class="badge badge-md badge-dot me-4 d-block text-start">
            <i class="bg-success"></i>
            <span class="text-xs text-dark">Direct</span>
          </span>
          <span class="badge badge-md badge-dot me-4 d-block text-start">
            <i class="bg-dark"></i>
            <span class="text-xs text-dark">Organic</span>
          </span>
          <span class="badge badge-md badge-dot me-4 d-block text-start">
            <i class="bg-secondary"></i>
            <span class="text-xs text-dark">Referral</span>
          </span>
        </div>
      </div>
    </div>
    <div class="p-3 pt-0 pb-0 card-footer d-flex align-items-center">
      <div class="w-60">
        <p class="text-sm">
          More than
          <b>1,200,000</b> sales are made using referral marketing, and
          <b>700,000</b> are from social media.
        </p>
      </div>
      <div class="w-40 text-end">
        <a class="mb-0 btn bg-light text-end" href="javascript:;">Read more</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import PieChart from "~~/examples/charts/PieChart.vue";
</script>
