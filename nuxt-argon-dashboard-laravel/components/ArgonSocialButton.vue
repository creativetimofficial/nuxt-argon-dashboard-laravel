<template>
  <button
    type="button"
    class="btn"
    :class="getClasses(iconOnly, socialBtn, rounded, size)"
  >
    <span class="btn-inner--icon">
      <i :class="getIcon(icon)"></i>
    </span>
    <span class="btn-inner--text">
      &nbsp;
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: "ArgonSocialButton",
  props: {
    icon: {
      type: String,
      required: true,
    },
    iconOnly: {
      type: Boolean,
      default: false,
    },
    socialBtn: {
      type: String,
      required: true,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "default",
    },
  },
  methods: {
    getClasses: (iconOnly, socialBtn, rounded, size) => {
      let iconOnlyValue, socialBtnValue, roundedValue, sizeValue;

      iconOnlyValue = iconOnly ? "btn-icon-only" : '';

      socialBtnValue = socialBtn ? `btn-${socialBtn}` : '';

      roundedValue = rounded ? "rounded-circle" : '';

      sizeValue = size ? `btn-${size}` : '';

      return `${iconOnlyValue} ${socialBtnValue} ${roundedValue} ${sizeValue}`;
    },
    getIcon: (icon) => (icon ? icon : ''),
  },
};
</script>
