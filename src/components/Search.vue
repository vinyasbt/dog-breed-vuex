<template>
  <div class="search">
    <label class="label">Search Breed</label>
    <select v-model="searchData" id="dogs">
      <option
        v-for="(dog, index) in $store.state.dogsList"
        :key="index"
        :value="dog"
      >
        {{ dog }}
      </option>
    </select>
    <div v-if="subBreed.length > 0">
      <br />
      <label class="label">please select sub breed of {{ searchData }}</label>
      <select v-model="subBreedName">
        <option v-for="(subdog, index) in subBreed" :key="index">
          {{ subdog }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      searchData: "",
      subBreed: [],
      subBreedName: "",
    };
  },
  watch: {
    searchData() {
      console.log(this.searchData);
      if (this.$store.state.dogobject[this.searchData].length > 0) {
        this.subBreed = this.$store.state.dogobject[this.searchData];
      } else {
        this.$router.push({ name: "About", params: { name: this.searchData } });
      }
    },
    subBreedName() {
        this.$router.push({
          name: "About",
          params: { name: this.searchData, subbreedname: this.subBreedName },
        });
    },
  },
};
</script>
<style scoped>
.search {
  background-color: blue;
}
.label {
  color: lightblue;
  font-size: 20px;
}
</style>