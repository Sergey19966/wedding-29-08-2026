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

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mainNav");
const overlay = document.getElementById("menuOverlay");

function toggleMenu(){
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    menuToggle.textContent =
        mobileMenu.classList.contains("active")
        ? "✕"
        : "☰";
}

menuToggle.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

document.querySelectorAll(".mobile-menu a").forEach(link=>{
    link.addEventListener("click",()=>{
        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
        menuToggle.textContent="☰";
    });
});