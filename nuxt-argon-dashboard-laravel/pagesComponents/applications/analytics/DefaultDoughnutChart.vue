<template>
  <div class="card h-100">
    <div class="p-3 pb-0 card-header">
      <div class="d-flex align-items-center">
        <h6 class="mb-0">{{ title }}</h6>
        <button
          type="button"
          class="mb-0 btn btn-icon-only btn-rounded btn-outline-secondary ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="See which websites are sending traffic to your website"
        >
          <i class="fas fa-info"></i>
        </button>
      </div>
    </div>
    <div class="p-3 card-body">
      <div class="row">
        <div
          class="text-center col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center"
        >
          <div class="chart">
            <DoughnutChart
              width="250"
              :chart-options="{
                chart: {
                  type: 'donut',
                },
                colors: ['#2152ff', '#3A416F', '#f53939', '#a8b8d8', '#4BB543'],
                labels: ['Adobe', 'Atlassian', 'Slack', 'Spotify', 'Jira'],
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
                dataLabels: {
                  enabled: false,
                },
                legend: {
                  show: false,
                },
              }"
              :series="[25, 3, 12, 7, 10]"
            />
          </div>
          <a
            class="mt-4 btn btn-sm"
            :href="actions.route"
            :class="`bg-gradient-${actions.color}`"
          >
            {{ actions.label }}
          </a>
        </div>
        <div class="col-lg-6 col-12">
          <div class="table-responsive">
            <table class="table mb-0 align-items-center">
              <tbody>
                <tr>
                  <td>
                    <div class="px-2 py-1 d-flex">
                      <div>
                        <img
                          src="@/assets/img/small-logos/logo-xd.svg"
                          class="avatar avatar-sm me-2"
                          alt="logo_xd"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Adobe</h6>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-center align-middle">
                    <span class="text-xs font-weight-bold"> 25% </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-1 d-flex">
                      <div>
                        <img
                          src="@/assets/img/small-logos/logo-atlassian.svg"
                          class="avatar avatar-sm me-2"
                          alt="logo_atlassian"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Atlassian</h6>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-center align-middle">
                    <span class="text-xs font-weight-bold"> 3% </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-1 d-flex">
                      <div>
                        <img
                          src="@/assets/img/small-logos/logo-slack.svg"
                          class="avatar avatar-sm me-2"
                          alt="logo_slack"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Slack</h6>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-center align-middle">
                    <span class="text-xs font-weight-bold"> 12% </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-1 d-flex">
                      <div>
                        <img
                          src="@/assets/img/small-logos/logo-spotify.svg"
                          class="avatar avatar-sm me-2"
                          alt="logo_spotify"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Spotify</h6>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-center align-middle">
                    <span class="text-xs font-weight-bold"> 7% </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="px-2 py-1 d-flex">
                      <div>
                        <img
                          src="@/assets/img/small-logos/logo-jira.svg"
                          class="avatar avatar-sm me-2"
                          alt="logo_jira"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Jira</h6>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-center align-middle">
                    <span class="text-xs font-weight-bold"> 10% </span>
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

<script>
import DoughnutChart from "~~/examples/charts/DoughnutChart.vue";
export default {
  name: "DefaultDoughnutChart",
  components: { DoughnutChart },
  props: {
    title: {
      type: String,
      default: "Default Doughnut Chart",
    },
    chartOptions: {
      type: Object,
      default: () => {},
    },
    series: {
      type: Array,
      default: () => [],
    },
    actions: {
      type: Object,
      route: String,
      color: String,
      label: String,
      default: () => ({
        color: "secondary",
        label: "See all refferals",
      }),
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.dispatchEvent(new Event("resize"));
    });
  },
};
</script>
