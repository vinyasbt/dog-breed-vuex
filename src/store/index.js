
import { getAllDogsList, getDogRandomImage, getHomeDogRandomImages } from '../service/api.service.js'


const state= {
  homeDogImages: [],
  dogsList: [],
  dogobject: {},
  dogRandomImage: [],
  subBreedName: '',
  dogName: '',
}
const mutations={
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
}
const actions= {
   getHomeDogRandomImage({ commit }) {
      getHomeDogRandomImages().then((result) => {
      commit('Set_HomeDogImages', result.data.message)
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
}

export default {
  state,
  actions,
  mutations
}

