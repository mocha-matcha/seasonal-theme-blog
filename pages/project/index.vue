
<script setup>
const articles = await queryContent('/project').where({tags:{$contains:['home']}}).find() ;
let baseColor = getBaseColor();
let accentColor = getAccentColor();
</script>




<template>
<div>
<li v-for="article in articles" :key="article._slug">
<NuxtLink :to="article._path"><h1>{{article.title}}</h1></NuxtLink>
<p>{{article.description}}</p>
</li>
</div>
</template>



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