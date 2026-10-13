const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function setMenu(open) {
  navLinks.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  menuToggle.textContent = open ? '✕' : '☰';
}

menuToggle?.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
window.matchMedia('(min-width: 901px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

document.getElementById('year').textContent = new Date().getFullYear();

// Subtle pointer glow for the tech cards.
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
  card.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    card.style.background = `radial-gradient(380px circle at ${e.clientX-r.left}px ${e.clientY-r.top}px, rgba(27,146,255,.08), transparent 42%), linear-gradient(145deg,#0b111b,#080c13)`;
  });
  card.addEventListener('pointerleave', () => card.style.background = '');
});
