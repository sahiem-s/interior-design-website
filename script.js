let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function moveSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Set the interval for auto sliding (every 3 seconds)
setInterval(moveSlide, 3000); // Change slides every 3 seconds
