const primaryNav = document.querySelector(".top-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

// hamburger functionality 

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute('aria-expanded', false);
    }
})