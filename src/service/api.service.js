import axios from 'axios';

export function getAllDogImage(dogname, subbreedname) {
    if (subbreedname == undefined) {
        return axios.get(`https://dog.ceo/api/breed/${dogname}/images/random/54`);

    }
    else {
        return axios.get(`https://dog.ceo/api/breed/${dogname}/${subbreedname}/images/random/54`);
    }
}
export function getAllDogsList() {
    return axios.get('https://dog.ceo/api/breeds/list/all');
}
export function getDogRandomImage(dogname) {
    return axios.get(`https://dog.ceo/api/breed/${dogname}/images/random`);
}
export function getHomeDogRandomImages() {
    return axios.get(`https://dog.ceo/api/breeds/image/random/48`);
}