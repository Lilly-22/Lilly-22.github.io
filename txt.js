// Variables pour les slides et la navigation
let currentSlide = 0;
const slides = document.querySelectorAll('.veille-slider .slide');
const totalSlides = slides.length;
const slider = document.querySelector('.veille-slider');

// Fonction pour afficher une slide spécifique
function showSlide(index) {
    // Si l'index est supérieur ou égal au nombre de slides, on le remet à zéro
    if (index >= totalSlides) {
        currentSlide = 0;
    }

    // Si l'index est inférieur à 0, on va à la dernière slide
    if (index < 0) {
        currentSlide = totalSlides - 1;
    }

    // Déplace les slides
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Fonction pour déplacer à la slide suivante ou précédente
function moveSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
}

// Afficher la première slide au début
showSlide(currentSlide);

// Événements pour les boutons de navigation
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
