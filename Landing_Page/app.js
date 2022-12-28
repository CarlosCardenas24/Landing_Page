const toggleBtn = document.getElementById('nav-burger')
const toggleNav = document.getElementById('nav-icon');
const menuItem = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menuItem.classList.toggle('show-menu')
    if (toggleNav.className === "fa-solid fa-bars") {
        toggleNav.className = "fa-solid fa-xmark fa-lg";
    } else {
        toggleNav.className = "fa-solid fa-bars";
    }
})
