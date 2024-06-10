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

const navBtn = document.querySelector('.offcanvas-btn');
const navContent = document.querySelector('.nav-content');
const navlinks = document.querySelector('.nav-links');

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
    if (navBtn.classList.contains('active')) {
        navContent.style.left = 0;
        navContent.style.transition = "all ease 1s";
        setInterval(() => {
            navlinks.style.opacity = 1;
            navlinks.style.transform = "translateX(0px)";
            navlinks.style.transition = "all ease .5s";
        }, 1000);
    } else {
        navContent.style.left = "100%";
        navlinks.style.opacity = 0;
        navlinks.style.transform = "translateX(200px) !important";
    }
});


// text-content

let one = document.getElementById('one');

window.onload = () => {
    setInterval(() => {
        one.style.marginTop = "0";
        one.style.opacity = "1";
        one.style.transition = "all ease 2s";
    }, 2000);
}



// loader-effect

let loader = document.querySelector('.loader-wrapper');
let svg = document.querySelector('.loader');

window.addEventListener('load', () => {
    setInterval(() => {
        loader.style.display = 'none';
        loader.style.opacity = 0;
        loader.style.transition = "all ease 1s";
        loader.style.top = "-100%";
    }, 2000);

});

// section-1 text effect

let sec1Heading = document.querySelector(".s1-one");
let sec2Heading = document.querySelector(".s1-two");

console.log(scrollY)
// if (screen.height == 800) {
//     sec1Heading.style.opacity = 1;
// }

let scrolling = 270;

window.onscroll = function () {
    if (scrolling < scrollY) {

        sec1Heading.style.opacity = 1;
        sec2Heading.style.opacity = 1;
        sec1Heading.style.paddingTop = 0;
        sec2Heading.style.paddingTop = 0;

    }
}