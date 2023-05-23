<template>
  <div
    class="card multisteps-form__panel p-3 border-radius-xl bg-white"
    data-animation="FadeIn"
  >
    <h5 class="font-weight-bolder mb-0">Profile</h5>
    <div class="multisteps-form__content mt-4">
      <div class="row">
        <div class="col-12">
          <label>Public Email</label>
          <ArgonInput
            class="multisteps-form__input"
            type="text"
            placeholder="Use an address you don't use frequently."
          />
        </div>
        <div class="col-12">
          <ArgonTextarea
            id="bio"
            class="multisteps-form__textarea mt-0"
            placeholder="Say a few words about who you are or what you're working on."
            >Bio
          </ArgonTextarea>
        </div>
      </div>
      <div class="button-row d-flex mt-4">
        <ArgonButton
          type="button"
          color="light"
          variant="gradient"
          class="js-btn-prev"
          @click="$parent.prevStep"
        >
          Prev
        </ArgonButton>
        <ArgonButton
          type="button"
          color="dark"
          variant="gradient"
          class="ms-auto"
        >
          Send
        </ArgonButton>
      </div>
    </div>
  </div>
</template>
