<template>
  <div class="fixed-plugin" :class="showConfig && 'show'">
    <a
      class="px-3 py-2 fixed-plugin-button text-dark position-fixed"
      @click="toggleShowConfig"
    >
      <i class="py-2 fa fa-cog"></i>
    </a>
    <div class="shadow-lg card">
      <div class="pt-3 pb-0 bg-transparent card-header">
        <div class="float-start" :class="isRTL && 'text-start'">
          <h5 class="mt-3 mb-0">Argon Configurator</h5>
          <p>See our dashboard options.</p>
        </div>
        <div class="mt-4 float-end" @click="toggleShowConfig">
          <button class="p-0 btn btn-link text-dark fixed-plugin-close-button">
            <i class="fa fa-close"></i>
          </button>
        </div>
        <!-- End Toggle Button -->
      </div>
      <hr class="my-1 horizontal dark" />
      <div class="pt-0 card-body pt-sm-3 overflow-scroll">
        <!-- Sidebar Backgrounds -->
        <div :class="isRTL && 'text-start'">
          <h6 class="mb-0">Sidebar Colors</h6>
        </div>
        <div class="switch-trigger background-color">
          <div class="my-2 badge-colors" :class="isRTL && 'text-start'">
            <span
              class="badge filter"
              :style="{ backgroundColor: '#f6f9fc' }"
              data-color="light-primary"
              @click="sidenavColor('light-primary')"
            ></span>
            <span
              class="badge filter bg-gradient-primary"
              data-color="primary"
              @click="sidenavColor('primary')"
            ></span>
            <span
              class="badge filter bg-gradient-dark"
              data-color="dark"
              @click="sidenavColor('dark')"
            ></span>
            <span
              class="badge filter bg-gradient-info"
              data-color="info"
              @click="sidenavColor('info')"
            ></span>
            <span
              class="badge filter bg-gradient-success"
              data-color="success"
              @click="sidenavColor('success')"
            ></span>
            <span
              class="badge filter bg-gradient-warning"
              data-color="warning"
              @click="sidenavColor('warning')"
            ></span>
            <span
              class="badge filter bg-gradient-danger"
              data-color="danger"
              @click="sidenavColor('danger')"
            ></span>
          </div>
        </div>
        <!-- Sidenav Type -->
        <div class="mt-3" :class="isRTL && 'text-start'">
          <h6 class="mb-0">Sidenav Type</h6>
          <p class="text-sm">Choose between 2 different sidenav types.</p>
        </div>
        <div class="d-flex" :class="isRTL && 'text-start'">
          <button
            id="btn-white"
            class="btn bg-gradient-success w-100 px-3 mb-2 me-2 ms-2"
            :class="sidenavType === 'bg-white' && ' active'"
            @click="setSidenavType('bg-white')"
          >
            White
          </button>
          <button
            id="btn-dark"
            class="btn bg-gradient-success w-100 px-3 mb-2"
            :class="sidenavType === 'bg-default' && 'active'"
            @click="setSidenavType('bg-default')"
          >
            Dark
          </button>
        </div>
        <p class="mt-2 text-sm d-xl-none d-block">
          You can change the sidenav type just on desktop view.
        </p>
        <!-- Navbar Fixed -->
        <div class="mt-3 d-flex" :class="isRTL && 'text-start float-start'">
          <h6 class="mb-0">Navbar Fixed</h6>
          <div class="form-check form-switch ms-auto my-auto">
            <input
              id="navbarFixed"
              class="mt-1 form-check-input"
              :class="isRTL ? 'float-end me-auto' : 'ms-auto'"
              type="checkbox"
              @click="toggleNavFixed"
            />
          </div>
        </div>

        <hr class="my-3 horizontal dark" />
        <div class="mt-2 d-flex" :class="isRTL && 'text-start float-start'">
          <h6 class="mb-0">Sidenav Mini</h6>

          <div class="form-check form-switch ms-auto my-auto">
            <input
              id="navbarMinimize"
              class="mt-1 form-check-input"
              :class="isRTL ? 'float-end  me-auto' : ' ms-auto'"
              type="checkbox"
              @click="toggleSidenav"
            />
          </div>
        </div>
        <hr class="horizontal dark my-3" />
        <div class="my-5 d-flex" :class="isRTL && 'text-start float-start'">
          <h6 class="mb-0">Light / Dark</h6>
          <div class="form-check form-switch ms-auto my-auto">
            <input
              class="form-check-input mt-1"
              :class="isRTL ? 'float-end me-auto' : ' ms-auto'"
              type="checkbox"
              @click="toggleDarkMode"
            />
          </div>
        </div>
        <hr class="horizontal dark my-sm-4" />
        <a
          class="btn btn-success w-100"
          target="_blank"
          href="https://www.creative-tim.com/product/nuxt-argon-dashboard-pro-laravel"
          >Buy now</a
        >
        <a
          class="btn bg-gradient-dark w-100"
          target="_blank"
          href="https://www.creative-tim.com/product/nuxt-argon-dashboard-laravel"
          >Free demo</a
        >
        <a
          class="btn btn-outline-dark w-100"
          target="_blank"
          href="https://www.creative-tim.com/learning-lab/vue/overview/argon-dashboard/"
          >View documentation</a
        >
        <div class="text-center w-100">
          <a
            class="github-button"
            href="https://github.com/creativetimofficial/nuxt-argon-dashboard-laravel"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star creativetimofficial/vue-argon-dashboard-laravel on GitHub"
            target="_blank"
            >Star</a
          >
          <h6 class="mt-3">Thank you for sharing!</h6>
          <a
            href="https://twitter.com/intent/tweet?text=Check%20Nuxt%20Argon%20Dashboard%20Laravel%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fnuxt-argon-dashboard-laravel"
            class="mb-0 btn btn-dark me-2"
            target="_blank"
          >
            <i class="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/nuxt-argon-dashboard-laravel"
            class="mb-0 btn btn-dark me-2"
            target="_blank"
          >
            <i class="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { activateDarkMode, deactivateDarkMode } from "~~/assets/js/dark-mode";
import { useNavStore } from "~~/stores/NavStore";

defineProps({
  isRTL: {
    type: Boolean,
    default: false,
  },
});
const navStore = useNavStore();

function toggleDarkMode() {
  navStore.toggleDarkMode();
  if (navStore.darkMode) {
    if (process.client) {
      activateDarkMode();
      setSidenavType("bg-default");
    }
  } else {
    deactivateDarkMode();
    setSidenavType("bg-white");
  }
}

const sidenavType = computed(() => {
  return navStore.sidenavType;
});
const showConfig = computed(() => {
  return navStore.showConfig;
});
function toggleShowConfig() {
  navStore.toggleShowConfig();
}
function setSidenavType(type) {
  navStore.setSidenavType(type);
}
function sidenavColor(color = "success") {
  document.querySelector("#sidenav-main").setAttribute("data-color", color);
}
function toggleSidenav() {
  navStore.toggleSidenavCollapsing();
}
function toggleNavFixed() {
  navStore.toggleNavFixed();
}
</script>
