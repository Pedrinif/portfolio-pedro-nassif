const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

// Subtle pointer glow for the tech cards.
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
  card.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    card.style.background = `radial-gradient(380px circle at ${e.clientX-r.left}px ${e.clientY-r.top}px, rgba(27,146,255,.08), transparent 42%), linear-gradient(145deg,#0b111b,#080c13)`;
  });
  card.addEventListener('pointerleave', () => card.style.background = '');
});
