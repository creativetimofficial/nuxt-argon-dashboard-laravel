<template>
  <div class="card widget-calendar">
    <div class="p-3 pb-0 card-header">
      <h6 class="mb-0">{{ title }}</h6>
      <div class="d-flex"></div>
    </div>
    <div class="p-3 card-body">
      <FullCalendar :options="calendarOptions" />
    </div>
  </div>
</template>

<script setup>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";

defineProps({
  title: {
    type: String,
    default: "",
  },
  calendarOptions: {
    type: Object,
    default: () => ({
      plugins: [dayGridPlugin, interactionPlugin],
      height: 380,
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      events: [
        {
          title: "Call with Dave",
          date: "2022-10-09",
          className: "bg-gradient-danger",
        },

        {
          title: "Lunch meeting",
          start: "2022-10-21",
          className: "bg-gradient-primary",
        },

        {
          title: "All day conference",
          date: "2022-10-26",
          className: "bg-gradient-warning",
        },
      ],
      initialView: "dayGridMonth",
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      weekends: true,
    }),
  },
});
</script>
