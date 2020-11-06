// JS
// function to validate empty name.  
function validateName() {
    var x = document.forms["contactForm"]["name"].value;
    if (x == "" || x == null) {
        alert("Name must be filled out");
        return false;
    }
}

//Function that submits form when button is clicked.  
function SubmitBtn() {
    document.getElementById("cntcForm").submit();
}

// function to validate empty email.  
function validateEmail() {
    var x = document.forms["contactForm"]["email"].value;
    if (x == "" || x == null) {
        alert("email must be filled out");
        return false;
    }
}

// function to validate empty name.  
function validateMessage() {
    var x = document.forms["cntcForm"]["msg"].value;
    if (x == "" || x == null) {
        alert("Message cant be empty");
        return false;
    }
}

//Alert message for validation passed.  
function allertFunction() {
    alert("You have enterd the following details:");
    alert("Name :".getElementById(name));
    alert("email: ".getElementById(email));
    alert("country: ".getElementById(country));
    alert("message: ".getElementById(message));
}