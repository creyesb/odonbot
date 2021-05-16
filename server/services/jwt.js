const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "74V7qI55V36ZghBpr3";

function createAccessToken(user) {
  const payload = {
    id: user._id,
    nombre: user.nombre,
    apellidoP: user.apellidoP,
    apellidoM: user.apellidoM,
    rut: user.rut,
    email: user.email,
    rol: user.rol,
    usrState: user.usrState,
    createToken: moment().unix(),
    exp: moment()
      .add(4, "hours")
      .unix(),
  };
  //console.log(payload);
  return jwt.encode(payload, SECRET_KEY);
}

function createRefreshToken(user) {
  const payload = {
    id: user._id,
    exp: moment()
      .add(30, "days")
      .unix(),
  };
  return jwt.encode(payload, SECRET_KEY);
}

function decodedToken(token) {
  //console.log("Esto que es: " + jwt.decode(token, SECRET_KEY, true));
  return jwt.decode(token, SECRET_KEY, true);
}

module.exports = {
  decodedToken,
  createRefreshToken,
  createAccessToken,
};
