//variables
const preloder = document.querySelector("#preloder");
const fontSize = document.querySelector(".nav #fontsize");
const theme = document.querySelector(".nav #theme");
const content = document.querySelector(".content");
const btn = document.querySelector("#btn");

//add event litsener
window.addEventListener("load", () => {
    preloder.style.display = "none";
});
fontSize.addEventListener('change', (event) => {
    event.preventDefault();
    fontResize = event.target.value;
    content.style.fontSize = fontResize;
    localStorage.setItem("fontsize", fontResize);
});
theme.addEventListener('change', (event) => {
    event.preventDefault();
    themeResize = event.target.value;
    content.style.backgroundColor = themeResize;
    localStorage.setItem("theme", themeResize);

});


const storeValue = () => {
    const storeValueFont = localStorage.getItem("fontsize");
    const storeValueTheme = localStorage.getItem("theme");
    if (storeValueFont && storeValueTheme) {
        fontSize.value = storeValueFont;
        theme.value = storeValueTheme;
        content.style.fontSize = storeValueFont;
        content.style.backgroundColor = storeValueTheme;
    } else if (!storeValueFont && !storeValueTheme) {
        fontSize.value = "15px";
        theme.value = "white";
        content.style.fontSize = "15px";
        content.style.backgroundColor = "white";
    }
};

btn.addEventListener("click", () => {
    localStorage.removeItem("fontsize");
    localStorage.removeItem("theme");
});

storeValue();