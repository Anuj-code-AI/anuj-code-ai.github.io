// =============================================
// NAV SCROLL BEHAVIOR
// =============================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// =============================================
// MOBILE MENU
// =============================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  const isOpen = mobileMenu.classList.contains('open');
  spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity = isOpen ? '0' : '1';
  spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

// Close on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
  });
});

// =============================================
// SCROLL REVEAL
// =============================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// =============================================
// SMOOTH SCROLL FOR NAV LINKS
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// =============================================
// CONTACT FORM (mailto fallback)
// =============================================
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:achourasiyaanuj@gmail.com?subject=${subject}&body=${body}`;
  });
}

// =============================================
// TYPING EFFECT FOR HERO SUBTITLE
// =============================================
const roles = ['Backend Developer', 'Java Engineer', 'Spring Boot Developer', 'Systems Builder'];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const heroSub = document.querySelector('.hero-sub');
if (heroSub) {
  // Create a span for the animated role text
  const roleSpan = document.createElement('span');
  roleSpan.className = 'role-text';
  roleSpan.style.cssText = 'color: var(--purple-light); font-weight: 600; border-right: 2px solid var(--purple); padding-right: 2px;';
  heroSub.insertBefore(roleSpan, heroSub.firstChild);

  function typeRole() {
    const currentRole = roles[roleIndex];
    if (!deleting) {
      roleSpan.textContent = currentRole.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentRole.length) {
        deleting = true;
        setTimeout(typeRole, 2000);
        return;
      }
    } else {
      roleSpan.textContent = currentRole.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeRole, deleting ? 50 : 90);
  }
  // Remove the span after setup — hero already has good content, skip this feature for cleanliness
  heroSub.removeChild(roleSpan);
}

// =============================================
// PARALLAX BLOBS ON MOUSE MOVE
// =============================================
const blobs = document.querySelectorAll('.blob');
let mouseX = 0, mouseY = 0;
let currentX = [0, 0, 0], currentY = [0, 0, 0];
const factors = [0.012, 0.018, 0.022];

document.addEventListener('mousemove', e => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 100;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 100;
}, { passive: true });

function animateBlobs() {
  blobs.forEach((blob, i) => {
    currentX[i] += (mouseX * factors[i] - currentX[i]) * 0.05;
    currentY[i] += (mouseY * factors[i] - currentY[i]) * 0.05;
    blob.style.transform = `translate(${currentX[i]}px, ${currentY[i]}px)`;
  });
  requestAnimationFrame(animateBlobs);
}
animateBlobs();

// =============================================
// ACTIVE NAV LINK HIGHLIGHT
// =============================================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = '';
        if (a.getAttribute('href') === `#${entry.target.id}`) {
          a.style.color = 'var(--text-primary)';
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -40% 0px' });

sections.forEach(s => sectionObserver.observe(s));