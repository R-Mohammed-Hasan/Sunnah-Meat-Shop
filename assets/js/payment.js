let orders = JSON.parse(localStorage.getItem("orders"));
let order = orders.pop();
console.log(order);
let amount = order.amount;
console.log(amount);
document.getElementsByClassName("submit")[0].innerHTML += " ₹ " + amount;

setInterval(showDetailsInCard, 200);

function showDetailsInCard() {
    let cardNumber1 = document.getElementById("cardNumber1").value;
    let cardNumber2 = document.getElementById("cardNumber2").value;
    let cardNumber3 = document.getElementById("cardNumber3").value;
    let cardNumber4 = document.getElementById("cardNumber4").value;
    let cardName = document.getElementById("cardName").value;
    let expiryMonth = document.getElementById("expiryMonth").value;
    let expiryYear = document.getElementById("expiryYear").value;
    document.getElementById("displayCardNumber1").innerHTML = cardNumber1;
    document.getElementById("displayCardNumber2").innerHTML = cardNumber2;
    document.getElementById("displayCardNumber3").innerHTML = cardNumber3;
    document.getElementById("displayCardNumber4").innerHTML = cardNumber4;
    document.getElementById("displayName").innerHTML = cardName;
    document.getElementById("displayExpiry").innerHTML = `${expiryMonth} / ${expiryYear}`;
}

function onSubmitHandler(event) {
    event.preventDefault();
    order.payment = true;
    orders.push(order);
    console.log(orders);
    localStorage.setItem("orders", JSON.stringify(orders));
    alert("Congratulations you have successfully placed your Order !!");
    window.location.href = "./paymentFinished.html";

}