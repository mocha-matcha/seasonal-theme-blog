

<template>
    <div class="outer">

        <div class="inner">
            <NuxtLink to= {{path}}  >story-home</NuxtLink>
        </div>

    </div>


</template>




<script>
props:{path:String}


methods:
{


}
</script>


<style>
.outer {
    text-align: center;
    color: aqua;

}
</style>