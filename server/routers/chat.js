const express = require("express");
const ChatController = require("../controllers/chat");
const api = express.Router();

api.post("/createChat", ChatController.crearChat);
api.get("/findChats", ChatController.findChats);
module.exports = api;
