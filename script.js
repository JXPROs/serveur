lucide.createIcons();

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
let isMenuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  mobileMenu.classList.toggle('active');
  
  // Change menu icon when opened/closed
  const menuIcon = mobileMenuBtn.querySelector('i');
  menuIcon.setAttribute('data-lucide', isMenuOpen ? 'x' : 'menu');
  lucide.createIcons();
});