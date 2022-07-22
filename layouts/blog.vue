<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <div class="flex" id="post">
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>

<script setup>



let baseColor = getBaseColor();
let accentColor = getAccentColor();


</script>
<!-- pull from default layout colors. -->
<style>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
}

#app {
  min-height: 100vh;
  min-width: 100vw;
  color: v-bind(accentColor);
  background-color: v-bind(baseColor);
  background-size: 100%;
}

/* center div like a tru 100000x dev later. */
#post {
  background-color: v-bind(accentColor);
  color: v-bind(baseColor);
  min-height: 75vh;
  max-width: 60vh;
  min-width: max-content;
  max-height: 100vh;
  display: flex;
  align-self: center;

  margin: auto;
  margin-top: 5%;
}
</style>
