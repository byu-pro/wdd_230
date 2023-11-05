// Get last visit date
const lastVisit = localStorage.getItem('last-visit');

// Calculate days since last visit
const daysSinceLastVisit = Math.round((Date.now() - lastVisit) / 86400000);

// Display message 
let message;
if (daysSinceLastVisit === 0) {
  message = 'Welcome back!';
} else if (daysSinceLastVisit === 1) {
  message = 'You visited yesterday.';
} else {
  message = `You last visited ${daysSinceLastVisit} days ago.`; 
}

document.querySelector('.sidebar p').textContent = message;

// Lazy loading
const images = document.querySelectorAll('img');

const lazyLoad = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target); 
    }
  });
}

const observer = new IntersectionObserver(lazyLoad, {
  rootMargin: '0px 0px 50px 0px'
});

images.forEach(img => {
  observer.observe(img); 
});