let parsedData = JSON.parse(localStorage.getItem("cartItems"));
let totalItems = JSON.parse(localStorage.getItem("items"));

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
}

function displayItems() {
    let output = ``;
    let totalAmount = 0;
    let i = 0;
    let j = 0;
    let vrit = 0;
    if (parsedData) {
        for (i in totalItems) {
            for (j in parsedData) {
                const variety = totalItems[i].varieties;
                for (vrit in variety) {
                    // for (itemNo in totalItems) {
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
                <td> ₹ <span id="rateFor${i}${j}">${totalItems[i].varieties[vrit].ourPrice}</span></td>
                <td><button class="remove-btn" onclick="removeItem(${j})">Remove</button></td>

            </tr>`
                        totalAmount += document.getElementById(`quantity${i}${j}`) * parseInt(variety[vrit].ourPrice);

                    }


                    // }
                }

            }

            document.getElementById("insertingItems").innerHTML = `<tr>
    <th scope="row">Item No.</th>
    <th scope="row">Item</th>
    <th scope="row">Variety</th>
    <th scope="row">Quantity</th>
    <th scope="row">Price</th>
    <th scope="row"></th>
</tr>
    ${output}
    <tr>
        <td colspan="4"><h2>Total Amount = </h2></td>
        <td colspan="2"><span id="totalAmount">₹ ${totalAmount}</span></td>
    </tr>`
        }
    }

}

displayItems();

function removeItem(index) {
    parsedData.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(parsedData));
    displayItems();
}