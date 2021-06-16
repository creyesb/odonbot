let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
const should = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:3977/api/v1";

describe("Pruebas de integración con dialogflow", () => {
  it("Debería enviar un queryText a dialogflow", (done) => {
    chai
      .request(url)
      .get("/df-text-query")
      .set("content-type", "application/x-www-form-urlencoded")
      .send({ text: "hola" })
      .end(function(error, res) {
        if (error) {
          done(error);
        } else {
          done();
        }
      });
  });
  it("Debería retornar un fulfillmentText", (done) => {
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
