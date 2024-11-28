let currentSlide = 0;

const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Cacher toutes les slides
    slides.forEach(slide => slide.style.display = 'none');

    // Afficher la slide actuelle
    slides[currentSlide].style.display = 'block';
}

// Fonction pour changer de slide
function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Initialiser le carrousel en affichant la première slide
showSlide(currentSlide);

// Sélectionner les éléments
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

// Ajouter l'événement de clic sur le menu hamburger
mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
