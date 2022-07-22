<template>
<div id="app">
<HeaderBar></HeaderBar>
<NuxtPage></NuxtPage>

</div>
</template>

<script setup lang="ts">
let baseColor = getBaseColor();
let accentColor = getAccentColor();
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
}

@font-face {
  font-family: "VictorMono";
  src: url("../assets/VictorMono/VictorMono-Regular.ttf") format("truetype");
  font-size: 25px;

}

#app {
  font-family: "VictorMono";

  margin: 0%;
  min-height: 100vh;
  min-width: 100vh;
  background-color: v-bind(baseColor);
  color: v-bind(accentColor);
  background-size: 100%;
  text-align: center;
  border-width: 20px;
  border-color: v-bind(accentColor);
  
}

:any-link {
  color: v-bind(accentColor);
  font-weight: bold;
  text-decoration: underline;
  font-style: italic;
}
</style>
