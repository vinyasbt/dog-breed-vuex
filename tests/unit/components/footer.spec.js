import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Footer.vue", () => {
  it("check h5 is present or not", () => {

    const wrapper = shallowMount(Footer);
    expect(wrapper.find("h5").exists()).toBe(true)
  });
  it("checks whether it is a vue instance", () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
  it("renders the correct markup", () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.html()).toContain('<div id="footer">');
  });
  it('it should have a div element with id="footer"', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.attributes("id")).toBe("footer");
  });
  it("does h5 data exists", () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.find("h5").text()).toBe("Copyrights Reserved")
  })
});
