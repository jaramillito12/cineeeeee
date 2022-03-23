let contenedor = document.getElementById("contenedor");

contenedor.addEventListener("click", function(evento){
    if (evento.target.classList.contains("w-100")) {
        evento.target.src="imagenes.jpg/armchair.png"
        bandera = false
    } else if(evento.target.classList.contains("w-100")) {
        evento.target.src="imagenes.jpg/armchair.png"
        bandera = false
    }
}) 

let envBtn = document.getElementById("boton");
envBtn.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault();
    let cantidad = document.getElementById("cantidad").value;
    let asiento = document.getElementById("Asiento").value;
    let boleta = 0
    if(asiento == "general") {
        boleta = 10000
    } else {
        boleta= 15000
    }

    let total = boleta * cantidad;

    
    console.log(cantidad);
    console.log(asiento);
    alert("Precio total" + total + " pesos")
}