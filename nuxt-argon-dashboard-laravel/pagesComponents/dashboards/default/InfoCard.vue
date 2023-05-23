<template>
  <div class="card bg-gradient-danger h-100">
    <div class="card-body">
      <div class="row justify-content-between align-items-center">
        <div class="col">
          <img
            src="@/assets/img/logos/bitcoin.jpg"
            class="w-30 border-radius-md"
            alt="Image placeholder"
          />
        </div>
        <div class="col-auto">
          <span class="badge badge-lg badge-success">Active</span>
        </div>
      </div>
      <div class="my-4">
        <p class="text-white opacity-8 mb-0 text-sm">Address</p>
        <div
          class="h6 text-white cursor-pointer"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Copy Address"
        >
          0yx8Wkasd8uWpa083Jj81qZhs923K21
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <p class="text-white opacity-8 mb-0 text-sm">Name</p>
          <span class="d-block h6 text-white">John Snow</span>
        </div>
        <div class="col ms-auto text-end">
          <div class="btn-groups mt-3">
            <div
              class="btn rounded-circle btn-sm btn-white mb-0 p-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Receive"
            >
              <i class="ni ni-bold-down p-2"></i>
            </div>
            <div
              class="btn rounded-circle btn-sm btn-white mb-0 p-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Send"
            >
              <i class="ni ni-bold-up p-2"></i>
            </div>
            <div
              class="btn rounded-circle btn-sm btn-white mb-0 p-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Swap"
            >
              <i class="ni ni-curved-next p-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
