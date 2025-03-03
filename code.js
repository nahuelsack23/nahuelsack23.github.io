AOS.init();
document.addEventListener("DOMContentLoaded", function () {
    const navBoton = document.querySelector(".navBoton");
    const navUl = document.querySelector(".nav-ul");

    navBoton.addEventListener("click", function () {
        navUl.classList.toggle("active");
    });
});