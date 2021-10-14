<template>
    <div id="contenido">
        <div class="container">
            <h1>Actualización de clientes</h1>
        </div>
        <div class="container">
            <div class="row">
                <div id="busqueda" class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <form>
                        <br>
                        <div class="campos-formulario form-group">
                            <label>Identificación<noframes></noframes></label>
                            <input v-model="cliente.identificacion" type="text" class="form-control" id="identificacion" name="identificacion" placeholder="Ingrese su identificacion" required>
                        </div>
                        <div class="campos-formulario form-group">
                            <input @click="buscarCliente()" class="btn btn-secondary" value="Buscar">
                        </div>
                    </form>
                </div>
            </div>
            <div v-if="cliente._id !== ''" class="row">
                <div id="formulario" class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <form>
                        <br>
                        <div class="campos-formulario form-group">
                            <label>Nombres</label>
                            <input v-model="cliente.nombres" type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingrese su nombre" required>
                        </div>
                        <div class="campos-formulario form-group">
                            <label>Apellidos</label>
                            <input v-model="cliente.apellidos" type="text" class="form-control" id="apellidos" name="apellidos" placeholder="Ingrese su apellido" required>
                        </div>
                        <div class="campos-formulario form-group">
                            <label>Fecha de nacimiento</label>
                            <input v-model="cliente.fecha_nacimiento" type="date" class="form-control" id="fecha_nacimiento" name="fecha_nacimiento">
                        </div>
                        <div class="campos-formulario form-group">
                            <label>Correo electrónico</label>
                            <input v-model="cliente.correo" type="email" class="form-control" id="mail" name="mail" placeholder="Correo electrónico">
                        </div>
                        <div class="campos-formulario form-group">
                            <label>Edad</label>
                            <input v-model="cliente.edad" type="number" class="form-control" id="edad" name="edad" placeholder="Ingrese su edad">
                        </div>
                        <div class="campos-formulario form-group">
                            <label>Dirección</label>
                            <input v-model="cliente.direccion" type="text" class="form-control" id="direccion" name="direccion" placeholder="Ingrese su dirección">
                        </div>
                        <div class="campos-formulario form-group">
                            <input @click="actualizarCliente()" class="btn btn-primary" value="Modificar">
                            <input @click="eliminarCliente()" class="btn btn-danger" value="Eliminar">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            cliente: {
                _id: '',
                identificacion: '',
                nombres: '',
                apellidos: '',
                fecha_nacimiento: '',
                correo: '',
                edad: '',
                direccion: '',
                tratamiento: ''
            }
        }
    },
    methods: {
        buscarCliente () {
            axios.get(`https://tienda-56-api.herokuapp.com/api/cliente/${this.cliente.identificacion}`)
            .then(response => {
                if (response.data !== null) {
                    this.cliente = response.data
                } else {
                    this.$swal.fire(
                        'Cliente no encontrado',
                        'No existe el cliente con identificación ' + this.cliente.identificacion,
                        'warning'
                    )
                }
            })
        },
        actualizarCliente () {
            axios.put(`https://tienda-56-api.herokuapp.com/api/actualizar-cliente/${this.cliente._id}`, this.cliente)
            .then(response => {
                let status_peticion = response.status
                if (status_peticion === 200) {
                    this.$swal.fire(
                        'Cliente modificado',
                        'Se ha modificado el cliente con identificación ' + this.cliente.identificacion,
                        'success'
                    )
                    this.cliente = {}
                } else {
                    this.$swal.fire(
                        'Cliente NO modificado',
                        'Ocurrió un error al modificado el cliente con identificación ' + this.cliente.identificacion,
                        'error'
                    )
                }
            })
        },
        eliminarCliente () {
            this.$swal.fire({
                title: '¿Está seguro?',
                text: "¡Esta operación no se puede deshacer!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sí, eliminar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete(`https://tienda-56-api.herokuapp.com/api/eliminar-cliente/${this.cliente._id}`)
                            .then(response => {
                                let status_peticion = response.status
                                if (status_peticion === 200) {
                                    this.$swal.fire(
                                        'Cliente eliminado',
                                        'Se ha eliminado el cliente con identificación ' + this.cliente.identificacion,
                                        'success'
                                    )
                                    this.cliente = {}
                                } else {
                                    this.$swal.fire(
                                        'Cliente NO eliminado',
                                        'Ocurrió un error al eliminar el cliente con identificación ' + this.cliente.identificacion,
                                        'error'
                                    )
                                }
                            })
                    }
                })
            }
        }
}
</script>
<style scoped>
    .campos-formulario {
        margin-bottom: 10px;
        margin-top: 10px;
        margin-left: 30px;
    }
</style>