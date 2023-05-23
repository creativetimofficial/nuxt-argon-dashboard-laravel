import { defineNuxtRouteMiddleware } from "#app";
import { useAuthStore } from "~~/stores/AuthStore";

export default defineNuxtRouteMiddleware(async (to) => {
    const authStore = useAuthStore();

    if (authStore.checkIsAuthenticated()) {
        return '/'
    }
})
