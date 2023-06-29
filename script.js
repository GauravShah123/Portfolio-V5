class NavBar extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <!-- Nav Bar -->
        <nav>
            <a href="/">
                <img src="/Assets/Images/Logo.svg" alt="Gaurav Shah's Logo" class="nav-logo">
            </a>
            <ul>
                <li><a id="home" href="/">Home</a></li>
                <li><a id="work" href="/#works">Work</a></li>
                <li><a id="about" href="/#about-me">About</a></li>
                <li><a id="Résumé" href="/Resume.pdf" target="_blank">Résumé</a></li>
                <li> <a class="hidden-button lets-talk">Let's Talk <span
                class="material-symbols-outlined">arrow_forward</span></a></li>
            </ul>
            <button class="button-flex lets-talk">Let's Talk <span
                    class="material-symbols-outlined">arrow_forward</span></button>
                    <button class="hamburger" aria-label="Open the menu"><span class="material-symbols-outlined" aria-hidden="true">
                    menu
                    </span></button>
        </nav>

        <!-- Let's Talk Modal -->
        <div class="modal-bg-overlay modal-closed">
            <div class="modal">
    
                <div class="email-copy">
                    <p>gshah@uwaterloo.ca</p>
                    <button class="email-copy-button" id="email-copy-button">Copy</button>
                </div>
                <p>OR</p>
                <a href="https://calendly.com/gs336/30min"><button class="modal-calendly">Schedule a meeting via Calendly</button></a>
                
            </div>
            <button class="close-modal"><span class="material-symbols-outlined">close</span></button>
        </div>
        `
    }
}

let htmlHead = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JB66SYNV21"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-JB66SYNV21');
</script>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@100;350;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"> 
<meta name="description" content="Gaurav Shah, a Global Business and Digital Arts student at the University of Waterloo, is passionate about product management and creating user-centric experiences that drive business growth." />
<link rel="stylesheet" href="/utilities.css">
<link rel="icon" href="/Assets/Images/gaurav-logo.svg" type="image/x-icon">
<meta name="author" content="Gaurav Shah">
<meta name="keywords" content="UX designer, fintech, product management, user-centric experiences, portfolio, Gaurav Shah">
<meta name="robots" content="index, follow">
<meta name="twitter:card" content="/Assets/Images/Site.png">
<meta name="twitter:title" content="Gaurav Shah's Portfolio">
<meta name="twitter:description" content="Designing delightful UX in fintech. A full-fledged UX designer with a focus on finance, constantly learning and discovering new ways to create amazing user experiences.">
<meta name="twitter:image" content="/Assets/Images/Site.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="revisit-after" content="7 days">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="application-name" content="Gaurav Shah">
<meta name="msapplication-tooltip" content="Gaurav Shah's Portfolio">
<meta name="apple-mobile-web-app-title" content="Gaurav Shah">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">

`

let existingHeadStuff = document.querySelector("head").innerHTML;
document.querySelector("head").innerHTML = htmlHead + existingHeadStuff;


class footer extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <!-- Footer -->
        <footer>
            <div class="footer-about">
                <img src="/Assets/Images/Logo.svg" alt="Gaurav's Logo">
                <p>Gaurav Shah, a Global Business and Digital Arts student at the University of Waterloo, is passionate
                    about product management and creating user-centric experiences that drive business growth.</p>
            </div>
            <div class="footer-contact">
                <h3>Contact</h3>
                <ul class="contacts">
                    <li><a href="mailto:gshah@uwaterloo.ca"><span
                                class="material-icons-outlined">email</span>&nbsp;&nbsp;gshah@uwaterloo.ca</a></li>
                    <li><a href="https://www.linkedin.com/in/gs336/"><span class="material-icons-outlined">link</span>&nbsp;&nbsp;linkedin.com/in/gs336/</a></li>
                    <li><span class="material-icons-outlined">location_on</span>&nbsp;&nbsp;Waterloo, Ontario, CA</li>
                </ul>
                <button class="button-flex lets-talk">Let's Talk <span
                        class="material-symbols-outlined">arrow_forward</span></button>
            </div>
        </footer>
    
        <!-- Ending -->
        <div class="ending">
            Made with love, fueled by hot cocoa - Gaurav Shah's portfolio.
        </div>
        `
    }
}

customElements.define("nav-bar", NavBar);
customElements.define("footer-content", footer);

// Add an event listener to the hamburger button
document.querySelector('.hamburger').addEventListener('click', function () {
    // Toggle the active class on the nav element
    document.querySelector('nav').classList.toggle('active');
});

// Get all the links inside the navigation menu
const navLinks = document.querySelectorAll('nav ul li a');

// Add click event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove the active class from the nav element
        document.querySelector('nav').classList.remove('active');

        // Remove the active class from the "Let's Talk" button
        document.querySelector('.button-flex').classList.remove('active');
    });
});

//Selected states for Nav menu
document.addEventListener('DOMContentLoaded', function () {
    function updateSelectedNavItem() {
        var url = window.location.href;

        // Remove 'selected' class from all links
        var links = document.querySelectorAll('nav a');
        links.forEach(function (link) {
            link.classList.remove('selected');
        });

        if (url.includes('#works')) {
            document.querySelector('a#work').classList.add('selected');
        } else if (url.includes('#about-me')) {
            document.querySelector('a#about').classList.add('selected');
        } else if (url === window.location.origin + '/') {
            document.querySelector('a#home').classList.add('selected');
        }
    }

    updateSelectedNavItem(); // Call the function on page load

    var links = document.querySelectorAll('nav a');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var destination = link.getAttribute('href');
            if (destination) {
                window.location.href = destination;
            }
            updateSelectedNavItem();
        });
    });
});

// Close the Modal
const modalBgOverlay = document.querySelector('.modal-bg-overlay');
const modal = document.querySelector('.modal');

function closeModal(){
    modalBgOverlay.classList.add('modal-closed');
    modalBgOverlay.setAttribute('aria-hidden', 'true');
}

modalBgOverlay.addEventListener('click', function (event) {
    if (event.target === modalBgOverlay) {
        closeModal();
    }
});

document.querySelector('.close-modal').addEventListener('click', function (event) {
    closeModal();
});

// Open the Modal
const letsTalkButtons = document.querySelectorAll('.lets-talk');
letsTalkButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        modalBgOverlay.classList.remove('modal-closed');
        modalBgOverlay.setAttribute('aria-hidden', 'false');
    });
});


// Copy Email
const emailCopyButton = document.getElementById('email-copy-button');
const emailCopyText = document.querySelector('.email-copy p');

emailCopyButton.addEventListener('click', function () {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = emailCopyText.textContent;
    document.body.appendChild(textarea);

    // Copy the email text to the clipboard
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Update the button text
    emailCopyButton.textContent = 'Copied!';
    setTimeout(closeModal, 1000);
    setTimeout(copyTexttoNormal, 1500);
});

function copyTexttoNormal(){
    emailCopyButton.textContent = 'Copy';
}