const Diagnostico = require("../models/diagnostico");

function saveDiagnostico(req, res) {
  const newDiagnostico = new Diagnostico();

  const { _id, diagnostico, email, name } = req.body;

  newDiagnostico.user = _id;
  newDiagnostico.diagnostico = diagnostico;
  newDiagnostico.email = email;
  newDiagnostico.name = name;

  newDiagnostico.save((err, diagnosticoStored) => {
    if (err) {
      res.status(500).send({ message: "Chat ya almacenado" });
    } else {
      if (!diagnosticoStored) {
        res.status(404).send({ message: "Error en registrar chat" });
      } else {
        res.status(200).send({ newDiagnostico: diagnosticoStored });
      }
    }
  });
}
module.exports = {
  saveDiagnostico,
};
