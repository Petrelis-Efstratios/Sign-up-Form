const themeIcon = document.querySelector(".theme_button > img");
const themeButton = document.querySelector(".theme_button");
const leftSide = document.querySelector(".left_side");
const upperText = document.querySelector(".upper_text");
const formContainer = document.querySelector(".form_container");
const footer = document.querySelector(".right_side > div:last-child");
let darkModeEnabled = false;
if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode();
}
function darkMode() {
    themeIcon.src = "images/dark_mode.svg";
    document.documentElement.style.cssText = "--text-color: white;" +
    "--background-color-1: #2a040e;" +
    "--background-color-2: #4d0719;" +
    "--shadow-1: rgba(180, 180, 180, 0.3);" +
    "--shadow-2: white;" +
    "--border-1: black;" +
    "--border-2: #ced6e9;";
    darkModeEnabled = true
}
function lightMode() {
    themeIcon.src = "images/light_mode.svg";
    document.documentElement.style.cssText = "--text-color: black;" +
    "--background-color-1 = #f9fafb" +
    "--background-color-2: white;" +
    "--shadow-1: rgb(180, 180, 180);" +
    "--shadow-2: grey;" +
    "--border-1: #E5E7EB;" +
    "--border-2: black;";
    darkModeEnabled = false;
}
themeButton.addEventListener("click", function() {
    switch(darkModeEnabled) {
        case true:
            lightMode();
            break;
        default:
            darkMode();
    }
})
addEventListener("resize", resize);
function resize() {
    leftSide.style.height = `${upperText.clientHeight + formContainer.clientHeight + footer.clientHeight}px`;
}
resize();