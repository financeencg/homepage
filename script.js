// script.js

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive navigation menu toggle
const navToggle = document.createElement('div');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('header .container').appendChild(navToggle);

const nav = document.querySelector('nav ul');
navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
});

// Hide/show header on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = '-60px';
    } else {
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
