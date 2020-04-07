<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Linux World | عالم لِينُكس"/>

    <ul>
      <li><router-link to="/"> Home Page </router-link></li>
      <li><router-link :to="{name: 'About'}">About</router-link></li>
    </ul>
     
    <router-view></router-view> 
    
  </div>
   
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
