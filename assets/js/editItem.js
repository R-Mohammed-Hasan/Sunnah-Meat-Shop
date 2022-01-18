let parsedData = JSON.parse(localStorage.getItem("items"));
let searched = new URLSearchParams(location.search);
let nameOfItem = searched.get("name")
console.log(nameOfItem);
let i = 0;
let j = 0;
for (i in parsedData) {
    if (parsedData[i].name == nameOfItem) {
        document.getElementById("name").value = parsedData[i].name;
        document.getElementById("mainImage").value = parsedData[i].mainImage;
        document.getElementById("image1").value = parsedData[i].image1;
        document.getElementById("image2").value = parsedData[i].image2;
        document.getElementById("variety1Name").value = parsedData[i].varieties[0].name;
        document.getElementById("variety2Name").value = parsedData[i].varieties[1].name;
        document.getElementById("marketPrice1").value = parsedData[i].varieties[0].marketPrice;
        document.getElementById("marketPrice2").value = parsedData[i].varieties[1].marketPrice;
        document.getElementById("ourPrice1").value = parsedData[i].varieties[0].ourPrice;
        document.getElementById("ourPrice2").value = parsedData[i].varieties[1].ourPrice;
    }
}

function onSubmitHandler(event) {
    event.preventDefault();
    for (i of parsedData) {
        if (i.name == nameOfItem) {
            i.name = document.getElementById("name").value;
            i.mainImage = document.getElementById("mainImage").value;
            i.varieties[0].name = document.getElementById("variety1Name").value;
            i.image1 = document.getElementById("image1").value;
            i.varieties[0].marketPrice = document.getElementById("marketPrice1").value;
            i.varieties[1].marketPrice = document.getElementById("marketPrice2").value;
            i.image2 = document.getElementById("image2").value;
            i.varieties[1].name = document.getElementById("variety2Name").value;
            i.varieties[0].ourPrice = document.getElementById("ourPrice1").value;
            i.varieties[1].ourPrice = document.getElementById("ourPrice2").value;
        }
    }
    localStorage.setItem("items", JSON.stringify(parsedData));
    window.location.href = "./subItems.html";

}