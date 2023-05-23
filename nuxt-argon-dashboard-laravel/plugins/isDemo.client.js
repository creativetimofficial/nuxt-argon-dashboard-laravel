export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig();
    const demo = runtimeConfig.public.isDemo;

    const isDemo = () => {
        if(!demo || demo === '0') {
            return false;
        }
        
        return true;
    }

    return {
        provide: {
            isDemo: isDemo,
        }
    }
})
