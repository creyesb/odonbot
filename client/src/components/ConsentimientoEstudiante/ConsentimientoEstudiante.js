import React from "react";
import { Typography, Steps } from "antd";
import "./ConsentimientoEstudiante.scss";
const { Title } = Typography;

const { Step } = Steps;

export default function ConsentimientoEstudiante() {
  return (
    <div className="conContainer">
      <div className="panelConsentimiento">
        <Typography style={{ textAlign: "center" }}>
          <Title level={2}>Consentimiento Informado</Title>
        </Typography>
        <Steps
          direction="vertical"
          current={5}
          className="panelConsentimiento__steps"
        >
          <Step
            status="finish"
            className="step-space"
            title="¿Cuál es el objetivo de este estudio?"
            description="El objetivo de este estudio es testear la implementación de un
                paciente virtual a través de un chatbot denominado Odontobot
                como herramienta de apoyo en la adquisición de competencias
                diagnósticas teóricas en la asignatura de Medicina
                Estomatológica de la carrera de Odontología de la Universidad de
                Valparaíso."
          ></Step>
          <Step
            status="finish"
            className="step-space"
            title="¿Cuál es la relevancia de este estudio?"
            description="La relevancia de este estudio es brindar una herramienta TIC
                como apoyo en la enseñanza y aprendizaje de habilidades
                diagnósticas teóricas en el área de la patología y medicina
                oral, ofreciendo un acercamiento preclínico individual a una
                gran cantidad de estudiantes. Esta herramienta aumenta la
                casuística individual de cada estudiante así como ofrece un
                espacio de interacción con un paciente virtual donde se
                desarrollan también habilidades de entrevista durante el proceso
                semiológico. En consecuencia, la aplicación del Odontobot tiene
                como objetivo fortalecer el posterior desempeño clínico de los
                estudiantes."
          ></Step>
          <Step
            status="finish"
            className="step-space"
            title="¿En qué consiste su participación?"
            description="Su participación es voluntaria y no recibirá remuneración. Usted
              deberá ver un video instruccional previo, para luego crear una
              cuenta en OdontoBot, seguidamente acceder al caso a través del
              chat y realizar una entrevista al paciente virtual con la
              finalidad de poder llegar al diagnóstico final del caso. Al
              finalizar el experimento usted deberá responder un cuestionario.
              Todo se hará a través de su computador con conexión a internet,
              desde su domicilio y no le tomará más de 40 minutos."
          ></Step>
          <Step
            status="finish"
            className="step-space"
            title="¿Cuáles son los riesgos al participar en este estudio?"
            description=" No existen riesgos asociados a su participación en el
                estudio."
          ></Step>
          <Step
            status="finish"
            className="step-space"
            title="¿Cuáles son los gastos?"
            description=" Usted no incurrirá en gastos ni recibirá pagos por su participación en
                este estudio."
          ></Step>
          <Step
            status="finish"
            className="step-space"
            title="¿Qué pasará con mis datos?"
            description="Al acceder al caso automáticamente acepta ser parte de este estudio. Ningún dato personal será almacenado, a no ser que te quieras registrar de forma voluntaria."
          ></Step>
          <Step
            status="finish"
            className="step-space"
            title="¿Quién verá tu información?"
            description="La información será almacenada en una base de datos segura. Solo se podrá ver información como el nombre y correo, y será vista por los profesores y administradores del sistema."
          ></Step>
        </Steps>
      </div>
    </div>
  );
}
