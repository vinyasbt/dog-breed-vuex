import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Footer.vue", () => {
  it("check h5 is present or not", () => {
    
    const wrapper = shallowMount(Footer);
    expect(wrapper.find("h5").exists()).toBe(true)
  });
  it("checks whether it is a vue instance",()=>{
    const wrapper = shallowMount(Footer);
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
});
