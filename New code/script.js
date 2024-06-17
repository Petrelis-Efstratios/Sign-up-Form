const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");
button.addEventListener("click", function() {
    const empty = []; 
    let i = 0;
    inputs.forEach((e) => {
        document.querySelector(`#${e.id} + p`).textContent = "";
        e.style.border = "max(0.2vh, 1px) solid #E5E7EB";
        if(e.value === "") {
            empty.push(i);
        }
        i++;
    })
    for(i in empty) {
        inputs[empty[i]].style.border = "max(0.2vh, 1px) solid #bc2727";
        document.querySelector(`#${inputs[empty[i]].id} + p`).textContent = "* Required";
    }
    if(inputs[2].value.toLocaleUpperCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null) {
        document.querySelector(`#${inputs[2].id} + p`).textContent = "* Email not valid";
        inputs[2].style.border = "max(0.2vh, 1px) solid #bc2727";
    }
    if(inputs[3].value.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/) === null) {
        document.querySelector(`#${inputs[3].id} + p`).textContent = "* Phone number not valid";
        inputs[3].style.border = "max(0.2vh, 1px) solid #bc2727";
    }
    if(inputs[4].value !== inputs[5].value && inputs[5].value !== "") {
        inputs[4].style.border = "max(0.2vh, 1px) solid #bc2727";
        inputs[5].style.border = "max(0.2vh, 1px) solid #bc2727";
        document.querySelector(`#${inputs[4].id} + p`).textContent = "* Passwords do not match";
    }
})
inputs.forEach(input => input.addEventListener("focus", function() {
    input.style.border = "1px solid #1d4ed8";
}))
inputs.forEach(input => input.addEventListener("focusout", function() {
    if(input.value === "") {
        input.style.border = "1px solid #b91c1c";
    } else {
        input.style.border = "1px solid #E5E7EB";
        document.querySelector("input + p").textContent = "";
    }
}))
