function show1() {
    let password = document.getElementById("cPassword");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById("images2").src = "../assets/images/eye.svg";

    } else {
        password.type = "password";
        document.getElementById("images2").src = "../assets/images/eye-close.svg";

    }
}

function show() {
    let pass = document.getElementById("password");
    if (pass.type === "password") {
        pass.type = "text";
        document.getElementById("images").src = "../assets/images/eye.svg";

    } else {
        pass.type = "password";
        document.getElementById("images").src = "../assets/images/eye-close.svg";

    }
}

let signUpArray = [];
let loggedInUser = [];
let isExist = false;

function mailCheck(event) {
    event.preventDefault();
    let inputMail = document.getElementById("mail").value;
    let inputPassword = document.getElementById("password").value;
    let importingInfo = JSON.parse(localStorage.getItem("signUpDetails"));
    if (importingInfo != null) {
        isExist = isUserExist(inputMail, inputPassword);

        if (!isExist) {
            document.getElementById("errorMessage").innerHTML = "Enter valid Login Details !! ";
            return
        }
        const isAdmin = isExist.role == "admin" ? true : false;
        if (isAdmin) {
            window.location.href = "home.html";
        } else {
            window.location.href = "home.html";
        }
        loggedInUser = [inputMail, isExist.role];

        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    } else {
        document.getElementById("errorMessage").innerHTML = "Please Sign up first";
    }
}

function isUserExist(mail, password) {
    let importingInfo = JSON.parse(localStorage.getItem("signUpDetails"));
    for (let i of importingInfo) {

        if (i.mail == mail && i.password == password) {
            isExist = i; // returns only the matching Object only not all Objects
            break;
        } else {
            isExist = false;
        }
    }
    return isExist;
}