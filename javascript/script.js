const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.navbar-items-responsive');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
})

function toggleMenu() {
    menuHamburguer.classList.toggle('change');

    nav.style.display = menuHamburguer.classList.contains('change') ? 'block' : 'none';
}

