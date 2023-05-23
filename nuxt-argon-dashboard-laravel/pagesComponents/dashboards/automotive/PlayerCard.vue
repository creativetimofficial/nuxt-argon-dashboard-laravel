<template>
  <div class="card shadow-lg">
    <div class="card-header bg-transparent">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <div class="input-group input-group-lg">
            <span class="input-group-text text-body bg-transparent border-0">
              <i class="ni ni-zoom-split-in text-lg" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              class="form-control bg-transparent border-0"
              placeholder="Search anything..."
              onfocusout="defocused(this)"
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12 my-auto ms-auto">
          <div class="d-flex align-items-center">
            <i
              class="ni ni-headphones text-lg text-body ms-auto"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Headphones connected"
            ></i>
            <i
              class="ni ni-button-play text-lg text-body ms-3"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Music is playing"
            ></i>
            <i
              class="ni ni-button-power text-lg text-body ms-3"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Start radio"
            ></i>
            <i
              class="ni ni-watch-time text-lg text-body ms-3"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Time tracker"
            ></i>
            <h4 class="text-body mb-1 ms-4">10:45</h4>
          </div>
        </div>
      </div>
      <hr class="horizontal light" />
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <div class="d-flex align-items-center position-relative">
            <h3 class="text-body mb-1">11:13</h3>
            <p class="text-body opacity-8 mb-1 ms-3">Estimated arrival time</p>
            <hr class="vertical light mt-0" />
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="d-flex align-items-center position-relative">
            <h3 class="text-body mb-1 ms-md-auto">
              2.4
              <small class="align-top text-sm">Km</small>
            </h3>
            <p class="text-body opacity-8 mb-1 ms-3 me-auto">
              Turn right in 2.4 miles
            </p>
            <hr class="vertical light mt-0" />
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 ms-lg-auto">
          <div class="d-flex align-items-center">
            <h3 class="text-body mb-1 ms-lg-auto">
              6.3
              <small class="align-top text-sm">Km</small>
            </h3>
            <p class="text-body opacity-8 mb-1 ms-3">
              Distance to Creative Tim
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body px-0 py-0">
      <div id="mapid" class="leaflet"></div>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <div class="d-flex align-items-center">
            <div class="position-relative">
              <div class="avatar avatar-lg">
                <img
                  src="@/assets/img/bruce-mars.jpg"
                  alt="kal"
                  class="border-radius-xl rounded-circle shadow"
                />
              </div>
              <img
                class="position-absolute w-60 end-0 bottom-0 me-n3 mb-0"
                src="@/assets/img/small-logos/logo-spotify.svg"
                alt="spotify logo"
              />
            </div>
            <div class="px-3">
              <p class="text-body text-sm font-weight-bold mb-0">
                You're Mines Still (feat Drake)
              </p>
              <p class="text-body text-xs mb-2 opacity-8">
                Yung Bleu - Hip-Hop
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 my-auto text-center mt-3 mt-lg-0">
          <div class="d-flex align-items-center">
            <button
              class="btn btn-lg btn-icon-only btn-rounded btn-outline-dark mb-0 ms-auto"
            >
              <i
                class="ni ni-button-play top-0 rotate-180"
                aria-hidden="true"
              ></i>
            </button>
            <button
              class="btn btn-lg btn-icon-only btn-rounded btn-outline-dark mb-0 ms-4"
            >
              <i class="ni ni-button-pause top-0" aria-hidden="true"></i>
            </button>
            <button
              class="btn btn-lg btn-icon-only btn-rounded btn-outline-dark mb-0 ms-4 me-auto"
            >
              <i class="ni ni-button-play top-0" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-8 my-auto">
          <p class="text-body mb-2">Volume</p>
          <div id="sliderRegular"></div>
        </div>
        <div class="col-lg-1 col-md-6 col-4 my-auto ms-auto">
          <i
            class="ni ni-bullet-list-67 text-body mt-3 ms-auto"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Hide menu"
          ></i>
          <i
            class="ni ni-chat-round text-body ms-3 mt-3"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Track messages"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

onMounted(() => {
  try {
    if (process.client) {
      // Initialize the map and assign it to a variable for later use
      // there's a few ways to declare a VARIABLE in javascript.
      // you might also see people declaring variables using `const` and `let`
      // eslint-disable-next-line import/no-named-as-default-member
      const map = L.map("mapid", {
        // Set latitude and longitude of the map center (required)
        center: [38.89, -77.03],
        // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
        zoom: 11,
      });

      // Create a Tile Layer and add it to the map
      let tiles = new L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: "19",
        }
      ).addTo(map);
    }
  } catch (error) {}
});
</script>
