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
// Add this hamburger click event listener
hamburgerIcon.addEventListener('click', () => {
    document.body.classList.toggle('active'); 
  });

// Get button 
const btn = document.getElementById("backToTop");

// When user scrolls down 20px from top show button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// Scroll to top on click
btn.addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
// JavaScript
window.onload = function() {
  var navLinks = document.querySelectorAll('nav a');
  var currentPage = window.location.href;
  navLinks.forEach(function(link) {
      if (link.href === currentPage) {
          link.classList.add('active');
      }
  });
};
window.onload = function() {
  var lastModified = document.querySelector('#lastModified');
  if (lastModified) {
      lastModified.textContent = 'Last Modified: ' + document.lastModified;
  }
};
