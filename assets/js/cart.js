let parsedData = JSON.parse(localStorage.getItem("cartItems"));
let totalItems = JSON.parse(localStorage.getItem("items"));

let orders = [];
let ordersExisitng = JSON.parse(localStorage.getItem("orders"));
orders = ordersExisitng ? ordersExisitng : [];

function navbar() {
    document.querySelector(".navbar").classList.toggle("nav-open");
}

function plusFunction(quantityId, displayVarietyPrice, variety, varietyPrice) {
    let calculatedRate = 0;
    let quantity = parseInt(document.getElementById(quantityId).innerHTML);
    quantity += 1;
    calculatedRate = quantity * parseInt(varietyPrice);
    document.getElementById(displayVarietyPrice).innerHTML = calculatedRate;
    document.getElementById(quantityId).innerHTML = quantity;
    for (key in parsedData) {
        if (variety == parsedData[key].itemVariety) {
            parsedData[key].quantity = quantity;
            localStorage.setItem("cartItems", JSON.stringify(parsedData));
        }
    }
    displayItems();
}

function minusFunction(quantityId, displayVarietyPrice, variety, varietyPrice) {
    let calculatedRate = 0;
    let quantity = parseInt(document.getElementById(quantityId).innerHTML);
    if (quantity > 0) {
        quantity -= 1;
        calculatedRate = quantity * parseInt(varietyPrice);
        document.getElementById(displayVarietyPrice).innerHTML = calculatedRate;
        document.getElementById(quantityId).innerHTML = quantity;
        for (key in parsedData) {
            if (variety == parsedData[key].itemVariety) {
                parsedData[key].quantity = quantity;
                localStorage.setItem("cartItems", JSON.stringify(parsedData));
            }
        }
    }
    displayItems();
}

var totalAmount = 0;

function displayItems() {
    totalAmount = 0;
    let output = ``;
    let i = 0;
    let j = 0;
    let vrit = 0;
    if (parsedData) {
        for (j in parsedData) {
            for (i in totalItems) {
                const variety = totalItems[i].varieties;
                for (vrit in variety) {
                    if (parsedData[j].itemName == totalItems[i].name && parsedData[j].itemVariety == totalItems[i].varieties[vrit].name) {
                        output += `
            <tr class="bdr-bottom">
                <td>${parseInt(j)+1}.</td>
                <td><img src="${totalItems[i].mainImage}" alt="" width="25%" height="90%">
                    <h3 class="itemName">${totalItems[i].name}</h3>
                </td>
                <td>
                    <h3>${parsedData[j].itemVariety}</h3>
                </td>
                <td>
                    <button class="decr btn" onclick="minusFunction('quantity${i}${j}','rateFor${i}${j}','${variety[vrit].name}','${variety[vrit].ourPrice}')">-</button>
                    <span id="quantity${i}${j}">${parsedData[j].quantity}</span>
                    <button class="incr btn" onclick="plusFunction('quantity${i}${j}','rateFor${i}${j}','${variety[vrit].name}','${variety[vrit].ourPrice}')">+</button>
                </td>
                <td> ₹ <span id="rateFor${i}${j}">${totalItems[i].varieties[vrit].ourPrice*parsedData[j].quantity}</span></td>
                <td><button class="remove-btn" onclick="removeItem(${j})">Remove</button></td>

            </tr>`
                        totalAmount += parseInt(totalItems[i].varieties[vrit].ourPrice * parsedData[j].quantity);
                    }
                }
            }

        }
        document.getElementById("insertingItems").innerHTML = `<tr>
        <th scope="row">Item No.</th>
        <th scope="row">Item</th>
        <th scope="row">Variety</th>
        <th scope="row">Quantity</th>
        <th scope="row">Price</th>
        <th scope="row">Remove Item</th>
    </tr>
        ${output}
        <tr>
            <td colspan="4"><h2>Total Amount = </h2></td>
            <td colspan="2"><span id="totalAmount">₹ ${totalAmount}</span></td>
        </tr>`
        let order = document.getElementsByClassName("address")[0];
        order.style.display = "block";
    }
}
displayItems();

function removeItem(index) {
    parsedData.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(parsedData));
    displayItems();
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    console.log(typeof cartItems);
    console.log(cartItems);
    isEmptyCart();
}

// If cart is empty need to display "Cart is empty"

function isEmptyCart() {
    let cart = document.getElementById("insertingItems");
    let emptyMessage = `<th scope="row">
    <div class="emptyCart">
        Your Cart is empty <br> <button><a href="./subItems.html"> Add Now ?</a></button>
    </div>
</th>`
    if (cart.rows.length < 3) {
        cart.innerHTML = emptyMessage;
        document.querySelector(".address").style.display = "none";
    }
}
isEmptyCart();


function placingOrder(event) {
    event.preventDefault();
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let address = document.querySelector("#address").value;
    let mobileNumber = document.querySelector("#mobileNumber").value;
    let items = {
        items: cartItems,
        amount: totalAmount,
        payment: false,
        delivered: false,
        address: address,
        mobileNumber: mobileNumber
    }
    orders.push(items);
    localStorage.setItem("orders", JSON.stringify(orders));
    let logged = JSON.parse(localStorage.getItem("loggedInUser"));
    if (logged) {
        if (!items.payment) {
            window.location.href = "./payment.html";
            alert("Please make payment to place the order");
        }
    } else {
        alert("Please login first");
        window.location.href = "./login.html";
    }
}