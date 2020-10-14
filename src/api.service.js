import axios from 'axios';

export function getAllDogImage(dogname, subbreedname) {
    if (subbreedname == undefined) {
        return axios.get(`https://dog.ceo/api/breed/${dogname}/images/random/18`);

    }
    else {
        return axios.get(`https://dog.ceo/api/breed/${dogname}/${subbreedname}/images/random/18`);
    }
}
export function getAllDogsList() {
    return axios.get('https://dog.ceo/api/breeds/list/all');
}
export function getDogRandomImage(dogname) {
    return axios.get(`https://dog.ceo/api/breed/${dogname}/images/random`);
}
export function getHomeDogRandomImage() {
    return axios.get(`https://dog.ceo/api/breeds/image/random/48`);
}