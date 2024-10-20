// Productos con sus datos: descripción, imagen y enlaces
const productosInfo = {
    bombon: {
        titulo: "Bombón",
        descripcion: "Un delicioso dulce de chocolate relleno.",
        imagen: "https://via.placeholder.com/200", // Puedes cambiar la URL a una imagen real
        guia: "https://example.com/guia-bombon",
        manual: "https://example.com/manual-bombon"
    },
    papitas: {
        titulo: "Papitas",
        descripcion: "Crujientes y sabrosas papas fritas.",
        imagen: "https://via.placeholder.com/200", // Puedes cambiar la URL a una imagen real
        guia: "https://example.com/guia-papitas",
        manual: "https://example.com/manual-papitas"
    },
    galletas: {
        titulo: "Galletas",
        descripcion: "Galletas dulces con chispas de chocolate.",
        imagen: "https://via.placeholder.com/200", // Puedes cambiar la URL a una imagen real
        guia: "https://example.com/guia-galletas",
        manual: "https://example.com/manual-galletas"
    }
};

// Seleccionar todos los productos
const productoItems = document.querySelectorAll('.producto-item');

// Añadir el evento de clic a cada producto
productoItems.forEach(item => {
    item.addEventListener('click', function() {
        const productoKey = this.getAttribute('data-producto');
        const productoData = productosInfo[productoKey];

        if (productoData) {
            // Mostrar la información del producto
            document.getElementById('producto-info').classList.remove('hidden');
            document.getElementById('producto-titulo').textContent = productoData.titulo;
            document.getElementById('producto-descripcion').textContent = productoData.descripcion;
            document.getElementById('producto-imagen').src = productoData.imagen;
            document.getElementById('producto-guia').href = productoData.guia;
            document.getElementById('producto-manual').href = productoData.manual;
        }
    });
});

// Alternar visibilidad de las categorías
const categoriaBtns = document.querySelectorAll('.categoria-btn');

categoriaBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const itemsList = this.nextElementSibling;
        const arrow = this.querySelector('.toggle-arrow');

        if (itemsList.style.display === "block") {
            itemsList.style.display = "none";
            arrow.innerHTML = '&#9658;'; // Triángulo apuntando a la derecha
        } else {
            itemsList.style.display = "block";
            arrow.innerHTML = '&#9660;'; // Triángulo apuntando hacia abajo
        }
    });
});