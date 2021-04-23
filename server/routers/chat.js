const express = require("express");
const ChatController = require("../controllers/chat");
const api = express.Router();

api.post("/createChat", ChatController.crearChat);
module.exports = api;
