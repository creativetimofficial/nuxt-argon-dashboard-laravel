<template>
  <div class="card shadow-lg">
    <img
      src="@/assets/img/shapes/pattern-left.png"
      alt="pattern-lines"
      class="position-absolute overflow-hidden opacity-4 start-0 top-0 h-100 border-radius-xl"
    />
    <img
      src="@/assets/img/shapes/pattern-right.png"
      alt="pattern-lines"
      class="position-absolute overflow-hidden opacity-4 end-0 top-0 h-100 border-radius-xl"
    />
    <div class="card-body px-5 z-index-1 bg-cover">
      <div class="row">
        <div class="col-lg-3 col-12 my-auto">
          <h4 class="text-body opacity-9 text-center">Since Last Charge</h4>
          <hr class="horizontal light mt-1 mb-3" />
          <div class="d-flex justify-content-center">
            <div>
              <h6 class="mb-0 text-body opacity-7">Distance</h6>
              <h3 class="text-body">
                145
                <small class="text-sm align-top">Km</small>
              </h3>
            </div>
            <div class="ms-lg-6 ms-4 text-center">
              <h6 class="mb-0 text-body opacity-7">Average Energy</h6>
              <h3 class="text-body">
                300
                <small class="text-sm align-top">Kw</small>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12 text-center">
          <img
            class="w-75 w-lg-100 mt-n7 mt-lg-n8 d-none d-md-block"
            src="@/assets/img/tesla.png"
            alt="car image"
          />
          <div class="d-flex align-items-center">
            <h4 class="text-body opacity-7 ms-0 ms-md-auto">Available Range</h4>
            <h2 class="text-body ms-2 me-auto">
              47
              <small class="text-sm align-top">%</small>
            </h2>
          </div>
        </div>
        <div class="col-lg-3 col-12 my-auto">
          <h4 class="text-body opacity-9">Nearest Charger</h4>
          <hr class="horizontal light mt-1 mb-3" />
          <div class="d-flex align-items-center">
            <div>
              <h6 class="mb-0 text-body">Miclan, DW</h6>
              <h6 class="mb-0 text-body">891 Limarenda road</h6>
            </div>
            <div class="ms-lg-6 ms-4">
              <button
                class="btn btn-icon-only btn-rounded btn-outline-dark mb-0 py-0"
              >
                <i class="ni ni-map-big" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
