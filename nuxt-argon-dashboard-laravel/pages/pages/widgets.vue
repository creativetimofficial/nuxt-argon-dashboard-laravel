<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <MiniStatisticsCard
          class="bg-gradient-dark p-0"
          :title="{ text: 'Battery Health', color: 'opacity-7 text-white' }"
          :value="{ text: '99 %', color: 'text-white' }"
          :icon="{
            component: 'ni ni-controller text-dark',
            background: 'bg-white',
          }"
        />
        <MiniStatisticsCard
          class="bg-gradient-dark p-0"
          :title="{ text: 'Music Volume', color: 'opacity-7 text-white' }"
          :value="{ text: '15/100', color: 'text-white' }"
          :icon="{
            component: 'ni ni-note-03 text-dark',
            background: 'bg-white',
          }"
        />
      </div>
      <div class="col-lg-3 col-md-6">
        <LineChart
          title="Income"
          :value="{
            amount: '$130,832',
            percentage: { value: '+90%', color: 'success' },
          }"
        />
      </div>
      <div class="col-lg-6">
        <ProgressLineChart title="Tasks" :count="480" :progress="60" />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-4 col-sm-6">
        <div class="card">
          <div class="card-header p-3 pb-0">
            <h6 class="mb-0">Upcoming events</h6>
            <p class="text-sm mb-0 text-capitalize font-weight-bold">Joined</p>
          </div>
          <div class="card-body border-radius-lg p-3">
            <DefaultItem
              color="info"
              icon="ni ni-money-coins"
              title="Cyber Week"
              description="27 March 2020, at 12:30 PM"
            />
            <DefaultItem
              class="mt-4"
              color="primary"
              icon="ni ni-bell-55"
              title="Meeting with Marry"
              description="24 March 2020, at 10:00 PM"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="row">
          <div class="col-md-6">
            <DefaultInfoCard
              :icon="{
                component: 'fas fa-landmark',
                background: 'bg-gradient-success',
              }"
              title="Salary"
              description="Belong Interactive"
              value="+$2000"
            />
          </div>
          <div class="col-md-6">
            <DefaultInfoCard
              :icon="{
                component: 'fab fa-paypal',
                background: 'bg-gradient-success',
              }"
              title="Paypal"
              description="Freelance payment"
              value="$455.00"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <MasterCard />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-3 col-md-6">
        <InfoCard
          title="Full Body"
          description="What matters is the people who are sparked by it. And the people who are liked."
          :badge="{ text: 'Moderate', color: 'success' }"
        />
      </div>
      <div class="col-lg-2 col-md-6">
        <ControllerCard
          id="switch-on"
          title="On"
          :image="{
            src: bulbIcon,
            alt: 'Bulb Icon',
            label: 'Lights',
          }"
        />
      </div>
      <div class="col-lg-3">
        <LineChart
          title="Calories"
          :value="{
            amount: '97',
            percentage: { value: '+5%', color: 'success' },
          }"
        />
      </div>
      <div class="col-lg-2 col-md-6">
        <MiniInfoCard
          :icon="{ component: 'curved-next', background: 'success' }"
          title="754
          <span class='text-sm text-secondary'>m</span>"
          description="New York City"
        />
      </div>
      <div class="col-lg-2 col-md-6">
        <StepsCard
          title="Steps"
          count="11.4K"
          :badge="{ label: '+4.3%', color: 'success' }"
        />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-5">
        <Calendar />
      </div>
      <div class="col-lg-3 mt-0">
        <CategoriesList
          :categories="[
            {
              icon: {
                component: 'ni ni-mobile-button',
                background: 'dark',
              },
              label: 'Devices',
              description: '250 in stock <strong>346+ sold</strong>',
            },
            {
              icon: {
                component: 'ni ni-tag',
                background: 'dark',
              },
              label: 'Tickets',
              description: '123 closed <strong>15 open</strong>',
            },
            {
              icon: { component: 'ni ni-box-2', background: 'dark' },
              label: 'Error logs',
              description: '1 is active <strong>40 closed</strong>',
            },
            {
              icon: { component: 'ni ni-satisfied', background: 'dark' },
              label: 'Happy Users',
              description: '+ 430',
            },
          ]"
        />
        <MiniPlayerCard
          color="dark"
          :song="{ label: 'Some Kind Of Blues', album: 'Deftones' }"
        />
      </div>
      <div class="col-lg-4">
        <TimelineList
          class="h-100"
          title="Orders overview"
          description="<i class='fa fa-arrow-up text-success' aria-hidden='true'></i>
          <span class='font-weight-bold'>24%</span> this month"
        >
          <timelineItem
            :icon="{ component: 'ni ni-bell-55', color: 'success' }"
            title="$2400, Design changes"
            date-time="22 DEC 7:20 PM"
          />
          <TimelineItem
            :icon="{ component: 'ni ni-html5', color: 'danger' }"
            title="New order #1832412"
            date-time="21 DEC 11 PM"
          />
          <TimelineItem
            :icon="{ component: 'ni ni-cart', color: 'info' }"
            title="Server payments for April"
            date-time="21 DEC 9:34 PM"
          />
          <TimelineItem
            :icon="{ component: 'ni ni-credit-card', color: 'warning' }"
            title="New card added for order #4395133"
            date-time="20 DEC 2:20 AM"
          />
          <TimelineItem
            :icon="{ component: 'ni ni-key-25', color: 'primary' }"
            title="Unlock packages for development"
            date-time="18 DEC 4:54 AM"
          />
          <TimelineItem
            :icon="{ component: 'ni ni-box-2', color: 'dark' }"
            title="Launch the product"
            date-time="21 DEC 09:00 AM"
          />
        </TimelineList>
      </div>
    </div>
  </div>
</template>

<script setup>
import bulbIcon from "@/assets/img/small-logos/icon-bulb.svg";
import MiniStatisticsCard from "~~/examples/cards/MiniStatisticsCard.vue";
import ProgressLineChart from "~~/examples/charts/ProgressLineChart.vue";
import LineChart from "~~/examples/charts/LineChart.vue";
import DefaultInfoCard from "~~/examples/cards/DefaultInfoCard.vue";
import MasterCard from "~~/examples/cards/MasterCard.vue";
import DefaultItem from "~~/examples/cards/DefaultItem.vue";
import InfoCard from "~~/examples/cards/InfoCard.vue";
import ControllerCard from "~~/pagesComponents/pages/widgets/ControllerCard.vue";
import MiniInfoCard from "~~/examples/cards/MiniInfoCard.vue";
import StepsCard from "~~/pagesComponents/pages/widgets/StepsCard.vue";
import Calendar from "~~/examples/Calendar.vue";
import CategoriesList from "~~/examples/cards/CategoriesList.vue";
import MiniPlayerCard from "~~/examples/cards/MiniPlayerCard.vue";
import TimelineList from "~~/examples/cards/TimelineList.vue";
import TimelineItem from "~~/examples/cards/TimelineItem.vue";

definePageMeta({
  layout: "default",
  middleware: ["auth"],
});
</script>
