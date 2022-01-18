function otp() {
    alert("Another OTP has been sent to your mobile");
}

function onSubmitHandler(event) {
    event.preventDefault();
    let userDetail = JSON.parse(localStorage.getItem("forgotPassword"));
    localStorage.setItem("loggedInUser", JSON.stringify(userDetail));
    alert("You have been logged in");
    console.log("Got");
    window.location.href = "home.html";
}