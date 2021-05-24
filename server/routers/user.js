const express = require("express");
const UserController = require("../controllers/user");
const md_auth = require("../middleware/authenticated");
const api = express.Router();

api.post("/sign-up", UserController.signUp);
api.post("/sign-in", UserController.signIn);
api.get("/get-estudiante", UserController.rolEstudiante);
api.get("/get-user", UserController.getUser);
api.put("/update-user/:id", UserController.updateUser);
api.get("/get-user-by-id/:id", UserController.getUserById);
api.get("/get-user-by-email/:email", UserController.getUserByEmail);
api.get("/get-user-by-state", UserController.getUserByState);
api.get("/get-user-by-rol", UserController.getUserByRol);
api.put("/activateUser/:id", UserController.activateUser);
api.delete("/deleteUser/:id", UserController.deleteUser);

module.exports = api;
