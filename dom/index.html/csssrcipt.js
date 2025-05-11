// Sticky Navigation Bar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 0);
    }
});

// theme switcher
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}
// counter
const counters = document.querySelectorAll('.counter h3');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

// FAQ Expand/Collapse
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length > 0) {
    faqItems.forEach((item) => {
        const question = item.querySelector('h3');
        if (question) {
            question.addEventListener('click', () => {
                item.classList.toggle('active');
                faqItems.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        }
    });
}

// Scroll Animations
const scrollElements = document.querySelectorAll('.fade-in, .fade-in-up');

const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) - offset
    );
};

const displayScrollElement = (element) => {
    if (!element.classList.contains('visible')) {
        element.classList.add('visible');
    }
};

const hideScrollElement = (element) => {
    if (element.classList.contains('visible')) {
        element.classList.remove('visible');
    }
};

const handleScrollAnimation = () => {
    if (scrollElements.length > 0) {
        scrollElements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    }
};

let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
        handleScrollAnimation();
    }, 100);
});

// Newsletter Form Validation
const newsletterForm = document.querySelector('.newsletter-form');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (!emailRegex.test(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
        } else {
            alert('Thank you for subscribing!');
            emailInput.value = '';
        }
    });
}

// Contact Form Validation
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');

        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            alert('Please fill out all fields.');
            return;
        }

        if (!emailRegex.test(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
}
