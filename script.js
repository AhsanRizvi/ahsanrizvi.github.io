// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Add hover effect to links and buttons
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// Typewriter effect
const typed = new Typed('.typed-text', {
    strings: [
        'Software Engineer',
        'Full Stack Developer',
        'Problem Solver',
        'Tech Enthusiast'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = document.querySelector('.nav-glass').offsetHeight;
        const elementPosition = target.offsetTop;
        
        window.scrollTo({
            top: elementPosition - offset - 20,
            behavior: 'smooth'
        });
    });
});

// Navigation active state
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Skills animation
const skillBars = document.querySelectorAll('.progress');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.transform = `scaleX(${level / 100})`;
    });
};

// Animate skills when they come into view
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
        }
    });
}, { threshold: 0.5 });

document.querySelector('#skills')?.forEach(element => {
    skillsObserver.observe(element);
});

// Stats counter animation
const stats = document.querySelectorAll('.stat-number');

const animateStats = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        let count = 0;
        const increment = target / 50; // Adjust speed here
        
        const updateCount = () => {
            if (count < target) {
                count += increment;
                stat.textContent = Math.floor(count);
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCount();
    });
};

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
        }
    });
}, { threshold: 0.5 });

document.querySelector('.about-stats')?.forEach(element => {
    statsObserver.observe(element);
});

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
    const isDark = document.body.classList.contains('light-theme');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
};

themeToggle?.addEventListener('click', toggleTheme);

// Form handling with validation
const contactForm = document.querySelector('.contact-form');

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Basic form validation
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Here you would typically send the form data to a server
    try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show success message
        alert('Message sent successfully!');
        contactForm.reset();
        
    } catch (error) {
        alert('There was an error sending your message. Please try again.');
    }
});

// Parallax effect for hero section
const heroSection = document.querySelector('#home');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled * 0.003);
    }
});

// Project hover effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const { left, top } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Initialize any tooltips or popovers if needed
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
});