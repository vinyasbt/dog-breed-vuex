import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("check h2 is present or not", () => {

    const wrapper = shallowMount(Header);
    expect(wrapper.find("h2").exists()).toBe(true)
  });
  it("checks whether it is a vue instance", () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
  it("renders the correct markup", () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.html()).toContain('<div id="header">');
});
it('it should have a div element with id="header"', () => {
  const wrapper = shallowMount(Header);
  expect(wrapper.attributes("id")).toBe("header");
});

});
