import axios from 'axios';

export function getAllDogImage(dogname,subbreedname){
    if(subbreedname==undefined)
    {
    return axios.get(`https://dog.ceo/api/breed/${dogname}/images/random/18`);
    
    }
    else{
        return axios.get(`https://dog.ceo/api/breed/${dogname}/${subbreedname}/images/random/18`);
    }
}
