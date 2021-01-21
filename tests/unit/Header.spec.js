// Libraries
import Vue from "vue";
import Vuetify from "vuetify";

// Components
import Header from "@/components/Header";

// Utilities
import { createLocalVue, mount } from "@vue/test-utils";

describe("NavBar.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const mountFunction = (options) => {
    return mount(Header, {
      localVue,
      vuetify,
      ...options,
    });
  };

  test("it should display MLB2K20 API", () => {
    const wrapper = mountFunction({
      stubs: ["router-link"],
    });

    expect(wrapper.text()).toMatch(/MLB2K20API/);
    expect(wrapper.text()).not.toMatch(/MLB2K19API/);
  });
});
