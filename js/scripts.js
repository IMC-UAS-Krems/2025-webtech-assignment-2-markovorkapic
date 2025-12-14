let shoppingcart = [];
function addtoCart(clickedButton){
    console.log("Item added to cart");
    shoppingcart.appendChild(document.getElementById())

}

function openCart(clickedButton){
    if(document.getElementById("shoppingcart").style.display == "none"){
        console.log("Cart opened");
        document.getElementById("shoppingcart").style.display = "block";
        return;
    }
    

}
function closeCart(clickedButton){
    console.log("Cart closed");
    document.getElementById("shoppingcart").style.display = "none";


}
function hideCart(){
    document.getElementById("shoppingcart").style.display = "none";
}
