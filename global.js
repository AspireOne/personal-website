import "./components/navbar.js";
import "./components/footer.js";

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-BC5T4WK64W');

document.addEventListener("DOMContentLoaded", () => {
    AOS?.init();
});

/*const root = document.documentElement;
const themeProperties = ["--background-color", "--strong-color", "--text-color"];*/

/*function switchTheme() {
    const isDark = root.style.getPropertyValue("--background-color") === root.style.getPropertyValue("--background-color-dark");
    const suffix = isDark ? "-light" : "-dark";
    themeProperties.forEach(property => root.style.setProperty(property, "var(" + property + suffix + ")"));
}*/