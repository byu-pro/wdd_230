// JavaScript to toggle mobile menu
const menuIcon = document.querySelector(".menu-icon");
const menuLinks = document.querySelector(".menu-links");

menuIcon.addEventListener("click", () => {
    menuLinks.classList.toggle("show-menu");
});
// Get a reference to the <ul> element for learning activities
const learningActivitiesList = document.getElementById('learningActivities');

// Define an array of learning activity links and their corresponding URLs
const learningActivities = [
  { text: 'CSS Pseudo-elements', url: 'https://codepen.io/byu-pro/pen/mdaLrJo' },
  { text: 'Link to W3Schools Combinator Exercise Screenshot', url: 'https://drive.google.com/file/d/1O65JeqW0WAEdwEau996QuovHaj-yvufw/view?usp=sharing' },
  { text: 'Link to Responsive "Hamburger" Menu Exercise', url: 'https://codepen.io/byu-pro/pen/wvRjzEW' },
  { text: 'CSS Pseudo-Classes W04 code pen', url: 'https://codepen.io/byu-pro/pen/dywQMKj' }
];

// Populate the learning activities list
learningActivities.forEach(activity => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.textContent = activity.text;
  link.href = activity.url;
  listItem.appendChild(link);
  learningActivitiesList.appendChild(listItem);
});
// Get references to the elements for weather and visits
const weatherElement = document.getElementById('weather');
const visitsElement = document.getElementById('visits');

// Simulate dynamic data (you can replace this with real data)
const weatherData = '☀️ 25°C';
const visitsData = '🔢 150';

// Populate the weather and visits information
weatherElement.textContent = `Weather: ${weatherData}`;
visitsElement.textContent = `Visits: ${visitsData}`;
// Example JavaScript to update weather and temperature icons
const weatherIconElement = document.getElementById('weather-icon');
const weatherCondition = 'rain'; // Replace with actual weather condition
const temperatureElement = document.getElementById('temperature');
const temperature = '25°C'; // Replace with actual temperature

// Update weather icon based on conditions
if (weatherCondition === 'rain') {
    weatherIconElement.className = 'fas fa-cloud-rain'; // Replace with the appropriate class
} else if (weatherCondition === 'sun') {
    weatherIconElement.className = 'fas fa-sun'; // Replace with the appropriate class
}

// Update temperature
temperatureElement.textContent = `Temperature: ${temperature}`;
