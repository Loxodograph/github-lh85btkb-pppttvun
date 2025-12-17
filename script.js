const newsletterSubmitButton = document.querySelector('#newsletter-btn');

newsletterSubmitButton.addEventListener('click', function(event) {
  event.preventDefault();
  alert('Thank you for subscribing to our newsletter!');
});