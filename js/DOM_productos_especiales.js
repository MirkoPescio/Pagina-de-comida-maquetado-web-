let especiales = [
    {
        "imagen": "./imagenes/nuggets-1.jpg",
        "nombre": "Nuggets de Pollo",
        "precio": "350.00"
    },
    {
        "imagen": "./imagenes/sandwich-miga-1.jpg",
        "nombre": "Sandwich de miga",
        "precio": "125.00"
    },
    {
        "imagen": "./imagenes/budin-de-pan-1.jpg",
        "nombre": "Budín de Pan",
        "precio": "220.00"
    },
    {
        "imagen": "./imagenes/sorrentinos-1.jpg",
        "nombre": "Sorrentinos (jamón y queso)",
        "precio": "400.00"
    },
    {
        "imagen": "./imagenes/sushi-1.jpg",
        "nombre": "Sushi",
        "precio": "450.00"
    },
    {
        "imagen": "./imagenes/pebete-jamon-y-queso-1.jpg",
        "nombre": "Pebete de Jamón y Queso",
        "precio": "125.00"
    }
]

for (item of especiales) {
    let agregar2 = document.getElementById("productos_especiales");
    agregar2.innerHTML += `
    <div class="box">
        <div class="image">
            <img src="${item["imagen"]}" alt="#">
            <a href="#" class="fas fa-heart"></a>
        </div>
        <div class="content">
            <h3>${item["nombre"]}</h3>
            <a href="#" class="btn">Añadir al Carrito</a><br>
            <span class="price">$ ${item["precio"]}</span>
        </div>
    </div>
    `
}