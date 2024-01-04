const hamburger = document.getElementById("hamburger");
const header = document.querySelector(".header");
const meobileMenu = document.querySelector(".mobile-menu");
hamburger.addEventListener('click', function () {
    meobileMenu.style.left = "0%";
    header.style.overflow = "visible";
});

const closeBtn = document.querySelector('.fa-xmark');
closeBtn.addEventListener('click', () => {
    meobileMenu.style.left = "100%";
    setTimeout(() => {
        header.style.overflow = "hidden";
    }, 700);
});

