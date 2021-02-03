const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PacienteSchema = Schema({
    nombrePaciente: String,
    edad: String,
    peso: String,
    sintomas: String,
    motivoConsulta:String,
    enfermedadBase:String,
    habitos:String,
    pacienteState: Number

   
});

module.exports = mongoose.model("Paciente", PacienteSchema);