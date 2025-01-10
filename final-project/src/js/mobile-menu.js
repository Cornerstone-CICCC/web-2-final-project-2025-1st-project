document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateX(0)';
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateX(-100%)';
  });
});