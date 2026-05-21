// SLIDER AUTOMÁTICO
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(){
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    index++;
    if(index >= slides.length){ index = 0; }
}
setInterval(showSlide, 5000);

// ANIMACIÓN SCROLL
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if(position < screenPosition){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});