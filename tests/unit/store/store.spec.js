import store from "@/store/index";
import { getHomeDogRandomImages } from '@/service/api.service.js'
jest.mock('@/service/api.service.js');
it('assigning homedogimages', () => {
  const state = {
    homeDogImages: []
  }
  const animals = { animal: [{ animal: 1 }, { animal: 2 }, { animal: 3 }] };
  store.mutations.SET_HOMEDOGIMAGES(state, animals.animal)
  expect(state.homeDogImages).toBe(animals.animal)
})
it('assigning dogsList', () => {
  const state = {
    dogsList: []
  }
  const animal = { animal: [{ animal: 1 }, { animal: 2 }, { animal: 3 }] };
  store.mutations.SET_DOGSLIST(state, animal.animal)
  expect(state.dogsList).toBe(animal.animal)
})
it('assigning dogRandomImage', () => {
  const state = {
    dogRandomImage: []
  }
  const animal = { animal: [{ animal: 1 }, { animal: 2 }, { animal: 3 }] };
  store.mutations.SET_DOGRANDOMIMAGE(state, animal.animal)
  expect(state.dogRandomImage[0]).toBe(animal.animal)
})
it('assigning dogobject', () => {
  const state = {
    dogobject: {}
  }
  const animalobject = { animal: [{ animal: 1 }, { animal: 2 }, { animal: 3 }] };
  store.mutations.SET_DOGOBJECT(state, animalobject)
  expect(state.dogobject).toBe(animalobject)
})
it('assigning subBreedName', () => {
  const state = {
    subBreedName: ''
  }
  const subBreed = 'english';
  store.mutations.SET_SUBBREEDNAME(state, subBreed)
  expect(state.subBreedName).toBe(subBreed)
})
it('assigning dogName', () => {
  const state = {
    dogName: ''
  }
  const dog = 'english';
  store.mutations.SET_DOGNAME(state, dog)
  expect(state.dogName).toBe(dog)
})
it('getHomeDogRandomImage should commits animal data ', async () => {
  const commit = jest.fn();
  const animals = {
    data: {
      message: "https://images.dog.ceo/breeds/terrier-scottish/n02097298_2583.jpg"
    }
  }
  getHomeDogRandomImages.mockResolvedValue(animals);
  await store.actions.getHomeDogRandomImage(commit);
  expect(commit).toHaveBeenCalledWith('SET_HOMEDOGIMAGES', animals.data.message);
});
