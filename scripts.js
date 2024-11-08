const menuToggle = document.getElementById('menu-toggle');
const headerNav = document.querySelector('.header__nav');

menuToggle.addEventListener('click', (e) => {
    if (headerNav.style.display === 'block') {
        headerNav.style.display = 'none';
        e.target.classList.remove("fa-xmark");
        e.target.classList.add("fa-bars");
    } else {
        headerNav.style.display = 'block';
        e.target.classList.remove("fa-bars");
        e.target.classList.add("fa-xmark");
    }
});

// Reset nav on window resize for responsive behavior
// window.addEventListener('resize', () => {
//     if (window.innerWidth >= 998) {
//         headerNav.style.display = 'flex';
//         menuToggle.classList.remove("fa-xmark");
//         menuToggle.classList.add("fa-bars");
//     } else {
//         headerNav.style.display = 'none';
//         menuToggle.classList.remove("fa-xmark");
//         menuToggle.classList.add("fa-bars");
//     }
// });
