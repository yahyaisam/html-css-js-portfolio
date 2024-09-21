function toggleMenu() {
    const menu = document.querySelector('.menu-links'); // Get the menu element
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
