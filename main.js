// Initialize Swiper for hero section
const heroSwiper = new Swiper('.hero .swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Package Tab Switching
const packageTabs = document.querySelectorAll('.package-tab');
const packageCategories = document.querySelectorAll('.package-category');

packageTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        packageTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Hide all package categories
        packageCategories.forEach(category => {
            category.classList.remove('active');
            category.style.opacity = '0';
        });
        
        // Show selected category with fade effect
        const targetCategory = document.getElementById(`${tab.dataset.type}-packages`);
        if (targetCategory) {
            targetCategory.classList.add('active');
            setTimeout(() => {
                targetCategory.style.opacity = '1';
            }, 50);
        }
    });
});

// Package Details Modal
const detailsBtns = document.querySelectorAll('.details-btn');
detailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const packageType = btn.dataset.package;
        // You can implement a modal here to show more details about each package
        alert('Package details feature coming soon!');
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Form Submission Handling
const contactForm = document.querySelector('.contact-form');
const newsletterForm = document.querySelector('.newsletter-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});

// WhatsApp Integration
const whatsappLink = document.querySelector('.whatsapp-link');
whatsappLink.href = 'https://wa.me/923062142514';

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .package-card, .feature, .team-member').forEach(el => {
    observer.observe(el);
});

// Add scroll event listener for header
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Add animation classes on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.classList.add('animate');
    }

    // Initialize package tabs
    const defaultTab = document.querySelector('.package-tab.active');
    if (defaultTab) {
        const defaultCategory = document.getElementById(`${defaultTab.dataset.type}-packages`);
        if (defaultCategory) {
            defaultCategory.style.opacity = '1';
        }
    }
});
