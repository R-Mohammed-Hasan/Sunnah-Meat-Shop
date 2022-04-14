window.addEventListener("click", (event) => {
    let element = event.target;
    let allEditOptions = document.getElementsByClassName("editOption");
    for (button of allEditOptions) {
        if (element == button) {
            button.checked = true;
            break;
        } else {
            button.checked = false;
        }
    }
});

function searchingData() {
    let searched = document.getElementById("searchingBox");
    if (searched.value != "") {
        switch (searched.value.replace(/ +/g, "").toLowerCase()) {
            case "chicken":
                window.open("./subItems.html?name=Chicken");
                break;
            case "chickeneggs":
                window.open("./subItems.html?name=Chicken Eggs");
                break;
            case "mutton":
                window.open("./subItems.html?name=Mutton");
                break;
            case "kadai":
                window.open("./subItems.html?name=Kadai");
                break;
            case "kadaieggs":
                window.open("./subItems.html?name=Kadai Eggs");
                break;
            case "duck":
                window.open("./subItems.html?name=Duck");
                break;
            case "eggs":
                window.open("./subItems.html?name=Chicken Eggs");
                break;
            default:
                alert("Sorry, no Item found in this name");
        }
    }
}