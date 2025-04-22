let selectedResponse = null;
const buttons = document.querySelectorAll('.rsvp-options button');

function setResponse(value, event) {
    document.getElementById('rsvp-response').value = value;
  
    // Button styles
    document.querySelectorAll('.rsvp-options button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  
    const guestContainer = document.getElementById('guest-count-container');
    const guestCount = document.getElementById('guest-count');
  
    if (value === 'Yes' || value === 'Maybe') {
      guestContainer.style.display = 'block';
      guestCount.value = 1;
      document.getElementById('guest-count-display').textContent = 1;
    } else {
      guestContainer.style.display = 'none';
      guestCount.value = 0;
    }
  }
  
  function changeGuestCount(change) {
    const display = document.getElementById('guest-count-display');
    const hiddenInput = document.getElementById('guest-count');
    let currentCount = parseInt(display.textContent);
  
    currentCount += change;
    if (currentCount < 1) currentCount = 1;
  
    display.textContent = currentCount;
    hiddenInput.value = currentCount;
  }

const form = document.getElementById('rsvp-form');
form.addEventListener('submit', async function (e) {
  e.preventDefault();

//   if (!selectedResponse) {
//     alert('Please select your RSVP response.');
//     return;
//   }

  const formData = new FormData(form);
  const jsonData = { data: Object.fromEntries(formData.entries()) };

  try {
    await fetch("https://sheetdb.io/api/v1/doeg9jbfi01hr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData)
    });

    form.style.display = "none";
    document.getElementById("thank-you").style.display = "block";
  } catch (error) {
    alert('Error submitting RSVP: ' + error.message);
  }
});
