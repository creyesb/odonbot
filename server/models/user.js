const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    nombre: String,
    apellidoP: String,
    apellidoM: String,
    rut: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    passwordConfirmation: String,
    rol: Number,
    usrState: Boolean
});

module.exports = mongoose.model("User", UserSchema);