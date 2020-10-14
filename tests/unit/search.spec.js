import { shallowMount, createLocalVue } from "@vue/test-utils";
import Search from "@/components/Search.vue";
import Vuex from 'vuex';
import vuexstore from '../../src/store/index.js'

describe("Search.vue", () => {
  let wrapper;
  let store;

  const localVue = createLocalVue();

  localVue.use(Vuex);

  beforeEach(() => {
    store = new Vuex.Store(vuexstore);
    wrapper = shallowMount(Search, { store, localVue })
  });
  it("checks whether it is a vue instance", () => {

    expect(wrapper.isVueInstance()).toBeTruthy();
  })
  it("check select is present or not", () => {
    expect(wrapper.find("select").exists()).toBe(true)
  });
  it("checks dropdown will trigger or not", () => {
    expect(wrapper.vm.searchData).toBe('');
    let searchInput = wrapper.find("select");
    searchInput.trigger('change');
    expect(wrapper.vm.searchData).not.toBe('');
  })
});

