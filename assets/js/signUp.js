console.group("Sign Up");
let presentYear = new Date().getFullYear();
console.log(presentYear);
let maxYear = presentYear - 18;
console.log(maxYear);
let maxDate = `${maxYear}-01-01`;
document.getElementById("dob").setAttribute("max", maxDate);

function show1() {
    let pass = document.getElementById("cPassword");
    if (pass.type === "password") {
        pass.type = "text";
        document.getElementById("cpShow").src = "../assets/images/eye.svg";
        console.group("show");
        console.log("Showing password");

    } else {
        pass.type = "password";
        document.getElementById("cpShow").src = "../assets/images/eye-close.svg";
        console.log("Hiding Password ");
    }
}


function show() {
    let pass = document.getElementById("password");
    if (pass.type === "password") {
        pass.type = "text";
        document.getElementById("pShow").src = "../assets/images/eye.svg";
        console.log("Showing Password ");
    } else {
        pass.type = "password";
        document.getElementById("pShow").src = "../assets/images/eye-close.svg";
        console.log("Hiding Password ");
        console.groupEnd("show");
    }
}

let signUpArray = [];

function signUpDataGetting() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mail = document.getElementById("mailid").value;
    let dob = document.getElementById("dob").value;
    let password = document.getElementById("password").value;
    let number = document.getElementById("number").value;
    let role = document.getElementById("role").value;
    const userDetails = {
        fName: fname,
        lName: lname,
        mail: mail,
        dob: dob,
        password: password,
        number: number,
        role: role
    }
    signUpArray.push(userDetails);
    localStorage.setItem("signUpDetails", JSON.stringify(signUpArray));
    console.group("signUpDataGeting");
    console.log("Saved user details to Array");
    console.groupEnd("signUpDataGetting");


}


function checkValidations(event) {
    event.preventDefault();
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cPassword").value;
    let mail = document.getElementById("mailid").value;
    let signUpDetails = JSON.parse(localStorage.getItem("signUpDetails"));
    if (signUpDetails == null) {
        localStorage.setItem("signUpDetails", JSON.stringify([]));
    } else {

        let isMatch = false;

        for (let i of signUpDetails) {
            let mailid = i.mail;

            if (mail == mailid) {
                isMatch = true;
                break;
            }
            if (password !== cpassword) {
                isMatch = true;
                break;
            }
        }

        if (isMatch) {
            document.getElementById("errorMessage").innerHTML = "<font color=red> E-mail Id already exists or incorrect password details !! </font>";
        } else {
            signUpDataGetting();
            window.location.href = "./login.html";
        }

    }
    console.group("check");
    console.log("Checked Validation");
    console.groupEnd("check");

}


function signUpRefresh() {
    const signUpDetails = JSON.parse(localStorage.getItem("signUpDetails"));
    if (signUpDetails) {
        signUpArray = signUpDetails;
        console.table(signUpArray);
    } else {
        signUpArray = [];

    }
    console.log("signUpRefresh");

}
console.groupEnd("Sign Up");
signUpRefresh();