let orders = getOrders();

function getOrders() {
    return JSON.parse(localStorage.getItem("orders"));
}

function setData() {
    let output = "";
    let count = 1;
    for (i of orders) {
        let itemsName = i.items;
        let j = 0;
        let items = "";
        let quantity = "";
        for (j of itemsName) {
            items += j.itemVariety + "<br>";
            quantity += j.quantity + "<br>";
        }
        output += `
        <tr>
        <td >${count}</td>
        <td class="items"> ${items} </td>
        <td class="quantity">${quantity} </td>
        <td > ${i.amount}</td>
        <td>${i.payment ? "Payment Finished" : "Not Payed"}</td>
        <td>${i.address}</td>
        <td>${ i.mobileNumber}</td>
        <td>
            <select id="deliveryStatus_${count++}">
                <option value="progress" ${ i.delivered ? "selected" : ""}> In Progress </option>
                <option value="delivered" ${ i.delivered ? "selected" : ""}> Delivered </option>
            </select>
        </td>
        </tr>`
    }
    document.getElementsByTagName("table")[0].innerHTML += output;
}

function eventsForDeliveryStatus() {
    let count = 1;
    for (i of orders) {
        let currentTag = document.getElementById(`deliveryStatus_${count++}`);
        currentTag.onchange = dummy;
    }

}

function dummy() {
    let count = 1;
    for (i of orders) {
        let currentTag = document.getElementById(`deliveryStatus_${count++}`);
        setDeliveryStatus(currentTag, i);
    }
}

function setDeliveryStatus(currentTag, object) {
    console.log(currentTag.value);
    if (currentTag.value == "delivered") {
        object.delivered = true;
    } else {
        object.delivered = false;
    }
    console.log(orders);
    localStorage.setItem("orders", JSON.stringify(orders));
}
setData();
eventsForDeliveryStatus();