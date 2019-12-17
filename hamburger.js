const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".hamburger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () =>{
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
})

links.forEach(link => {
    link.addEventListener("click", ()=>{
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
    })
}) 
