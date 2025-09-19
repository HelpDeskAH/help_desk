// Mobile Menu Functions
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-center');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container')) {
            closeMobileMenu();
        }
    });
});

function toggleMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navCenter = document.querySelector('.nav-center');
    
    if (mobileMenuBtn && navCenter) {
        mobileMenuBtn.classList.toggle('active');
        navCenter.classList.toggle('active');
    }
}

function closeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navCenter = document.querySelector('.nav-center');
    
    if (mobileMenuBtn && navCenter) {
        mobileMenuBtn.classList.remove('active');
        navCenter.classList.remove('active');
    }
}