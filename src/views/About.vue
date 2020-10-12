<template>
  <div class="about">
    
    <table>
      <h2 class="label"><i>All Images of {{dogName}} {{dogSubBreedName}}</i></h2>
      <tr v-for="(dog,index) in dogImage" :key="index" class="grid">
        <img :src="dog" class="dogimage"/>
      </tr>
    </table>
  <span v-if="dogImage.length>=18">
  <button class="btn btn-primary" @click="getDogRandomImage()">Show More</button>
  </span>
  <span>
    <button class="btn btn-secondary" @click="goHome()">Home</button>
  </span>
  <span v-if="dogImage.length>=36">
    <button class="btn btn-primary" @click="showLess()">Show Less</button>
  </span>
  </div>
</template>
<script>
import {getAllDogImage} from '../api.service.js'
export default {
  name:"About",
  data(){
    return{
      dogName:this.$route.params.name,
      dogSubBreedName:this.$route.params.subbreedname,
      dogAllImageArray:[],
      dogImage:[],
      index:0
    }
  },
  methods:{
   getDogRandomImage(){
     getAllDogImage(this.dogName,this.dogSubBreedName).then(res=>{
  this.dogAllImageArray=res.data.message;
  this.dogImage=[...this.dogImage,...this.dogAllImageArray];
  
  this.index+=18;
})
   },
   showLess(){
     this.dogImage=[...this.dogImage.slice(0,this.index)]
     this.index-=18;
     
   },
   goHome(){
     this.$router.push('/');
   }
  },
  
  created(){
    
this.getDogRandomImage();
  }
  
}
</script>
<style scoped>
.grid{
  width: 300px;
  border-radius: 50%;
  border:1px solid #f1f1f1;
  margin:50px;
  float: left;
  height: 350px;
  
}
.dogimage{
  width:300px;
  height:350px;
  border-radius: 50%;
  border:5px solid #c4f37a;
}
.about{
  background-color: black;
  
}
.label{
    color: lightcyan 
    /* margin-top: -50px; */
}
.grid:hover {
  transform: scale(1.5); 
}
</style>