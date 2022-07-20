<template>

<div>
<li v-for="article of articles" :key="article._slug">
    <NuxtLink :to="article._path"> <h1>{{article.title}}</h1> </NuxtLink>
    
  </li>
</div>





</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

// Find what doesnt have the home tag
const articles = await queryContent('/blog').where({tags:{$containsAny:['blog']}}).limit(20).find();

</script>
