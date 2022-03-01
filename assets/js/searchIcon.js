// For search Button

window.onload = searchButton()

function searchButton() {
    const searchBox = document.querySelector(".search-box");
    const searchBtn = document.querySelector(".searching-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const searchInput = document.getElementById("searchingBox");
    const searchData = document.querySelector(".search-data");
    searchBtn.onclick = () => {
        searchBox.classList.add("active");
        searchBtn.classList.add("active");
        searchInput.classList.add("active");
        cancelBtn.classList.add("active");
        searchInput.focus();
        let searched = searchInput.value.replace(/ +/g, "").toLowerCase();

        if (searchInput.value != "") {
            switch (searched) {
                case "chicken":
                    console.log("Chicken");
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
                default:
                    searchData.innerHTML = "Sorry, no Item found";
            }
        }
    }
    cancelBtn.onclick = () => {
        searchBox.classList.remove("active");
        searchBtn.classList.remove("active");
        searchInput.classList.remove("active");
        cancelBtn.classList.remove("active");
        searchData.classList.toggle("active");
        searchInput.value = "";
    }
}