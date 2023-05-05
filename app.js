const toggleBtn = document.querySelector('.menu__toggle'); 
const navMenu = document.querySelector('.mobileNav__menu'); 

const toggleMenu = () =>{ 
    navMenu.classList.toggle('active'); 
}

toggleBtn.addEventListener('click', toggleMenu); 