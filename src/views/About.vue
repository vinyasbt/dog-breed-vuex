<template>
  <div class="about">
    <table>
      <h2 class="label">
        All Images of {{ dogName }} {{ dogSubBreedName }}
      </h2>
      <div class="col-md-12">
        <tr v-for="(dog, index) in dogAllImageArray" :key="index" class="grid">
          <img :src="dog" class="dogimage" />
        </tr>
      </div>
    </table>
    <span>
      <button class="btn btn-secondary" @click="goHome()">Home</button>
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
      dogAllImageArray: []
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
  border-radius: 50%;
  border: 1px solid #f1f1f1;
  margin: 50px;
  float: left;
  height: 350px;
}
.dogimage {
  width: 300px;
  height: 350px;
  border-radius: 50%;
  border: 5px solid #c4f37a;
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