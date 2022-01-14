<template>
  <div id="app">
    <upper-case msg="Convert Letters to Uppercase" />
  </div>
</template>

<script>
import upperCase from "./components/upperCase.vue";

export default {
  name: "App",
  components: {
    upperCase,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
