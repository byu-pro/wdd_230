// JavaScript for the hamburger menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const navMenu = document.querySelector('nav ul');

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
});

function hideMenuOnLargeScreen() {
    if (window.innerWidth >= 768) {
        hamburgerIcon.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

hideMenuOnLargeScreen();

window.addEventListener('resize', hideMenuOnLargeScreen);
