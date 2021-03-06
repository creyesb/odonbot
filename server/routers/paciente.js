const express = require("express");
const PacienteController = require("../controllers/paciente");

const api = express.Router();

api.post("/crearPaciente", PacienteController.crearPaciente);
api.get("/getpaciente", PacienteController.getPaciente);
api.get("/getPacienteByState", PacienteController.getPacienteByState);
api.put("/updatePaciente/:id", PacienteController.updatePaciente);

module.exports = api;