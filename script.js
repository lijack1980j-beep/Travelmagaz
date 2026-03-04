// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});

// Scroll Reveal Animations (Intersection Observer)
const appearOptions = {
    threshold: 0.15, // Triggers when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // Stop observing once it has appeared
        }
    });
}, appearOptions);

// Select all elements with the class 'fade-in' and apply the observer
document.querySelectorAll('.fade-in').forEach(element => {
    appearOnScroll.observe(element);
});
