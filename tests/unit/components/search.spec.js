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
        dogobject: {},
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
  
  // it("checks watcher called routes", () => {
  //   wrapper.setData({ searchData: 'bulldog' })
  //   wrapper.vm.$options.watch.searchData.call();
  //   expect(wrapper.vm.subBreed).toStrictEqual([]);
  // });
// it("checks dropdown will trigger or not", () => {
//     expect(wrapper.vm.searchData).toBe('');
//     let searchInput = wrapper.find("select");
//     searchInput.trigger('change');
//     expect(wrapper.vm.searchData).not.toBe('');
//   })

  
});

