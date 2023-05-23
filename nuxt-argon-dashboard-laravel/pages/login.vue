<template>
    <NuxtLayout name="authentication">
        <template #navbar>
            <NavbarAuthentication is-blur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
                btn-background="bg-gradient-success" :dark-mode="true" />
        </template>
        <div class="page-header min-vh-100"
            style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-basic.jpg');">
            <span class="mask bg-gradient-dark opacity-6"></span>
            <div class="container mt-8 mb-4">
                <div class="row justify-content-center">
                    <div class="text-center" style="margin-bottom: 5px;">
                        <h3 class="text-white">Log in to Nuxt Argon Dashboard 2 Laravel Live Preview</h3>
                        <p class="text-lead text-white">Log in to see how you can save more than 300 hours of work with an
                            integrated Laravel API backend and ready-made components.</p>
                    </div>
                    <div class="text-center text-white" style="margin-bottom: 20px;">
                        <h5 class="text-white">
                            <strong>You can log in with 1 user type:</strong>
                        </h5>
                        <div>Username <b>admin@jsonapi.com</b> Password <b>secret</b></div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-7 mt-2">
                        <div class="card border-0 mb-0">
                            <div class="card-header bg-transparent">
                                <h5 class="text-dark text-center mt-2 mb-3">Sign in</h5>
                                <div class="btn-wrapper text-center">
                                    <a href="javascript:;" class="btn btn-neutral btn-icon btn-sm mb-0 me-1">
                                        <img class="w-30" src="@/assets/img/logos/github.svg" />
                                        Github
                                    </a>
                                    <a href="javascript:;" class="btn btn-neutral btn-icon btn-sm mb-0">
                                        <img class="w-30" src="@/assets/img/logos/google.svg" />
                                        Google
                                    </a>
                                </div>
                            </div>
                            <div class="card-body px-lg-5 pt-0">
                                <div class="text-center text-muted mb-4">
                                    <small>Or sign in with credentials</small>
                                </div>
                                <form role="form" class="text-start" @submit.prevent="submitForm">
                                    <div class="mb-3">
                                        <ArgonInput name="email" id="email" type="text" placeholder="Email"
                                            aria-label="Email" v-model="formData.email" :error="isError('email', errorsRef)"
                                            :errorMessage="getErrorMessage('email', errorsRef)" />
                                    </div>
                                    <div class="mb-3">
                                        <ArgonInput name="password" id="password" type="password" placeholder="Password"
                                            aria-label="Password" v-model="formData.password"
                                            :error="isError('password', errorsRef)"
                                            :errorMessage="getErrorMessage('password', errorsRef)" />
                                    </div>
                                    <ArgonSwitch id="rememberMe" name="rememberMe">
                                        Remember me
                                    </ArgonSwitch>
                                    <div class="text-center">
                                        <ArgonButton type="submit" color="success" variant="gradient" full-width
                                            class="my-4 mb-2">Sign in</ArgonButton>
                                    </div>
                                    <div class="mb-2 position-relative text-center">
                                        <p
                                            class="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
                                            or
                                        </p>
                                    </div>
                                    <div class="text-center">
                                        <ArgonButton color="dark" variant="gradient" full-width class="mt-2 mb-4"
                                            @click.prevent="router.push({ path: '/register' })">Register</ArgonButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <NuxtLink to="/password-recover" class="text-white">
                                <small>Forgot password?</small>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template #footer>
            <FooterCentered />
        </template>
    </NuxtLayout>
</template>

<script setup>
import FooterCentered from "@/examples/Footer/Centered.vue";
import NavbarAuthentication from "@/examples/Navbar/Authentication.vue";
import { useAuthStore } from "~~/stores/AuthStore";
import useToast from "~~/composables/useToast";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import { getErrorMessage, isError } from "~~/helpers/errorHandler";
import { useRouter } from "vue-router";
definePageMeta({
    layout: false,
    middleware: ["guest"],
});
const router = useRouter();
const authStore = useAuthStore();
const formData = reactive({
    email: 'admin@jsonapi.com',
    password: 'secret',
});
const errorsRef = reactive([]);

const rules = computed(() => {
    return {
        email: {
            required: helpers.withMessage('The email field is required', required),
            email: helpers.withMessage('Invalid email format', email),
        },
        password: {
            required: helpers.withMessage('The password field is required', required),
        },
    };
});
const v$ = useVuelidate(rules, formData);

const submitForm = async () => {
    v$.value.$validate();

    if (v$.value.$error) {
        const errors = JSON.parse(JSON.stringify(v$.value.$errors));
        errorsRef.value = [...errors];
    } else {
        try {
            await authStore.login(formData);
            router.push({ path: '/dashboards/default' });
        } catch (error) {
            await useToast("error", error.message);
        }
    }
};

</script>
