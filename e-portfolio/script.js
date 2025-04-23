let menuIcon = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navmenu.classList.toggle('active');
}
