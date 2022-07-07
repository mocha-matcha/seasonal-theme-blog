<template>
  <div :class="theme">
    <HeaderBar></HeaderBar>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      theme: 'theme',
    };
  },
  methods: {
    checkSeasonTheme()  {
      let winterMonths = [12, 1, 2];
      let springMonths = [3, 4, 5];
      let summerMonths = [6, 7, 8];
      let fallMonths = [9, 10, 11];

      let months = [winterMonths, springMonths, summerMonths, fallMonths];

      let themes = ["winterTheme", "springTheme", "summerTheme", "fallTheme"];

      let currentMonth = new Date().getMonth();
      // let currentMonth = 10;

      console.log("currentMonth is " + currentMonth);

      for (let currentMonths in months) {
        let seasonCanidate = months[currentMonths];
        console.log("The season canidate are months " + seasonCanidate);

        for (let currentM in months[currentMonths]) {
          let monthCanidate = months[currentMonths][currentM];
          console.log("the month canidate is " + monthCanidate);

          if (currentMonth == monthCanidate) {
            console.log(
              "There is a check!" +
                "The season is placed in value " +
                currentMonths
            );
            console.log(themes[currentMonths]);
            return themes[currentMonths];
          }
        }
      }
    },
  },
  mounted() {
    const seasonTheme = this.checkSeasonTheme();
    this.theme = seasonTheme;
    console.log(this.theme)
  }
};
</script>

<style lang="scss">

$baseColor:black;
$accentColor:white;
:root
{  overflow: hidden;
  height: 100vh;
  width: 100vw;


}
:any-link
{

  font-weight: bold;
  text-decoration: underline;
  font-style: italic;
  color: $baseColor;
}
.theme{
  background-color: $baseColor;
  color: $accentColor;
  overflow: hidden;
}
.winterTheme {
  $baseColor: blue;
  $accentColor: lightBlue;
  background-color: $baseColor;
  color: $accentColor;
}

.summerTheme {
  
  $baseColor: yellow;
  $accentColor: rgb(255, 169, 10);
  background-color: $baseColor;
  color: $accentColor;

}

.fallTheme {
  $baseColor: brown;
  $accentColor: bisque;
    background-color: $baseColor;
  color: $accentColor;
}

.springTheme {
  $baseColor: green;
  $accentColor: lightGreen;
    background-color: $baseColor;
  color: $accentColor;
}

.container
{

  border-radius: 25px;
  background-color: $accentColor;
  color: $baseColor;

}

</style>
