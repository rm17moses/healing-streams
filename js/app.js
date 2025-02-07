document.addEventListener('DOMContentLoaded', function() {
  // Initialize Materialize
  M.AutoInit();

  // Initialize Plyr
  const player = new Plyr('.js-player', {
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    tooltips: { controls: true, seek: true }
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all sections with fade-in class
  document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
  });

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add this to your existing app.js
document.getElementById('currentYear').textContent = new Date().getFullYear();
});