import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("check h2 is present or not", () => {
    
    const wrapper = shallowMount(Header);
    expect(wrapper.find("h2").exists()).toBe(true)
  });
  it("checks whether it is a vue instance",()=>{
    const wrapper = shallowMount(Header);
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
});
