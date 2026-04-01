
document.addEventListener('DOMContentLoaded', function () {
  const qualitySection = document.querySelector('.section_quality');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('.quality_headliner').classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(qualitySection);
});