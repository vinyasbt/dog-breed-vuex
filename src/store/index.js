import { getAllDogsList, getDogRandomImage, getHomeDogRandomImages } from '../service/api.service.js'
const state = {
  homeDogImages: [],
  dogsList: [],
  dogobject: {},
  dogRandomImage: [],
  subBreedName: '',
  dogName: '',
}
const mutations = {
  SET_HOMEDOGIMAGES(state, randomHomeImageArray) {
    state.homeDogImages = randomHomeImageArray;
  },
  SET_DOGSLIST(state, dogNameArray) {
    state.dogsList = dogNameArray;
  },
  SET_DOGOBJECT(state, dogObject) {
    state.dogobject = dogObject;
  },
  SET_DOGRANDOMIMAGE(state, dogImage) {
    state.dogRandomImage.push(dogImage);
  },
  SET_DOGNAME(state, dogName) {
    state.dogName = dogName;
  },
  SET_SUBBREEDNAME(state, subBreed) {
    state.subBreedName = subBreed;
  }
}
const actions = {
  async getHomeDogRandomImage({ commit }) {
     getHomeDogRandomImages().then((result) => {
      console.log("gethome dog images called",result)
      commit('SET_HOMEDOGIMAGES', result.data.message)
    })
      .catch(error => {
        console.log(error);
      })
  },
  async getAllDogsList({ commit }) {
    getAllDogsList().then((result) => {
      let dogNameArray = Object.keys(result.data.message);
      commit('SET_DOGSLIST', dogNameArray)
      let dogObject = result.data.message;
      commit('SET_DOGOBJECT', dogObject)
      this.state.dogsList.map((dogname) => {
        getDogRandomImage(dogname).then((result) => {
          let dogImage = result.data.message;
          commit('SET_DOGRANDOMIMAGE', dogImage)
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
}

export default {
  state,
  actions,
  mutations
}

