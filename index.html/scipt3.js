const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name && email && message) {
    feedback.textContent = 'Thank you! Your message has been sent.';
    feedback.style.color = 'green';
    form.reset();
  } else {
    feedback.textContent = 'Please fill out all fields.';
    feedback.style.color = 'red';
  }
});