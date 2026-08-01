/*=====================================
        HAMBURGER MENU
======================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/*=====================================
      CLOSE MENU MOBILE
======================================*/

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/*=====================================
      NAVBAR SCROLL
======================================*/

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 60){

        nav.style.background = "#1B5E20";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

    }else{

        nav.style.background = "rgba(27,94,32,.92)";
        nav.style.boxShadow = "none";

    }

});


/*=====================================
      ANIMATION ON SCROLL
======================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card,.info-card,.wisata-card,.box,.contact-box").forEach(el=>{

    observer.observe(el);

});


/*=====================================
      ACTIVE MENU
======================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


/*=====================================
      BACK TO TOP
======================================*/

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topButton.style.display = "flex";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=====================================
      HERO BUTTON EFFECT
======================================*/

const heroBtn = document.querySelector(".btn");

heroBtn.addEventListener("mouseenter",()=>{

    heroBtn.style.transform = "scale(1.05)";

});

heroBtn.addEventListener("mouseleave",()=>{

    heroBtn.style.transform = "scale(1)";

});