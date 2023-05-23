<template>
  <div>
    <div id="profile" class="card card-body mt-4">
      <div class="row justify-content-center align-items-center">
        <div class="col-sm-auto col-4">
          <ArgonAvatar
            :image="img"
            alt="team-3"
            size="xl"
            shadow="sm"
            border-radius="lg"
          />
        </div>
        <div class="col-sm-auto col-8 my-auto">
          <div class="h-100">
            <h5 class="mb-1 font-weight-bolder">Mark Johnson</h5>
            <p class="mb-0 font-weight-bold text-sm">CEO / Co-Founder</p>
          </div>
        </div>
        <div class="col-sm-auto ms-sm-auto mt-sm-0 mt-3 d-flex">
          <label class="form-check-label mb-0 me-2">
            <small id="profileVisibility">Switch to invisible</small>
          </label>
          <ArgonSwitch
            id="switch-invisible"
            name="Switch to Invisible"
            checked
          />
        </div>
      </div>
    </div>
    <div id="basic-info" class="card mt-4">
      <div class="card-header">
        <h5>Basic Info</h5>
      </div>
      <div class="card-body pt-0">
        <div class="row">
          <div class="col-6">
            <label class="form-label">First Name</label>
            <ArgonInput id="firstname" type="text" placeholder="Alec" />
          </div>
          <div class="col-6">
            <label class="form-label">Last Name</label>
            <ArgonInput id="lastname" type="text" placeholder="Thompson" />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 col-6">
            <label class="form-label mt-2">I'm</label>
            <select
              id="choices-gender"
              class="form-control"
              name="choices-gender"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="col-sm-8">
            <div class="row">
              <div class="col-sm-5 col-5">
                <label class="form-label mt-2">Birth Date</label>
                <select
                  id="choices-month"
                  class="form-control"
                  name="choices-month"
                ></select>
              </div>
              <div class="col-sm-4 col-3">
                <label class="form-label mt-2">&nbsp;</label>
                <select
                  id="choices-day"
                  class="form-control"
                  name="choices-day"
                ></select>
              </div>
              <div class="col-sm-3 col-4">
                <label class="form-label mt-2">&nbsp;</label>
                <select
                  id="choices-year"
                  class="form-control"
                  name="choices-year"
                ></select>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <label class="form-label mt-2">Email</label>
            <ArgonInput
              id="email"
              type="email"
              placeholder="example@email.com"
            />
          </div>
          <div class="col-6">
            <label class="form-label mt-2">Confirmation Email</label>
            <ArgonInput
              id="confirm-email"
              type="email"
              placeholder="example@email.com"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <label class="form-label mt-2">Your location</label>
            <ArgonInput id="location" type="text" placeholder="Sydney, A" />
          </div>
          <div class="col-6">
            <label class="form-label mt-2">Phone Number</label>
            <ArgonInput id="phone" type="text" placeholder="+40 745 765 439" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 align-self-center">
            <label class="form-label mt-2">Language</label>
            <select
              id="choices-language"
              class="form-control"
              name="choices-language"
            >
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label mt-2">Skills</label>
            <input
              id="choices-skills"
              class="form-control"
              type="text"
              value="vuejs, angular, react"
              placeholder="Enter something"
              onfocus="focused(this)"
              onfocusout="defocused(this)"
            />
          </div>
        </div>
      </div>
    </div>
    <div id="password" class="card mt-4">
      <div class="card-header">
        <h5>Change Password</h5>
      </div>
      <div class="card-body pt-0">
        <label class="form-label">Current password</label>
        <ArgonInput
          id="password"
          type="password"
          placeholder="Current Password"
        />
        <label class="form-label">New password</label>
        <ArgonInput
          id="new-password"
          type="password"
          placeholder="New Password"
        />
        <label class="form-label">Confirm new password</label>
        <ArgonInput
          id="confirm-password"
          type="password"
          placeholder="Confirm password"
        />
        <h5 class="mt-5">Password requirements</h5>
        <p class="text-muted mb-2">
          Please follow this guide for a strong password:
        </p>
        <ul class="text-muted ps-4 mb-0 float-start">
          <li>
            <span class="text-sm">One special characters</span>
          </li>
          <li>
            <span class="text-sm">Min 6 characters</span>
          </li>
          <li>
            <span class="text-sm">One number (2 are recommended)</span>
          </li>
          <li>
            <span class="text-sm">Change it often</span>
          </li>
        </ul>
        <ArgonButton
          class="float-end mt-6 mb-0"
          color="dark"
          variant="gradient"
          size="sm"
        >
          Update password
        </ArgonButton>
      </div>
    </div>
    <div id="2fa" class="card mt-4">
      <div class="card-header d-flex">
        <h5 class="mb-0">Two-factor authentication</h5>
        <ArgonBadge color="success" class="ms-auto">Enabled</ArgonBadge>
      </div>
      <div class="card-body">
        <div class="d-flex">
          <p class="my-auto">Security keys</p>
          <p class="text-secondary text-sm ms-auto my-auto me-3">
            No Security Keys
          </p>
          <ArgonButton
            color="dark"
            variant="outline"
            size="sm"
            class="mb-0"
            type="button"
          >
            Add
          </ArgonButton>
        </div>
        <hr class="horizontal dark" />
        <div class="d-flex">
          <p class="my-auto">SMS number</p>
          <p class="text-secondary text-sm ms-auto my-auto me-3">+4012374423</p>
          <ArgonButton
            color="dark"
            variant="outline"
            size="sm"
            class="mb-0"
            type="button"
          >
            Edit
          </ArgonButton>
        </div>
        <hr class="horizontal dark" />
        <div class="d-flex">
          <p class="my-auto">Authenticator app</p>
          <p class="text-secondary text-sm ms-auto my-auto me-3">
            Not Configured
          </p>
          <ArgonButton
            color="dark"
            variant="outline"
            size="sm"
            class="mb-0"
            type="button"
          >
            Set up
          </ArgonButton>
        </div>
      </div>
    </div>
    <div id="accounts" class="card mt-4">
      <div class="card-header">
        <h5>Accounts</h5>
        <p class="text-sm">
          Here you can setup and manage your integration settings.
        </p>
      </div>
      <div class="card-body pt-0">
        <div class="d-flex">
          <ArgonAvatar class="width-48-px" :image="img1" alt="logo_slack" />
          <div class="my-auto ms-3">
            <div class="h-100">
              <h5 class="mb-0">Slack</h5>
              <a class="text-sm text-body" href="javascript:;">
                Show less
                <i
                  class="fas fa-chevron-up text-xs ms-1"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
          <p class="text-sm text-secondary ms-auto me-3 my-auto">Enabled</p>
          <div class="my-auto">
            <ArgonSwitch id="enable-slack" name="Enabled" checked />
          </div>
        </div>
        <div class="ps-5 pt-3 ms-3">
          <p class="mb-0 text-sm">
            You haven't added your Slack yet or you aren't authorized. Please
            add our Slack Bot to your account by clicking on
            <a href="javascript">here</a>. When you've added the bot, send your
            verification code that you have received.
          </p>
          <div
            class="d-sm-flex align-items-center bg-gray-100 border-radius-lg p-2 my-4"
          >
            <p class="text-sm font-weight-bold my-auto ps-sm-2">
              Verification Code
            </p>
            <ArgonInput
              id="verification-code"
              type="text"
              value="1172913"
              class="my-auto w-20 ms-sm-auto"
            />
          </div>
          <div class="d-sm-flex bg-gray-100 border-radius-lg p-2 my-4">
            <p class="text-sm font-weight-bold my-auto ps-sm-2">
              Connected account
            </p>
            <h6 class="text-sm ms-auto me-3 my-auto">hello@creative-tim.com</h6>
            <ArgonButton
              color="danger"
              variant="gradient"
              size="sm"
              class="my-sm-auto mt-2 mb-0"
              type="button"
              name="button"
            >
              Delete
            </ArgonButton>
          </div>
        </div>
        <hr class="horizontal dark" />
        <div class="d-flex">
          <ArgonAvatar class="width-48-px" :image="img2" alt="logo_spotify" />
          <div class="my-auto ms-3">
            <div class="h-100">
              <h5 class="mb-0">Spotify</h5>
              <p class="mb-0 text-sm">Music</p>
            </div>
          </div>
          <p class="text-sm text-secondary ms-auto me-3 my-auto">Enabled</p>
          <div class="my-auto">
            <ArgonSwitch id="enable-spotify" name="Spotify" checked />
          </div>
        </div>
        <hr class="horizontal dark" />
        <div class="d-flex">
          <ArgonAvatar class="width-48-px" :image="img3" alt="logo_atlassian" />
          <div class="my-auto ms-3">
            <div class="h-100">
              <h5 class="mb-0">Atlassian</h5>
              <p class="mb-0 text-sm">Payment vendor</p>
            </div>
          </div>
          <p class="text-sm text-secondary ms-auto me-3 my-auto">Enabled</p>
          <div class="my-auto">
            <ArgonSwitch id="enable-atlassian" name="Atlassian" checked />
          </div>
        </div>
        <hr class="horizontal dark" />
        <div class="d-flex">
          <ArgonAvatar class="width-48-px" :image="img4" alt="logo_asana" />
          <div class="my-auto ms-3">
            <div class="h-100">
              <h5 class="mb-0">Asana</h5>
              <p class="mb-0 text-sm">Organize your team</p>
            </div>
          </div>
          <div class="my-auto ms-auto">
            <ArgonSwitch id="enable-asana" name="Asana" />
          </div>
        </div>
      </div>
    </div>
    <div id="notifications" class="card mt-4">
      <div class="card-header">
        <h5>Notifications</h5>
        <p class="text-sm">
          Choose how you receive notifications. These notification settings
          apply to the things you’re watching.
        </p>
      </div>
      <div class="card-body pt-0">
        <div class="table-responsive">
          <table class="table mb-0">
            <thead>
              <tr>
                <th class="ps-1" colspan="4">
                  <p class="mb-0">Activity</p>
                </th>
                <th class="text-center">
                  <p class="mb-0">Email</p>
                </th>
                <th class="text-center">
                  <p class="mb-0">Push</p>
                </th>
                <th class="text-center">
                  <p class="mb-0">SMS</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="ps-1" colspan="4">
                  <div class="my-auto">
                    <span class="text-dark d-block text-sm">Mentions</span>
                    <span class="text-xs font-weight-normal"
                      >Notify when another user mentions you in a comment</span
                    >
                  </div>
                </td>
                <td>
                  <ArgonSwitch
                    id="notify-email"
                    name="Email"
                    class="form-check form-switch mb-0 d-flex align-items-center justify-content-center"
                    checked
                  />
                </td>
                <td>
                  <ArgonSwitch
                    id="notify-push"
                    name="Push"
                    class="form-check form-switch mb-0 d-flex align-items-center justify-content-center"
                  />
                </td>
                <td>
                  <ArgonSwitch
                    id="notify-sms"
                    name="Sms"
                    class="form-check form-switch mb-0 d-flex align-items-center justify-content-center"
                  />
                </td>
              </tr>
              <tr>
                <td class="ps-1" colspan="4">
                  <div class="my-auto">
                    <span class="text-dark d-block text-sm">Comments</span>
                    <span class="text-xs font-weight-normal"
                      >Notify when another user comments your item.</span
                    >
                  </div>
                </td>
                <td>
                  <ArgonSwitch
                    id="notify-comment-email"
                    name="Email"
                    class="form-check form-switch mb-0 d-flex align-items-center justify-content-center"
                    checked
                  />
                </td>
                <td>
                  <ArgonSwitch
                    id="notify-comment-push"
                    name="Push"
                    class="form-check form-switch mb-0 d-flex align-items-center justify-content-center"
                    checked
                  />
                </td>
                <td>
                  <ArgonSwitch
                    id="notify-comment-sms"
                    name="SMS"
                    class="form-check form-switch mb-0 d-flex align-items-center justify-content-center"
                  />
                </td>
              </tr>
              <tr>
                <td class="ps-1" colspan="4">
                  <div class="my-auto">
                    <span class="text-dark d-block text-sm">Follows</span>
                    <span class="text-xs font-weight-normal"
                      >Notify when another user follows you.</span
                    >
                  </div>
                </td>
                <td>
                  <ArgonSwitch
                    id="notify-follow-email"
                    name="Email"
                    class="mb-0 d-flex align-items-center justify-content-center"
                    checked
                  />
                </td>
                <td>
                  <ArgonSwitch
                    id="notify-follow-push"
                    name="Push"
                    class="mb-0 d-flex align-items-center justify-content-center"
                    checked
                  />
                </td>
                <td>
                  <ArgonSwitch
                    id="notify-follow-sms"
                    name="SMS"
                    class="mb-0 d-flex align-items-center justify-content-center"
                    checked
                  />
                </td>
              </tr>
              <tr>
                <td class="ps-1" colspan="4">
                  <div class="my-auto">
                    <p class="text-sm mb-0">Log in from a new device</p>
                  </div>
                </td>
                <td>
                  <ArgonSwitch
                    id="notify-login-email"
                    name="Email"
                    class="mb-0 d-flex align-items-center justify-content-center"
                    checked
                  />
                </td>
                <td>
                  <ArgonSwitch
                    id="notify-login-push"
                    name="Push"
                    class="mb-0 d-flex align-items-center justify-content-center"
                    checked
                  />
                </td>
                <td>
                  <ArgonSwitch
                    id="notify-login-sms"
                    name="SMS"
                    class="mb-0 d-flex align-items-center justify-content-center"
                    checked
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="sessions" class="card mt-4">
      <div class="card-header pb-3">
        <h5>Sessions</h5>
        <p class="text-sm">
          This is a list of devices that have logged into your account. Remove
          those that you do not recognize.
        </p>
      </div>
      <div class="card-body pt-0">
        <div class="d-flex align-items-center">
          <div class="text-center w-5">
            <i class="fas fa-desktop text-lg opacity-6"></i>
          </div>
          <div class="my-auto ms-3">
            <div class="h-100">
              <p class="text-sm mb-1">Bucharest 68.133.163.201</p>
              <p class="mb-0 text-xs">Your current session</p>
            </div>
          </div>
          <ArgonBadge color="success" size="sm" class="my-auto ms-auto me-3">
            Active
          </ArgonBadge>
          <p class="text-secondary text-sm my-auto me-3">EU</p>
          <a
            href="javascript:;"
            class="text-primary text-sm icon-move-right my-auto"
          >
            See more
            <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
          </a>
        </div>
        <hr class="horizontal dark" />
        <div class="d-flex align-items-center">
          <div class="text-center w-5">
            <i class="fas fa-desktop text-lg opacity-6"></i>
          </div>
          <p class="my-auto ms-3">Chrome on macOS</p>
          <p class="text-secondary text-sm ms-auto my-auto me-3">US</p>
          <a
            href="javascript:;"
            class="text-primary text-sm icon-move-right my-auto"
          >
            See more
            <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
          </a>
        </div>
        <hr class="horizontal dark" />
        <div class="d-flex align-items-center">
          <div class="text-center w-5">
            <i class="fas fa-mobile text-lg opacity-6"></i>
          </div>
          <p class="my-auto ms-3">Safari on iPhone</p>
          <p class="text-secondary text-sm ms-auto my-auto me-3">US</p>
          <a
            href="javascript:;"
            class="text-primary text-sm icon-move-right my-auto"
          >
            See more
            <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
    <div id="delete" class="card mt-4">
      <div class="card-header">
        <h5>Delete Account</h5>
        <p class="text-sm mb-0">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
      </div>
      <div class="card-body d-sm-flex pt-0">
        <div class="d-flex align-items-center mb-sm-0 mb-4">
          <div>
            <ArgonSwitch id="delete-account" name="Delete Account" />
          </div>
          <div class="ms-2">
            <span class="text-dark font-weight-bold d-block text-sm"
              >Confirm</span
            >
            <span class="text-xs d-block">I want to delete my account.</span>
          </div>
        </div>
        <ArgonButton
          color="secondary"
          variant="outline"
          class="mb-0 ms-auto"
          type="button"
          name="button"
        >
          Deactivate
        </ArgonButton>
        <ArgonButton
          color="danger"
          variant="gradient"
          class="mb-0 ms-2"
          type="button"
          name="button"
        >
          Delete Account
        </ArgonButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import Choices from "choices.js";
