const baseColors= ["#0000ff", "#008000", "#DBD88A", "#a52a2a"];

const accentColors= ["#add8e6", "#90ee90", "#644C8F", "#ffe4c4"];
let baseColor = "color";
let accentColor = "color";
function checkSeasonTheme() {
  let winterMonths = [12, 1, 2];
  let springMonths = [3, 4, 5];
  let summerMonths = [6, 7, 8];
  let fallMonths = [9, 10, 11];

  let months = [winterMonths, springMonths, summerMonths, fallMonths];

  let themes = ["winterTheme", "springTheme", "summerTheme", "fallTheme"];

  const baseColor = "";
  const accentColor = "";

  let currentMonth = new Date().getMonth();
  // let currentMonth = 1;

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
}
function applyTheme(theme: string) {
  switch (theme) {
    case "winterTheme":
      baseColor = baseColors[0];
      accentColor = accentColors[0];
      break;

    case "springTheme":
      baseColor = baseColors[1];
      accentColor = accentColors[1];

      break;
    case "summerTheme":
      baseColor = baseColors[2];
      accentColor = accentColors[2];

      break;
    case "fallTheme":
      baseColor = baseColors[3];
      accentColor = accentColors[3];

      break;
  }
}

function getBaseColor()
{
applyTheme(checkSeasonTheme());
return baseColor;
}

function getAccentColor()
{
  applyTheme(checkSeasonTheme());

  return accentColor;
}

export {checkSeasonTheme,applyTheme,getBaseColor,getAccentColor}
