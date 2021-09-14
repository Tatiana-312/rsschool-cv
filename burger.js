let burgerButton = document.querySelector('.burger-menu-button');
let menuUl = document.querySelector('.header-menu');

burgerButton.onclick = function() {open()};


function open() {
    menuUl.classList.toggle("show");
}