import { shallowMount, createLocalVue } from '@vue/test-utils';
import about from "@/views/About.vue"
// import { getAllDogImage } from '@/service/api.service.js'
import VueRouter from 'vue-router';
describe("about.vue", () => {
  let wrapper;
  const router = new VueRouter();
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    wrapper = shallowMount(about, {
      localVue,
      router,
    });
  })
  afterEach(() => {
    wrapper.destroy();
  });
  it("checks whether it is a vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain('<div class="about">');
  });
  it('it should have a div element with class="about"', () => {
    expect(wrapper.attributes("class")).toBe("about");
  });
  it('checks button', () => {
    const goHome = jest.fn();
    wrapper.setMethods({
      goHome: goHome,
    })
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.goHome).toHaveBeenCalled();
  });
  it('checks component', () => {
    wrapper.vm.getDogRandomImage = jest.fn()
    expect(about).toBeTruthy();
    wrapper.vm.getDogRandomImage();
    expect(wrapper.vm.getDogRandomImage).toBeCalled();
  })
  it('has routes to home page', async () => {
    const button = wrapper.find('#goHome');
    await button.trigger('click');
    expect(wrapper.vm.$route.path).toBe("/");
  })
  // it("checking whether getAllDogImage getting data",()=>{
  //   jest.mock('@/service/api.service.js');
  //   const animals = {
  //     data:{
  //       message:"https://images.dog.ceo/breeds/terrier-scottish/n02097298_2583.jpg"
  //     }
  //   }
  //    getAllDogImage.mockResolvedValue(animals);
  //   expect(wrapper.vm.dogAllImageArray.length).not.toBe(0);
  // })
})
