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