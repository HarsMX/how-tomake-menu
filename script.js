const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');

    // Smooth transition untuk tinggi menu
    if (menu.classList.contains('active')) {
        menu.style.maxHeight = menu.scrollHeight + "px";
    } else {
        menu.style.maxHeight = null;
    }
});
