// Toggle nav links on mobile
let menuToggle = document.getElementById('menuToggle');
let navbarLinks = document.getElementById('navbarLinks');

menuToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});