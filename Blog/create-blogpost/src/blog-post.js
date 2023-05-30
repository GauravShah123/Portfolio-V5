let blogPosts = [
    {
        id: 32109,
        title: "UX vs UI: What's the Difference and Why It Matters?",
        date: "27th May 2023",
        tags: ["Design", "Websites", "Frontend", "UX"]
    }
];









































































// Get the title from id in the URL
function getIDFromURL() {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    return parseInt(searchParams.get('id'), 10);
}

const postId = getIDFromURL();

const articleTitle = getArticleTitleById(postId);
const articleDate = getDateById(postId);

function getArticleTitleById(id) {
    const article = blogPosts.find(post => post.id === id);
    return article ? article.title : null;
}
function getDateById(id) {
    const article = blogPosts.find(post => post.id === id);
    return article ? article.date : null;
}

document.querySelector("title").innerText = articleTitle;

console.log(postId);
console.log(articleTitle);

//Load in Article
function loadTemplate() {
    // Fetch the template HTML file
    fetch('./Articles/' + postId + '.html')
        .then(response => response.text())
        .then(templateContent => {
            // Inject the template content into the container element
            const templateContainer = document.getElementById('templateContainer');

            templateContainer.innerHTML = "<h1>" + articleTitle + "</h1>";
            templateContainer.innerHTML += "<p class='about'>By Gaurav Shah</p>";
            templateContainer.innerHTML += "<p class='about'>"+articleDate+"</p>";
            templateContainer.innerHTML += templateContent;
        })
        .catch(error => {
            console.error('Error loading template:', error);
        });
}

loadTemplate();

// Scroll to top button
let scrollButton = document.querySelector(".scroll-to-top")

// Attach a click event listener to scroll to the top
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add the button to the document body
document.body.appendChild(scrollButton);

// Show or hide the button based on the scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 75) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});


// Show Nav Bar when user scrolls up
let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function () {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (previousScrollPosition - currentScrollPosition > 0 || currentScrollPosition < 75) {
        // User has scrolled up
        document.querySelector("nav").classList.remove("hide");
        document.querySelector("aside").classList.remove("up");
    } else {
        // User has scrolled down or the scroll position hasn't changed
        document.querySelector("nav").classList.add("hide");
        document.querySelector("aside").classList.add("up");
    }

    previousScrollPosition = currentScrollPosition;
});