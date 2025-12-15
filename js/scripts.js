
const startBtn = document.getElementById("startBtn");
const welcomePage = document.getElementById("welcomePage");
const mainContent = document.getElementById("mainContent");

startBtn.addEventListener("click", () => {
  welcomePage.classList.add("d-none");
  mainContent.classList.remove("d-none");
});

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


const products = [
  { name: "Blankets", price: 15, image: "img/blankets.jpeg" },
  { name: "Groceries", price: 30, image: "img/groceries.jpg" },
  { name: "Hygiene kit", price: 15, image: "img/hygienekit.jpg" },
  { name: "Shoes for children", price: 20, image: "img/shoes.jpg" },
  { name: "Warm meal", price: 10, image: "img/images (1).jpeg" },
  { name: "Clothing", price: 30, image: "img/images.jpeg" },
  { name: "Plushies for kids", price: 5, image: "img/plush.jpeg" },
  { name: "Cooking utensils", price: 40, image: "img/utensils.jpg" },
  { name: "Sleeping bag", price: 50, image: "img/sleepingbag.jpeg" },
  { name: "Water", price: 10, image: "img/Pack-of-bottled-water.jpg" },
  { name: "First aid kit", price: 25, image: "img/firstaid.jpeg" },
  { name: "Donate directly!", price: 5, image: "img/charity.jpeg" }
];


const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");
const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutSection = document.getElementById("checkoutSection");
const checkoutForm = document.getElementById("checkoutForm");
const confirmation = document.getElementById("confirmation");
const summary = document.getElementById("summary");
const fullName = document.getElementById("fullName");

const cart = [];


products.forEach((product, index) => {
  productList.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center">
          <h5>${product.name}</h5>
          <p>€${product.price}</p>
          <button class="btn btn-outline-success" onclick="addToCart(${index})">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
});
function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    cartItems.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${item.name}
        <span>€${item.price}</span>
      </li>
    `;
  });

  if (cart.length >= 3) total *= 0.9;

  totalPriceEl.textContent = total.toFixed(2);
  checkoutBtn.disabled = cart.length === 0;
}


checkoutBtn.addEventListener("click", () => {
  checkoutSection.classList.remove("d-none");
  checkoutSection.scrollIntoView({ behavior: "smooth" });
});

checkoutForm.addEventListener("submit", e => {
  e.preventDefault();

  if (!checkoutForm.checkValidity()) {
    checkoutForm.classList.add("was-validated");
    return;
  }

  checkoutSection.classList.add("d-none");
  confirmation.classList.remove("d-none");

  summary.textContent = `Thank you, ${fullName.value}! 
  You donated ${cart.length} items.
  Total amount: €${totalPriceEl.textContent}`;
});
