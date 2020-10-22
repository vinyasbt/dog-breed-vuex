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
        dogsList: ['bulldog'],
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
  it('calling sub breed watcher', () => {
    wrapper.setData({ subBreedName: "english" })
    wrapper.vm.$options.watch.subBreedName.call(wrapper.vm);
    expect(wrapper.vm.$route.path).toBe("/");
    expect(wrapper.vm.subBreedName).toBe("english");
  })
  it('link exists', () => {
    const dogInfo = jest.fn();
    wrapper.setMethods({
      dogInfo: dogInfo,
    })
    wrapper.find("a").trigger('click');
    expect(dogInfo).toHaveBeenCalled();
  })
  it('checks method calling', () => {
    wrapper.setData({dogName:""})
    wrapper.vm.dogInfo('bulldog');
    expect(wrapper.vm.dogName).toBe('bulldog')
    expect(wrapper.vm.subBreed.length).not.toBe(0)
    
  })
  it('checks subbreed condition',()=>{
    wrapper.setData({dogName:""})
    wrapper.vm.dogInfo('african');
    expect(wrapper.vm.subBreed.length).toBe(0)
  })
})
