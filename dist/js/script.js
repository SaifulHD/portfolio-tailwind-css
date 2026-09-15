// Mobile menu. The header is sticky in CSS, so there is no scroll handler
// here — nothing on this page needs to animate itself as you scroll.
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

function setMenu(open) {
    navMenu.classList.toggle('hidden', !open);
    hamburger.classList.toggle('hamburger-active', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
}

hamburger.addEventListener('click', function () {
    setMenu(navMenu.classList.contains('hidden'));
});

// Picking a destination should close the menu covering it.
navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        if (!navMenu.classList.contains('hidden')) setMenu(false);
    });
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !navMenu.classList.contains('hidden')) {
        setMenu(false);
        hamburger.focus();
    }
});
