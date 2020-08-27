const navSlide = () => {
    // DOM Elements
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    const nav__links = document.querySelectorAll('.nav__links li');

    burger.addEventListener('click', () => {
        // Toggle Nav for Mobile
        nav.classList.toggle('navActive');

        // Animate Links
        nav__links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        // Burger/Close Button Animation
        burger.classList.toggle('toggleOpenClose');
    });
}

navSlide();
