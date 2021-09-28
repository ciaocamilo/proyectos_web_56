<template>
    <div class="container">
        <h1>Mi componente</h1>
        <h2>Hola {{ cliente.nombre }} </h2>
        <div class="container">
            <div class="row">
                <div>
                    <input type="text" v-model="cliente.nombre">
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
                    precio: 13000
                },
                {
                    id: 2,
                    nombre: 'Pizza',
                    precio: 8000
                },
                {
                    id: 3,
                    nombre: 'Tamal',
                    precio: 5000
                }
            ],
            precioAcumulado: 0
        }
    },
    methods: {
        calcularPrecioAcumulado (precioProducto) {
            this.precioAcumulado = this.precioAcumulado + precioProducto
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