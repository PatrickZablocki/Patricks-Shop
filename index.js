// Hier beginnt der JS code für die slides
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(function (image) {
            image.style.display = 'none';
        });
        images[index].style.display = 'block';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextSlide, 5000);
});
// Hier endet der JS Code für die Slides

// Hier beginnt der JS code für den Hamburger Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navListItems = document.querySelectorAll('.nav-links li');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navListItems.forEach(item => {
        item.style.display = navLinks.classList.contains('active') ? 'block' : 'none';
    });
});

// 





