const newsletterSubmitButton = document.querySelector('#newsletter-btn');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartButton = document.querySelector('#cart-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const myModal = document.querySelector('#myModal');
const clearCartBtn = document.querySelector('#clear-cart-btn');
const processOrderBtn = document.querySelector('#process-order-btn');
const myModalList = document.querySelector('#cart-items-list');
const totalPrice = myModalList.appendChild(document.createElement('li'));

let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

totalPrice.id = 'total-price';

let cartItemCount = 0;
cartButton.innerText = `Cart (${cartItemCount})`;
let price = 0;

// add to cart button functionality
addToCartButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    alert('Item added to cart!');

    cartItemCount += 1;
    cartButton.innerText = `Cart (${cartItemCount})`;
    myModal.querySelector('p').innerText = `Cart Items: ${cartItemCount}`;
    const name = event.target.name;
    cartItems.push(name);
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartModal(name);
    totalPrice.innerText = `Total Price: $${price.toFixed(2)}`;
  });
});

function updateCartModal(name) {
  switch (name) {
    case 'individualYoga':
      myModalList.appendChild(document.createElement('li')).innerHTML = `<img src="./images/Client2_IndividualYoga.png" alt="Individual Yoga Session"> (Individual Yoga Class)`;
      price += 50;
      break;
    case 'groupYoga':
      myModalList.appendChild(document.createElement('li')).innerHTML = `<img src="./images/Client2_GroupYoga.png" alt="Group Yoga Session"> (Group Yoga Class)`;
      price += 35;
      break;
    case 'individualKickboxing':
      myModalList.appendChild(document.createElement('li')).innerHTML = `<img src="./images/Client2_IndividualKickboxing.png" alt="Individual Kickboxing Session"> (Individual Kickboxing Class)`;
      price += 60;
      break;
    case 'groupKickboxing':
      myModalList.appendChild(document.createElement('li')).innerHTML = `<img src="./images/Client2_GroupKickboxing.png" alt="Group Kickboxing Session"> (Group Kickboxing Class)`;
      price += 40;
      break;
    case 'individualPilates':
      myModalList.appendChild(document.createElement('li')).innerHTML = `<img src="./images/Client2_IndividualPilates.png" alt="Individual Pilates Session"> (Individual Pilates Class)`;
      price += 45;
      break;
    case 'groupPilates':
      myModalList.appendChild(document.createElement('li')).innerHTML = `<img src="./images/Client2_GroupPilates.png" alt="Group Pilates Session"> (Group Pilates Class)`;
      price += 25;
      break;
    case 'tShirt':
      myModalList.appendChild(document.createElement('li')).innerHTML = `<img src="./images/Client2_TeeShirt.png" alt="ABC T-Shirt"> (ABC T-Shirt)`;
      price += 25;
      break;
    case 'waterBottle':
      myModalList.appendChild(document.createElement('li')).innerHTML = `<img src="./images/Client2_WaterBottle.png" alt="ABC Water Bottle"> (ABC Water Bottle)`;
      price += 25;
      break;
    case 'yogaMat':
      myModalList.appendChild(document.createElement('li')).innerHTML = `<img src="./images/Client2_YogaMat.png" alt="ABC Yoga Mat"> (ABC Yoga Mat)`;
      price += 25;
      break;
  }
};

// newsletter subscription alert
newsletterSubmitButton.addEventListener('click', function (event) {
  event.preventDefault();
  alert('Thank you for subscribing.');
});

// Open the modal
cartButton.addEventListener('click', () => {
  myModal.showModal();
});

// Close the modal
closeModalBtn.addEventListener('click', () => {
  myModal.close();
});

// Optional: Close the modal when clicking the backdrop (standard modal behavior)
myModal.addEventListener('click', (event) => {
  if (event.target === myModal) {
    myModal.close();
  }
});

// Clear cart functionality
clearCartBtn.addEventListener('click', () => {
  cartItemCount = 0;
  cartItems = [];
  sessionStorage.removeItem("cartItems");
  price = 0;
  cartButton.innerText = `Cart (${cartItemCount})`;
  myModal.querySelector('p').innerText = `Cart Items: 0`;
  myModalList.innerHTML = '';
  showMessage('Cart has been cleared.');
  myModal.close();
});

function showMessage(message) {
  alert(message);
};

// Process order functionality
processOrderBtn.addEventListener('click', () => {
  if (cartItemCount === 0) {
    alert('Your cart is empty. Please add items before processing the order.');
  } else {
    alert('Your order has been processed. Thank you for shopping with us!');
    cartItemCount = 0;
    cartItems = [];
    sessionStorage.removeItem("cartItems");
    cartButton.innerText = `Cart (${cartItemCount})`;
    myModalList.innerHTML = '';
    myModal.querySelector('p').innerText = `Cart Items: 0`;
    myModal.close();
  }
});

// Mobile menu toggle functionality
const menuToggle = document.querySelector('#menu-toggle');
const mainNav = document.querySelector('#main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(!!isOpen));
  });
}

function addToCart(itemName) {
  cartItems.push(itemName);
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  showMessage("Item added to the cart: " + itemName);
}

cartItems.forEach(name => {
  updateCartModal(name);
  cartItemCount += 1;
});
cartButton.innerText = `Cart (${cartItemCount})`;
myModal.querySelector('p').innerText = `Cart Items: ${cartItemCount}`;