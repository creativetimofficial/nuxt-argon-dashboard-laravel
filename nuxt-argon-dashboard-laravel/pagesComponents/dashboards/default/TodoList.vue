<template>
  <div class="card h-100">
    <div class="card-header">
      <h5 class="mb-0 text-capitalize">{{ title }}</h5>
    </div>
    <div class="card-body pt-0">
      <ul class="list-group list-group-flush" data-toggle="checklist">
        <li
          v-for="({ label, dateTime, isChecked }, index) of todos"
          :key="index"
          class="checklist-entry list-group-item px-0"
        >
          <div
            class="checklist-item checklist-item-success d-flex"
            :class="isChecked && 'checklist-item-checked'"
          >
            <div class="checklist-info">
              <h6 class="checklist-title mb-0">{{ label }}</h6>
              <small class="text-xs">{{ dateTime }}</small>
            </div>
            <div class="form-check my-auto ms-auto">
              <input
                id="customCheck1"
                class="form-check-input"
                type="checkbox"
                :checked="isChecked"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "To do list",
  },
  todos: {
    type: Array,
    required: true,
    label: String,
    dateTime: String,
    isChecked: Boolean,
  },
});
</script>
