let isExist = false;
let parsedData = JSON.parse(localStorage.getItem("signUpDetails"));

function onSubmitHandler(event) {
    event.preventDefault();
    let number = document.getElementById("num").value;
    let mailId = document.getElementById("mailId").value;
    if (doesExist(mailId, number) != false) {
        console.log(isExist);
        localStorage.setItem("forgotPassword", JSON.stringify(isExist));
        window.location.href = "./OTP.html";
    } else {
        document.getElementById("error").innerHTML = "<font color=red> Invalid E-mail or Mobile number !! </font>";
        document.getElementById("error").style.cssText = "display :contents";
    }
}

function doesExist(mail, number) {
    for (i in parsedData) {
        if (parsedData[i].number == number && parsedData[i].mail == mail) {
            let role = parsedData[i].role;
            isExist = [mail, role];
            break;
        } else {
            isExist = false;
        }

    }
    return isExist;
}