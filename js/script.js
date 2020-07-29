"use-strict";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm__password = document.getElementById("confirm__password");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    checkInputs();
})

checkInputs = () => {
    //get values from users inputs
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirm__password.value.trim()

    if(usernameValue === "") {
        //show error
        //add error message
        setErrorFor(username, "Username cannot be empty");
    } else {
        setSuccessFor(username);
    }

    if(emailValue === "") {
        //show error
        //add error message
        setErrorFor(email, "Email cannot be empty");
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid!");
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === ""){
        //show error
        //add error message
        setErrorFor(password, "Password cannot be empty");
    } else {
        setSuccessFor(password);
    }
    
    if(confirmPasswordValue === ""){
        //show error
        //add error message
        setErrorFor(confirm__password, "Password cannot be empty");
    } else if(passwordValue !== confirmPasswordValue){
        setErrorFor(confirm__password, "Password does not match");
    }
      else {
        setSuccessFor(confirm__password);
    }

    //show success message

}

setErrorFor = (input, message) => {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector("small");

    //add error message inside smaa
    small.innerHTML = message;
    formControl.className = "form-control error";

}

setSuccessFor = (input) => {
    const formControl = input.parentElement; //.form-control
    formControl.className = "form-control success";
}

isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}