import img from "@/assets/img/team-3.jpg";
import img1 from "@/assets/img/small-logos/logo-slack.svg";
import img2 from "@/assets/img/small-logos/logo-spotify.svg";
import img3 from "@/assets/img/small-logos/logo-atlassian.svg";
import img4 from "@/assets/img/small-logos/logo-asana.svg";

onMounted(() => {
  const gender = document.getElementById("choices-gender");
  if (gender) {
    // eslint-disable-next-line no-new
    new Choices(gender);
  }

  const language = document.getElementById("choices-language");
  if (language) {
    // eslint-disable-next-line no-new
    new Choices(language);
  }

  const month = document.getElementById("choices-month");
  if (month) {
    setTimeout(function () {
      // eslint-disable-next-line no-new
      new Choices(month);
    }, 1);

    const monthArray = [];
    monthArray[0] = "January";
    monthArray[1] = "February";
    monthArray[2] = "March";
    monthArray[3] = "April";
    monthArray[4] = "May";
    monthArray[5] = "June";
    monthArray[6] = "July";
    monthArray[7] = "August";
    monthArray[8] = "September";
    monthArray[9] = "October";
    monthArray[10] = "November";
    monthArray[11] = "December";
    for (let m = 0; m <= 11; m++) {
      const optn = document.createElement("OPTION");
      optn.text = monthArray[m];
      // server side month start from one\
      optn.value = m + 1;
      // if june selected
      if (m === 1) {
        optn.selected = true;
      }
      month.options.add(optn);
    }
  }

  const day = document.getElementById("choices-day");
  if (day) {
    setTimeout(function () {
      // eslint-disable-next-line no-new
      new Choices(day);
    }, 1);

    for (let y = 1; y <= 31; y++) {
      const optn1 = document.createElement("OPTION");
      optn1.text = y;
      optn1.value = y;

      if (y === 1) {
        optn1.selected = true;
      }

      day.options.add(optn1);
    }
  }

  const year = document.getElementById("choices-year");
  if (year) {
    setTimeout(function () {
      // eslint-disable-next-line no-new
      new Choices(year);
    }, 1);

    for (let y = 1900; y <= 2020; y++) {
      const optn2 = document.createElement("OPTION");
      optn2.text = y;
      optn2.value = y;

      if (y === 2020) {
        optn2.selected = true;
      }

      year.options.add(optn2);
    }
  }

  const skills = document.getElementById("choices-skills");
  if (skills) {
    // eslint-disable-next-line no-new
    new Choices(skills, {
      delimiter: ",",
      editItems: true,
      maxItemCount: 5,
      removeItemButton: true,
      addItems: true,
    });
  }
});
</script>
