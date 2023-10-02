const hamburgerIcon = document.getElementById('hamburger-icon');
const mainMenu = document.getElementById('main-menu');

hamburgerIcon.addEventListener('click', () => {
    console.log('Hamburger icon clicked'); // Debugging statement
    mainMenu.classList.toggle('show-menu');
});
