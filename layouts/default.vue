<template>
  <HeaderBar></HeaderBar>
  <NuxtPage></NuxtPage>
</template>

<!-- // Dec Jan Feb = winter
// March April May = Spring
// June July August = Summer
// Sep Oct Nov = Fall


/* Spring */
/* MintyGreen:#AEEBB2 */
/* OliveGreen:#6D9277 */

/* Summer */
/* Lemon:#FBFFB1  */
/* Peach:#F3B657  */

/* Winter */
/* Ice:#C9FBFF */
/* Navy:#142161 */

/* Fall */
/* Brown:#613014 */
/* Huh:#ECD7A1  */ -->
<script setup>
const d = new Date();
let currentMonth = d.getMonth();
console.log(currentMonth);
const winterMonths = [12, 1, 2];
const springMonths = [3, 4, 5];
const summerMonths = [6, 7, 8];
const fallMonths = [9, 10, 11];
const winterTheme = {
  baseColor: '#C9FBFF',
  accentColor: '#142161'
};
const springTheme = {
  baseColor: '#6D9277',
  accentColor: '#AEEBB2'
};
const summerTheme = {
  baseColor: '--peach',
  accentColor: '--lemon'
};
const fallTheme = {
  baseColor: '#613014',
  accentColor: '#ECD7A1'
};
const months = [winterMonths, springMonths, summerMonths, fallMonths];
const themes = [winterTheme,springTheme,summerTheme,fallTheme];
const currentTheme = summerTheme
console.log(currentTheme.baseColor)
console.log(currentTheme.accentColor)





// console.log(currentTheme.baseColor)
</script>




<style scoped>
:root {
  --oliveGreen: #6d9277;
  --mintyGreen: #aeebb2;
  --lemon:#FBFFB1 ;
--peach:#F3B657;

--ice:#C9FBFF;
--navy:#142161;

/* Fall */
--brown:#613014;
--huh:#ECD7A1 ;

  /* --baseColor: var(--oliveGreen);
  --accentColor: var(--mintyGreen); */
  --baseColor: var(v-bind('currentTheme.baseColor'));
  --accentColor: var(v-bind('currentTheme.accentColor'));
  font-family: "Courier New", Courier, monospace;

  background-color: var(--baseColor);
  color: var(--accentColor);
}

.container {
  border-radius: 10px;
  align-self: center;
  text-align: center;
  background-color: var(--accentColor);
  color: var(--baseColor);
  margin: auto;
  width: auto;
  height: auto;
}
</style>
