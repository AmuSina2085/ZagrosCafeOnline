// ==============================
// ZagrosCafeOnline Script
// ==============================

// Back To Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==============================
// Scroll Animation
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".card, .feature, .social-btn").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ==============================
// Floating Logo Effect
// ==============================

const logo = document.querySelector(".logo");

let angle = 0;

setInterval(() => {

    angle += 0.02;

    logo.style.transform =
        `translateY(${Math.sin(angle) * 6}px)`;

}, 30);
