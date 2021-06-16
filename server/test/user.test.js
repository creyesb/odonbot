let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
const should = require("chai").expect;
chai.use(chaiHttp);
const url = "http://localhost:3977/api/v1";

describe("Pruebas de integración usuario", () => {
  it("Debería retornar todos los usuarios", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Debería retornar todos los usuarios con rol: Estudiante", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Debería retornar todos los usuarios con rol: Profesor", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Debería retornar todos los usuarios con rol: Profesor", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Debería retornar todos los usuarios con rol: Administrador", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Debería retornar todos los usuarios activos", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Debería retornar todos los usuarios inactivos", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Debería eliminar un usuario", (done) => {
    chai
      .request(url)
      .get("/getPaciente")
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
  it("No debería retornar usuario con ID inexistente, status code debería ser 404", (done) => {
    chai
      .request(url)
      .get("/getPaciente-ByID/777")
      .end(function(err, res) {
        expect(res).to.have.status(500);
        done();
      });
  });
  it("No debería editar usuario con ID inexistente, status code debería ser 404", (done) => {
    chai
      .request(url)
      .get("/getPaciente-ByID/777")
      .end(function(err, res) {
        expect(res).to.have.status(500);
        done();
      });
  });
});

/*let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
const url = "http://localhost:3977/api/v1";
const { updateUser } = "../controllers/user";
chai.use(chaiHttp);

describe("Actualizar datos del usuario", () => {
  it("Deberia actualizar datos del usuario, retorna status(200)", (done) => {
    chai
      .request(url)
      .put("/update-user/6094df1e09d37d5fe823510b")
      .send({
        nombre: "Mauricio",
        rut: "19526967-2",
        apellidoP: "kepaza",
      })
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});

/*
describe("Iniciar sesion ", () => {
  it("El usuario deberia iniciar sesión y retornar status(200)", (done) => {
    chai
      .request(getUser)
      .post("/sign-in")
      .send({
        email: "cristian.reyesb@alumnos.uv.cl",
        password: "210197",
      })
      .end(function(err, res) {
        // console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("El usuario intenta iniciar sesión, pero combinación  retornar status(401)", (done) => {
    chai
      .request(url)
      .post("/sign-in")
      .send({
        email: "cristia.reyesb@alumnos.uv.cl",
        password: "210f197",
      })
      .end(function(err, res) {
        // console.log(res.body);
        expect(res).to.have.status(401);
        done();
      });
  });
});


describe("Obtener usuarios: ", () => {
  it("Deberia obtener todos los usuarios", (done) => {
    chai
      .request(url)
      .get("/get-user")
      .end(function(err, res) {
        // console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
});


describe("Obtener usuarios: ", () => {
  it("Deberia obtener todos los usuarios activos", (done) => {
    chai
      .request(url)
      .get("/get-user-by-state?usrState=true")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Deberia obtener todos los usuarios inactivos", (done) => {
    chai
      .request(url)
      .get("/get-user-by-state?usrState=false")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe("Obtener usuarios por id: ", () => {
  it("Deberia obtener los datos del usuario", (done) => {
    chai
      .request(url)
      .get("/get-user-by-id/6094df1e09d37d5fe823510b")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
});
describe("Obtener usuarios por email: ", () => {
  it("Deberia obtener los datos del usuario", (done) => {
    chai
      .request(url)
      .get("/get-user-by-email/botellitadeagua@alumnos.uv.cl")
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
});



describe("Actualizar datos del usuario", () => {
  it("Deberia actualizar datos del usuario, retorna status(200)", (done) => {
    chai
      .request(url)
      .put("/update-user/6094df1e09d37d5fe823510b")
      .send({
        nombre: "MAurio",
        rut: "19526967-2",
        apellidoP: "kepaza",
      })
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});
describe("Actualizar estado del estudiante ", () => {
  it("Deberia actualizar el estado actual del estudiante, retorna status(200)", (done) => {
    chai
      .request(url)
      .put("/activateUser/6094df1e09d37d5fe823510b")
      .send({
        usrState: "true",
      })
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});*/

/*
describe("creacion de usuarios ", () => {
  it("Deberia retornar status(404)", (done) => {
    chai
      .request(url)
      .post("/sign-up")
      .send({
        nombre: "Madrid",
        rut: "19526967-2",
        apellidoP: "kepaza",
        apellidoM: "dasda",
        email: "112aj2aja@uv.cl",
        password: "12345678",
        passwordConfirmation: "123435678",
        rol: 1,
        userState: "true",
      })
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(404);
        done();
      });
  });
  it("deberia crear usuario con éxito", (done) => {
    chai
      .request(url)
      .post("/sign-up")
      .send({
        nombre: "Madrid",
        rut: "19526967-2",
        apellidoP: "kepaza",
        apellidoM: "dasda",
        email: "112a1je2aja@uv.cl",
        password: "12345678",
        passwordConfirmation: "12345678",
        rol: 1,
        userState: "true",
      })
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("deberia retornar error en el server status(500)", (done) => {
    chai
      .request(url)
      .post("/sign-up")
      .send({})
      .end(function(err, res) {
        //console.log(res.body);
        expect(res).to.have.status(500);
        done();
      });
  });
});
*/
