
document.addEventListener('DOMContentLoaded', () => {
  // Animate skill bars when in view
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.getAttribute('data-width');
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => {
    // Store the width in a data attribute and set width to 0 initially
    bar.setAttribute('data-width', bar.style.width);
    bar.style.width = '0';
    observer.observe(bar);
  });
});