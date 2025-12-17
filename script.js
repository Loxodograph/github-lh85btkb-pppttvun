const newsletterSubmitButton = document.querySelector('#newsletter-btn');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartButton = document.querySelector('#cart-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const myModal = document.querySelector('#myModal');
const clearCartBtn = document.querySelector('#clear-cart-btn');
const processOrderBtn = document.querySelector('#process-order-btn');
const contactSubmitButton = document.querySelector('#contact-submit');
const testimonialSubmitButton = document.querySelector('#testimonial-btn');
const myModalList = document.querySelector('#cart-items-list');
const totalPrice = myModalList.appendChild(document.createElement('li'));
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
    switch (name) {
      case 'individualYoga':
        myModalList.appendChild(document.createElement('li')).textContent = `(Individual Yoga Session)`;
        price += 50;
        break;
      case 'groupYoga':
        myModalList.appendChild(document.createElement('li')).textContent = `(Group Yoga Class)`;
        price += 35;
        break;
      case 'individualKickboxing':
        myModalList.appendChild(document.createElement('li')).textContent = `(Individual Kickboxing Class)`;
        price += 60;
        break;
      case 'groupKickboxing':
        myModalList.appendChild(document.createElement('li')).textContent = `(Group Kickboxing Class)`;
        price += 40;
        break;
      case 'individualPilates':
        myModalList.appendChild(document.createElement('li')).textContent = `(Individual Pilates Class)`;
        price += 45;
        break;
      case 'groupPilates':
        myModalList.appendChild(document.createElement('li')).textContent = `(Group Pilates Class)`;
        price += 25;
        break;
      case 'tShirt':
        myModalList.appendChild(document.createElement('li')).textContent = `(ABC T-Shirt)`;
        price += 25;
        break;
      case 'waterBottle':
        myModalList.appendChild(document.createElement('li')).textContent = `(ABC Water Bottle)`;
        price += 25;
        break;
      case 'yogaMat':
        myModalList.appendChild(document.createElement('li')).textContent = `(ABC Yoga Mat)`;
        price += 25;
        break;
    }
    
    totalPrice.innerText = `Total Price: $${price.toFixed(2)}`;
  });
});

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
  cartButton.innerText = `Cart (${cartItemCount})`;
  myModal.querySelector('p').innerText = `Cart Items: 0`;
  myModalList.innerHTML = '';
  alert('Cart has been cleared.');
});

// Process order functionality
processOrderBtn.addEventListener('click', () => {
  if (cartItemCount === 0) {
    alert('Your cart is empty. Please add items before processing the order.');
  } else {
    alert('Your order has been processed. Thank you for shopping with us!');
    cartItemCount = 0;
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

// submit contact form alert
contactSubmitButton.addEventListener('click', function (event) {
  // event.preventDefault();
  alert('Thank you for your message');
});

// submit testimonial form alert
testimonialSubmitButton.addEventListener('click', function (event) {
  event.preventDefault();
  alert('Thank you for your testimonial');
});