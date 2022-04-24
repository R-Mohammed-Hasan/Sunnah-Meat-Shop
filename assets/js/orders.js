let orders = getOrders();

function getOrders() {
    return JSON.parse(localStorage.getItem("orders"));
}

function setData() {
    if (orders) {
        let output = "";
        let count = 1;
        for (i of orders) {
            let itemsName = i.items;
            let j = 0;
            let items = "<ol>";
            let quantity = "";
            let deliveryImg;
            if (i.delivered) {
                deliveryImg = `<img src="./../assets/images/delivery.png" width="15%" style="vertical-align:middle;">`;
            } else {
                deliveryImg = `<img src="./../assets/images/deliveryprogress.png" width="18%" style="vertical-align:middle;">`;

            }
            for (j of itemsName) {
                items += `<li> ${j.itemVariety}</li><br>`;
                quantity += j.quantity + "<br><br>";
            }
            items += "</ol>";
            output += `
        <tr>
        <td >${count}</td>
        <td class="items"> ${items} </td>
        <td class="quantity">${quantity} </td>
        <td >₹ ${i.amount}</td>
        <td>${i.payment ? "Payment Finished" : "Not Payed"}</td>
        <td>${i.address}</td>
        <td>${ i.mobileNumber}</td>
        <td>${deliveryImg}
        <select id="deliveryStatus_${count++}" data-length="${count -2}" data-object='${JSON.stringify(i)}' onchange='setDeliveryStatus(event)'>
                <option value="progress" ${ i.delivered == true ? "" : "selected"}> In Progress </option>
                <option value="delivered" ${ i.delivered ? "selected" : ""}>Delivered </option>
            </select>
        </td>
        </tr>`
        }
        document.getElementsByTagName("table")[0].innerHTML += output;
    } else {
        document.getElementsByTagName("table")[0].innerHTML += `<td colspan="8"> No Orders Placed yet</td>`;

    }
}

function setDeliveryStatus(event) {
    const element = event.target;
    let indexOfObject = element.dataset.length;
    let object = JSON.parse(element.dataset.object);
    object.delivered = element.value == "delivered" ? true : false;
    orders[indexOfObject] = object;
    localStorage.setItem("orders", JSON.stringify(orders));
    location.reload();
}
setData();