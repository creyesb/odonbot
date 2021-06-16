const Paciente = require("../models/paciente");
const { use } = require("../routers/paciente");

function crearPaciente(req, res) {
  const paciente = new Paciente();

  const {
    nombrePaciente,
    edad,
    peso,
    sintomas,
    motivoConsulta,
    enfermedadBase,
    habitos,
    pacienteState,
  } = req.body;

  paciente.nombrePaciente = nombrePaciente;
  paciente.edad = edad;
  paciente.peso = peso;
  paciente.sintomas = sintomas;
  paciente.motivoConsulta = motivoConsulta;
  paciente.enfermedadBase = enfermedadBase;
  paciente.habitos = habitos;
  paciente.pacienteState = pacienteState;

  paciente.save((err, pacienteStored) => {
    if (err) {
      res.status(500).send({ message: "Paciente ya creado." });
    } else if (
      !paciente.nombrePaciente ||
      !paciente.edad ||
      !paciente.peso ||
      !paciente.sintomas ||
      !paciente.motivoConsulta ||
      !paciente.enfermedadBase ||
      !paciente.habitos ||
      !paciente.pacienteState
    ) {
      res.status(404).send({ message: "Rellene todos los campos" });
    } else {
      if (!pacienteStored) {
        res.status(404).send({ message: "Error en registrar usuario" });
      } else {
        res.status(200).send({ paciente: pacienteStored });
      }
    }
  });
}

function getPaciente(req, res) {
  Paciente.find().then((paciente) => {
    if (!paciente) {
      res.status(404).send({
        message: "No se ha encotrado pacientes",
      });
    } else if (paciente.length === 0) {
      res.status(404).send({
        message: "No se han encotrado pacientes.",
      });
    } else {
      res.status(200).send({ paciente });
    }
  });
}

function getPacienteById(req, res) {
  const params = req.params;

  Paciente.findById({ _id: params.id }, (err, pacienteData) => {
    if (err) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!pacienteData) {
        res.status(404).send({ message: "No se ha encontrado paciente" });
      } else {
        res.status(200).send({ pacienteData });
      }
    }
  });
}

function getPacienteByState(req, res) {
  const query = req.query;

  Paciente.find({ pacienteState: query.pacienteState }).then((paciente) => {
    if (!paciente) {
      res.status(404).send({
        message: "No se han encotrado pacientes.",
      });
    } else if (paciente.length === 0) {
      res.status(404).send({
        message: "No se han encotrado pacientes.",
      });
    } else {
      res.status(200).send({ paciente });
    }
  });
}

function updatePaciente(req, res) {
  //const query= req.query;
  const pacienteData = req.body;
  const params = req.params;

  Paciente.findByIdAndUpdate(
    { _id: params.id },
    pacienteData,
    (err, pacienteUpdate) => {
      if (err) {
        res.status(500).send({ message: "Error en el servidor." });
      } else {
        if (!pacienteUpdate) {
          res.status(404).send({ message: "No se ha encontrado paciente." });
        } else {
          res
            .status(200)
            .send({ message: "Paciente actualizado correctamente." });
        }
      }
    }
  );
}
function activatePaciente(req, res) {
  const { id } = req.params;
  const { pacienteState } = req.body;
  Paciente.findByIdAndUpdate(id, { pacienteState }, (err, pacienteStored) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor" });
    } else {
      if (!pacienteStored) {
        res.status(404).send({ message: "No se ha encontrado el Paciente" });
      } else {
        if (pacienteState === 1) {
          res.status(200).send({ message: "Paciente activado correctamente" });
        } else if (pacienteState === 0) {
          res
            .status(200)
            .send({ message: "Paciente desactivado correctanente" });
        } else {
          res.status(404).send({ message: "Estado no valido" });
        }
      }
    }
  });
}

function deletePaciente(req, res) {
  const { id } = req.params;
  Paciente.findByIdAndDelete(id, (err, pacienteDelete) => {
    if (err) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!pacienteDelete) {
        res.status(400).send({ message: "No se ha encontrado el paciente" });
      } else {
        res.status(200).send({ message: "Paciente ha sido eliminado" });
      }
    }
  });
}
module.exports = {
  crearPaciente,
  getPaciente,
  getPacienteById,
  getPacienteByState,
  updatePaciente,
  activatePaciente,
  deletePaciente,
};
