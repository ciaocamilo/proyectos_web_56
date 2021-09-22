let carrito = [];
let total = 0;

function agregarAlCarrito(nombre_producto, precio_producto) {
    // alert(nombre_producto + ' ' + precio_producto);
    let producto = { nombre: nombre_producto, precio: precio_producto };
    carrito.push(producto);
    console.log(carrito);
    console.log(carrito[1].nombre);
    total = total + precio_producto;
    total_carrito.innerText = '$' + total;
}