import { Typography } from "antd";
import React, { useState, useEffect } from "react";
import "./Paciente.scss";
import FormularioPacinte from "../FormularioPaciente/FormularioPaciente";
import ListaPaciente from "../../components/ListaPaciente/ListaPaciente";
import { getPacienteByState } from "../../api/paciente";

function Solicitudes() {
  const [pacienteActivo, setPacienteActivo] = useState([]);
  const [pacienteInactivo, setPacienteInactivo] = useState([]);

  useEffect(() => {
    getPacienteByState(1).then((response) => {
      setPacienteActivo(response.paciente);
    });
    getPacienteByState(0).then((response) => {
      setPacienteInactivo(response.paciente);
    });
  }, []);
  return (
    <div className="paciente">
      <Typography className="paciente__typo">Pacientes Virtuales</Typography>

      <div className="paciente__formlist">
        <FormularioPacinte />
        <br></br>
        <ListaPaciente
          pacienteActivo={pacienteActivo}
          pacienteInactivo={pacienteInactivo}
        />
      </div>

      <div></div>
    </div>
  );
}
export default Solicitudes;
