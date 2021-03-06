const express = require("express");
const UserController = require("../controllers/user");
const md_auth=require("../middleware/authenticated");
const api = express.Router();

api.post("/sign-up", UserController.signUp);
api.post("/sign-in", UserController.signIn);
api.get("/get-estudiante", UserController.rolEstudiante);

module.exports = api;