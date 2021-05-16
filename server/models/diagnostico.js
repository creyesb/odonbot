const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiagnosticoSchema = Schema(
  {
    name: String,
    diagnostico: String,
    email: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Diagnostico", DiagnosticoSchema);
