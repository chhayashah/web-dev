const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


// error msg function
function errorMsg(input, msg) {
    const form_control = input.parentElement;
    form_control.className = "form-control error";
    const small = form_control.querySelector("small");
    small.innerText = msg;
}

// success function
function successMsg(input) {
    const form_control = input.parentElement;
    form_control.className = "form-control success";
}

// email function

function emailCheck(input) {
     const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        successMsg(input);
    } else {
        errorMsg(input, "Email is not valid");
    }
}

// function to validate all fields
function validateAll(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            errorMsg(input, `${upperCaseLetter(input)} is required`);
        } else {
            successMsg(input);
        }
    });
}
function upperCaseLetter(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        errorMsg(
            input, `${upperCaseLetter(input)} must be atleast ${min} characters`
        );
        
    } else if (input.value.length > max) {
        errorMsg(
            input, `${upperCaseLetter(input)} must be less than ${max} characters`
        );
        
    } else {
        successMsg(input);
    }
}
// password match
function checkPassword(password1, password2) {
    if (password1.value !== password2.value) {
        errorMsg(password2, "Passwords do not match");
    }
}

// event listener
form.addEventListener("submit", function (e) { 
    e.preventDefault();

    //    function to validate all fields
    validateAll([username, email, password, cpassword]);
    checkLength(username, 4, 20);
    checkLength(password, 4, 20);
    emailCheck(email);
    checkPassword(password, cpassword);
});