const express = require("express");
const ChatController = require("../controllers/chat");
const api = express.Router();

api.post("/createChat", ChatController.crearChat);
api.get("/findChats", ChatController.findChats);
api.get("/findChatsById/:id", ChatController.findChatsById);
module.exports = api;
