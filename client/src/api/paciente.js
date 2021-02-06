import { basePath, apiVersion } from "./config";

export function crearPaciente(data) {
  const url = `${basePath}/${apiVersion}/crearPaciente`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.paciente) {
        return {
          status: 200,
          message: "Paciente creado con éxito",
        };
      }
      return {
        ok: false,
        message: result.message,
      };
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}

export function getPaciente(data) {
  const url = `${basePath}/${apiVersion}/getPaciente`;
  const params = {
    method: "GET",
    //body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  // console.log(params);
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}
export function getPacienteByState(pacienteState) {
  const url = `${basePath}/${apiVersion}/getPacienteByState?pacienteState=${pacienteState}`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  // console.log(params);
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

export function updatePacienteAPI(paciente, pacienteID) {
  const url = `${basePath}/${apiVersion}/updatePaciente/${pacienteID}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paciente),
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}
