const themeIcon = document.querySelector(".theme_button > img");
const themeButton = document.querySelector(".theme_button");
const leftSide = document.querySelector(".left_side");
const upperText = document.querySelector(".upper_text");
const formContainer = document.querySelector(".form_container");
const footer = document.querySelector(".right_side > div:last-child");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const inputs = document.querySelectorAll("input");
const errorFirstName = document.querySelector(".error_first_name");
const errorLastName = document.querySelector(".error_last_name");
const errorEmail = document.querySelector(".error_email");
const errorPhoneNumber = document.querySelector(".error_phone_number");
const errorPassword = document.querySelector(".error_password");
const errorConfirmPassword = document.querySelector(".error_confirm_password");
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let darkModeEnabled = false;
if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode();
}
function darkMode() {
    themeIcon.src = "images/dark_mode.svg";
    document.documentElement.style.cssText = "--text-color-1: white;" +
    "--text-color-2: red;" +
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
    document.documentElement.style.cssText = "--text-color-1: black;" +
    "--text-color-2: #da1b2a;" +
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
inputs.forEach(function(element) {
    element.addEventListener("focusout", function() {
        const code = `${this.id}Validation()`;
        const F = new Function(code);
        F();
    })
}
);
inputs.forEach(function(element) {
    element.addEventListener("input", function() {
        const code = `${this.id}Validation()`;
        const F = new Function(code);
        F();
    })
}
);
function first_nameValidation() {
    if(firstName.value === ""){
    errorFirstName.textContent = "* Required";
    } else {
        errorFirstName.textContent = "";
    }
}
function last_nameValidation() {
    if(lastName.value === ""){
    errorLastName.textContent = "* Required";
    } else {
        errorLastName.textContent = "";
    }
}
function emailValidation() {
    if(email.value === "") {
        errorEmail.textContent = "* Requird";
    } else if(!emailRegex.test(email.value)) {
        errorEmail.textContent = "Email not valid";
    } else {
        errorEmail.textContent = "";
    }
}