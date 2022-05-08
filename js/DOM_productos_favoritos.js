let favoritos = [
    {
        "imagen": "./imagenes/burger-1.png",
        "nombre": "Hamburguesa Completa",
        "precio": "250.00"
    },
    {
        "imagen": "./imagenes/tostado-jamon-queso.jpg",
        "nombre": "Tostado de Jamón y Queso",
        "precio": "100.00"
    },
    {
        "imagen": "./imagenes/cheesecake.jpg",
        "nombre": "Cheese-cake",
        "precio": "200.00"
    },
    {
        "imagen": "./imagenes/pizza-1.jpg",
        "nombre": "Pizza Muzzarella (Mediana)",
        "precio": "150.00"
    },
    {
        "imagen": "./imagenes/sandwich-pollo-1.jpg",
        "nombre": "Sandwich de Pollo",
        "precio": "250.00"
    },
    {
        "imagen": "./imagenes/torta-oreo.jpg",
        "nombre": "Torta Oreo (porción)",
        "precio": "325.00"
    }
]

for (let item of favoritos) {
    let agregar = document.getElementById("box-container");
    agregar.innerHTML += `
    <div class="box">
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-eye"></a>
        <img src=${item["imagen"]} alt="#">
        <h4>${item["nombre"]}</h4>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>$ ${item["precio"]}</span>
        <a href="#" class="btn">Añadir al Carrito</a>
    </div>
    `
}