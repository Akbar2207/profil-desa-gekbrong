/*=========================================
        HAMBURGER MENU
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if(menu.classList.contains("active")){

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

        }else{

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

}


/*=========================================
        TUTUP MENU SAAT DIKLIK
=========================================*/

document.querySelectorAll(".menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});


/*=========================================
        NAVBAR SCROLL
=========================================*/

const navbar = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        navbar.style.background="#1B5E20";

        navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.2)";

    }else{

        navbar.style.background="rgba(27,94,32,.92)";

        navbar.style.boxShadow="none";

    }

});


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const tujuan=document.querySelector(this.getAttribute("href"));

        if(tujuan){

            tujuan.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=========================================
        ANIMASI MUNCUL
=========================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".box,.profil,.struktur,.wisata-card,.info-kontak").forEach(el=>{

    observer.observe(el);

});


/*=========================================
        BACK TO TOP
=========================================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});