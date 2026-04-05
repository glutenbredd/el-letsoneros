// Custom cursor
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('big'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            const siblings = [...e.target.parentElement.querySelectorAll('.reveal')];
            const idx = siblings.indexOf(e.target);
            setTimeout(() => e.target.classList.add('visible'), idx * 100);
            obs.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => obs.observe(el));

// Food gallery toggle
const foodItems = document.querySelectorAll('.food-list li');

foodItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const targetGallery = document.getElementById(targetId);

        // close all galleries first
        document.querySelectorAll('.gallery').forEach(g => g.classList.remove('open'));

        // remove active from all items
        foodItems.forEach(i => i.classList.remove('active'));

        // if not already open, open it
        if (!targetGallery.classList.contains('open')) {
            targetGallery.classList.add('open');
            item.classList.add('active');
        }
    });
});

// Slideshow
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function goToSlide(index) {
    // remove active from current
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    // update index and loop back to 0 if past the end
    currentSlide = index;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    // add active to new slide
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// auto advance every 3 seconds
setInterval(() => {
    goToSlide(currentSlide + 1);
}, 3000);

// clicking dots manually
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});