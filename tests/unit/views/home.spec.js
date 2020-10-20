import { shallowMount, createLocalVue } from '@vue/test-utils';
import home from "@/views/Home.vue"
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import footer from "@/components/Footer.vue";
import header from "@/components/Header.vue";
import search from "@/components/Search.vue";

describe("about.vue", () => {
    let wrapper;
  
    let mockStore;
    const router = new VueRouter();
  
    beforeEach(() => {
      const localVue = createLocalVue();
      localVue.use(Vuex);
      localVue.use(VueRouter);
      mockStore = {
        state: {
          homeDogImages: [],
          dogsList: ['african'],
          dogobject: {
            "bulldog": [
              "boston",
              "english",
              "french"
            ],
            "african": [
      
            ],
          },
          dogRandomImage: []
        },
        dispatch: jest.fn(),
      };
      wrapper = shallowMount(home, {
        mocks: {
          $store: mockStore,
        },
        localVue,
        router
      });
    })
    afterEach(() => {
      wrapper.destroy();
    });
    it("checks whether it is a vue instance", () => {

        expect(wrapper.isVueInstance()).toBeTruthy();
      })
      it("renders the correct markup", () => {
        expect(wrapper.html()).toContain('<div class="home">');
    });
    it('it should have a div element with class="home"', () => {
      expect(wrapper.attributes("class")).toBe("home");
    });
    it("it should load the footer", () => {
        expect(footer).toBeTruthy();
      });
      it("it should load the header", () => {
        expect(header).toBeTruthy();
      });
      it("it should load the search", () => {
        expect(search).toBeTruthy();
      });
     
      it("it should have a <footer-stub></footer-stub>", () => {
        expect(wrapper.html()).toContain("<footer-stub></footer-stub>");
      });
      it("it should have a <header-stub></header-stub>", () => {
        expect(wrapper.html()).toContain("<header-stub></header-stub>");
      });
      it("it should have a <search-stub></search-stub>", () => {
        expect(wrapper.html()).toContain("<search-stub></search-stub>");
      });
    
    //   it('link exists',()=>{
    //     console.log(wrapper.html())
    //     const dogInfo=jest.fn();
    //   wrapper.setMethods({
    //     dogInfo:dogInfo,
    // })
    // // wrapper.setData({dogName:"bulldog"})
    //   wrapper.find("a").trigger('click');
    //     expect(dogInfo).toHaveBeenCalled();
    //     wrapper.vm.dogInfo('bulldog');
    //     expect(dogInfo).toHaveBeenCalledWith('bulldog');
    //     expect(wrapper.vm.dogName).toBe("bulldog")
    //   })
})
