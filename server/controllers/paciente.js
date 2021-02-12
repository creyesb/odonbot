
const Paciente = require("../models/paciente");
const { use } = require("../routers/paciente");

function crearPaciente(req, res) {
    
    const paciente =new Paciente();

    const {    nombrePaciente, edad, peso, sintomas, motivoConsulta, enfermedadBase, habitos, pacienteState } = req.body;

    paciente.nombrePaciente= nombrePaciente;
    paciente.edad=edad;
    paciente.peso=peso;
    paciente.sintomas=sintomas;
    paciente.motivoConsulta=motivoConsulta;
    paciente.enfermedadBase= enfermedadBase;
    paciente.habitos=habitos;
    paciente.pacienteState=pacienteState;


    paciente.save((err, pacienteStored) => {
        if (err) {
            res.status(500).send({ message: "Paciente ya registrado." });
        } else {
            if (!pacienteStored) {
                res.status(404).send({ message: "Error en registrar usuario" });
            } else {
                res.status(200).send({ paciente: pacienteStored });
            }
        }

    });
};

function getPaciente(req, res){
    Paciente.find().then(paciente=>{
        
        if(!paciente){
            res.status(404).send({
                message:"No se ha encotrado usuarios"
            });
        }else{
            res.status(200).send({paciente});
        } 
    });

};
function getPacienteByState(req, res){
const query= req.query;

    Paciente.find({pacienteState:query.pacienteState}).then(paciente=>{
        
        if(!paciente){
            res.status(404).send({
                message:"No se han encotrado usuarios."
            });
        }else{
            res.status(200).send({paciente});
        } 
    });

};

function updatePaciente(req, res){
    //const query= req.query;
    const pacienteData= req.body;
    const params = req.params;
    
    Paciente.findByIdAndUpdate( {_id:params.id}, pacienteData, (err, pacienteUpdate) => {
        if(err){
            res.status(500).send({message:"Error en el servidor."});
        }else {
            if(!pacienteUpdate){
                res.status(404).send({message:"No se ha encontrado usuario."});
            }else{
                res.status(200).send({message:"Usuario actualizado correctamente."});
            }
        }
    });
    
}

module.exports = {
    crearPaciente,
    getPaciente,
    getPacienteByState,
    updatePaciente
};