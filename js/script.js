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

// Tutup menu mobile saat salah satu link diklik
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Tahun otomatis di footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Form kontak =====
// CATATAN UNTUK PEMILIK WEBSITE:
// Form ini belum terhubung ke layanan pengiriman email apa pun.
// Untuk membuat form ini benar-benar mengirim pesan, pilih salah satu:
//   1) Gunakan layanan seperti Formspree / Getform / Web3Forms (gratis, tanpa backend).
//   2) Arahkan tombol "Kirim Pesan" langsung ke WhatsApp (lihat contoh di bawah).
// Untuk saat ini, form akan menampilkan pesan konfirmasi saja.
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get('name');
  const reach = data.get('reach');
  const date = data.get('date');
  const message = data.get('message');

  // Contoh alternatif: arahkan otomatis ke WhatsApp dengan pesan terisi.
  // Hapus komentar di bawah ini dan sesuaikan nomor WhatsApp jika ingin memakai cara ini:
  //
  // const waNumber = '6281234567890';
  // const waText = encodeURIComponent(
  //   `Halo Kanya Studio, saya ${name} (${reach}).\nTanggal pernikahan: ${date}\nPesan: ${message}`
  // );
  // window.open(`https://wa.me/${waNumber}?text=${waText}`, '_blank');

  formNote.textContent = `Terima kasih, ${name}! Pesan Anda telah dicatat. Kami akan segera menghubungi Anda melalui ${reach}.`;
  contactForm.reset();
});

