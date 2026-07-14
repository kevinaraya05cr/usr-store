let cantidad = 1;

const cantidadTexto = document.getElementById("cantidad");
const btnMas = document.getElementById("mas");
const btnMenos = document.getElementById("menos");

const producto = document.getElementById("producto");
const color = document.getElementById("color");
const talla = document.getElementById("talla");

const whatsapp = document.getElementById("whatsapp");
const imagen = document.getElementById("mainImage");

// -------------------------
// Cantidad
// -------------------------

btnMas.addEventListener("click", () => {

    cantidad++;

    cantidadTexto.textContent = cantidad;

});

btnMenos.addEventListener("click", () => {

    if(cantidad > 1){

        cantidad--;

        cantidadTexto.textContent = cantidad;

    }

});

// -------------------------
// Cambiar imagen
// -------------------------

function actualizarImagen(){

    if(producto.value === "camiseta"){

        if(color.value === "negra"){

            imagen.src = "camisas/camiseta negra frente y atras.png";

        }else{

            imagen.src = "camisas/camiseta blanca frente y atras.png";

        }

    }else{

        if(color.value === "negra"){

            imagen.src = "camisas/Crop top negra fente y atras.png";

        }else{

            imagen.src = "camisas/crop top blanco frente y trasero.png";

        }

    }

}

producto.addEventListener("change", actualizarImagen);

color.addEventListener("change", actualizarImagen);

actualizarImagen();

// -------------------------
// WhatsApp
// -------------------------

whatsapp.addEventListener("click", function(e){

    e.preventDefault();

    const mensaje =

`Hola Kevin 👋

Quiero comprar una prenda de USR STORE.

Producto: ${producto.value}

Color: ${color.value}

Talla: ${talla.value}

Cantidad: ${cantidad}`;

    const url =

"https://wa.me/50686243479?text=" + encodeURIComponent(mensaje);

    window.open(url,"_blank");

});

// Catálogo conectado con el configurador de compra
document.querySelectorAll(".item").forEach(card => {
  card.addEventListener("click", () => {
    producto.value = card.dataset.producto;
    color.value = card.dataset.color;
    actualizarImagen();
    document.getElementById("inicio").scrollIntoView({behavior:"smooth"});
  });
});
document.getElementById("stepWhatsapp").addEventListener("click", e => {
  e.preventDefault();
  whatsapp.click();
});
