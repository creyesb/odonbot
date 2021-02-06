const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { API_VERSION } = require("./config");

//load routings
const authRoutes = require("./routers/auth");
const userRoutes = require("./routers/user");
const pacienteRoutes = require("./routers/paciente");
const dialogFlowRoutes = require("./routers/dialogflowRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//Chatbot
app.get("/chatbot", (req, res) => {
    res.send({
        "Nombre": "Cristian Reyes"
    });
});
//Para arrlegar problemas de Cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
//
//configure Header HTTP

// Router basic
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, pacienteRoutes);
app.use(`/api/${API_VERSION}`, dialogFlowRoutes);
module.exports = app;