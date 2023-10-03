// Hier beginnt der JS code für die slides
const slider = document.querySelector('.slider');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    updateSlider();
}

function updateSlider() {
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

setInterval(nextSlide, 5000);
// Hier endet der JS Code für die Slides

// Hier beginnt der JS code für den Hamburger Menu
// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navListItems = document.querySelectorAll('.nav-links li');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navListItems.forEach(item => {
        item.style.display = navLinks.classList.contains('active') ? 'block' : 'none';
    });
});





