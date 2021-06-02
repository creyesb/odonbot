let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);
const url = "http://localhost:3977/api/v1";

describe("fullfilmentQuery & responseText ", () => {
  it("Deberia enviar un request a dialogflow", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Deberia retornar un response", (done) => {
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
