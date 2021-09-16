let burgerButton = document.querySelector('.burger-menu-button');
let menuUl = document.querySelector('.header-menu');

burgerButton.addEventListener('click', () => menuUl.classList.toggle("show"));

