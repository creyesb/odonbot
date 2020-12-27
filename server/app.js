const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { API_VERSION } = require("./config");

//load routings
const authRoutes = require("./routers/auth");
const userRoutes = require("./routers/user");

const dialogFlowRoutes = require("./routers/dialogflowRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//Chatbot
app.get("/chatbot", (req, res) => {
    res.send({
        "Nombre": "Cristian Reyes"
    });
});


//
//configure Header HTTP

// Router basic
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, dialogFlowRoutes);
module.exports = app;