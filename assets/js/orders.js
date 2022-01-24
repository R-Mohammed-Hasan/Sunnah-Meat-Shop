let orders = JSON.parse(localStorage.getItem("orders"));
let i = 0;
let output;
for (i in orders) {
    let itemsName = orders[i].items;
    let j = 0;
    for (j in itemsName) {
        output += `<tr><td>${parseInt(i)+1}</td>
    <td>${itemsName[j].itemVariety}</td>
    <td>${orders[i].items}</td>
    <td>${orders[i].amount}</td>
    <td>${orders[i].payment}</td>
    <td onclick="">In progress</td></tr>`
    }
}
document.getElementsByTagName("table")[0].innerHTML = `
              <tr>  <th>Order No.</th>
                <th>Items</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Payment Status</th>
                <th>Delivery Status</th></tr>
                ${output}
                `