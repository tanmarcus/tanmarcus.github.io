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
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {

        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}

// types.html buttons
window.onload = () => {
    // get const of all popup buttons
    const popup_btns = document.querySelectorAll(".popup-button");

    popup_btns.forEach(button => {
        button.addEventListener("click", e => {
            const target = e.target.dataset.target;

            const popup_el = document.querySelector(target);
            // if popup exists, toggle popup to active
            if (popup_el != null) {
                popup_el.classList.toggle("active");
            }
        });
    });
}

// components.html auto slideshow
// change slider every 2.5s
let counter = 1;
setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 2500);