import { Typography } from "antd";
import React, { useState, useEffect } from "react";
import "./Paciente.scss";
import FormularioPaciente from "../FormularioPaciente/FormularioPaciente";
import ListaPaciente from "../../components/ListaPaciente/ListaPaciente";
import { getPacienteByState } from "../../api/paciente";

function PacienteActivoInactivo() {
  const [pacienteActivo, setPacienteActivo] = useState([]);
  const [pacienteInactivo, setPacienteInactivo] = useState([]);
  const [reloadPaciente, setReloadPaciente] = useState(false);

  useEffect(() => {
    getPacienteByState(0).then((response) => {
      setPacienteActivo(response.paciente);
    });
    getPacienteByState(1).then((response) => {
      setPacienteInactivo(response.paciente);
    });
    setReloadPaciente(false);
  }, [reloadPaciente]);
  return (
    <div className="paciente">
      <Typography className="paciente__typo">Pacientes Virtuales</Typography>

      <div className="paciente__formlist">
        <FormularioPaciente />
        <br></br>
        <ListaPaciente
          pacienteActivo={pacienteActivo}
          pacienteInactivo={pacienteInactivo}
          setReloadPaciente={setReloadPaciente}
        />
      </div>
    </div>
  );
}
export default PacienteActivoInactivo;
