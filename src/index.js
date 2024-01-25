import Tooltip from "./ui-config/tooltip";
import Dropdown from "./ui-config/dropdown";

// create tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));

tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
    const instance = new Dropdown(dropdown);
    instance.init();
});
