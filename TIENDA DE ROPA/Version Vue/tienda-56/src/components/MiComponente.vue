<template>
    <div class="container">
        <h1>Mi componente</h1>
        <h2>Hola {{ cliente.nombre }} </h2>
        <div class="container">
            <div class="row">
                <div>
                    <input type="text" v-model="cliente.nombre">
                    <button type="button" @click="enviarCliente()">Enviar cliente</button>
                </div>
                <div>
                    <input type="number" v-model="cantidad">
                </div>
            </div>
            <div class="row">
                <h3 v-if="cantidad > 0" >Número mayor a cero</h3>
                <h2 v-else-if="cantidad === 0" >Número igual a 0</h2>
                <h3 v-else>Número negativo</h3>
                <h2 v-show="cantidad > 0">Número positivo (v-show)</h2>
            </div>
        </div>
        <br><br>
        <!--
        <div class="container">
            <div v-for="alimento in alimentos" :key="alimento.id">
                <h1>Producto {{ alimento.nombre }} </h1>
                <h2>Precio {{ alimento.precio }} </h2>
            </div>
        </div>
        -->
        <div class="container">
            <div class="row">
                <div v-for="alimento in alimentos" :key="alimento.id" class="col-lg-3 col-md-6 col-sm-6 col-xs-12 estilo-tarjeta">
                    <img class="img-thumbnail" :src="getPictureComida(alimento.imagen)">
                    <h2>{{ alimento.nombre }} </h2>
                    <h3>{{ alimento.precio }} </h3>
                    <button type="button" @click="calcularPrecioAcumulado(alimento.precio)">Agregar</button>
                </div>
            </div>
        </div>
        <div class="container">
            <h3><b>PRECIO TOTAL = </b> {{ precioAcumulado }} </h3>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'MiComponente',
    data () {
        return {
            cliente: { nombre: 'Juan', apellido: 'Perez' },
            cantidad: 0,
            alimentos: [
                {
                    id: 1,
                    nombre: 'Hamburguesa',
                    precio: 13000,
                    imagen: 'hamburguesa.jpg'
                },
                {
                    id: 2,
                    nombre: 'Pizza',
                    precio: 8000,
                    imagen: 'pizza.jpg'
                },
                {
                    id: 3,
                    nombre: 'Tamal',
                    precio: 5000,
                    imagen: 'tamal.png'
                }
            ],
            precioAcumulado: 0
        }
    },
    methods: {
        calcularPrecioAcumulado (precioProducto) {
            this.precioAcumulado = this.precioAcumulado + precioProducto
        },
        getPictureComida (nombre_archivo) {
            /* Función para cargar imágenes dinámicamente */
            let images = require.context('@/assets/comida/', false, /\.jpg$|\.png$/)
            return images('./' + nombre_archivo)
        },
        enviarCliente () {
            axios.post('https://reqbin.com/echo/post/json',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            },
            {
                data: this.cliente
            })
            .then(response => {
                let status_peticion = response.status
                let mensaje = response.data
                console.log(status_peticion)
                alert(mensaje)
            })
        }
    }
}
</script>
<style scoped>
    .estilo-tarjeta {
        padding: 5px;
        border: solid;
        border-radius: 15px;
        background-color: darkorange;
        margin: 10px;
    }
</style>