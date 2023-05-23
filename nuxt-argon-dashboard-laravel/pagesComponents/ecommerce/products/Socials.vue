<template>
  <div
    class="p-3 bg-white card multisteps-form__panel border-radius-xl"
    data-animation="FadeIn"
  >
    <h5 class="font-weight-bolder">Socials</h5>
    <div class="multisteps-form__content">
      <div class="mt-3 row">
        <div class="col-12">
          <label>Shoppify Handle</label>
          <ArgonInput
            class="multisteps-form__input"
            type="text"
            placeholder="@argon"
          />
        </div>
        <div class="mt-3 col-12">
          <label>Facebook Account</label>
          <ArgonInput
            class="multisteps-form__input"
            type="text"
            placeholder="https://..."
          />
        </div>
        <div class="mt-3 col-12">
          <label>Instagram Account</label>
          <ArgonInput
            class="multisteps-form__input"
            type="text"
            placeholder="https://..."
          />
        </div>
      </div>
      <div class="row">
        <div class="mt-4 button-row d-flex col-12">
          <ArgonButton
            color="secondary"
            variant="gradient"
            class="mb-0 js-btn-prev"
            title="Prev"
            @click="$parent.prevStep"
          >
            Prev
          </ArgonButton>
          <ArgonButton
            type="button"
            color="dark"
            variant="gradient"
            class="mb-0 ms-auto js-btn-next"
            title="Next"
            @click="$parent.nextStep"
          >
            Next
          </ArgonButton>
        </div>
      </div>
    </div>
  </div>
</template>
