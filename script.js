document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const sections = document.querySelectorAll('section');
  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
});
