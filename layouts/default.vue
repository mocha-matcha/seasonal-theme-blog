<template>
  <HeaderBar></HeaderBar>
  <NuxtPage></NuxtPage>
</template>

<!-- Change colors based on the seasons -->
<!-- green for spring
yellow for summer
blue for winter
brown for fall -->
<style>
/* MintyGreen:#AEEBB2 */
/* OliveGreen:#6D9277 */

:root {
  --oliveGreen: #6d9277;
  --mintyGreen: #aeebb2;
  --baseColor: var(--oliveGreen);
  --accentColor: var(--mintyGreen);
  font-family: "Courier New", Courier, monospace;
  background-color: var(--baseColor);
  color: var(--accentColor);
}

.container {
  align-self: center;
  text-align: justify;
  background-color: var(--accentColor);
  color: var(--baseColor);
  margin: auto;
}
</style>
