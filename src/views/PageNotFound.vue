<template>
    <div>
<div class="jumbotron">
  <h1 class="display-4">404 Error Found</h1>
  <p class="lead">Please enter valid URL</p>
  <hr class="my-4">
  <p>click on Home to redirect to <strong>PUP</strong> store</p>
  <button class="btn btn-primary btn-lg" @click="goHome()">Home</button>
</div>
    </div>
</template>

<script>
    export default {
        name:'PageNotFound',
        methods:{
            goHome(){
                this.$router.push('/');
            }
        }
    }
</script>

<style  scoped>

</style>