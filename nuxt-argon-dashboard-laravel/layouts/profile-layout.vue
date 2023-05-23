<template>
  <div v-if="$isDemo()">
    <Head>
      <Title itemprop="name">
        Nuxt Argon Dashboard 2 Laravel by Creative Tim & UPDIVISION
      </Title>
      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="@CreativeTim" />
      <Meta name="twitter:creator" content="@CreativeTim" />
      <Meta name="twitter:title" content="Nuxt Argon Dashboard 2 Laravel by Creative Tim & UPDIVISION" />
      <Meta name="twitter:description"
        content="Free full stack app with Nuxt3 frontend and API-powered Laravel backend" />
      <Meta name="twitter:image"
        content="https://s3.amazonaws.com/creativetim_bucket/products/350/original/nuxt-argon-dashboard.jpg?168483293" />
      <Meta name="twitter:url" content="https://www.creative-tim.com/live/nuxt-argon-dashboard-laravel" />
      <Meta name="description" content="Free full stack app with Nuxt3 frontend and API-powered Laravel backend" />
      <Meta name="keywords"
        content="creative tim, updivision, html dashboard, laravel, nuxt, nuxt.js, nuxt argon, nuxt, api, html css dashboard laravel, argon dashboard 2 laravel, argon dashboard 2 laravel, nuxt argon dashboard 2, nuxt argon dashboard 2 Laravel, nuxt admin, nuxt dashboard, argon dashboard, nuxt argon admin, web dashboard, bootstrap 5 dashboard laravel, bootstrap 5, css3 dashboard, bootstrap 5 admin laravel, nuxt argon dashboard bootstrap 5 laravel, frontend, responsive bootstrap 5 dashboard, nuxt argon dashboard 2, nuxt argon laravel bootstrap 5 dashboard" />
      <Meta property="og:app_id" content="655968634437471" />
      <Meta property="og:type" content="product" />
      <Meta property="og:title" content="Nuxt Argon Dashboard 2 Laravel by Creative Tim & UPDIVISION" />
      <Meta property="og:url" content="https://www.creative-tim.com/live/nuxt-argon-dashboard-laravel" />
      <Meta property="og:image"
        content="https://s3.amazonaws.com/creativetim_bucket/products/350/original/nuxt-argon-dashboard.jpg?168483293" />
      <Meta property="product:price:amount" content="free" />
      <Meta property="product:price:currency" content="USD" />
      <Meta property="product:availability" content="in Stock" />
      <Meta property="product:brand" content="Creative Tim" />
      <Meta property="product:category" content="Admin &amp; Dashboards" />
      <Meta name="data-turbolinks-track" content="false" />
    </Head>
  </div>
  <div>
    <div class="position-absolute w-100 min-height-300 top-0" :style="{
      'background-image': 'url(' + image + ')',
      'background-position-y': '50%',
    }">
      <span class="mask bg-success opacity-6"></span>
    </div>
    <Sidenav />

    <main class="mt-1 main-content border-radius-lg">
      <slot />
      <Footer class="py-3 bg-white border-radius-lg" />
    </main>
  </div>
</template>
<script setup>
import image from "@/assets/img/profile-layout-header.jpg";
import Sidenav from "~~/examples/Sidenav";
import Footer from "~~/examples/Footer";
import setNavPills from "~~/assets/js/nav-pills";

onMounted(() => {
  setNavPills();
});
const { $isDemo } = useNuxtApp();
useHead({
  bodyAttrs: {
    class: "profile-overview",
  },
});
</script>
