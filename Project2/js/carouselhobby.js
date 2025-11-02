document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#skillsCarousel');
    const bottomTitle = document.querySelector('#bottomTitle');
    const bottomDescription = document.querySelector('#bottomDescription');
    
    // Functie om onderste tekst te updaten
    function updateBottomText() {
        const activeSlide = carousel.querySelector('.carousel-item.active');
        const title = activeSlide.getAttribute('data-bottom-title');
        const description = activeSlide.getAttribute('data-bottom-description');
        
        bottomTitle.textContent = title;
        bottomDescription.textContent = description;
    }
    
    // VOEG DEZE REGEL TOE: Update tekst bij het laden van de pagina
    updateBottomText();
    
    // Luister naar slide veranderingen
    carousel.addEventListener('slid.bs.carousel', updateBottomText);
});