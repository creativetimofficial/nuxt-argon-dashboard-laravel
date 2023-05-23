<template>
  <span
    class="badge"
    :class="getClasses(variant, color, size, circular, floating)"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: "ArgonBadge",
  props: {
    size: {
      type: String,
      default: "md",
    },
    color: {
      type: String,
      default: "success",
    },
    variant: {
      type: String,
      default: "fill",
    },
    circular: {
      type: Boolean,
      default: false,
    },
    floating: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getClasses: (variant, color, size, circular, floating) => {
      let colorValue, sizeValue, circleValue, floatingValue;

      if (variant === "gradient") {
        colorValue = `bg-gradient-${color}`;
      } else {
        colorValue = `badge-${color}`;
      }

      sizeValue = size ? `badge-${size}` : '';

      circleValue = circular ? "badge-circle" : '';

      floatingValue = floating ? "badge-floating" : '';

      return `${colorValue} ${sizeValue} ${circleValue} ${floatingValue}`;
    },
  },
};
</script>
