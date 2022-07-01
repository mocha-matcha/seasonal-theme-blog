<template>
<article>

    <NuxtContent :document="article"></NuxtContent>
</article>

</template>


<script>
// using nuxtcontent example. add type check later
  export default {
    async asyncData({ $content, params }) {
      // fetch our article here
      const article = await $content('articles',params.slug).fetch()
      return{article}

    }
  }
</script>