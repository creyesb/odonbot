const bcrypt = require("bcrypt-nodejs");
const jwt = require("../services/jwt");
const User = require("../models/user");
const { use } = require("../routers/user");

function signUp(req, res) {
    const user = new User();

    const { nombre, apellidoP, apellidoM, rut, email, password, passwordConfirmation, rol, usrState } = req.body;

    user.nombre = nombre;
    user.apellidoP = apellidoP;
    user.apellidoM = apellidoM;
    user.rut = rut;
    user.email = email.toLowerCase();
    user.password = password;
    user.passwordConfirmation = passwordConfirmation;
    user.rol = rol;
    user.usrState = false;
    if (!password || !passwordConfirmation) {
        res.status(404).send({ message: "Las constraseñas son obligatorias" });
    } else {
        if (password !== passwordConfirmation) {
            res.status(404).send({ message: "Las contraseñas son distintas" });
        } else {
            bcrypt.hash(password, null, null, function (err, hash) {
                if (err) {
                    res.status(500).send({ message: "Error en encriptar la password" });
                } else {
                    user.password = hash;

                    user.save((err, userStored) => {
                        if (err) {
                            res.status(500).send({ message: "Usuario ya registrado" });
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
};


function signIn(req, res) {
    const params = req.body;
    const email = params.email.toLowerCase();
    const password = params.password;
    

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
                                refreshToken: jwt.createRefreshToken(userStored)
                            });
                        }

                    }
                });
            }
        }
    })
};
function rolEstudiante(req, res){
    const params = req.body;
   // const {rol} = params.rol;
    console.log(params.rol);

};
module.exports = {
    signUp,
    signIn,
    rolEstudiante
};