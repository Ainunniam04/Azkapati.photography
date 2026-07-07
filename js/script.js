// ===== Animasi scroll-reveal =====
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// ===== Navbar mengecil saat scroll =====
const navbarEl = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbarEl.classList.toggle('is-scrolled', window.scrollY > 40);
});

// ===== Menu mobile toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Tahun otomatis di footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Form kontak =====
// Form ini mengarahkan pesan customer otomatis ke WhatsApp Anda.
// GANTI nomor di bawah ini dengan nomor WhatsApp bisnis Anda (format: kode negara tanpa +, tanpa spasi/strip).
const WA_NUMBER = '6285713221231';

const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get('name');
  const reach = data.get('reach');
  const date = data.get('date');
  const message = data.get('message');

  const waText = encodeURIComponent(
    `Halo Azkapati Studio, saya ${name} (${reach}).\nTanggal pernikahan: ${date}\nPesan: ${message}`
  );

  formNote.textContent = `Terima kasih, ${name}! Anda akan diarahkan ke WhatsApp untuk menyelesaikan pengiriman pesan...`;

  window.open(`https://wa.me/${WA_NUMBER}?text=${waText}`, '_blank');

  contactForm.reset();
});
