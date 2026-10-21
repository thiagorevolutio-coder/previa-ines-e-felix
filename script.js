const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav');
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); menu.classList.toggle('is-open', !open); });
menu.addEventListener('click', e => { if (e.target.closest('a')) { menu.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); } });
document.querySelector('#year').textContent = new Date().getFullYear();

// Conteúdo permanece visível sem JavaScript, sem IntersectionObserver ou com movimento reduzido.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const items = document.querySelectorAll('.hero-copy, .hero-art, .statement, .section-head, .service, .gallery figure, .team-photo, .team-copy, .location-card, .location-image, .closing');
  try {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.05, rootMargin: '0px 0px -25px 0px' });
    items.forEach(item => { item.classList.add('reveal'); observer.observe(item); });
    document.documentElement.classList.add('js');
  } catch (_) { document.documentElement.classList.remove('js'); }
}
