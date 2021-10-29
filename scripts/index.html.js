document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousemove", (e) => document.getElementById("title").style.transform = "rotate(" + e.movementX * 0.1 + "deg)");
    document.addEventListener("visibilitychange", () => document.getElementById("title").style.transform = "rotate(0deg)");

    Array.from(document.getElementsByClassName("header-link")).forEach((link) => {
        link.addEventListener("mouseover", (e) => {
            const description = link.querySelector(".description").innerHTML;
            document.getElementById("header-description-box").innerHTML = description;
        })
    });
});