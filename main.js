//Start Carrusel
const carrusel = document.querySelector(".carrusel-items");
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 300;

const startCarrusel = () =>{
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft == maxScrollLeft) {
            step = -300;
        }else if (carrusel.scrollLeft === 0){
            step = 300;
        }
    }, 2600); 
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

//End carrusel