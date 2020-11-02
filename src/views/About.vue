<template>
  <div class="about">
    <b-container >
          <h2 class="label">All Images of {{ dogName }} {{ dogSubBreedName }}</h2>
           <b-row>
           <b-col md="4" lg="3" sm="4" v-for="(dog, index) in dogAllImageArray" :key="index" class="grid"  >
              <img :src="dog" class="dogimage" />
           </b-col>
           </b-row>
    </b-container>
    <span>
      <button id="goHome" class="btn btn-primary btn-lg" @click="goHome()">
        Home
      </button>
    </span>
  </div>
</template>
<script>
import { getAllDogImage } from "../service/api.service.js";
export default {
  name: "About",
  data() {
    return {
      dogName: this.$route.params.name,
      dogSubBreedName: this.$route.params.subbreedname,
      dogAllImageArray: [],
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
  created() {
    getAllDogImage(this.dogName, this.dogSubBreedName).then((res) => {
      this.dogAllImageArray = res.data.message;
    });
  },
};
</script>
<style scoped>
.grid {
  width: 300px;
  float: left;
  height: 300px;
}
.dogimage {
  width: 80%;
  height: 80%;
  border-radius: 50%;
  border: 5px solid #c4f37a;
  object-fit: cover
}
.about {
  background-color: black;
}
.label {
  color: lightcyan;
}
.grid:hover {
  transform: scale(1.5);
}
</style>