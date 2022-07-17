<template>
<div id="app">
<HeaderBar></HeaderBar>
<slot></slot>

</div>
</template>

<script lang="ts">
export default {
  name: "App",
  data() {
    return {
      theme: "theme",
      baseColor: "#0000ff",
      accentColor: "#add8e6",
      // winter spring summer fall
      baseColors: ["#0000ff", "#008000", "#ffff00", "#a52a2a"],

      accentColors: ["#add8e6", "#90ee90", "#e2caea", "#ffe4c4"],
    };
  },
  methods: {
    checkSeasonTheme() {
      let winterMonths = [12, 1, 2];
      let springMonths = [3, 4, 5];
      let summerMonths = [6, 7, 8];
      let fallMonths = [9, 10, 11];

      let months = [winterMonths, springMonths, summerMonths, fallMonths];

      let themes = ["winterTheme", "springTheme", "summerTheme", "fallTheme"];

      const baseColor = "";
      const accentColor = "";

      let currentMonth = new Date().getMonth();
      // let currentMonth = 10;

      // console.log("currentMonth is " + currentMonth);

      for (let currentMonths in months) {
        let seasonCanidate = months[currentMonths];
        // console.log("The season canidate are months " + seasonCanidate);

        for (let currentM in months[currentMonths]) {
          let monthCanidate = months[currentMonths][currentM];
          // console.log("the month canidate is " + monthCanidate);

          if (currentMonth == monthCanidate) {
            // console.log(
            //   "There is a check!" +
            //     "The season is placed in value " +
            //     currentMonths
            // );
            // console.log(themes[currentMonths]);
            return themes[currentMonths];
          }
        }
      }
    },
    applyTheme(theme: string) {
      switch (theme) {
        case "winterTheme":
          this.baseColor = this.baseColors[0];
          this.accentColor = this.accentColors[0];
          break;

        case "springTheme":
          this.baseColor = this.baseColors[1];
          this.accentColor = this.accentColors[1];

          break;
        case "summerTheme":
          this.baseColor = this.baseColors[2];
          this.accentColor = this.accentColors[2];

          break;
        case "fallTheme":
          this.baseColor = this.baseColors[3];
          this.accentColor = this.accentColors[3];

          break;
      }
      // console.log("finished applying new base and accent variables");
    },
  },

  mounted() {
    const seasonTheme = this.checkSeasonTheme();
    this.theme = seasonTheme;
    // console.log(this.theme);
    this.applyTheme(this.theme);
    // console.log(this.baseColor);
    // console.log(this.accentColor);
  },
};
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
}

@font-face {
  font-family: "VictorMono";
  src: url("../assets/VictorMono/VictorMono-Regular.ttf") format("truetype");
  font-size: 20px;
}

#app {
  font-family: "VictorMono";

  margin: 0%;
  min-height: 100vh;
  min-width: 100vh;
  background-color: v-bind(baseColor);
  color: v-bind(accentColor);
  background-size: 100%;
}

:any-link {
  color: v-bind(accentColor);
  font-weight: bold;
  text-decoration: underline;
  font-style: italic;
}
</style>
