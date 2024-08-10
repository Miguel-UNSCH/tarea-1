// Obtener el botón
let mybutton = document.getElementById("backToTopBtn");

// Mostrar el botón cuando se haga scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Función para volver al inicio de la página
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// navbar
const navbar = document.getElementById("navbar");
const bars = document.getElementById("bars");
const close = document.getElementById("close");
const item = document.querySelectorAll("#item")

// oclutar el navbar al hacer click en cualquiera de los itemes del navbar
item.forEach(element => {
    element.addEventListener("click", () => {
        navbar.classList.remove("navbar-mobile");
        bars.style.display = "block";
        close.style.display = "none";
    })
});

// mostrar el navbar 
bars.addEventListener("click", () => {
    bars.style.display = "none";
    close.style.display = "block";
    navbar.classList.add("navbar-mobile")
});

// ocultar el navbar
close.addEventListener("click", () => {
    close.style.display = "none";
    bars.style.display = "block";
    navbar.classList.remove("navbar-mobile")
});
