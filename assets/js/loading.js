window.onload = () => {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".loading").style.backdropFilter = "blur(0px)";
    console.log("ready");
}

function navbar() {
    document.querySelector(".navbar").classList.toggle("nav-open")
}