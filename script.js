<script>
  document.addEventListener("DOMContentLoaded", () => {
    const schedules = document.querySelectorAll('.schedule');
  
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active'); // Activates fade-up
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    schedules.forEach((item) => {
      appearOnScroll.observe(item);
    });
  });
</script>

