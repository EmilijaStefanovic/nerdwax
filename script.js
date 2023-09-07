document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('nav');
  const navLinks = navbar.querySelectorAll('a');
  const sections = document.querySelectorAll('.section');

  navLinks[0].classList.add('active');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      navLinks.forEach((l) => l.classList.remove('active'));

      sections.forEach((sec) => {
        sec.style.display = 'none';
        sec.style.opacity = '0';
        sec.style.pointerEvents = 'none';
      });

      link.classList.add('active');

      const targetSection = document.querySelector(link.getAttribute('href'));
      targetSection.style.display = 'flex';
      setTimeout(() => {
        targetSection.style.opacity = '1';
        targetSection.style.pointerEvents = 'auto';
      }, 10);
    });
  });
});

function classToggle() {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((nav) => {
    nav.classList.toggle('navbar-toggleShow');
  });
}

document.querySelector('.toggle-btn').addEventListener('click', classToggle);
