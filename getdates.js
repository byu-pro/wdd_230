// Get references to the elements
const hamburgerIcon = document.getElementById('hamburger-icon');
const mainMenu = document.getElementById('main-menu');

// Add a click event listener to the hamburger icon
hamburgerIcon.addEventListener('click', () => {
    // Toggle the 'show-menu' class to show/hide the menu
    mainMenu.classList.toggle('show-menu');
    
    // You can add additional code here to handle menu behavior
    // For example, you can close the menu when a menu item is clicked
    // or perform other actions based on user interactions.
});
console.log('This is a debug message');



