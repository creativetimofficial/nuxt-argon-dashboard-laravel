<template>
  <nav
    class="navbar navbar-expand-lg top-0 z-index-3 position-absolute mt-4"
    :class="isBlur ? isBlur : 'shadow-none my-2 navbar-transparent w-100'"
  >
    <div class="container ps-2 pe-0">
      <NuxtLink
        class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
        :class="darkMode ? 'text-black' : 'text-white'"
        to="/"
        >Nuxt Argon Dashboard 2 PRO</NuxtLink
      >
      <button
        class="shadow-none navbar-toggler ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="mt-2 navbar-toggler-icon">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div
        id="navigation"
        class="pt-3 pb-2 collapse navbar-collapse w-100 py-lg-0"
      >
        <ul class="mx-auto navbar-nav navbar-nav-hover">
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              id="dropdownMenuPages"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pages
              <img
                :src="downArrWhite"
                alt="down-arrow"
                class="arrow ms-1"
                :class="darkMode ? 'd-none' : 'd-lg-block d-none'"
              />
              <img
                :src="downArrBlack"
                alt="down-arrow"
                class="arrow ms-1 d-block"
                :class="darkMode ? 'd-lg-block' : 'd-lg-none'"
              />
            </a>
            <div
              class="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-xl border-radius-xl mt-lg-3"
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="px-4 py-2 col-12">
                  <div class="row">
                    <div class="col-4 position-relative">
                      <div
                        class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <i class="ni ni-spaceship me-3 text-success"></i>
                        Dashboards
                      </div>
                      <NuxtLink
                        to="/dashboards/default"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Default</span>
                      </NuxtLink>
                      <NuxtLink
                        to="/dashboards/automotive"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Automotive</span>
                      </NuxtLink>
                      <NuxtLink
                        to="/dashboards/smart-home"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Smart Home</span>
                      </NuxtLink>
                      <NuxtLink
                        to="/dashboards/vr/vr-default"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Virtual Reality</span>
                      </NuxtLink>
                      <NuxtLink
                        to="/dashboards/crm"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">CRM</span>
                      </NuxtLink>
                      <div
                        class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <i class="ni ni-circle-08 me-3 text-success"></i>
                        Users
                      </div>
                      <NuxtLink
                        to="/pages/users/reports"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Reports</span>
                      </NuxtLink>
                      <NuxtLink
                        to="/pages/users/new-user"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">New User</span>
                      </NuxtLink>
                      <hr class="vertical dark" />
                    </div>
                    <div class="col-4 position-relative">
                      <div
                        class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <i class="ni ni-badge me-3 text-success"></i>
                        Profile
                      </div>
                      <NuxtLink
                        to="/pages/profile/profile-overview"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Overview</span>
                      </NuxtLink>
                      <NuxtLink
                        to="/pages/profile/teams"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Teams</span>
                      </NuxtLink>
                      <NuxtLink
                        to="/pages/profile/all-projects"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Projects</span>
                      </NuxtLink>
                      <div
                        class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <i class="ni ni-app me-3 text-success"></i>
                        Projects
                      </div>
                      <NuxtLink
                        to="/pages/projects/general"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">General</span>
                      </NuxtLink>
                      <NuxtLink
                        to="/pages/projects/timeline"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Timeline</span>
                      </NuxtLink>
                      <NuxtLink
                        to="/pages/projects/new-project"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">New Project</span>
                      </NuxtLink>
                      <hr class="vertical dark" />
                    </div>
                    <div class="col-4">
                      <div
                        class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <i class="ni ni-single-02 me-3 text-success"></i>
                        Account
                      </div>
                      <NuxtLink
                        to="/pages/account/settings"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Settings</span>
                      </NuxtLink>
                      <NuxtLink
                        to="/pages/account/billing"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Billing</span>
                      </NuxtLink>
                      <NuxtLink
                        to="/pages/account/invoice"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Invoice</span>
                      </NuxtLink>
                      <NuxtLink
                        to="/pages/account/security"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Security</span>
                      </NuxtLink>
                      <div
                        class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <i class="ni ni-folder-17 me-3 text-success"></i>
                        Extra
                      </div>
                      <NuxtLink
                        to="/pages/pricing-page"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Pricing Page</span>
                      </NuxtLink>
                      <NuxtLink
                        to="/pages/rtl-page"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">RTL Page</span>
                      </NuxtLink>
                      <NuxtLink to="/" class="dropdown-item border-radius-md">
                        <span class="ps-3">Widgets</span>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
              <!-- responsive -->
              <div class="d-lg-none">
                <div
                  class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center"
                    >
                      <i class="ni ni-spaceship me-3 text-success"></i>
                    </div>
                  </div>
                  Dashboards
                </div>
                <NuxtLink
                  to="/dashboards/default"
                  class="dropdown-item border-radius-md"
                  >Default</NuxtLink
                >
                <NuxtLink
                  to="/dashboards/automotive"
                  class="dropdown-item border-radius-md"
                  >Automotive</NuxtLink
                >
                <NuxtLink
                  to="/dashboards/smart-home"
                  class="dropdown-item border-radius-md"
                  >Smart Home</NuxtLink
                >
                <NuxtLink to="#" class="dropdown-item border-radius-md"
                  >Virtual Reality</NuxtLink
                >
                <NuxtLink
                  to="/dashboards/crm"
                  class="dropdown-item border-radius-md"
                  >CRM</NuxtLink
                >
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <i class="ni ni-circle-08 me-3 text-success"></i>
                  Users
                </div>
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Reports</NuxtLink
                >
                <NuxtLink to="#" class="dropdown-item border-radius-md"
                  >New user</NuxtLink
                >
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <i class="ni ni-badge me-3 text-success"></i>
                  Profile
                </div>
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Overview</NuxtLink
                >
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Teams</NuxtLink
                >
                <NuxtLink to="#" class="dropdown-item border-radius-md"
                  >Projects</NuxtLink
                >
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <i class="ni ni-app me-3 text-success"></i>
                  Projects
                </div>
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >General</NuxtLink
                >
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Timeline</NuxtLink
                >
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >New Project</NuxtLink
                >
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <i class="ni ni-single-02 me-3 text-success"></i>
                  Account
                </div>
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Settings</NuxtLink
                >
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Billing</NuxtLink
                >
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Invoice</NuxtLink
                >
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Security</NuxtLink
                >
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <i class="ni ni-folder-17 me-3 text-success"></i>
                  Extra
                </div>
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Pricing Page</NuxtLink
                >
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >RTL Page</NuxtLink
                >
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Widgets</NuxtLink
                >
              </div>
            </div>
          </li>
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              id="dropdownMenuAccount"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Authentication
              <img
                :src="downArrWhite"
                alt="down-arrow"
                class="arrow ms-1"
                :class="darkMode ? 'd-none' : 'd-lg-block d-none'"
              />
              <img
                :src="downArrBlack"
                alt="down-arrow"
                class="arrow ms-1 d-block"
                :class="darkMode ? 'd-lg-block' : 'd-lg-none'"
              />
            </a>
            <div
              class="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-lg border-radius-xl mt-lg-3"
              aria-labelledby="dropdownMenuAccount"
            >
              <div class="row d-none d-lg-flex">
                <div class="col-6">
                  <div
                    class="py-6 h-100 w-100 d-flex border-radius-lg position-relative dropdown-image"
                    style="
                       {
                        backgroundimage: `url(${bg}) `;
                      }
                    "
                  >
                    <div
                      class="mask bg-gradient-success border-radius-lg"
                    ></div>
                    <div
                      class="d-flex justify-content-center align-items-center text-center text-white font-weight-bold w-100 z-index-1 flex-column"
                    >
                      <span class="text-lg mt-2">
                        Explore our
                        <br />Authentication pages
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="col-6 ps-0 d-flex justify-content-center flex-column"
                >
                  <ul class="list-group">
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownSignIn"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Sign In</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdownSignIn"
                      >
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/signin/basic"
                        >
                          <span>Basic</span>
                        </NuxtLink>
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/signin/cover"
                        >
                          <span>Cover</span>
                        </NuxtLink>
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/signin/illustration"
                        >
                          <span>Illustration</span>
                        </NuxtLink>
                      </div>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownSignUp"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Sign Up</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdownSignUp"
                      >
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/signup/basic"
                        >
                          <span>Basic</span>
                        </NuxtLink>
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/signup/cover"
                        >
                          <span>Cover</span>
                        </NuxtLink>
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/signup/illustration"
                        >
                          <span>Illustration</span>
                        </NuxtLink>
                      </div>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownPasswordReset"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Reset Password</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdownPasswordReset"
                      >
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/reset/basic"
                        >
                          <span>Basic</span>
                        </NuxtLink>
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/reset/cover"
                        >
                          <span>Cover</span>
                        </NuxtLink>
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/reset/illustration"
                        >
                          <span>Illustration</span>
                        </NuxtLink>
                      </div>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownLock"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Lock</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdownLock"
                      >
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/lock/basic"
                        >
                          <span>Basic</span>
                        </NuxtLink>
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/lock/cover"
                        >
                          <span>Cover</span>
                        </NuxtLink>
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/lock/illustration"
                        >
                          <span>Illustration</span>
                        </NuxtLink>
                      </div>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdown2fa"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>2-Step Verification</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdown2fa"
                      >
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/verification/basic"
                        >
                          <span>Basic</span>
                        </NuxtLink>
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/verification/cover"
                        >
                          <span>Cover</span>
                        </NuxtLink>
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/verification/illustration"
                        >
                          <span>Illustration</span>
                        </NuxtLink>
                      </div>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownError"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Error</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdownError"
                      >
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/error/error404"
                        >
                          <span>404</span>
                        </NuxtLink>
                        <NuxtLink
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          to="/authentication/error/error500"
                        >
                          <span>500</span>
                        </NuxtLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="d-lg-none">
                <div class="col-12 d-flex justify-content-center flex-column">
                  <h6
                    class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Sign In
                  </h6>
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Basic</NuxtLink
                  >
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Cover</NuxtLink
                  >
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Illustration</NuxtLink
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Sign Up
                  </h6>
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Basic</NuxtLink
                  >
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Cover</NuxtLink
                  >
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Illustration</NuxtLink
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Reset Password
                  </h6>
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Basic</NuxtLink
                  >
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Cover</NuxtLink
                  >
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Illustation</NuxtLink
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Lock
                  </h6>
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Basic</NuxtLink
                  >
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Cover</NuxtLink
                  >
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Illustration</NuxtLink
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    2-Step Verification
                  </h6>
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Basic</NuxtLink
                  >
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Cover</NuxtLink
                  >
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >Illustration</NuxtLink
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Error
                  </h6>

                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >404</NuxtLink
                  >
                  <NuxtLink to="/" class="dropdown-item border-radius-md"
                    >500</NuxtLink
                  >
                </div>
              </div>
            </div>
          </li>
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              id="dropdownMenuBlocks"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Applications
              <img
                :src="downArrWhite"
                alt="down-arrow"
                class="arrow ms-1"
                :class="darkMode ? 'd-none' : 'd-lg-block d-none'"
              />
              <img
                :src="downArrBlack"
                alt="down-arrow"
                class="arrow ms-1 d-block"
                :class="darkMode ? 'd-lg-block' : 'd-lg-none'"
              />
            </a>
            <div
              class="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-md dropdown-md-responsive border-radius-lg mt-lg-3"
              aria-labelledby="dropdownMenuBlocks"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li
                    class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                  >
                    <NuxtLink
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      to="/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i
                            class="ni ni-single-copy-04 text-gradient text-success"
                          ></i>
                        </div>
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <p class="p-0 dropdown-header text-dark">Kanban</p>
                          </div>
                        </div>
                      </div>
                    </NuxtLink>
                  </li>
                  <li
                    class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                  >
                    <NuxtLink
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      to="/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i
                            class="ni ni-laptop text-gradient text-success"
                          ></i>
                        </div>
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <p class="p-0 dropdown-header text-dark">Wizard</p>
                          </div>
                        </div>
                      </div>
                    </NuxtLink>
                  </li>
                  <li
                    class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                  >
                    <NuxtLink
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      to="/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-badge text-gradient text-success"></i>
                        </div>
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <p class="p-0 dropdown-header text-dark">
                              DataTables
                            </p>
                          </div>
                        </div>
                      </div>
                    </NuxtLink>
                  </li>
                  <li
                    class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                  >
                    <NuxtLink
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      to="/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i
                            class="ni ni-notification-70 text-gradient text-success"
                          ></i>
                        </div>
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <p class="p-0 dropdown-header text-dark">
                              Calendar
                            </p>
                          </div>
                        </div>
                      </div>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <!-- responsive -->
              <div class="row d-lg-none">
                <div class="col-md-12">
                  <NuxtLink class="py-2 ps-3 border-radius-md" to="/">
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i
                          class="ni ni-single-copy-04 text-gradient text-success"
                        ></i>
                      </div>
                      <div
                        class="w-100 d-flex align-items-center justify-content-between"
                      >
                        <div>
                          <p class="p-0 dropdown-header text-dark">Kanban</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                  <NuxtLink class="py-2 ps-3 border-radius-md" to="/">
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-laptop text-gradient text-success"></i>
                      </div>
                      <div
                        class="w-100 d-flex align-items-center justify-content-between"
                      >
                        <div>
                          <p class="p-0 dropdown-header text-dark">Wizard</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                  <NuxtLink class="py-2 ps-3 border-radius-md" to="/">
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-badge text-gradient text-success"></i>
                      </div>
                      <div
                        class="w-100 d-flex align-items-center justify-content-between"
                      >
                        <div>
                          <p class="p-0 dropdown-header text-dark">
                            DataTables
                          </p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                  <NuxtLink class="py-2 ps-3 border-radius-md" to="/">
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i
                          class="ni ni-notification-70 text-gradient text-success"
                        ></i>
                      </div>
                      <div
                        class="w-100 d-flex align-items-center justify-content-between"
                      >
                        <div>
                          <p class="p-0 dropdown-header text-dark">Calendar</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </li>
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              id="dropdownMenuEcommerce"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ecommerce
              <img
                :src="downArrWhite"
                alt="down-arrow"
                class="arrow ms-1"
                :class="darkMode ? 'd-none' : 'd-lg-block d-none'"
              />
              <img
                :src="downArrBlack"
                alt="down-arrow"
                class="arrow ms-1 d-block"
                :class="darkMode ? 'd-lg-block' : ' d-lg-none'"
              />
            </a>
            <div
              class="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-lg border-radius-xl mt-lg-3"
              aria-labelledby="dropdownMenuEcommerce"
            >
              <div class="row d-none d-lg-block">
                <div class="px-4 py-2 col-12">
                  <div class="row">
                    <div class="col-6 position-relative">
                      <div
                        class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <i class="ni ni-cart text-success me-3"></i>
                        Orders
                      </div>
                      <NuxtLink to="/" class="dropdown-item border-radius-md">
                        <span class="ps-3">Order List</span>
                      </NuxtLink>
                      <NuxtLink to="/" class="dropdown-item border-radius-md">
                        <span class="ps-3">Order Details</span>
                      </NuxtLink>
                      <div
                        class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <i class="ni ni-box-2 text-success me-3"></i>
                        General
                      </div>
                      <NuxtLink to="/" class="dropdown-item border-radius-md">
                        <span class="ps-3">Overview</span>
                      </NuxtLink>
                      <NuxtLink to="/" class="dropdown-item border-radius-md">
                        <span class="ps-3">Referral</span>
                      </NuxtLink>
                      <hr class="vertical dark" />
                    </div>
                    <div class="col-6 position-relative">
                      <div
                        class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <i class="ni ni-planet text-success me-3"></i>
                        Products
                      </div>
                      <NuxtLink to="/" class="dropdown-item border-radius-md">
                        <span class="ps-3">New Product</span>
                      </NuxtLink>
                      <NuxtLink to="/" class="dropdown-item border-radius-md">
                        <span class="ps-3">Edit Product</span>
                      </NuxtLink>
                      <NuxtLink to="/" class="dropdown-item border-radius-md">
                        <span class="ps-3">Product Page</span>
                      </NuxtLink>
                      <NuxtLink to="/" class="dropdown-item border-radius-md">
                        <span class="ps-3">Products List</span>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
              <!-- responsive -->
              <div class="d-lg-none">
                <div
                  class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <i class="ni ni-cart text-success me-3"></i>
                  Orders
                </div>
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Order List</NuxtLink
                >
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Order Details</NuxtLink
                >
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <i class="ni ni-box-2 text-success me-3"></i>
                  General
                </div>
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Overview</NuxtLink
                >
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Referral</NuxtLink
                >
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <i class="ni ni-planet text-success me-3"></i>
                  Products
                </div>
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >New Product</NuxtLink
                >
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Edit Product</NuxtLink
                >
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Product Page</NuxtLink
                >
                <NuxtLink to="/" class="dropdown-item border-radius-md"
                  >Products List</NuxtLink
                >
              </div>
            </div>
          </li>
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              id="dropdownMenuDocs"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Docs
              <img
                :src="downArrWhite"
                alt="down-arrow"
                class="arrow ms-1"
                :class="darkMode ? 'd-none' : 'd-lg-block d-none'"
              />
              <img
                :src="downArrBlack"
                alt="down-arrow"
                class="arrow ms-1 d-block"
                :class="darkMode ? 'd-lg-block' : 'd-lg-none'"
              />
            </a>
            <div
              class="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-lg mt-lg-3 border-radius-lg"
              aria-labelledby="dropdownMenuDocs"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="p-0 border-0 nav-item list-group-item">
                    <a
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      href="https://www.creative-tim.com/learning-lab/vue/overview/argon-dashboard/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-planet text-success"></i>
                        </div>
                        <div>
                          <h6
                            class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                          >
                            Getting Started
                          </h6>
                          <span class="text-sm">
                            All about overview, quick start, license and
                            contents
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="p-0 border-0 nav-item list-group-item">
                    <a
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      href="https://www.creative-tim.com/learning-lab/vue/colors/argon-dashboard/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-single-copy-04 text-success"></i>
                        </div>
                        <div>
                          <h6
                            class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                          >
                            Foundation
                          </h6>
                          <span class="text-sm"
                            >See our colors, icons and typography</span
                          >
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="p-0 border-0 nav-item list-group-item">
                    <a
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      href="https://www.creative-tim.com/learning-lab/vue/alerts/argon-dashboard/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-app text-success"></i>
                        </div>
                        <div>
                          <h6
                            class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                          >
                            Components
                          </h6>
                          <span class="text-sm"
                            >Explore our collection of fully designed
                            components</span
                          >
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="p-0 border-0 nav-item list-group-item">
                    <a
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      href="https://www.creative-tim.com/learning-lab/vue/datepicker/argon-dashboard/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-chart-bar-32 text-success"></i>
                        </div>
                        <div>
                          <h6
                            class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                          >
                            Plugins
                          </h6>
                          <span class="text-sm"
                            >Check how you can integrate our plugins</span
                          >
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="p-0 border-0 nav-item list-group-item">
                    <a
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      href="https://www.creative-tim.com/learning-lab/vue/utilities/argon-dashboard/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-settings text-success"></i>
                        </div>
                        <div>
                          <h6
                            class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                          >
                            Utility Classes
                          </h6>
                          <span class="text-sm">
                            For those who want flexibility, use our utility
                            classes
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12 g-0">
                  <a
                    class="py-2 dropdown-item ps-3 border-radius-md"
                    href="../../pages/about-us.html"
                  >
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-planet text-success"></i>
                      </div>
                      <div>
                        <h6
                          class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                        >
                          Getting Started
                        </h6>
                        <span class="text-sm"
                          >All about overview, quick start, license and
                          contents</span
                        >
                      </div>
                    </div>
                  </a>
                  <a
                    class="py-2 dropdown-item ps-3 border-radius-md"
                    href="../../pages/about-us.html"
                  >
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-single-copy-04 text-success"></i>
                      </div>
                      <div>
                        <h6
                          class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                        >
                          Foundation
                        </h6>
                        <span class="text-sm"
                          >See our colors, icons and typography</span
                        >
                      </div>
                    </div>
                  </a>
                  <a
                    class="py-2 dropdown-item ps-3 border-radius-md"
                    href="../../pages/about-us.html"
                  >
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-app text-success"></i>
                      </div>
                      <div>
                        <h6
                          class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                        >
                          Components
                        </h6>
                        <span class="text-sm"
                          >Explore our collection of fully designed
                          components</span
                        >
                      </div>
                    </div>
                  </a>
                  <a
                    class="py-2 dropdown-item ps-3 border-radius-md"
                    href="../../pages/about-us.html"
                  >
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-chart-bar-32 text-success"></i>
                      </div>
                      <div>
                        <h6
                          class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                        >
                          Plugins
                        </h6>
                        <span class="text-sm"
                          >Check how you can integrate our plugins</span
                        >
                      </div>
                    </div>
                  </a>
                  <a
                    class="py-2 dropdown-item ps-3 border-radius-md"
                    href="../../pages/about-us.html"
                  >
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-settings text-success"></i>
                      </div>
                      <div>
                        <h6
                          class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                        >
                          Utility Classes
                        </h6>
                        <span class="text-sm"
                          >All about overview, quick start, license and
                          contents</span
                        >
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com/product/vue-argon-dashboard-laravel"
              class="mb-0 btn btn-sm me-1"
              :class="btnBackground ? btnBackground : 'bg-white text-dark'"
              onclick="smoothToPricing('pricing-soft-ui')"
              >Buy Now</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import downArrWhite from "@/assets/img/down-arrow-white.svg";
import downArrBlack from "@/assets/img/down-arrow-dark.svg";
import bg from "@/assets/img/curved-images/curved8.jpg";
export default {
  name: "Navbar",
  props: {
    btnBackground: {
      type: String,
      default: "",
    },
    isBlur: {
      type: String,
      default: "",
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      downArrWhite,
      downArrBlack,
      bg,
    };
  },
  computed: {
    darkModes() {
      return {
        "text-dark": this.darkMode,
      };
    },
  },
};
</script>
