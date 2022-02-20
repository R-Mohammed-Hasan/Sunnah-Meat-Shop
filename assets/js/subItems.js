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
        switch (searched.value.toLowerCase().trim()) {
            case "chicken":
                window.open("./subItems.html?name=chicken");
                break;
            case "chickeneggs":
                window.open("./subItems.html?name=chicken_eggs");
                break;
            case "mutton":
                window.open("./subItems.html?name=mutton");
                break;
            case "chicken":
                window.open("./subItems.html?name=kadai");
                break;
            case "chicken":
                window.open("./subItems.html?name=kadai_eggs");
                break;
            case "chicken":
                window.open("./subItems.html?name=duck");
                break;
            case "chicken":
                window.open("./subItems.html?name=chicken");
                break;
            case "eggs":
                window.open("./subItems.html?name=chicken_eggs");
                break;
            default:
                alert("Sorry, no Item found in this name");
        }
    }
}