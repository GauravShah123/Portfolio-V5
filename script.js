class NavBar extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <!-- Nav Bar -->
        <nav>
            <a href="index.html">
                <img src="./Assets/Images/Logo.svg" alt="Gaurav Shah's Logo" class="nav-logo">
            </a>
            <ul>
                <!-- <li class="current"><a href="#">Home</a></li> -->
                <li><a href="#">Home</a></li>
                <li><a href="#works">Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#">Resume</a></li>
            </ul>
            <button class="button-flex" onclick="window.location.href='mailto:gshah@uwaterloo.ca'">Let's Talk <span
                    class="material-symbols-outlined">arrow_forward</span></button>
        </nav>
        `
    }
}

class headContext extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gaurav Shah's Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@100;300;700&display=swap" rel="stylesheet">
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">     
        `
    }
}

class footer extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <!-- Footer -->
        <footer>
            <div class="footer-about">
                <img src="./Assets/Images/Logo.svg" alt="Gaurav's Logo">
                <p>Gaurav Shah, a Global Business and Digital Arts student at the University of Waterloo, is passionate
                    about product management and creating user-centric experiences that drive business growth.</p>
            </div>
            <div class="footer-contact">
                <h3>Contact</h3>
                <ul class="contacts">
                    <li><a href="mailto:gshah@uwaterloo.ca"><span
                                class="material-icons-outlined">email</span>&nbsp;&nbsp;gshah@uwaterloo.ca</a></li>
                    <li><span class="material-icons-outlined">link</span>&nbsp;&nbsp;linkedin.com/in/gs336/</li>
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
customElements.define("head-context", headContext);
customElements.define("footer-content", footer);