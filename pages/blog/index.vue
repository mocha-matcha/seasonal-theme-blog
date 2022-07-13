<template>
  <!-- <ContentList path="/blog" v-slot="{ list }" query="{{q}}">
<div v-for="article in list" :key="article._path">

<NuxtLink :to="article._path">{{article.title}}</NuxtLink>
<p>
    {{article.description}}
</p>

</div>
</ContentList> -->

  <li v-for="article of articles" :key="article._slug">
    <NuxtLink :to="article._path"> <h1>{{article.title}}</h1> </NuxtLink>
    
  </li>
</template>

<script setup lang="ts">
const { path } = useRoute();
// const q = await queryContent('/blog').where({title:{$ne:'Home'}}).limit(10).find();
const articles = await queryContent("/blog")
  .where({ title: { $ne: "Home" } })
  .limit(10)
  .find();
console.log(articles);
</script>
