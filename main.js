const header = document.querySelector("nav");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 80)
});

