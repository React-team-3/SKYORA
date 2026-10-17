const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const formMessage = document.getElementById('formMessage');

newsletterForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const emailValue = newsletterEmail.value.trim();
  const isValidEmail = emailValue.includes('@') && emailValue.includes('.');

  if (!emailValue || !isValidEmail) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.className = 'text-danger mt-2 d-block small';
  } else {
    formMessage.textContent = '✓ Successfully subscribed to travel deals!';
    formMessage.className = 'text-success mt-2 d-block small';
    newsletterEmail.value = '';
  }
});