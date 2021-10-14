<template>
    <div id="contenido">
        <div id="galeria" class="container margen-galeria">
            <br><h1>Productos</h1><br>
            <div class="row fila-productos">
                <div v-for="producto in productos" :key="producto.id" class="col-lg-4 col-md-6 col-sm-6 col-xs-12 tarjeta-producto">
                    <img :src="getPictureProducto(producto.imagen)" class="imagen-producto">
                    <h2 class="nombre-producto">{{producto.nombre}}</h2>
                    <h4 class="precio-producto">${{producto.precio}}</h4>
                    <div class="descripcion-producto">
                        <p>{{producto.descripcion}}</p>
                    </div>
                    <div class="div-cantidad">
                        <input class="input-cantidad" id="camisa_cantidad" type="number" value="0" min="0">
                    </div>
                    <div id="icono" class="div-icono">
                        <i class="las la-cart-arrow-down icono-grande" @click="agregarAlCarrito(producto)"></i>
                        <p><b>Agregar al carrito</b></p>
                    </div>
                </div>
            </div>
        </div>
        <div id=div_total class="tarjeta-total">
            <h1><b>TOTAL</b></h1>
            <h2 id="total_carrito">${{total_carrito}}</h2>
            <div id="icono" class="div-icono">
                <i class="las la-shopping-bag icono-grande" @click="irCarrito()"></i>
                <p><b>Ir al carrito</b></p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            productos: [],
            carrito: [],
            total_carrito: 0
        }
    },
    created () {
        this.cargarProductos()
        /*
        this.productos = [
            {
                id: 1,
                nombre: 'Camiseta',
                precio: 25000,
                imagen: 'camiseta.jpg',
                descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quidem neque. Eius blanditiis similique dolorem?'
            },
            {
                id: 2,
                nombre: 'Vestido',
                precio: 150000,
                imagen: 'vestido.jpg',
                descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quidem neque. Eius blanditiis similique dolorem?'
            },
            {
                id: 3,
                nombre: 'Pantalón',
                precio: 100000,
                imagen: 'pantalon.jpg',
                descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quidem neque. Eius blanditiis similique dolorem?'
            },
            {
                id: 4,
                nombre: 'Falda',
                precio: 120000,
                imagen: 'falda.png',
                descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quidem neque. Eius blanditiis similique dolorem?'
            },
            {
                id: 5,
                nombre: 'Camisa',
                precio: 45000,
                imagen: 'camisa.jpg',
                descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quidem neque. Eius blanditiis similique dolorem?'
            }
        ]
        */
    },
    methods: {
         getPictureProducto (nombre_archivo) {
            /* Función para cargar imágenes dinámicamente */
            var images = require.context('@/assets/productos/', false, /\.jpg$|\.png$/)
            return images('./' + nombre_archivo)
        },
        agregarAlCarrito(producto) {
            this.carrito.push(producto)
            console.log(this.carrito)
            this.total_carrito = this.total_carrito + producto.precio
            this.$swal.fire(
                'Producto agregado',
                'Se ha agregado ' + producto.nombre + ' al carrito de compras',
                'success'
            )
        },
        irCarrito () {
            let ruta = `/carrito/${this.total_carrito}`
            this.$router.push(ruta)
        },
        cargarProductos () {
            axios.get('https://tienda-56-api.herokuapp.com/api/productos')
            .then(response => {
                let status_peticion = response.status
                console.log(status_peticion)
                this.productos = response.data
            })
        }
    }
}
</script>