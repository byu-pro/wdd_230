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

// JavaScript for changing the nav link color
window.onload = function() {
  var navLinks = document.querySelectorAll('nav a');
  var currentPage = window.location.href;
  navLinks.forEach(function(link) {
      if (link.href === currentPage) {
          link.classList.add('active');
      }
  });

  // JavaScript for updating the last modified date
  var lastModified = document.querySelector('#lastModified');
  if (lastModified) {
      lastModified.textContent = 'Last Modified: ' + document.lastModified;
  }

  // JavaScript for the page visits counter
  var count = localStorage.getItem('pageVisitCount');
  if (!count) {
      count = 0;
  }
  count++;
  localStorage.setItem('pageVisitCount', count);
  var counterElement = document.querySelector('#visitCounter');
  if (counterElement) {
      counterElement.textContent = 'Page Visits: ' + count;
  }

  // JavaScript for fetching location and weather data
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // Fetch location data from OpenCageData
        fetch('https://api.opencagedata.com/geocode/v1/json?q=' + lat + '+' + lon + '8aed07189e2b4b2f900faac0d8568b93')
            .then(response => response.json())
            .then(data => {
                var locationElement = document.querySelector('#location');
                if (locationElement) {
                    locationElement.textContent = 'Location: ' + data.results[0].components.city + ', ' + data.results[0].components.country;
                }
            });

        // Fetch weather data from OpenWeatherMap
        fetch('https://api.opencagedata.com/geocode/v1/json?' + lat + '&lon=' + lon + '&appid=YOUR_OPENWEATHERMAP_API_KEY')
            .then(response => response.json())
            .then(data => {
                var weatherElement = document.querySelector('#weather');
                if (weatherElement) {
                    weatherElement.textContent = 'Weather: ' + data.weather[0].description;
                }
            });
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
};
