<template>
    <div id="contenido">
        <div class="container">
            <h1>Registro de clientes</h1>
        </div>
        <div class="container">
            <div class="row">
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
                            <div class="form-check">
                                <label>He leído y acepto el tratamiento de mis datos</label>
                                <input v-model="cliente.tratamiento" type="checkbox" class="form-check-input is-invalid" id="tratamiento_datos" name="tratamiento_datos" required>
                                <div class="invalid-feedback">
                                    Debes aceptar los términos y condiciones antes de enviar
                                </div>
                            </div>
                        </div>
                        <div class="campos-formulario form-group">
                            <input @click="registrarCliente()" class="btn btn-primary" value="Registrar">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            cliente: {
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
        registrarCliente () {
            console.log(this.cliente)
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