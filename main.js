// MENU FIXE

window.onscroll = () => {

    if (document.documentElement.scrollTop > 60) {
        document.querySelector("header").style.background = "white";
        document.querySelector("header").style.border = "1px solid black";
    } else {
        document.querySelector("header").style.background = "#D5DEE7";
        document.querySelector("header").style.border = "none";
    }
    
}

// MENU RESPONSIVE

const icon = document.querySelector("#icon");

icon.addEventListener("click", () => {

    // Selectionner le premier élément de la nav
    let element = document.querySelector("nav");
    let goodElement = element.firstElementChild;
    console.log(goodElement);

    // Si le premier élément a la classe .top-bar,

    if (goodElement.classList.contains("top-bar")) {
        // La remplacer par la classe .show-mobile-nav
        goodElement.classList.replace("top-bar", "show-mobile-nav");
    } else {
        goodElement.classList.replace("show-mobile-nav", "top-bar");
    }
    
    // Sinon, supprimer la classe et la remplacer par .top-bar

})
    

// APPARITION DES SECTIONS CACHÉES DANS INDEX.HTML

const secondSection = document.querySelector('#section-colored');
const thirdSection = document.querySelector('#third-section');
const footer = document.querySelector('#index-footer');
const template = document.querySelector('#first-section');
const height = template.clientHeight;

// Apparition du bloc secondSection

window.addEventListener("scroll", () => {
    if (window.scrollY > height) {
        secondSection.classList.add('show-section');
        console.log(secondSection);
    } else {
        secondSection.classList.remove('show-section');
    }
});

// Apparition du bloc thirdSection

window.addEventListener('scroll', () => {
    if (window.scrollY > height * 2) {
        thirdSection.classList.add('show-section');
    } else {
        thirdSection.classList.remove('show-section');
    }
});