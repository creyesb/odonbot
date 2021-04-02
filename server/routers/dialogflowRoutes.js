const express = require("express");
const chatbot = require("../chatbot/chatbot");
const api = express.Router();

api.get("/main", (req, res) => {
  res.send({ Nombre: "Root " });
});

api.post("/df-text-query", async (req, res) => {
  let responses = await chatbot.textQuery(
    req.body.text,
    req.body.userID,
    req.body.paremeters
  );
  res.send(responses[0].queryResult);
});

api.post("/df-event-query", async (req, res) => {
  let responses = await chatbot.eventQuery(
    req.body.event,
    req.body.userID,
    req.body.paremeters
  );
  res.send(responses[0].queryResult);
});

module.exports = api;
