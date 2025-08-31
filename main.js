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
  "--eyeHover": "#138522ff",
  "--gitHover": "#5e0066",
  "--textColor": "black",
};

const darkColorPallet = {
  "--sidebarColor": "#222831",
  "--mainFraimColor": "#31363F",
  "--cardBG": "#76ABAE",
  "--btn": "#F87666",
  "--eyeHover": "#D0BCD5",
  "--gitHover": "#fdbe2aff",
  "--textColor": "white",
};
