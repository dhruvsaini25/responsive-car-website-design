document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.getElementById("nav-menu"),
        navToggle = document.getElementById("nav-toggle"),
        navClose = document.getElementById("nav-close");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu");
        });
    }

    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        });
    }
});

// remove menu
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// swiper car
const swiperHome = new Swiper('.home__swiper', {

    speed: 1200,
    effect: 'fade',
    // loop: true,

    // pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
            return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
        },
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     renderBullet: (index, className) => {
    //         return `<span class="${className}">${index + 1}</span>`;
    //     },
    // },
});

//gsap animation
gsap.from('.home__panel-1', {y: -1000, duration: 2})
gsap.from('.home__panel-2', {y: 1000, duration: 2})
gsap.from('.home__image', {x: 1000, duration: 2})
gsap.from('.home__titles', {y: 100, opacity:0, delay: 2})
gsap.from('.home__title', {y: 100, opacity: 0, duration: 2.1})

//blur header
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
