<template>
  <div class="home">
    <Header />
    <Search />
    <b-container fluid>
    <b-row >
    <b-col md="2"  class="aside">
      <h3>Dog Breed </h3>
      <div v-for="(dog, index) in $store.state.dogsList" :key="index" >
      <a href="" @click.prevent="dogInfo(dog)">
              {{ dog }}
              <br />
              <img
                :src="$store.state.dogRandomImage[index]"
                class="asidephoto"
              />
            </a>
      </div>
      </b-col>
      <b-col md="10" class="dark" >
        <div v-if="subBreed.length > 0">
            <br />
            <label class="label">
              please select sub breed of {{ dogName }}
            </label>
            <select v-model="subBreedName">
              <option v-for="(subdog, index) in subBreed" :key="index">
                {{ subdog }}
              </option>
            </select>
          </div>
        <div v-for="(image, index) in $store.state.homeDogImages"
            :key="index"
            class="grid">
          <img :src="image" class="dogimage" />
        </div>
      </b-col>
    </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  data() {
    return {
      subBreed: [],
      subBreedName: "",
      dogName: "",
    };
  },
  created() {
    this.$store.dispatch("getHomeDogRandomImage");
    this.$store.dispatch("getAllDogsList");
  },
  components: {
    Search,
    Header,
    Footer,
  },
  methods: {
    dogInfo(data) {
      console.log(data);
      this.dogName = data;
      if (this.$store.state.dogobject[this.dogName].length > 0) {
        this.subBreed = this.$store.state.dogobject[this.dogName];
      } else {
        this.$router.push({ name: "About", params: { name: data } });
      }
    },
  },
  watch: {
    subBreedName() {
      this.$router.push({
        name: "About",
        params: { name: this.dogName, subbreedname: this.subBreedName },
      });
    },
  },
};
</script>
<style scoped>
.aside {
  background-color: black;
}
.grid {
  border-radius: 50%;
  margin: 55px;
  float: left;
}
.dogimage {
  width: 170px;
  height: 235px;
  border-radius: 50%;
}
.label {
  color: lightskyblue;
  font-size: 20px;
}
.asidephoto {
  width: 40px;
  height: 25px;
  border-radius: 50%;
}
.dogimage:hover {
  transform: scale(1.5);
}
.title {
  color: aliceblue;
}
.dark{
  background-color: black;
}
h3{
  color: aliceblue;
}
</style>
