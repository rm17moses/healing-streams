document.addEventListener('DOMContentLoaded', function() {
  // Initialize Materialize
  M.AutoInit();

  // Modern Video Player Config
  const player = new Plyr('.js-player', {
    controls: [
      'play-large',
      'play',
      'progress',
      'current-time',
      'mute',
      'volume',
      'fullscreen'
    ],
    tooltips: { controls: true, seek: true },
    keyboard: { focused: true, global: true }
  });

  // Smooth Button Reveal
  const buttonContainer = document.getElementById('button-container');
  
  player.on('timeupdate', event => {
    const instance = event.detail.plyr;
    if (instance.currentTime >= 30) {
      buttonContainer.style.opacity = '1';
      buttonContainer.style.transform = 'translateY(0)';
    }
  });

  // Smooth Scroll for Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections for animation
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
  });
});