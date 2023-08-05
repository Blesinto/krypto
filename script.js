// Design by Blesinto 
let loader = document.getElementById("preload");
const menuBar = document.querySelector(".menu__bar");
const navLinks = document.querySelector(".nav__links");
const buy = document.querySelector("#buy");
const buy__scroll = document.querySelector(".btn__buy");
const contact = document.querySelector("#contact");
const contact__scroll = document.querySelector(".btn__contact");
const price = document.querySelector("#price");
const price__scroll = document.querySelector(".btn__price");
const header = document.querySelector(".header");


// preloader
setTimeout(() => {
    loader.style.display = "none"
}, 3000)

// toggle navbar 
menuBar.addEventListener("click",()=>{
    navLinks.classList.toggle("show")
})
// scroll 
buy__scroll.addEventListener("click", () => {
    buy.scrollIntoView({
        behavior: 'smooth'
    });
})
contact__scroll.addEventListener("click", () => {
    contact.scrollIntoView({
        behavior: 'smooth'
    });
})
price__scroll.addEventListener("click", () => {
    price.scrollIntoView({
        behavior: 'smooth'
    });
})