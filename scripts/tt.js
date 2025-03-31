// Select elements
let clickCount = 0;
const button = document.querySelector('.birthday-button');
const birthdayText = document.querySelector('.birthday-text');
const birthdaySubtext = document.querySelector('.birthday-subtext');
const balloons = document.querySelector('.balloons');

// Add event listener to the button
button.addEventListener('click', () => {
  clickCount++;

  if (clickCount === 3) {
    // Show the birthday wish and balloons after 3 clicks
    birthdayText.style.display = 'block';
    birthdaySubtext.style.display = 'block';
    balloons.style.display = 'block';
    button.textContent = "🎉 Enjoy the Celebration!";
    button.disabled = true; // Disable the button after the wish is shown
  } else {
    button.textContent = `Click Me! (${3 - clickCount} left)`;
  }
});