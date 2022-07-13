<template>

<li v-for="article in articles" :key="article._slug">
<NuxtLink :to="article._path"><h1>{{article.title}}</h1></NuxtLink>
<p>{{article.description}}</p>
</li>

</template>

<script>
const articles = await queryContent("/project").where({title:{$eq:'Home'}}).find()
console.log(articles)
</script>