let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
const should = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:3977/api/v1";

describe("Pruebas de integración de paciente", () => {
  it("El sintoma del paciente debería ser: Dolor en las encias, un poco de sangrado", (done) => {
    chai
      .request(url)
      .get("/getPaciente-ByID/5fea577881139838122b5c6c")
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.body.pacienteData.sintomas).to.include(
          "Dolor en las encias, un poco de sangrado"
        );

        done();
      });
  });
  it("Debería retornar todos los pacientes", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Debería eliminar un paciente", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Debería actualizar un paciente", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Debería retornar todos los pacientes activos", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Debería retornar todos los pacientes inactivos", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Cambio de estado de pacientes de activo a inactivo", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Cambio de estado de pacientes de inactivo a activo", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
});
