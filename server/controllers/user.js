const bcrypt = require("bcrypt-nodejs");
const jwt = require("../services/jwt");
const User = require("../models/user");
const { use } = require("../routers/user");

function signUp(req, res) {
  const user = new User();
  const {
    nombre,
    apellidoP,
    apellidoM,
    rut,
    email,
    password,
    passwordConfirmation,
    rol,
    usrState,
  } = req.body;

  user.nombre = nombre;
  user.apellidoP = apellidoP;
  user.apellidoM = apellidoM;
  user.rut = rut;
  user.email = email.toLowerCase();
  user.password = password;
  user.passwordConfirmation = passwordConfirmation;
  user.rol = rol;
  user.usrState = "false";
  if (!password || !passwordConfirmation) {
    res.status(404).send({ message: "Las constraseñas son obligatorias" });
  } else {
    if (password !== passwordConfirmation) {
      res.status(404).send({ message: "Las contraseñas son distintas" });
    } else {
      bcrypt.hash(password, null, null, function(err, hash) {
        if (err) {
          res.status(500).send({ message: "Error en encriptar la password" });
        } else {
          user.password = hash;

          user.save((err, userStored) => {
            if (err) {
              res.status(500).send({ message: "Revise su correo y rut" });
            } else {
              if (!userStored) {
                res.status(404).send({ message: "Error en registrar usuario" });
              } else {
                res.status(200).send({ user: userStored });
              }
            }
          });
        }
      });
    }
  }
}

function signIn(req, res) {
  const params = req.body;
  const email = params.email.toLowerCase();
  const password = params.password;
  //const rol =params.rol;
  User.findOne({ email }, (err, userStored) => {
    if (err) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!userStored) {
        res.status(404).send({ message: "Usuario no encontrado" });
      } else {
        bcrypt.compare(password, userStored.password, (err, check) => {
          if (err) {
            res.status(500).send({ message: "Error del servidor" });
          } else if (!check) {
            res.status(404).send({ message: "La contraseña es incorrecta" });
          } else {
            if (!userStored.usrState) {
              res
                .status(200)
                .send({ code: 200, message: "El usuario no esta activo" });
            } else {
              res.status(200).send({
                accessToken: jwt.createAccessToken(userStored),
                refreshToken: jwt.createRefreshToken(userStored),
              });
            }
          }
        });
      }
    }
  });
}
function rolEstudiante(req, res) {
  const params = req.body;
  // const {rol} = params.rol;
  console.log("El rol del user es: " + params.rol);
}

function getUser(req, res) {
  User.find().then((user) => {
    if (!user) {
      res.status(404).send({
        message: "No se han encotrado pacientes.",
      });
    } else {
      res.status(200).send({ user });
    }
  });
}

function updateUser(req, res) {
  const userData = req.body;
  const params = req.params;

  User.findByIdAndUpdate({ _id: params.id }, userData, (err, userUpdate) => {
    if (err) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!userUpdate) {
        res.status(404).send({ message: "No se ha encontrado usuario" });
      } else {
        res.status(200).send({ message: "Usuario actualizado correctamente" });
      }
    }
  });
}

function getUserById(req, res) {
  const params = req.params;

  User.findById({ _id: params.id }, (err, userData) => {
    if (err) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!userData) {
        res.status(404).send({ message: "No se ha encontrado usuario" });
      } else {
        res.status(200).send({ userData });
      }
    }
  });
}

function getUserByState(req, res) {
  const query = req.query;
  User.find({ usrState: query.usrState }).then((user) => {
    if (!user) {
      res.status(404).send({
        message: "No se han encotrado usuarios.",
      });
    } else {
      res.status(200).send({ user });
    }
  });
}

function deleteUser(req, res) {
  const { id } = req.params;
  User.findByIdAndDelete(id, (err, userDelete) => {
    if (err) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!userDelete) {
        res.status(400).send({ message: "No se ha encontrado el paciente" });
      } else {
        res.status(200).send({ message: "Paciente ha sido eliminado" });
      }
    }
  });
}

function activateUser(req, res) {
  const { id } = req.params;
  const { usrState } = req.body;
  User.findByIdAndUpdate(id, { usrState }, (err, usrStored) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor" });
    } else {
      if (!usrStored) {
        res.status(404).send({ message: "No se ha encontrado el Estudiante" });
      } else {
        if (usrState === "true") {
          res
            .status(200)
            .send({ message: "Estudiante activado correctamente" });
        } else if (usrState === "false") {
          res
            .status(200)
            .send({ message: "Estudiante desactivado correctanente" });
        }
      }
    }
  });
}

module.exports = {
  signUp,
  signIn,
  rolEstudiante,
  getUser,
  updateUser,
  getUserById,
  getUserByState,
  deleteUser,
  activateUser,
};
