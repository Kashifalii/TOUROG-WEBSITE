// Initialize Swiper
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});

// navbar

let navBtn = document.querySelector('.offcanvas-btn');
let navContent = document.querySelector('.nav-content');

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
    if (navBtn.classList.contains('active')) {
        navContent.style.left = 0;
        navContent.style.transition = "all ease .5s";
    } else {
        navContent.style.left = "100%";
    }
});
