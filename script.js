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
                <!-- <li class="current"><a href="#">Home</a></li> -->
                <li><a href="/">Home</a></li>
                <li><a href="/#works">Work</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/Resume.pdf" target="_blank">Resume</a></li>
                <li> <a class="hidden-button" href="mailto:gshah@uwaterloo.ca">Let's Talk <span
                class="material-symbols-outlined">arrow_forward</span></a></li>
            </ul>
            <button class="button-flex" onclick="window.location.href='mailto:gshah@uwaterloo.ca'">Let's Talk <span
                    class="material-symbols-outlined">arrow_forward</span></button>
                    <button class="hamburger" aria-label="Open the menu"><span class="material-symbols-outlined" aria-hidden="true">
                    menu
                    </span></button>
        </nav>
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
<link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"> 
<meta property="og:title" content="Gaurav Shah's Portfolio" />
<meta property="og:description" content="Gaurav Shah, a Global Business and Digital Arts student at the University of Waterloo, is passionate about product management and creating user-centric experiences that drive business growth." />
<meta property="og:image" content="/Assets/Images/Site.png" />
<link rel="stylesheet" href="/utilities.css">
<link rel="icon" href="/Assets/Images/gaurav-logo.svg" type="image/x-icon">

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
                <button class="button-flex" onclick="window.location.href='mailto:gshah@uwaterloo.ca'">Let's Talk <span
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
    link.addEventListener('click', function() {
        // Remove the active class from the nav element
        document.querySelector('nav').classList.remove('active');

        // Remove the active class from the "Let's Talk" button
        document.querySelector('.button-flex').classList.remove('active');
    });
});