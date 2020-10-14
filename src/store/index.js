import Vue from "vue";
import Vuex from "vuex";
import { getAllDogsList, getDogRandomImage, getHomeDogRandomImage } from '../api.service.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeDogImages: [],
    dogsList: [],
    dogobject: {},
    dogRandomImage: [],
    subBreedName: '',
    dogName: '',
  },
  mutations: {
    Set_HomeDogImages(state, randomHomeImageArray) {
      state.homeDogImages = randomHomeImageArray;
    },
    Set_DogsList(state, dogNameArray) {
      state.dogsList = dogNameArray;
    },
    Set_DogObject(state, dogObject) {
      state.dogobject = dogObject;
    },
    Set_DogRandomImage(state, dogImage) {
      state.dogRandomImage.push(dogImage);
    },
    Set_DogName(state, dogName) {
      state.dogName = dogName;
    },
    Set_SubBreedName(state, subBreed) {
      state.subBreedName = subBreed;
    }
  },
  actions: {
    async getHomeDogRandomImage({ commit }) {
      await getHomeDogRandomImage().then((result) => {
        let randomHomeImageArray = result.data.message;
        commit('Set_HomeDogImages', randomHomeImageArray)
      })
        .catch(error => {
          console.log(error);
        })
    },
    async getAllDogsList({ commit }) {
      await getAllDogsList().then((result) => {
        let dogNameArray = Object.keys(result.data.message);
        commit('Set_DogsList', dogNameArray)
        let dogObject = result.data.message;
        commit('Set_DogObject', dogObject)
        this.state.dogsList.map((dogname) => {
          getDogRandomImage(dogname).then((result) => {
            let dogImage = result.data.message;
            commit('Set_DogRandomImage', dogImage)
          })
            .catch(error => {
              console.log(error);
            })
        })
      })
        .catch(error => {
          console.log(error);
        })
    }
  },
  modules: {}
});
