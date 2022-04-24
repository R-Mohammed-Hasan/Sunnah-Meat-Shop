window.onload = () => {
    console.log("ready");
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".loading").style.backdropFilter = "blur(0px)";
}

function navbar() {
    document.querySelector(".navbar").classList.toggle("nav-open")
}