<template>
  <div :style="userStyle">
    <HeaderBar></HeaderBar>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script lang="ts"> 
export default {
  name: "App",
  data() {
    return {
      theme: 'theme',
      baseColor:"#0000ff",
      accentColor:"#add8e6"
    };
  }
  ,
  methods: {
    checkSeasonTheme()  {
      let winterMonths = [12, 1, 2];
      let springMonths = [3, 4, 5];
      let summerMonths = [6, 7, 8];
      let fallMonths = [9, 10, 11];

      let months = [winterMonths, springMonths, summerMonths, fallMonths];

      let themes = ["winterTheme", "springTheme", "summerTheme", "fallTheme"];

      const baseColors = ["#0000ff","#008000","#ffff00","#a52a2a"];

      const accentColors = ["#add8e6","#90ee90","#ffa90a","#ffe4c4"];

      const baseColor = "";
      const accentColor = "";

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
}
</script>

<style lang="scss">

$baseColor:black;
$accentColor:white;

@font-face
{
  font-family:"VictorMono";
  src:url("../assets/VictorMono/VictorMono-Regular.ttf") format('truetype');

}

:root
{  overflow: hidden;
font-family: "VictorMono";
font-size: 20px;
color: var(baseColor);
background-color: var(accentColor);
}
:any-link
{

  font-weight: bold;
  text-decoration: underline;
  font-style: italic;
  color: $baseColor;
}


</style>
