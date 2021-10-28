import Parallax from "./parallax.js";
const root = document.documentElement;
const themeProperties = ["--background-color", "--strong-color", "--text-color"];

document.addEventListener("DOMContentLoaded", () => {
    //new Parallax(document.getElementsByTagName("h1")[0], 4, 0).makeParallaxed();
    //document.getElementById("theme-changer-button").addEventListener("click", () => switchTheme());
    document.addEventListener("mousemove",
        (e) => document.getElementById("title").style.transform = "rotate(" + e.movementX * 0.1 + "deg)");

    document.addEventListener("visibilitychange", () => document.getElementById("title").style.transform = "rotate(0deg)");

    Array.from(document.getElementsByClassName("age-placeholder")).forEach((element) => element.innerHTML = getMyAge().years);
    Array.from(document.getElementsByClassName("header-link")).forEach((link) => {
        link.addEventListener("mouseover", (e) => {
            const description = link.querySelector(".description").innerHTML;
            document.getElementById("header-description-box").innerHTML = description;
        })
    });
});

function switchTheme() {
    const isDark = root.style.getPropertyValue("--background-color") === root.style.getPropertyValue("--background-color-dark");
    const suffix = isDark ? "-light" : "-dark";
    themeProperties.forEach(property => root.style.setProperty(property, "var(" + property + suffix + ")"));
}

function getMyAge() {
    const birthTimestamp = 1102287603 * 1000;
    const birth = new Date(birthTimestamp);
    const timeSinceBirthMs = Date.now() - birth.getTime();
    const timeSinceBirth = new Date(timeSinceBirthMs);

    const years = Math.abs(timeSinceBirth.getUTCFullYear() - 1970);
    const months = Math.abs(timeSinceBirth.getUTCMonth());

    return {years: years, months: months};
}