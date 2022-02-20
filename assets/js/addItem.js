let parsedData = JSON.parse(localStorage.getItem("items"));
var isExist = false;

function onSubmitHandler(event) {
    event.preventDefault()
    let nameOfItem = document.getElementById("name").value;
    let mainImage = document.getElementById("mainImage").value;
    let variety1 = document.getElementById("variety1Name").value;
    let variety2 = document.getElementById("variety2Name").value;
    let image1 = document.getElementById("image1").value;
    let image2 = document.getElementById("image2").value;
    let marketPrice1 = document.getElementById("marketPrice1").value;
    let marketPrice2 = document.getElementById("marketPrice2").value;
    let ourPrice1 = document.getElementById("ourPrice1").value;
    let ourPrice2 = document.getElementById("ourPrice2").value;
    let currentItem = {
        name: nameOfItem,
        mainImage: mainImage,
        image1: image1,
        image2: image2,
        varieties: [{
            name: variety1,
            marketPrice: marketPrice1,
            ourPrice: ourPrice1
        }, {
            name: variety2,
            marketPrice: marketPrice2,
            ourPrice: ourPrice2
        }]
    };
    for (i of parsedData) {
        if (i.name.toLowerCase() != nameOfItem.toLowerCase()) {
            isExist = false;
            break;
        } else {
            isExist = true;
            break;
        }
    }
    if (!isExist) {
        parsedData.push(currentItem);
        localStorage.setItem("items", JSON.stringify(parsedData));
        window.location.href = "./subItems.html";
    } else {
        document.getElementById("error").innerHTML = "<font color=red>Sorry, this item already exists  !!</font>";
    }
}