  // Smooth scroll to section
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  // Animated navbar background on scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.background = '#000';
      header.style.transition = 'background 0.5s ease';
    } else {
      header.style.background = '#1a1a1a';
    }
  });
  window.addEventListener('')
