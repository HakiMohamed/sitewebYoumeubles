const form = document.querySelector('form');
const emailField = document.getElementById('email-field');
const emailLabel = document.getElementById('email-label');
const emailError = document.getElementById('email-error');
const nameField = document.getElementById('name-field');
const nameLabel = document.getElementById('name-label');
const nameError = document.getElementById('name-error');
const messageField = document.getElementById('message-field');
const messageLabel = document.getElementById('message-label');
const messageError = document.getElementById('message-error');


function validateEmail () {
    emailLabel.style.bottom = "35px";

    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Please enter a valid email";
        emailField.style.borderBottomColor= "red";
        return false;
    }
    emailError.innerHTML = "";
    emailField.style.borderBottomColor= "green";
    return true;
}

function validateName () {
    nameLabel.style.bottom = "35px";

    if(!nameField.value.match(/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/)) {
        nameError.innerHTML = "Please enter a full name";
        nameField.style.borderBottomColor= "red";
        return false;
    }
    nameError.innerHTML = "";
    nameField.style.borderBottomColor= "green";
    return true;
}

function validateMessage () {
    messageLabel.style.bottom = "75px";

    if(messageField.value === '' || messageField.value.length < 30) {
        messageError.innerHTML = "Please enter a 30 characters message";
        messageField.style.borderBottomColor= "red";
        return false;
    }
    messageError.innerHTML = "";
    messageField.style.borderBottomColor= "green";
    return true;
}
