document.getElementById('rsvp-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const guests = document.getElementById('guests').value;
  const email = document.getElementById('email').value;

  // Simulate RSVP submission
  document.getElementById('response-message').textContent = `Thanks, ${name}! Your RSVP for ${guests} guest(s) has been received. 🎈`;

  // Reset form
  this.reset();
});