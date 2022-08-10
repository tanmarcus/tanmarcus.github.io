// hamburger code
const hamburger = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mobile_nav.classList.toggle("active");
});

// reveal text on scroll
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

// types.html buttons
window.onload = () => {
    const popup_btns = document.querySelectorAll(".popup-button");

    popup_btns.forEach(button => {
        button.addEventListener("click", e => {
            const target = e.target.dataset.target;

            const popup_el = document.querySelector(target);
            if (popup_el != null) {
                popup_el.classList.toggle("active");
            }
        });
    });
}

// components.html auto slideshow
let counter = 1;
setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 2500);