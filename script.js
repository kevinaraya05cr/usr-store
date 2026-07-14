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

// Menú responsive para iPhone y otros móviles
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const abierto = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", abierto);
    menuToggle.textContent = abierto ? "✕" : "☰";
  });
  mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }));
}

// Navegación interna optimizada para Safari móvil
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    const id = this.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    requestAnimationFrame(() => {
      const header = document.querySelector(".top");
      const offset = header ? header.offsetHeight + 10 : 0;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({top, behavior:"smooth"});
    });
  }, {passive:false});
});
