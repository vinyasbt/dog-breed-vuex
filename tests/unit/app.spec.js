import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import app from "@/App.vue";
describe("In App Component", () => {
    let appWrapper;
    const router = new VueRouter({ path: "/", name: "Home" });
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(VueRouter);
        appWrapper = shallowMount(app, {
            localVue,
            router,
        });
    });
    afterEach(() => {
        appWrapper.destroy();
    });
    it("is a Vue instance", () => {
        expect(appWrapper.isVueInstance).toBeTruthy();
    });
    it("renders the correct markup", () => {
        expect(appWrapper.html()).toContain('<div id="app">');
    });
    it('it should have a div element with id="app"', () => {
        expect(appWrapper.attributes("id")).toBe("app");
    });
    it("it should have a <router-view-stub></router-view-stub>", () => {
        expect(appWrapper.html()).toContain("<router-view-stub name=\"default\"></router-view-stub>");
    });
    it('checks component', () => {
        expect(app).toBeTruthy();
    })
});
