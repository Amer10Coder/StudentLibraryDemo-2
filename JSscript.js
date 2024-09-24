const menubtn = document.getElementById("menubtn-cont");
const navBar = document.querySelector(".nav-bar");

menubtn.addEventListener("click", () => {
    if (navBar.classList.toggle("collapsed") === false) {

        setTimeout(() => navBar.style.overflow = "auto", 350);
    }
    else {
        navBar.style.overflow = "hidden";
    }

    //transform to X shap//
    menubtn.classList.toggle("closed");
});
const headerHTML = document.querySelector("header");
document.onscroll = function () {
    const isSticky = headerHTML.style.position == "sticky";
    if (window.scrollY > 75 && !isSticky) {
        headerHTML.style.position = "sticky";
        headerHTML.style.top = 0;
    }
    else if (window.scrollY <= 5 && isSticky) {
        headerHTML.style.position = "static";
        headerHTML.style.top = `${-50}px`;
    }
}

document.addEventListener("DOMContentLoaded", event => {
    document.querySelectorAll(".hand-typing-word").forEach(
        elem => {
            typingWord(elem, ...elem.getAttribute("data-typed").split('-'));
        });
});

function typingWord(Html_Elem, ...words) {
    const delay = 1000;
    const typingSpeed = 120;
    const erasingSpeed = 50;

    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = words[wordIndex];
    const typedWordElem = Html_Elem;

    function typing() {
        if (charIndex < currentWord.length) {
            typedWordElem.textContent += currentWord[charIndex];
            charIndex++;
            setTimeout(typing, typingSpeed);
        }
        else {
            setTimeout(erasing, delay);

        }
    }

    function erasing() {
        if (charIndex > 0) {
            typedWordElem.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erasing, erasingSpeed);
        }
        else {
            wordIndex = (wordIndex + 1) % words.length;
            currentWord = words[wordIndex];
            setTimeout(typing, typingSpeed);
        }
    }
    setTimeout(typing, delay);
}