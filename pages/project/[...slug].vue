<template>
<div id="app">
    <ContentDoc></ContentDoc>

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

</style>