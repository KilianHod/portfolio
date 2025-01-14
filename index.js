const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slider-item');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentSlide = 0;
let autoSlideInterval;
let userInteracted = false;

// Fonction pour afficher le slide suivant
function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
}

// Fonction pour afficher le slide précédent
function showPreviousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlidePosition();
}

// Fonction pour mettre à jour la position du slider
function updateSlidePosition() {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Fonction pour arrêter temporairement le défilement automatique
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    userInteracted = true; // Indique que l'utilisateur a interagi
    setTimeout(() => {
        userInteracted = false;
        startAutoSlide(); // Redémarre le défilement automatique après 10 secondes
    }, 10000); // Temps d'attente avant de redémarrer (10 secondes)
}

// Écouteurs pour les flèches
rightArrow.addEventListener('click', () => {
    showNextSlide();
    resetAutoSlide(); // Arrête temporairement l'automatisation
});

leftArrow.addEventListener('click', () => {
    showPreviousSlide();
    resetAutoSlide(); // Arrête temporairement l'automatisation
});

// Défilement automatique
function startAutoSlide() {
    if (!userInteracted) {
        autoSlideInterval = setInterval(showNextSlide, 3000);
    }
}

// Démarrer le défilement automatique au chargement
startAutoSlide();







// Sélectionne l'élément de la barre de navigation
const nav = document.querySelector('nav');

// Hauteur initiale de la barre
const initialHeight = 80; // hauteur de la barre au début
const reducedHeight = 50; // hauteur réduite lors du défilement

// Fonction qui ajuste la hauteur de la barre de navigation en fonction du défilement
function adjustNavHeight() {
    if (window.scrollY > 50) { // Si l'utilisateur a fait défiler de plus de 50px
        nav.style.height = `${reducedHeight}px`; // Réduit la hauteur
    } else {
        nav.style.height = `${initialHeight}px`; // Restaure la hauteur initiale
    }
}

// Écoute l'événement de défilement
window.addEventListener('scroll', adjustNavHeight);





// Ajoute un décalage lors du clic sur les liens de navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut
        const targetId = this.getAttribute('href').substring(1); // Obtient l'id de la section cible
        const targetElement = document.getElementById(targetId);
        const offset = 80; // Hauteur de la barre de navigation
        const targetPosition = targetElement.offsetTop - offset; // Calcule la position ajustée

        // Défilement fluide vers la position ajustée
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

