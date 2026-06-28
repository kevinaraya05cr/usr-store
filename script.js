let cantidad = 1;

const cantidadTexto = document.getElementById("cantidad");
const btnMas = document.getElementById("mas");
const btnMenos = document.getElementById("menos");
const color = document.getElementById("color");
const talla = document.getElementById("talla");
const whatsapp = document.getElementById("whatsapp");
const imagen = document.getElementById("mainImage");

// Cambiar cantidad
btnMas.addEventListener("click", () => {
    cantidad++;
    cantidadTexto.textContent = cantidad;
});

btnMenos.addEventListener("click", () => {
    if (cantidad > 1) {
        cantidad--;
        cantidadTexto.textContent = cantidad;
    }
});

// Cambiar imagen según el color
color.addEventListener("change", () => {

    if (color.value === "blanca") {
        imagen.src = "camisas/camiseta blanca frente y atras.png";
    } else {
        imagen.src = "camisas/camiseta negra frente y atras.png";
    }

});

// Botón de WhatsApp
whatsapp.addEventListener("click", function(e){

    e.preventDefault();

    const mensaje =
`Hola 👋

Quiero comprar una prenda de USR STORE.

👕 Color: ${color.value}
📏 Talla: ${talla.value}
📦 Cantidad: ${cantidad}`;

    const url = "https://wa.me/50686243479?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");

});
