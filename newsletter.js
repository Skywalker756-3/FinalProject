// General script
function navigateTo(url) {
  window.location.href = url; // Redirects to the specified URL
}
// Toggle the navigation links when the hamburger button is clicked
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.getElementById('news-signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form from being submitted

    // Retrieve form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log the form data
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Message:', message);

    // Displaying the thank you message
    const thankYouMessage = document.getElementById('thankYouMessage');
    const userFirstName = document.getElementById('userFirstName');
    userFirstName.textContent = firstName; // Insert the first name into the message
    thankYouMessage.classList.remove('hidden'); // Show the pop-up

    this.reset(); // Reset form

    // Hide the pop up after 5 seconds
    setTimeout(() => {
        thankYouMessage.classList.add('hidden');
    }, 5000);
});

// For the GIF slider functionality
let currentSlide = 0; 
const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

// Function to move to the next GIF
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; 
    const offset = -currentSlide * 100; 
    slider.style.transform = `translateX(${offset}%)`; 
}

// Automatically slide GIF's every 4 seconds
setInterval(nextSlide, 4000);
