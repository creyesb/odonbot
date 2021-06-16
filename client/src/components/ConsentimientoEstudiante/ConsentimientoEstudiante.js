import React from "react";
import { Typography, Collapse, Steps } from "antd";
import "./ConsentimientoEstudiante.scss";
const { Title } = Typography;
const { Panel } = Collapse;
const { Step } = Steps;

export default function ConsentimientoEstudiante() {
  return (
    <div>
      <div className="panelConsentimiento">
        <Collapse
          defaultActiveKey={["1"]}
          className="panelConsentimiento__collapse"
          expandIconPosition="right"
        >
          <Panel header="Información de estudio" key="1">
            <Title level={4}>Consentimiento Informado </Title>

            <Steps
              direction="vertical"
              current={5}
              className="panelConsentimiento__steps"
            >
              <Step
                status="finish"
                className="step-space"
                title="Objetivo"
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
                title="Relevancia"
                description="La relevancia de este estudio es brindar una herramienta TIC
                como apoyo en la enseñanza y aprendizaje de habilidades
                diagnósticas teóricas en el área de la patología y medicina
                oral, ofreciendo un acercamiento preclínico individual a una
                gran cantidad de estudiantes. Esta herramienta aumenta la
                casuística individual de cada estudiantes así como ofrece un
                espacio de interacción con un paciente virtual donde se
                desarrollan también habilidades de entrevista durante el proceso
                semiológico. En consecuencia, la aplicación del Odontobot tiene
                como objetivo fortalecer el posterior desempeño clínico de los
                estudiantes."
              ></Step>
              <Step
                status="finish"
                className="step-space"
                title="Participación"
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
                title="Riesgos"
                description=" No existen riesgos asociados a su participación en la
                investigación."
              ></Step>
              <Step
                status="finish"
                className="step-space"
                title="Gastos"
                description=" Usted no incurrirá en gastos ni recibirá pagos por participar en
                esta investigación."
              ></Step>
              <Step
                status="finish"
                className="step-space"
                title="Datos"
                description="Al acceder al caso automáticamente acepta ser parte de este estudio, ningún dato personal será almacenado."
              ></Step>
            </Steps>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
