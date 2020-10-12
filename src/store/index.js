import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex,axios);

export default new Vuex.Store({
  state: {
    homeDogImages:[],
    dogsList:[],
    dogobject:{},
    dogRandomImage:[],
    subBreedName:'',
     dogName:'',
  },
  mutations: {
    SET_HomeDogImages(state,randomHomeImageArray){
      state.homeDogImages=randomHomeImageArray;
    },
    SET_DogsList(state,dogNameArray){
      state.dogsList=dogNameArray;
    },
    SET_DogObject(state,dogObject){
      state.dogobject=dogObject;
      
    },
    SET_DogRandomImage(state,dogImage){
      state.dogRandomImage.push(dogImage);
    },
    SET_DogName(state,dogName){
      console.log("inside store dog name",dogName)
      state.dogName=dogName;
    },
    SET_SubBreedName(state,subBreed){
      console.log("inside store dog subbreed name",subBreed)
      state.subBreedName=subBreed;
    }
  },
  actions: {
    getHomeDogRandomImage({commit}){
      axios.get(`https://dog.ceo/api/breeds/image/random/48`).then((result)=>{
        let randomHomeImageArray=result.data.message;
        commit('SET_HomeDogImages',randomHomeImageArray)
      })
      .catch(error=>{
        console.log(error);
      })
    },
    getAllDogsList({commit}){
      axios.get('https://dog.ceo/api/breeds/list/all').then((result)=>{
        let dogNameArray=Object.keys(result.data.message);
        commit('SET_DogsList',dogNameArray)
        let dogObject=result.data.message;
        commit('SET_DogObject',dogObject)
        this.state.dogsList.map((dogname)=>{
          axios.get(`https://dog.ceo/api/breed/${dogname}/images/random`).then((result)=>{
          
         let dogImage=result.data.message;
          commit('SET_DogRandomImage',dogImage)
          })
          .catch(error=>{
            console.log(error);
          })
          
        })
        
      })
      .catch(error=>{
        console.log(error);
      })
    }
     
  },
  modules: {}
});
