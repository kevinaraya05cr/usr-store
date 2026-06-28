const imagen = document.getElementById("imagenPrincipal");
const color = document.getElementById("color");
const talla = document.getElementById("talla");
const cantidad = document.getElementById("cantidad");
const boton = document.getElementById("botonWhatsapp");

color.addEventListener("change", cambiarImagen);

function cambiarImagen(){

if(color.value=="negra"){
imagen.src="camisa-negra-frente.jpg";
}

if(color.value=="blanca"){
imagen.src="camisa-blanca-frente.jpg";
}

actualizarWhatsapp();

}

talla.addEventListener("change", actualizarWhatsapp);
cantidad.addEventListener("input", actualizarWhatsapp);

function actualizarWhatsapp(){

const mensaje=
`https://wa.me/50686243479?text=Hola Kevin,%20quiero%20comprar:%0A%0AModelo:%20USR%20Oversized%20Tee%0AColor:%20${color.value}%0ATalla:%20${talla.value}%0ACantidad:%20${cantidad.value}`;

boton.href=mensaje;

}

actualizarWhatsapp();
