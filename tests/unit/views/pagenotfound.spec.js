import { shallowMount, createLocalVue } from "@vue/test-utils";
import pagenotfound from "@/views/PageNotFound.vue";
import { BootstrapVue} from "bootstrap-vue";
import VueRouter from "vue-router";
import router from "@/router";
describe("In PageNotFound Component", () => {
  let pagenotfoundWrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    pagenotfoundWrapper = shallowMount(pagenotfound, {
      localVue,
      router,
    });
  });
  afterEach(() => {
    pagenotfoundWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(pagenotfoundWrapper.isVueInstance).toBeTruthy();
  });
  it("it renders the correct markup", () => {
    const expected = '<div class="jumbotron">';
    expect(pagenotfoundWrapper.html()).toContain(expected);
  });
  it("has called goHome function", () => {
    const goHome = jest.fn();
    const $route = {
      name: "Home",
    };
    pagenotfoundWrapper.setMethods({
      goHome: goHome,
    });
    pagenotfoundWrapper.find("button").trigger("click");
    expect(goHome).toHaveBeenCalled();
    expect(pagenotfoundWrapper.vm.$route.name).toBe($route.name);
  });
  it('has routes to home page', async () => {
    const button = pagenotfoundWrapper.find('#goHome');
    await button.trigger('click');
    expect(pagenotfoundWrapper.vm.$route.path).toBe("/");
  })
});
