<template>
  <div class="avatar" :class="getSize(size)">
    <img
      :src="image"
      :alt="alt"
      :class="[getClasses(shadow, circular, borderRadius)]"
    />
  </div>
</template>

<script>
export default {
  name: "ArgonAvatar",
  props: {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: null,
    },
    shadow: {
      type: String,
      default: null,
    },
    borderRadius: {
      type: String,
      default: null,
    },
    circular: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getSize: (size) => (size ? `avatar-${size}` : ''),
    getClasses: (shadow, circular, borderRadius) => {
      let shadowValue, circularValue, borderRadiusValue;

      if (shadow) {
        shadowValue = shadow === "regular" ? "shadow" : `shadow-${shadow}`;
      } else {
        shadowValue = '';
      }

      circularValue = circular ? "rounded-circle" : '';

      borderRadiusValue = borderRadius ? `border-radius-${borderRadius}` : '';

      return `${shadowValue} ${circularValue} ${borderRadiusValue}`;
    },
  },
};
</script>
