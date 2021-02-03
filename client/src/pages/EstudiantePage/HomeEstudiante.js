import React from "react";
import "./HomeEstudiante.scss";
import {Calendar, Steps, Button, message, Typography} from "antd";

const { Step } = Steps;

const steps = [
    {
      title: 'Tip',
      content: 'Recuerda seguir el protocolo para así lograr el diagnóstico.',
    },
    {
      title: 'Tip',
      content: 'Debes practicar con el bot para familiarizarte antes de una evaluación',
    },
    {
      title: 'Tip',
      content: 'Una vez revisada la evaluación puedes ver la rúbrica y los comentarios del profesor.',
    },
  ];

function HomeEstudiante() {
    const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

    return (
        <div className="homeEstudiante">
          <Typography className="homeEstudiante__typo">
            Bienvenido Estudiante
          </Typography>

            <div className="site-calendar-demo-card">
                <Calendar fullscreen={false}  />
            </div>

            <Steps current={current} className="stepsconf">
                {steps.map(item => (
                <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Anterior
                </Button>
                )}
                {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                    Siguiente
                </Button>
                )}
                {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('✨✨✨')}>
                    Listo
                </Button>
                )}
                
            </div>
        </div>
    );
}

export default HomeEstudiante;
