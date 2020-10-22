import { shallowMount, createLocalVue } from "@vue/test-utils";
import pagenotfound from "@/views/PageNotFound.vue";



describe("In PageNotFound Component", () => {
    let pagenotfoundWrapper;
    beforeEach(() => {
        const localVue = createLocalVue();

        pagenotfoundWrapper = shallowMount(pagenotfound, {
            localVue
        
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
})