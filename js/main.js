// Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Services section - Modal 

// Portafolio section - Modal 
const portfolioModals = document.querySelectorAll(".porfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

// Our clients - Swiper

// Website dark/ligth theme

// Scroll to top buttom

// Navigation menu items active on page scroll

// Responsive navigation menu toggle

// Scroll reveal animations
// Common reveal options to create reveal animations

// Target ElementInternals, and specify options to create reveal animations