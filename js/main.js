document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });
    });
});
const topButton = document.getElementById("toTop");

window.addEventListener("scroll", () => {
    if(window.scrollY > 500){
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:.15
});

sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {

    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");
    const overlay = document.getElementById("overlay");

    function closeMenu() {

        burger.classList.remove("active");
        nav.classList.remove("show");
        overlay.classList.remove("show");

    }

    function toggleMenu() {

        burger.classList.toggle("active");
        nav.classList.toggle("show");
        overlay.classList.toggle("show");

    }

    burger.addEventListener("click", toggleMenu);

    overlay.addEventListener("click", closeMenu);

    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });

});