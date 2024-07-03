function clearErrors(){
    let errors = document.getElementsByClassName("error");
    for(let item of errors){
        item.innerHTML = "";
    }
}

function setError(id, error){
    let element = document.getElementById(id + "Error");
    element.innerHTML = error;
}

function validateForm(){
    var returnval = true;
    clearErrors();

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){2,7}$/;
    let val = email.value;
    if(!emailRegex.test(val)){
        setError("email", "*The Email is not valid");
        returnval = false;
    }

    var pass = password.value;
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    if(!passRegex.test(pass)){
        setError("password", "*The Password is not valid");
        returnval = false;
    }

    return returnval;
}
