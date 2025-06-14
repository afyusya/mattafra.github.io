<script>
  document.addEventListener("DOMContentLoaded", () => {
    const fadeUps = document.querySelectorAll('.fade-up');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active'); // activate fade-up
        }
      });
    }, options);

    fadeUps.forEach(el => {
      observer.observe(el);
    });
  });
</script>
