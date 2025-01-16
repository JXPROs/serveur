// Initialize Lucide icons
lucide.createIcons();

// Navigation active state
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Skip for search button
    if (item.classList.contains('search-btn')) return;
    
    // Remove active class from all items
    navItems.forEach(navItem => navItem.classList.remove('active'));
    // Add active class to clicked item
    item.classList.add('active');
  });
});