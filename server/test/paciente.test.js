let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);
const url = "http://localhost:3977/api/v1";

describe("Obtener pacientes ", () => {
  it("Deberia obtener todos los paciente", (done) => {
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
