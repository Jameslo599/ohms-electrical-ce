document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target); // Remove if you only want it once
        }
      });
    },
    { threshold: 0.4 } // trigger when 10% of element is visible
  );

  elements.forEach((el) => observer.observe(el));
});
