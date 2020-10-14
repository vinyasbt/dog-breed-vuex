<template>
  <div>
    <Header />
    <Search />
    <div class="row">
      <div class="col-3 sm">
        <div class="aside">
          <h2 class="title"><i>Dog Breeds</i></h2>
          <ul v-for="(dog, index) in $store.state.dogsList" :key="index">
            <a href="" @click.prevent="dogInfo(dog)" class="dogname">
              {{ dog }}
              <img
                :src="$store.state.dogRandomImage[index]"
                class="asidephoto"
              />
            </a>
          </ul>
        </div>
      </div>
      <div class="col-9 sm">
        <table class="photo">
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
          <tr
            v-for="(image, index) in $store.state.homeDogImages"
            :key="index"
            class="grid"
          >
            <img :src="image" class="dogimage" />
          </tr>
        </table>
      </div>
    </div>
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
      this.dogName = data;
      if (this.$store.state.dogobject[data].length > 0) {
        this.subBreed = this.$store.state.dogobject[data];
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
  margin-right: auto;
  background-color: black;
}
.grid {
  width: 150px;
  border-radius: 50%;
  margin: 45px;
  float: left;
  height: 235px;
}
.dogimage {
  width: 200px;
  height: 235px;
  border-radius: 50%;
}
.label {
  color: darkblue;
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
.dogname {
  margin-left: -40px;
}
</style>
