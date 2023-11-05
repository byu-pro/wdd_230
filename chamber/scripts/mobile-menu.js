// JavaScript to toggle mobile menu
const menuIcon = document.querySelector(".menu-icon");
const menuLinks = document.querySelector(".menu-links");

menuIcon.addEventListener("click", () => {
    menuLinks.classList.toggle("show-menu");
});

// Get a reference to the element with ID 'temperature' for 'textContent'
const temperatureElement = document.getElementById('temperature');

if (temperatureElement) {
    // Check if the element exists before accessing its 'textContent'
    temperatureElement.textContent = `Temperature: 25°F`; // Update with actual temperature value
} else {
    console.error("Element with 'temperature' not found.");
}

// Get a reference to the element with ID 'menuElementId' for 'appendChild'
const menuElement = document.getElementById('menuElementId');

if (menuElement) {
    // Check if the element exists before manipulating it
    // Your code logic here
} else {
    console.error("Element with 'menuElementId' not found.");
}

// JavaScript for scrolling
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top a').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

// JavaScript for Last Modified Date
document.addEventListener("DOMContentLoaded", function () {
    // Get the last modified date of the document
    var lastModified = new Date(document.lastModified);

    // Format the date to a user-friendly format
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = lastModified.toLocaleDateString(undefined, options);

    // Display the formatted date
    document.getElementById("lastModifiedDate").textContent = formattedDate;
});
const menu = document.querySelector('.mobile-menu-links');
if (menu.classList.contains('show-menu')) {
  // toggle code
}
// Toggle show-menu class on click
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.menu-links').classList.toggle('show-menu');
  })
