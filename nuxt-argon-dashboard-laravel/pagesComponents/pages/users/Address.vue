<template>
  <div
    class="card multisteps-form__panel p-3 border-radius-xl bg-white"
    data-animation="FadeIn"
  >
    <h5 class="font-weight-bolder">Address</h5>
    <div class="multisteps-form__content">
      <div class="row mt-3">
        <div class="col">
          <label>Address 1</label>
          <ArgonInput
            id="address-line"
            class="multisteps-form__input"
            type="text"
            placeholder="eg. Street 111"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label>Address 2</label>
          <ArgonInput
            id="address-line2"
            class="multisteps-form__input"
            type="text"
            placeholder="eg. Street 221"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6">
          <label>City</label>
          <ArgonInput
            id="city"
            class="multisteps-form__input"
            type="text"
            placeholder="eg. Tokyo"
          />
        </div>
        <div class="col-6 col-sm-3 mt-3 mt-sm-0">
          <label>State</label>
          <select
            id="choices-state"
            class="multisteps-form__select form-control"
            name="choices-state"
          >
            <option selected="selected">...</option>
            <option value="1">State 1</option>
            <option value="2">State 2</option>
          </select>
        </div>
        <div class="col-6 col-sm-3 mt-3 mt-sm-0">
          <label>Zip</label>
          <ArgonInput
            id="zipcode"
            class="multisteps-form__input"
            type="text"
            placeholder="7 letters"
          />
        </div>
      </div>
      <div class="button-row d-flex mt-2">
        <ArgonButton
          type="button"
          color="light"
          variant="gradient"
          class="js-btn-prev"
          @click="$parent.prevStep"
          >Prev</ArgonButton
        >
        <ArgonButton
          type="button"
          color="dark"
          variant="gradient"
          class="ms-auto js-btn-next"
          @click="$parent.nextStep"
        >
          Next
        </ArgonButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import Choices from "choices.js";
onMounted(() => {
  const element = document.getElementById("choices-state");
  if (element)
    // eslint-disable-next-line no-new
    new Choices(element, {
      searchEnabled: false,
      allowHTML: true,
    });
});
</script>
