// Navbar berubah saat scroll

window.addEventListener("scroll",function(){

const nav=document.querySelector("nav");

nav.classList.toggle("scrolled",window.scrollY>50);

});

// Animasi muncul saat scroll

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((el)=>{

observer.observe(el);

});