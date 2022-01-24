let loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
console.log(loggedIn);
if (loggedIn) {
    if (loggedIn[1] == "admin") {
        let head = document.getElementsByTagName("head")[0];
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./../assets/css/adminSubItems.css";
        head.appendChild(link);
    }
}

function plusFunction(idname) {
    let plus = parseInt(document.getElementById(idname).innerHTML);
    plus += 1;
    document.getElementById(idname).innerHTML = ` ${plus} `;

}

function minusFunction(idname) {
    let plus = parseInt(document.getElementById(idname).innerHTML);
    plus -= 1;
    if (plus > 0) {
        document.getElementById(idname).innerHTML = ` ${plus} `;
    }
}


let parsedData = JSON.parse(localStorage.getItem("items"));

if (parsedData == null) {
    let contents = [{
            name: "Chicken",
            mainImage: "./../assets/images/chicken.jpg",
            image1: "./../assets/images/2chicken.jpeg",
            image2: "./../assets/images/country_chicken.jpeg",
            varieties: [{
                    name: "Normal Chicken",
                    marketPrice: "300",
                    ourPrice: "260"

                },
                {
                    name: "Country Chicken",
                    marketPrice: "350",
                    ourPrice: "300"
                }

            ]

        },
        {
            name: "Chicken Eggs",
            mainImage: "./../assets/images/chicken_eggs.jpeg",
            image1: "./../assets/images/normal_eggs.jpeg",
            image2: "./../assets/images/country_eggs.jpeg",
            varieties: [{
                    name: "Normal Chicken Eggs",
                    marketPrice: "6",
                    ourPrice: "4"
                },
                {
                    name: "Country Chicken Eggs",
                    marketPrice: "20",
                    ourPrice: "15"
                }
            ]


        }, {
            name: "Mutton",
            mainImage: "./../assets/images/goat.jpg",
            image1: "./../assets/images/mutton.jpg",
            image2: "./../assets/images/mutton2.jpeg",
            varieties: [{
                name: "Mutton",
                marketPrice: "780",
                ourPrice: "750"
            }]


        }, {
            name: "Kadai",
            mainImage: "./../assets/images/kadai1.jpg",
            image1: "./../assets/images/kadai.jpg",
            image2: "./../assets/images/kadai2.jpg",
            varieties: [{
                name: "Kadai Chicken",
                marketPrice: "60",
                ourPrice: "55"
            }]



        }, {
            name: "Kadai Eggs",
            mainImage: "./../assets/images/kadaieggs.jpeg",
            image1: "./../assets/images/kadaieggs1.jpeg",
            image2: "./../assets/images/kadaieggs2.jpeg",
            varieties: [{
                name: "Kadai Eggs",
                marketPrice: "30",
                ourPrice: "25"
            }]


        }, {
            name: "Duck",
            mainImage: "./../assets/images/duck.jpeg",
            image1: "./../assets/images/duck1.jpg",
            image2: "./../assets/images/duck2.jpeg",
            varieties: [{
                    name: "Duck",
                    marketPrice: "320",
                    ourPrice: "300"
                },
                {
                    name: "Duck Eggs",
                    marketPrice: "15",
                    ourPrice: "12"
                }
            ]


        }
    ];
    localStorage.setItem("items", JSON.stringify(contents));
}

function getAndDisplay1() {
    let output1 = ``;
    for (let i in parsedData) {
        output1 += `<div class="itemsList">
                <img id="itemImage" src="${parsedData[i].mainImage}" alt="" width="30%" height="100%" style="vertical-align:middle;padding-bottom:10px;padding:5px;">
                <a href='subItems.html?name=${parsedData[i].name}' style="text-decoration:none;" id="itemName">${parsedData[i].name}</a>
                <div class="dropdown">
                    <label for="dd_button_${i}">
                        <img class="moreIcon" src="./../assets/images/moreIcon.svg">
                    </label>
                    <input type="checkbox" id="dd_button_${i}">
                    <div class="editContent">
                        <a href="./editItem.html?name=${parsedData[i].name}" >Edit</a><br>
                        <button type="button" onclick = "deleteItem('${i}')">Delete</button>
                    </div>
                </div>
            </div>
        <hr>`
    }
    document.getElementsByClassName("div1")[0].innerHTML = output1;
}
getAndDisplay1();
getAndDisplay2();

function getAndDisplay2() {
    let searched = new URLSearchParams(location.search);
    let searchedItem = searched.get("name");
    let output2 = ``;

    for (let i in parsedData) {
        let storageItemName = parsedData[i].name;
        if (searchedItem == storageItemName) {
            output2 = ` <p>
    <ol><u id="middleName">${parsedData[i].name}</u> :<br><br>
       <div><img src='${parsedData[i].image1}' alt="" width="60%" height="25%" style="vertical-align:middle;border-radius:15px;"> 1. Normal Chicken</div><br>
       <div><img src='${parsedData[i].image2}' alt="" width='60%' height="25%" style="vertical-align:middle;border-radius:15px;"> 2. Country Chicken</div>
    </ol>
</p>
`
        }
    }
    document.getElementsByClassName("div2")[0].innerHTML = output2;

    getAndDisplay3(searchedItem);
}

function getAndDisplay3(searched) {
    let output3 = ``;
    if (searched) {
        for (let i in parsedData) {
            const varieties = parsedData[i].varieties;
            let storageItemName = parsedData[i].name;
            const len = varieties.length;
            for (let j = 0; j < len; j++) {
                if (searched == storageItemName) {
                    output3 += `<dl>
            <dt>
                <h2>&nbsp;${varieties[j].name} :</h2>
                    </dt>
                    <dd> Market Price (for 1kg) : ₹ ${varieties[j].marketPrice}</dd><br>
                    <dd> Our discount Price : ₹ ${varieties[j].ourPrice}</dd><br>
                    <dd>
                    <input class="addToCart" onclick="addToCart('${parsedData[i].name}', '${varieties[j].name}','count${j}')" type="button" value="Add to Cart">
                    <input onclick="minusFunction('count${j}')" class="cart" type="button" value="-">
                    <span id="count${j}"> 1 </span>
                    kg <input onclick="plusFunction('count${j}')" class="cart" type="button" value="+">
                    </dd>
                </dl>
               `
                }
            }
            document.getElementsByClassName("div3")[0].innerHTML = output3;
        }
    }
}

// Adding an item to Cart by getting existing data from storage and pushing into it

function addToCart(itemName, itemVariety, quantityId) {
    console.log((itemName));
    let quantity = document.getElementById(quantityId).innerHTML;
    let parsedCart = JSON.parse(localStorage.getItem("cartItems"));
    let cartItems = parsedCart ? parsedCart : [];

    let thisItem = {
        itemName: itemName,
        itemVariety: itemVariety,
        quantity: quantity
    };
    cartItems.push(thisItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Your item has been added to Cart");
}

// For deleting an item

function deleteItem(index) {
    parsedData.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(parsedData));
    getAndDisplay1();
}