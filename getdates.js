// JavaScript for the "Back to Top" button
const backToTopButton = document.getElementById('back-to-top-button');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

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

