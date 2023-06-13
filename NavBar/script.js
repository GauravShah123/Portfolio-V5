// Function to update ARIA labels based on screen size
function updateARIALabels() {
    const hamburgerContainer = document.querySelector('.hamburger-container');
    const hamburgerIcon = hamburgerContainer.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    const isMobile = window.innerWidth <= 912;

    if (isMobile) {
        hamburgerContainer.setAttribute('aria-expanded', hamburgerIcon.classList.contains('active'));
        nav.setAttribute('aria-hidden', !hamburgerIcon.classList.contains('active'));
    } else {
        hamburgerContainer.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-hidden', 'false');
    }
}

// Event listener for window resize
window.addEventListener('resize', updateARIALabels);

// Event listener for hamburger menu click
document.querySelector('.hamburger-container').addEventListener('click', function() {
    const hamburgerIcon = this.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    hamburgerIcon.classList.toggle('active');
    nav.classList.toggle('active');

    updateARIALabels();
});

// Initial update of ARIA labels
updateARIALabels();
