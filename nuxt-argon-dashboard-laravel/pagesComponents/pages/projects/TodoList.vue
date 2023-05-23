<template>
  <div class="card">
    <div class="p-3 card-header">
      <div class="row">
        <div class="col-md-6">
          <h6 class="mb-0">{{ header.title }}</h6>
        </div>
        <div class="col-md-6 d-flex justify-content-end align-items-center">
          <small>{{ header.dateTime }}</small>
        </div>
      </div>
      <hr class="mb-0 horizontal dark" />
    </div>
    <div class="p-3 pt-0 card-body">
      <ul class="list-group list-group-flush" data-toggle="checklist">
        <li
          v-for="({ todo, date, id, company, isComplete }, index) of todos"
          :key="index"
          class="py-0 mb-3 border-0 list-group-item flex-column align-items-start ps-0"
        >
          <div class="checklist-item checklist-item-primary ps-2 ms-3">
            <div class="d-flex align-items-center">
              <ArgonCheckbox :id="id" :name="todo" :checked="isComplete" />
              <h6 class="mb-0 text-sm text-dark font-weight-bold">
                {{ todo }}
              </h6>
              <div class="dropdown float-lg-end ms-auto pe-4">
                <a
                  :id="id"
                  href="#"
                  class="cursor-pointer"
                  :class="{ show: showMenu }"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  @click="showMenu = !showMenu"
                >
                  <i
                    class="fa fa-ellipsis-h text-secondary"
                    aria-hidden="true"
                  ></i>
                </a>
                <ul
                  class="px-2 py-3 dropdown-menu ms-sm-n4 ms-n5"
                  :aria-labelledby="id"
                >
                  <li
                    v-for="({ action: { route, label } }, index1) of todos"
                    :key="index1"
                  >
                    <a class="dropdown-item border-radius-md" :href="route">{{
                      label
                    }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-3 d-flex align-items-center ms-4 ps-1">
              <div>
                <p class="mb-0 text-xs text-secondary font-weight-bold">Date</p>
                <span class="text-xs font-weight-bolder">{{ date }}</span>
              </div>
              <div class="ms-auto">
                <p class="mb-0 text-xs text-secondary font-weight-bold">
                  Project
                </p>
                <span class="text-xs font-weight-bolder">{{ id }}</span>
              </div>
              <div class="mx-auto">
                <p class="mb-0 text-xs text-secondary font-weight-bold">
                  Company
                </p>
                <span class="text-xs font-weight-bolder">{{ company }}</span>
              </div>
            </div>
          </div>
          <hr class="mt-4 mb-0 horizontal dark" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  header: {
    type: Object,
    title: String,
    dateTime: String,
    required: true,
  },
  todos: {
    type: Array,
    required: true,
    todo: String,
    date: String,
    id: String,
    company: String,
    action: {
      type: Array,
      route: String,
      label: String,
    },
  },
});

const showMenu = ref(false);
</script>
