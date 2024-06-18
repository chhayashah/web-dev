const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateInputs();
});

function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else if (usernameValue.length < 3 || usernameValue.length > 25) {
        setError(username, 'Username must be between 3 and 25 characters');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email is not valid');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (!isValidPassword(passwordValue)) {
        setError(password, 'Password must have at least 8 characters including 1 lowercase, 1 uppercase, 1 number, and 1 special character');
    } else {
        setSuccess(password);
    }

    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password');
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, 'Passwords do not match');
    } else {
        setSuccess(confirmPassword);
    }
}

function setError(element, message) {
    const formGroup = element.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = message;
    formGroup.className = 'form-group error';
}

function setSuccess(element) {
    const formGroup = element.parentElement;
    formGroup.className = 'form-group success';
}

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function isValidPassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    return re.test(password);
}
