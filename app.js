const navMenu = document.querySelector('.nav__menu'); 
const menuToggle = document.querySelector('.menu__toggle'); 

menuToggle.addEventListener('click', () => { 
    navMenu.classList.toggle('active'); 
})