const express = require("express");
const DiagnosticoController = require("../controllers/dignostico");
const api = express.Router();

api.post("/saveDiagnostico", DiagnosticoController.saveDiagnostico);
module.exports = api;
