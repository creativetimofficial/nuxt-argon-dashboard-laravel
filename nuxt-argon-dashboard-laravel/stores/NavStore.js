import { defineStore } from "pinia";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";

export const useNavStore = defineStore("NavStore", {
  // state
  state: () => {
    return {
      bootstrap: bootstrap,
      isSidenavCollapsed: false,
      showConfig: false,
      sidenavType: 'bg-white',
      navFixed: false,
      darkMode: false,
    };
  },

  actions: {
    toggleSidenavCollapsing() {
      this.isSidenavCollapsed = !this.isSidenavCollapsed;
    },
    toggleShowConfig() {
      this.showConfig = !this.showConfig;
    },
    toggleSidebarColor(payload) {
      this.sidebarColor = payload;
    },
    setSidenavType(payload) {
      this.sidenavType = payload;
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    toggleNavFixed() {
      this.navFixed = !this.navFixed;
    },
  },
});
