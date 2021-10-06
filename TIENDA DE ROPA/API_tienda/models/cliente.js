import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const clienteSchema = new Schema(
    {
        nombres: {type: String, required: [true, 'Nombre obligatorio']},
        apellidos: {type: String, required: [true, 'Apellido obligatorio']},
        fecha_nacimiento: Date,
        correo: {type: String, required: [true, 'Correo obligatorio']},
        edad: Number,
        direccion: String,
        tratamiento: {type: String, required: [true, 'tratamiento de datos obligatorio']}
    }
)

// Crear el modelo
const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;