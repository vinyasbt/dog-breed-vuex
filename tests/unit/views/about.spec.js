import { shallowMount, createLocalVue } from '@vue/test-utils';
import about from "@/views/About.vue"
import VueRouter from 'vue-router';
// import { getAllDogImage } from "../../src/api.service.js";
import sinon from 'sinon'
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
    it('checks button',()=>{
        const goHome=jest.fn();
        wrapper.setMethods({
            goHome:goHome,
        })
        wrapper.find('button').trigger('click');
        expect(goHome).toHaveBeenCalled();
        expect(wrapper.vm.$route.path).toBe("/")
    });
    it('checks component',()=>{
      wrapper.vm.getDogRandomImage=jest.fn()
      expect(about).toBeTruthy();
      wrapper.vm.getDogRandomImage();
      expect(wrapper.vm.getDogRandomImage).toBeCalled();
    })
    
    // it('calls method in created',()=>{
    //   const getAllDogImageSpy=sinon.spy()
    //   wrapper.setMethods({
    //     getAllDogImage:getAllDogImageSpy,
    // })
    // wrapper.setData({
    //   dogName:'bulldog',
    //   dogSubBreedName:'english'
    // })
    //   expect(getAllDogImageSpy.called).toBe(true);
    // })
})
