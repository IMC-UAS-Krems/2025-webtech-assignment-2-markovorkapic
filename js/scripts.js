
function openCart(clickedButton) {
    console.log("Cart opened");
    document.getElementById("shoppingcart").style.display = "inline";
    clickedButton.setAttribute("onclick", "closeCart(this)");

}
function closeCart(clickedButton) {
    console.log("Cart closed");
    document.getElementById("shoppingcart").style.display = "none";
    clickedButton.setAttribute("onclick", "openCart(this)");
}
function hideCart() {
    document.getElementById("shoppingcart").style.display = "none";
}

// the following code is grabbed from:
// https://medium.com/@pawan2505/how-to-build-an-add-to-cart-feature-with-javascript-6adb6268858f
const cart = {};
function addToCart(productName, productPrice) {
    if (cart[productName]) {
        cart[productName].quantity += 1;
        cart[productName].totalPrice += productPrice;
    } else {
        cart[productName] = {
            quantity: 1,
            totalPrice: productPrice
        };
    }
    updateCartDisplay();
}
function updateCartDisplay() {
    const cartList = document.getElementById('shoppingcart');
    cartList.innerHTML = '';
    for (let product in cart) {
        const listItem = document.createElement('li');
        listItem.innerText = `${product} - Quantity: ${cart[product].quantity} - Total Price: EU${cart[product].totalPrice.toFixed(2)}`;
        cartList.appendChild(listItem);
    }
}