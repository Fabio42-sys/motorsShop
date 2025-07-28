import Swal from 'sweetalert2';

// js for input email

document.getElementById('login').addEventListener('focus', () => {
    document.getElementById('input').classList.add('alignFocus')
});
document.getElementById('login').addEventListener('blur', () => {
    document.getElementById('input').classList.remove('alignFocus')
});

// js for slider

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.sliderCard');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const cardsPerPage = 4;
const totalSlides = slides.length;
let currentPage = 0;

function updateSlider() {
    const cardWidth = slides[0].offsetWidth + parseFloat(getComputedStyle(slider).gap);
    const offset = cardWidth * cardsPerPage * currentPage;
    slider.style.transform = `translateX(-${offset}px)`;
}

next.addEventListener('click', () => {
    const maxPage = Math.floor((totalSlides - 1) / cardsPerPage);

    if (currentPage >= maxPage) {
        currentPage = 0;
    } else {
        currentPage++;
    }

    updateSlider();
});

prev.addEventListener('click', () => {
    const maxPage = Math.floor((totalSlides - 1) / cardsPerPage);

    if (currentPage <= 0) {
        currentPage = maxPage;
    } else {
        currentPage--;
    }

    updateSlider();
});

// Recalcular em resize (opcional)
window.addEventListener('resize', updateSlider);

// js for likes

const hearts = document.querySelectorAll('.icon i');

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('favorited');
    });
});

// js for add item to cart

function abrirAlerta() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "O item foi adicionado ao carrinho",
        showConfirmButton: false,
        timer: 1600
    });
}

const add = document.querySelectorAll('.addCard');

add.addEventListener('click', abrirAlerta());