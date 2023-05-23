<template>
    <NuxtLayout name="authentication">
        <template #navbar>
            <NavbarAuthentication is-blur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
                btn-background="bg-gradient-success" :dark-mode="true" />
        </template>
        <div class="page-header min-vh-100"
            style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-basic.jpg');">
            <span class="mask bg-gradient-dark opacity-6"></span>
            <div class="container mt-7">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-7">
                        <div class="card z-index-0">
                            <div class="card-header text-center pt-4">
                                <h5>Register with</h5>
                            </div>
                            <div class="row px-xl-5 px-sm-4 px-3">
                                <div class="col-3 ms-auto px-1">
                                    <a class="btn btn-outline-light w-100" href="javascript:;">
                                        <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(3.000000, 3.000000)" fill-rule="nonzero">
                                                    <circle fill="#3C5A9A" cx="29.5091719" cy="29.4927506" r="29.4882047" />
                                                    <path
                                                        d="M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z"
                                                        fill="#FFFFFF" />
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <div class="col-3 px-1">
                                    <a class="btn btn-outline-light w-100" href="javascript:;">
                                        <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(7.000000, 0.564551)" fill="#000000"
                                                    fill-rule="nonzero">
                                                    <path
                                                        d="M40.9233048,32.8428307 C41.0078713,42.0741676 48.9124247,45.146088 49,45.1851909 C48.9331634,45.4017274 47.7369821,49.5628653 44.835501,53.8610269 C42.3271952,57.5771105 39.7241148,61.2793611 35.6233362,61.356042 C31.5939073,61.431307 30.2982233,58.9340578 25.6914424,58.9340578 C21.0860585,58.9340578 19.6464932,61.27947 15.8321878,61.4314159 C11.8738936,61.5833617 8.85958554,57.4131833 6.33064852,53.7107148 C1.16284874,46.1373849 -2.78641926,32.3103122 2.51645059,22.9768066 C5.15080028,18.3417501 9.85858819,15.4066355 14.9684701,15.3313705 C18.8554146,15.2562145 22.5241194,17.9820905 24.9003639,17.9820905 C27.275104,17.9820905 31.733383,14.7039812 36.4203248,15.1854154 C38.3824403,15.2681959 43.8902255,15.9888223 47.4267616,21.2362369 C47.1417927,21.4153043 40.8549638,25.1251794 40.9233048,32.8428307 M33.3504628,10.1750144 C35.4519466,7.59650964 36.8663676,4.00699306 36.4804992,0.435448578 C33.4513624,0.558856931 29.7884601,2.48154382 27.6157341,5.05863265 C25.6685547,7.34076135 23.9632549,10.9934525 24.4233742,14.4943068 C27.7996959,14.7590956 31.2488715,12.7551531 33.3504628,10.1750144" />
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <div class="col-3 me-auto px-1">
                                    <a class="btn btn-outline-light w-100" href="javascript:;">
                                        <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(3.000000, 2.000000)" fill-rule="nonzero">
                                                    <path
                                                        d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
                                                        fill="#4285F4" />
                                                    <path
                                                        d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
                                                        fill="#34A853" />
                                                    <path
                                                        d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
                                                        fill="#FBBC05" />
                                                    <path
                                                        d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
                                                        fill="#EB4335" />
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <div class="mt-2 position-relative text-center">
                                    <p
                                        class="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
                                        or
                                    </p>
                                </div>
                            </div>
                            <div class="card-body">
                                <form role="form" @submit.prevent="submitForm">
                                    <ArgonInput name="name" id="name" type="text" placeholder="Name" aria-label="Name"
                                        v-model="formData.name" :error="isError('name', errorsRef)"
                                        :errorMessage="getErrorMessage('name', errorsRef)" />
                                    <ArgonInput name="email" id="email" type="text" placeholder="Email" aria-label="Email"
                                        v-model="formData.email" :error="isError('email', errorsRef)"
                                        :errorMessage="getErrorMessage('email', errorsRef)" />
                                    <ArgonInput name="password" id="password" type="password" placeholder="Password"
                                        aria-label="Password" v-model="formData.password"
                                        :error="isError('password', errorsRef)"
                                        :errorMessage="getErrorMessage('password', errorsRef)" />
                                    <ArgonInput name="passwordConfirm" id="passwordConfirm" type="password"
                                        placeholder="Confirm Password" aria-label="Password"
                                        v-model="formData.passwordConfirm" :error="isError('passwordConfirm', errorsRef)"
                                        :errorMessage="getErrorMessage('passwordConfirm', errorsRef)" />
                                    <ArgonCheckbox id="terms" name="terms" v-model:checked="formData.isChecked">
                                        <label class="form-check-label" for="terms">
                                            I agree the
                                            <a href="javascript:;" class="text-dark font-weight-bolder">Terms and
                                                Conditions</a>
                                        </label>
                                    </ArgonCheckbox>
                                    <span v-if="isError('terms', errorsRef)"
                                        style="color: #fd5c70; margin-left: 5px; font-size: 12px">
                                        {{ getErrorMessage('terms', errorsRef) }}
                                    </span>
                                    <div class="text-center">
                                        <ArgonButton type="submit" full-width color="dark" variant="gradient"
                                            class="my-4 mb-2">Register
                                        </ArgonButton>
                                    </div>

                                    <p class="text-sm mt-3 mb-0">
                                        Already have an account?
                                        <NuxtLink to="/" class="text-dark font-weight-bolder">
                                            Sign in
                                        </NuxtLink>
                                    </p>
                                </form>
                            </div>
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
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers, minLength, sameAs } from '@vuelidate/validators';
import { getErrorMessage, isError } from "~~/helpers/errorHandler";
import { useRouter } from "vue-router";
definePageMeta({
    layout: false,
    middleware: ["guest"],
});
const router = useRouter();
const authStore = useAuthStore();
const formData = reactive({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    isChecked: false,
});
const errorsRef = reactive([]);

const rules = computed(() => {
    return {
        name: {
            required: helpers.withMessage('The name field is required', required),
        },
        email: {
            required: helpers.withMessage('The email field is required', required),
            email: helpers.withMessage('Invalid email format', email),
        },
        password: {
            required: helpers.withMessage('The password field is required', required),
            minLength: minLength(8),
        },
        passwordConfirm: {
            sameAs: helpers.withMessage("Passwords don't match", sameAs(formData.password)),
        }
    };
});
const v$ = useVuelidate(rules, formData);

const submitForm = async () => {
    v$.value.$validate();

    if (v$.value.$error || !formData.isChecked) {
        const errors = JSON.parse(JSON.stringify(v$.value.$errors));
        errorsRef.value = [...errors];

        if (!formData.isChecked) {
            errorsRef.value = [...errorsRef.value, { $property: 'terms', $message: 'You need to agree with our terms and conditions.' }];
        }
    } else {
        try {
            await authStore.register(formData);
            router.push({ path: "/dashboards/default" })
        } catch (error) {
            await useToast("error", error.message);
        }
    }
};

</script>
  