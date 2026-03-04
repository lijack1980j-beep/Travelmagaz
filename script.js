// Mobile Menu Toggle logic
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburger");
    
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
}

// Close mobile menu when a navigation link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("navLinks").classList.remove("active");
        document.getElementById("hamburger").classList.remove("active");
    });
});

// Scroll Reveal Animations (Intersection Observer)
const appearOptions = {
    threshold: 0.15, // Triggers when 15% of the element is visible in the viewport
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); 
        }
    });
}, appearOptions);

// Apply the observer to all elements with the 'fade-in' class
document.querySelectorAll('.fade-in').forEach(element => {
    appearOnScroll.observe(element);
});

// Handle Booking Form Submission (Prevents page from refreshing for the demo)
const bookingForm = document.getElementById('bookingForm');
if(bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop the default page reload
        alert("Thank you! Your booking request has been submitted successfully.");
        bookingForm.reset(); // Clear the form fields
    });
}
