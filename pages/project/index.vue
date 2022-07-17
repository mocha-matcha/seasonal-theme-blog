
<script setup>
const articles = await queryContent('/project').where({tags:{$contains:['home']}}).find() ;
</script>




<template>
<div>
<li v-for="article in articles" :key="article._slug">
<NuxtLink :to="article._path"><h1>{{article.title}}</h1></NuxtLink>
<p>{{article.description}}</p>
</li>
</div>
</template>

