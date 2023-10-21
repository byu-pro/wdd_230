// Get references to the elements
const hamburgerIcon = document.getElementById('hamburger-icon');
const navMenu = document.querySelector('nav ul');

// Add a click event listener to the hamburger icon
hamburgerIcon.addEventListener('click', () => {
    // Toggle the 'active' class on the hamburger icon
    hamburgerIcon.classList.toggle('active');
    
    // Toggle the visibility of the navigation menu
    navMenu.classList.toggle('active');
});

// Function to hide the menu on larger screens
function hideMenuOnLargeScreen() {
    if (window.innerWidth >= 768) {
        hamburgerIcon.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// Hide the menu initially on larger screens
hideMenuOnLargeScreen();

// Add a resize event listener to handle screen size changes
window.addEventListener('resize', hideMenuOnLargeScreen);
