const themeSwitcherButton = document.getElementById("theme-switcher-button");
themeSwitcherButton.textContent = "Switch Theme";
const themes = [
  { name: "light", message: "Light msg" },
  { name: "dark", message: "Dark msg" },
  { name: "ocean", message: "Ocean msg" },
  { name: "nord", message: "Nord msg" },
];
const themeItems = document.querySelectorAll("li");
const liveRegion = document.querySelector('[aria-live="polite"]');
themeSwitcherButton.addEventListener("click", () => {
  dropdown.hidden = !dropdown.hidden;
  themeSwitcherButton.setAttribute("aria-expanded", !dropdown.hidden);
});

themeItems.forEach((item) => {
  item.addEventListener("click", () => {
    const themeName = item.id.replace("theme-", "");
    document.body.className = "";
    document.body.classList.add(`theme-${themeName}`);

    const selectedTheme = themes.find((theme) => theme.name === themeName);
    liveRegion.textContent = selectedTheme.message;

    dropdown.hidden = true;
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  });
});
