//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    // keep the button's accessible state in sync with what is on screen
    hamburger.setAttribute('aria-expanded', String(!navMenu.classList.contains('hidden')));
});

// on mobile the menu stayed open after picking a destination, covering the
// section it had just scrolled to
navMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        if (navMenu.classList.contains('hidden')) return;
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});