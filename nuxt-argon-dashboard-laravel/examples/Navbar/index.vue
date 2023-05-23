<template>
  <nav
    id="navbarBlur"
    :class="
      navStore.navFixed
        ? `navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none position-sticky left-auto top-2 z-index-sticky ${
            navStore.darkMode ? 'bg-default' : 'bg-white'
          }`
        : `navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none`
    "
    v-bind="$attrs"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <Breadcrumbs />
      <div class="sidenav-toggler sidenav-toggler-inner d-xl-block d-none">
        <a
          href="#"
          class="p-0 nav-link text-body"
          @click.prevent="toggleSidenav"
        >
          <div class="sidenav-toggler-inner">
            <i
              class="sidenav-toggler-line"
              :class="
                navStore.navFixed && !navStore.darkMode
                  ? 'opacity-8 bg-dark'
                  : 'bg-white'
              "
            ></i>
            <i
              class="sidenav-toggler-line"
              :class="
                navStore.navFixed && !navStore.darkMode
                  ? 'opacity-8 bg-dark'
                  : 'bg-white'
              "
            ></i>
            <i
              class="sidenav-toggler-line"
              :class="
                navStore.navFixed && !navStore.darkMode
                  ? 'opacity-8 bg-dark'
                  : 'bg-white'
              "
            ></i>
          </div>
        </a>
      </div>
      <div
        id="navbar"
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
      >
        <div class="pe-md-3 d-flex align-items-center ms-md-auto">
          <div class="input-group">
            <span class="input-group-text text-body">
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Type here..."
            />
          </div>
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item dropdown d-flex align-items-center pe-2">
            <a
              id="dropdownMenuButton"
              href="#"
              :class="`p-0 nav-link text-white ${showProfile ? 'show' : ''}`"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="showProfile = !showProfile"
            >
            <img :src="defaultAvatar" class="avatar rounded-circle mx-2" />
            <span class="d-sm-inline d-none">{{ authStore.currentUser?.name }}</span>
            </a>
            <ul
              class="px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4"
              :class="showProfile ? 'show' : ''"
              aria-labelledby="dropdownMenuButton"
            >
              <li class="mb-2 dropdown-item" @click.prevent="router.push({ path: '/examples/user-profile' })">
                  <i class="fas fa-user me-sm-1"></i>
                  <span class="d-sm-inline d-none mx-2">My Profile</span>
              </li>
              <li class="dropdown-item" @click.prevent="handleLogout()">
                  <i class="ni ni-user-run me-sm-1"></i>
                  <span class="d-sm-inline d-none mx-2">Logout</span>
              </li>
            </ul>
          </li>
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a
              id="iconNavbarSidenav"
              href="#"
              class="p-0 nav-link text-white"
              @click.prevent="toggleSidenav"
            >
              <div class="sidenav-toggler-inner">
                <i
                  class="sidenav-toggler-line"
                  :class="
                    navStore.navFixed && !navStore.darkMode
                      ? 'opacity-8 bg-dark'
                      : 'bg-white'
                  "
                ></i>
                <i
                  class="sidenav-toggler-line"
                  :class="
                    navStore.navFixed && !navStore.darkMode
                      ? 'opacity-8 bg-dark'
                      : 'bg-white'
                  "
                ></i>
                <i
                  class="sidenav-toggler-line"
                  :class="
                    navStore.navFixed && !navStore.darkMode
                      ? 'opacity-8 bg-dark'
                      : 'bg-white'
                  "
                ></i>
              </div>
            </a>
          </li>
          <li class="px-3 nav-item d-flex align-items-center">
            <a class="p-0 nav-link" @click="toggleShowConfig">
              <i
                class="fas fa-cog pe-2 cursor-pointer fixed-plugin-button-nav"
                :class="
                  navStore.darkMode || !navStore.navFixed
                    ? 'text-white'
                    : 'text-dark opacity-8'
                "
              ></i>
            </a>
          </li>
          <li class="nav-item dropdown d-flex align-items-center pe-2">
            <a
              id="dropdownMenuButton"
              href="#"
              :class="`p-0 nav-link text-white ${showMenu ? 'show' : ''}`"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="showMenu = !showMenu"
            >
              <i
                class="fas fa-bell cursor-pointer"
                :class="
                  navStore.darkMode || !navStore.navFixed
                    ? 'text-white'
                    : 'text-dark opacity-8'
                "
              ></i>
            </a>
            <ul
              class="px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4"
              :class="showMenu ? 'show' : ''"
              aria-labelledby="dropdownMenuButton"
            >
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="my-auto">
                      <img
                        src="../../assets/img/team-2.jpg"
                        class="avatar avatar-sm me-3"
                        alt="user image"
                      />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">New message</span> from
                        Laur
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        13 minutes ago
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="my-auto">
                      <img
                        src="../../assets/img/small-logos/logo-spotify.svg"
                        class="avatar avatar-sm bg-gradient-dark me-3"
                        alt="logo spotify"
                      />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">New album</span> by
                        Travis Scott
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        1 day
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div
                      class="my-auto avatar avatar-sm bg-gradient-secondary me-3"
                    >
                      <svg
                        width="12px"
                        height="12px"
                        viewBox="0 0 43 36"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <title>credit-card</title>
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            transform="translate(-2169.000000, -745.000000)"
                            fill="#FFFFFF"
                            fill-rule="nonzero"
                          >
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(453.000000, 454.000000)">
                                <path
                                  class="color-background"
                                  d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                  opacity="0.593633743"
                                />
                                <path
                                  class="color-background"
                                  d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        Payment successfully completed
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        2 days
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import Breadcrumbs from "../Breadcrumbs";
import defaultAvatar from "../../assets/img/default_avatar.jpeg"; 
import { useNavStore } from "~~/stores/NavStore";
import { useAuthStore } from "~~/stores/AuthStore";
import { useRouter } from "vue-router";
const router = useRouter();
const navStore = useNavStore();
function toggleSidenav() {
  navStore.toggleSidenavCollapsing();
}
function toggleShowConfig() {
  navStore.toggleShowConfig();
}
const authStore = useAuthStore();

if(!authStore.currentUser && authStore.checkIsAuthenticated()) {
  await authStore.getProfile();
}

const showMenu = ref(false);
const showProfile = ref(false);

const handleLogout = async () => {
  try {
    await authStore.logout();
    router.push({ path: '/login' })
  } catch (error) {
    await useToast("error", error.message);
  }
}
</script>
