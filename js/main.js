// Smooth Scroll To Top
let header = document.querySelector("header");
let topLink = document.getElementById("top");

topLink.onclick = function () {
    header.scrollIntoView({ behavior: "smooth" });
};
// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");
if (backToTopBtn) {
    // When the user scrolls down 20px from the top of the document, show the button
        backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault(); 
        header.scrollIntoView({ behavior: "smooth" });
    });
}
// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function () {
    const scrollThreshold = 800;
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};