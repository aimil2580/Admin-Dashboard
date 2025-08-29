const themeSwitch = document.querySelector(".themeSwitch");
themeSwitch.addEventListener("click", () => {
  if (
    getComputedStyle(document.documentElement).getPropertyValue("--cardBG") ===
    "#446458"
  ) {
    for (key in darkColorPallet) {
      document.documentElement.style.setProperty(
        `${key}`,
        `${darkColorPallet[key]}`
      );
    }
  } else {
    for (key in lightColorPallet) {
      document.documentElement.style.setProperty(
        `${key}`,
        `${lightColorPallet[key]}`
      );
    }
  }
});

const lightColorPallet = {
  "--sidebarColor": "#bec5ad",
  "--mainFraimColor": "#a4b494",
  "--cardBG": "#446458",
  "--btn": "#bec5ad",
  "--eyeHover": "#95d5b2",
  "--gitHover": "#52b69a",
};

const darkColorPallet = {
  "--sidebarColor": "#23465cff",
  "--mainFraimColor": "#425d5fff",
  "--cardBG": "#8dab7f",
  "--btn": "#435037ff",
  "--eyeHover": "#cfee9e",
  "--gitHover": "#926c15",
};
