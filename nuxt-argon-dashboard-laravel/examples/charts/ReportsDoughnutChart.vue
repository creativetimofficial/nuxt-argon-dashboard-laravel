<template>
  <div class="card">
    <div class="p-3 pb-0 card-header">
      <div class="d-flex align-items-center">
        <h6 class="mb-0">{{ title }}</h6>
        <button
          type="button"
          class="mb-0 btn btn-icon-only btn-rounded btn-outline-secondary ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          :title="tooltip"
        >
          <i class="fas fa-info"></i>
        </button>
      </div>
    </div>
    <div class="p-3 card-body">
      <div class="row">
        <div class="text-center col-5">
          <div class="chart">
            <apexchart
              width="250"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
          <h4 class="font-weight-bold mt-n8 ms-5 me-3">
            <span>{{ count.number }}</span>
            <span class="text-sm d-block text-body">{{ count.text }}</span>
          </h4>
        </div>
        <div class="col-7">
          <div class="table-responsive">
            <table class="table mb-0 align-items-center">
              <tbody>
                <tr>
                  <td>
                    <div class="px-2 py-0 d-flex">
                      <span class="badge bg-primary me-2">&nbsp;</span>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Living Room</h6>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-center align-middle">
                    <span class="text-xs font-weight-bold">15%</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-0 d-flex">
                      <span class="badge bg-secondary me-3">&nbsp;</span>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Kitchen</h6>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-center align-middle">
                    <span class="text-xs font-weight-bold">20%</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-0 d-flex">
                      <span class="badge bg-info me-3">&nbsp;</span>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Attic</h6>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-center align-middle">
                    <span class="text-xs font-weight-bold">13%</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-0 d-flex">
                      <span class="badge bg-success me-3">&nbsp;</span>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Garage</h6>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-center align-middle">
                    <span class="text-xs font-weight-bold">32%</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-0 d-flex">
                      <span class="badge bg-warning me-3">&nbsp;</span>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Basement</h6>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-center align-middle">
                    <span class="text-xs font-weight-bold">20%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Consumption per room",
  },
  tooltip: {
    type: String,
    default: "",
  },
  count: {
    type: Object,
    required: true,
    number: Number,
    text: String,
  },
  chartOptions: {
    type: Object,
    default: () => ({
      chart: {
        type: "donut",
      },
      labels: ["Living Room", "Attic", "Basement", "Kitchen", "Garage"],
      colors: ["#2152ff", "#3A416F", "#f53939", "#a8b8d8", "#4BB543"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    }),
  },
  series: {
    type: Array,
    default: () => [15, 20, 13, 32, 20],
  },
});
onMounted(() => {
  nextTick(() => {
    window.dispatchEvent(new Event("resize"));
  });
});
</script>
