document.getElementById("three-lines").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("collapsed");
});

const title01 = document.getElementById("nav-title-01")
const items01 = document.getElementById("items-01")

document.addEventListener("DOMContentLoaded", () => {
    items01.style.display = "none"
    items02.style.display = "none"
})

title01.addEventListener("click", () => {
    if (items01.style.display == "none") {
        items01.style.display = "flex"
    }
    else {
        items01.style.display = "none"
    }
});

window.addEventListener("click", (event) => {
    if (event.target !== items01 && event.target !== title01) {
        items01.style.display = "none";
    }
});

const title02 = document.getElementById("nav-title-02")
const items02 = document.getElementById("items-02")
title02.addEventListener("click", () => {
    if (items02.style.display == "none") {
        items02.style.display = "flex"
    }
    else {
        items02.style.display = "none"
    }
});

window.addEventListener("click", (event) => {
    if (event.target !== items02 && event.target !== title02) {
        items02.style.display = "none";
    }
});