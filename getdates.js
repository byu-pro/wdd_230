// JavaScript for Hamburger Menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const mainMenu = document.getElementById('main-menu');

hamburgerIcon.addEventListener('click', () => {
    mainMenu.classList.toggle('show-menu');
});
