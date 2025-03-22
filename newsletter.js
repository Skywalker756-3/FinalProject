let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    const totalSlides = slides.length;
    currentIndex = (index + totalSlides) % totalSlides; // Loop through slides
    const offset = -currentIndex * 100; // Calculate offset
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Changes slides every 3 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

// Initial display
showSlide(currentIndex);


document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can handle the form data, e.g., send it to a server
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, reset the form after submission
    this.reset();
});
