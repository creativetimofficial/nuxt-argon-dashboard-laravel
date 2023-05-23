<template>
    <nav class="navbar navbar-expand-lg top-0 z-index-3 position-absolute mt-4"
        :class="isBlur ? isBlur : 'shadow-none my-2 navbar-transparent w-100'">
        <div class="container ps-2 pe-0">
            <NuxtLink class="navbar-brand font-weight-bolder ms-lg-0 ms-3" :class="darkMode ? 'text-black' : 'text-white'">
                Nuxt Argon Dashboard 2 Laravel</NuxtLink>
            <ul class="navbar-nav navbar-nav-hover" style="margin-right: 100px;">
                <li class="mx-2 nav-item">
                    <NuxtLink class="mb-1 dropdown-item ps-3 border-radius-md" to="/login">
                        <span>
                            <i class="fas fa-key opacity-6 me-1 text-dark" aria-hidden="true"></i>
                            Login
                        </span>
                    </NuxtLink>
                </li>
                <li class="mx-2 nav-item">
                    <NuxtLink class="mb-1 dropdown-item ps-3 border-radius-md" to="/register">
                        <span>
                            <i class="fas fa-user-circle opacity-6 me-1 text-dark" aria-hidden="true"></i>
                            Register
                        </span>
                    </NuxtLink>
                </li>
            </ul>
            <ul class="navbar-nav d-lg-block d-none">
                <li class="nav-item">
                    <a href="https://www.creative-tim.com/product/nuxt-argon-dashboard-laravel"
                        target="_blank"
                        class="mb-0 btn btn-sm me-1" :class="btnBackground ? btnBackground : 'bg-white text-dark'"
                        onclick="smoothToPricing('pricing-soft-ui')">Free Download</a>
                </li>
            </ul>
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
