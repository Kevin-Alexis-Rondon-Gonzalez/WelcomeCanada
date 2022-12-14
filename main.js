//Begin Carrusel
const carrusel = document.querySelector(".carrusel-items");
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;

const startCarrusel = () =>{
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft == maxScrollLeft) {
            step = -1;
        }else if (carrusel.scrollLeft === 0){
            step = 1;
        }
    }, 18); 
};
const stopCarrusel = () =>{
    clearInterval(intervalo);
};
carrusel.addEventListener('mouseover', () =>{
    stopCarrusel();
});
window.addEventListener('load', () => {
    startCarrusel();
});
carrusel.addEventListener('mouseout', () => {
    startCarrusel();
});
//End carrusel