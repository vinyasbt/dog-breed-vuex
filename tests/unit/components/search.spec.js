import { shallowMount, createLocalVue } from '@vue/test-utils';
import Search from "@/components/Search.vue";
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { routes } from '@/router/index';

describe("Search.vue", () => {
  let wrapper;

  let mockStore;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    mockStore = {
      state: {
        dogsList: [],
        dogobject: { "bulldog": [
          "boston",
          "english",
          "french"
        ],
        "african": [
  
        ],},
      },
      dispatch: jest.fn(),
    };
    wrapper = shallowMount(Search, {
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
  it("check select is present or not", () => {
    expect(wrapper.find("select").exists()).toBe(true)
  });
  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="search">');
});
it('it should have a div element with class=search', () => {
  expect(wrapper.attributes("class")).toBe("search");
});
  
  it("checks watcher subbreed condition to true", () => {
    wrapper.setData({ searchData: 'bulldog' })
    wrapper.vm.$options.watch.searchData.call(wrapper.vm);
    expect(wrapper.vm.subBreed.length).not.toBe(0);
    wrapper.vm.$options.watch.subBreedName.call(wrapper.vm);
    expect(wrapper.vm.$route.path).toBe("/")
  });

  it("checks watcher subbreed condition to false", () => {
    wrapper.setData({ searchData: 'african' })
    wrapper.vm.$options.watch.searchData.call(wrapper.vm);
    expect(wrapper.vm.subBreed.length).toBe(0);
  });
  
});

