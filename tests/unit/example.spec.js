import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("check h2 is present or not", () => {
    
    const wrapper = shallowMount(Header);
    expect(wrapper.find("h2").exists()).toBe(true)
  });
});
