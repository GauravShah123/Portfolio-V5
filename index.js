const scrollElement = document.querySelector("#apart");
const scrollAcross = document.querySelector("h1.watermark");

document.addEventListener("scroll", event => {

    scrollAcross.style.left = ((scrollElement.getBoundingClientRect().top / 2) - 200) + 'px';

}, { passive: true });

if (!window.location.href.includes('/#')) {
    document.querySelector("a#home").classList.add("selected");
}