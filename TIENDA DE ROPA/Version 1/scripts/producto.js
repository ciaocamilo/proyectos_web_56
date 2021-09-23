let carrito = [];
let total = 0;

function agregarAlCarrito(nombre_producto, precio_producto, cantidad_producto) {
    // alert(nombre_producto + ' ' + precio_producto);
    let cantidad = document.getElementById(cantidad_producto).value;
    let producto = { nombre: nombre_producto, precio: precio_producto, cantidad: cantidad };
    carrito.push(producto);
    console.log(carrito);
    // console.log(carrito[1].nombre);
    total = total + (precio_producto * cantidad);
    total_carrito.innerText = '$' + total;
    Swal.fire(
        'Producto agregado',
        'Se ha agregado ' + nombre_producto + ' al carrito de compras',
        'success'
        );
}