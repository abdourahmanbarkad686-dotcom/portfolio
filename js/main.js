// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 500);
});

// ===== TYPING EFFECT =====
document.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.querySelector('.typing');
  if (typingElement) {
    const words = ["Full Stack Developer", "System Architect", "UI/UX Designer"];
    let wordIndex = 0, charIndex = 0, isDeleting = false;
    function type() {
      const current = words[wordIndex];
      if (isDeleting) {
        typingElement.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }
      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => isDeleting = true, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(type, isDeleting ? 80 : 150);
    }
    type();
  }
});

// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

// ===== INTERSECTION OBSERVER FOR SCROLL REVEAL =====
document.addEventListener('DOMContentLoaded', () => {
  const hiddenElements = document.querySelectorAll('.hidden');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });
  hiddenElements.forEach(el => observer.observe(el));
});

// ===== BACK TO TOP =====
window.addEventListener('scroll', () => {
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
  }
});
document.getElementById('back-to-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== DARK MODE TOGGLE =====
document.addEventListener('DOMContentLoaded', () => {
  const darkToggle = document.getElementById('dark-mode-toggle');
  darkToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    darkToggle.textContent = isLight ? '☀️ Light' : '🌙 Dark';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
  // Apply saved theme
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    if (darkToggle) darkToggle.textContent = '☀️ Light';
  }
});

// ===== ACTIVE NAV LINK =====
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});