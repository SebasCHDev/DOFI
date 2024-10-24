const productosInfo = {
    cortinas: [
        {
            titulo: "Cortina domótica ABALON",
            descripcion: "Compatible con Amazon Alexa, Google Home e IFTTT",
            imagen: "https://domoticasa.net/wp-content/webpc-passthru.php?src=https://domoticasa.net/wp-content/uploads/2020/08/ABALON-768x704.jpg&nocache=1",
            guia: "https://example.com/guia-bombon-chocolate",
            manual: "https://example.com/manual-bombon-chocolate"
        },
        {
            titulo: "Sistema de cortinas HC",
            descripcion: "Compatible con Amazon Alexa, Google Home, e IFTTT",
            imagen: "https://domoticasa.net/wp-content/webpc-passthru.php?src=https://domoticasa.net/wp-content/uploads/2020/08/hhc-768x468.jpg&nocache=1",
            guia: "https://example.com/guia-bombon-fresa",
            manual: "https://example.com/manual-bombon-fresa"
        },
        {
            titulo: "Cortinas domóticas SMARSECUR",
            descripcion: "Compatible con Amazon Alexa, Google Home e IFTTT",
            imagen: "https://domoticasa.net/wp-content/webpc-passthru.php?src=https://domoticasa.net/wp-content/uploads/2020/08/smarsecur.jpg&nocache=1",
            guia: "https://example.com/guia-bombon-almendra",
            manual: "https://example.com/manual-bombon-almendra"
        },
        {
            titulo: "Cortina domótica ABALON",
            descripcion: "Compatible con Amazon Alexa, Google Home e IFTTT",
            imagen: "https://domoticasa.net/wp-content/webpc-passthru.php?src=https://domoticasa.net/wp-content/uploads/2020/08/ABALON-768x704.jpg&nocache=1",
            guia: "https://example.com/guia-bombon-chocolate",
            manual: "https://example.com/manual-bombon-chocolate"
        },
        {
            titulo: "Sistema de cortinas HC",
            descripcion: "Compatible con Amazon Alexa, Google Home, e IFTTT",
            imagen: "https://domoticasa.net/wp-content/webpc-passthru.php?src=https://domoticasa.net/wp-content/uploads/2020/08/hhc-768x468.jpg&nocache=1",
            guia: "https://example.com/guia-bombon-fresa",
            manual: "https://example.com/manual-bombon-fresa"
        },
        {
            titulo: "Cortinas domóticas SMARSECUR",
            descripcion: "Compatible con Amazon Alexa, Google Home e IFTTT",
            imagen: "https://domoticasa.net/wp-content/webpc-passthru.php?src=https://domoticasa.net/wp-content/uploads/2020/08/smarsecur.jpg&nocache=1",
            guia: "https://example.com/guia-bombon-almendra",
            manual: "https://example.com/manual-bombon-almendra"
        },

    ],
    interruptores: [

    ],
    camaras: [

    ],
};

const productosInfoDivs = [
    document.getElementById('producto-1'),
    document.getElementById('producto-2'),
    document.getElementById('producto-3'),
    document.getElementById('producto-4') // Cuarta columna para productos
];

// Función para mostrar la información de los productos seleccionados
function mostrarProducto(producto, index) {
    const productoDiv = productosInfoDivs[index];
    productoDiv.innerHTML = `
        <h2>${producto.titulo}</h2>
        <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen">
        <p>${producto.descripcion}</p>
        <div id="producto-links">
            <a href="${producto.guia}" target="_blank">Guía</a> |
            <a href="${producto.manual}" target="_blank">Manual</a>
        </div>
    `;
    productoDiv.classList.remove('hidden'); // Mostrar el detalle del producto
}

// Añadir el evento de clic a cada categoría de producto
document.querySelectorAll('.producto-item').forEach(item => {
    item.addEventListener('click', function() {
        const productoCategoria = this.getAttribute('data-producto'); // Obtener la categoría del producto
        const subproductos = productosInfo[productoCategoria]; // Obtener subproductos de la categoría seleccionada

        // Limpiar los detalles de productos anteriores
        productosInfoDivs.forEach(div => {
            div.innerHTML = '';
            div.classList.add('hidden'); // Ocultar detalles
        });

        // Mostrar detalles de hasta cuatro productos seleccionados
        subproductos.forEach((producto, index) => {
            if (index < 4) {
                mostrarProducto(producto, index);
            }
        });
    });
});

// Alternar visibilidad de las categorías
const categoriaBtns = document.querySelectorAll('.categoria-btn');

categoriaBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const itemsList = this.nextElementSibling;
        const arrow = this.querySelector('.flechaDesplegable');

        if (itemsList.style.display === "block") {
            itemsList.style.display = "none";
            arrow.innerHTML = '&#9658;'; // Triángulo apuntando a la derecha
        } else {
            itemsList.style.display = "block";
            arrow.innerHTML = '&#9660;'; // Triángulo apuntando hacia abajo
        }
    });
});
