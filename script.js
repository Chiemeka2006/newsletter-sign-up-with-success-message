let emailField = document.querySelector("#email-field");
let errorMessage = document.querySelector(".error-msg");
let submit = document.querySelector("#submit");
let formFill = document.querySelector(".form-start");
let success = document.querySelector(".success");
let dismiss = document.querySelector("#dismiss");
let emailSuccess = document.querySelector(".email-success");

function formValidation() {
    if (
        !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
    ) {
        errorMessage.innerHTML = "Valid email required";
        emailField.style.borderColor = "tomato";
        emailField.style.backgroundColor = "hsla(4, 100%, 67%, 0.252)";
        emailField.style.color = "tomato";
    } else {
        errorMessage.innerHTML = "";
        //  errorMessage.style.color = 'green'
        emailField.style.borderColor = "green";
        emailField.style.backgroundColor = "rgba(0, 128, 0, 0.252)";
        emailField.style.color = "green";
    }
}

emailField.addEventListener("keypress", (event) => {
    if ((event.key == "Enter") & (emailField.style.borderColor == "green")) {
        formFill.style.display = "none";
        success.style.display = "flex";
        emailSuccess.innerHTML = emailField.value;
    }
});

submit.addEventListener("click", () => {
    if (emailField.style.borderColor == "green") {
        formFill.style.display = "none";
        success.style.display = "flex";
        emailSuccess.innerHTML = emailField.value;
    }
});

dismiss.addEventListener("click", () => {
    success.style.display = "none";
    formFill.style.display = "grid";
    emailField.value = "";
    emailField.style.borderColor = "grey";
    emailField.style.backgroundColor = "white";
    emailField.style.color = "unset";
});
