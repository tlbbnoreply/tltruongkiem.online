const scrollDecorElements = document.querySelectorAll('.scroll');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const direction = currentScrollY > lastScrollY ? 1 : -1;

  scrollDecorElements.forEach(el => {
    el.style.transform = `translateY(${direction * 15}px)`;

    setTimeout(() => {
      el.style.transform = 'translateY(0)';
    }, 300);
  });

  lastScrollY = currentScrollY;
});
