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

// onload effects

// section-1
let sec1One = document.querySelector(".s1-one");
let sec1Two = document.querySelector(".s1-two");
// section-2	
let s2Cards = document.querySelector(".s2-crds");
let s2Heading = document.getElementById("s2-heading");
let s2After = document.querySelector(".s2-a");
let s2Before = document.querySelector(".s2-b");
// section-3
let s3Wrapper = document.querySelector(".s3-wrapper");

// section-4
const s4First = document.querySelector(".s4-one");
const s4Second = document.querySelector(".s4-two");

window.onscroll = function () {

    // section-1 text effect
    let scrolling1 = 270;
    if (scrolling1 < scrollY) {

        sec1One.style.opacity = 1;
        sec1Two.style.opacity = 1;
        sec1One.style.paddingTop = 0;
        sec1Two.style.paddingTop = 0;

    }

    // section-2 heading effect
    let scrolling2 = 800;
    if (scrolling2 < scrollY) {
        s2Heading.style.opacity = 1;
        s2After.style.right = 0;
        s2Before.style.left = 0;
        s2After.style.opacity = 1;
        s2Before.style.opacity = 1;

        setInterval(() => {
            s2After.style.transform = "rotate(40deg)";
            s2Before.style.transform = "rotate(40deg)";
        }, 500);

        setInterval(() => {
            s2After.style.display = "none";
            s2Before.style.display = "none";
        }, 1500);
    }

    let scrolling3 = 1000;
    if (scrolling3 < scrollY) {
        s2Cards.style.transform = "translateY(0)";
        s2Cards.style.opacity = 1;
    }

    // setion-3 effect
    let scrolling4 = 1600;
    if (scrolling4 < scrollY) {
        s3Wrapper.style.paddingTop = 0;
        s3Wrapper.style.opacity = 1;
    }

    // setion-4 effect

    let scrolling5 = 3000;
    if (scrolling5 < scrollY) {
        s4First.style.paddingTop = 0;
        s4First.style.opacity = 1;
        s4Second.style.opacity = 1;
    }
}

console.log(scrollY)


