<template>
  <div class="card card-carousel overflow-hidden h-100 p-0">
    <div
      id="carouselExampleCaptions"
      class="carousel slide h-100"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner border-radius-lg h-100">
        <div
          v-for="(
            { img, title, description, icon: { component, background } }, index
          ) of items"
          :key="index"
          :class="`carousel-item h-100 ${index === 0 && 'active'}`"
          :style="{
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
          }"
        >
          <div
            class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5"
          >
            <div
              :class="`icon icon-shape icon-sm ${background} text-center border-radius-md mb-3`"
            >
              <i :class="`opacity-10 ${component}`"></i>
            </div>
            <h5 class="text-white mb-1">{{ title }}</h5>
            <p>
              {{ description }}
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev w-5 me-3"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next w-5 me-3"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    img: String,
    title: String,
    description: String,
    icon: {
      type: Object,
      component: String,
      background: String,
    },
    default: () => [],
  },
});
</script>
