const Chat = require("../models/chat");
const { use } = require("../routers/chat");

function crearChat(req, res) {
  const chat = new Chat();

  const { iduser, queryText, fullfilmentText } = req.body;
  chat.iduser = iduser;
  chat.fullfilmentText = fullfilmentText;
  chat.queryText = queryText;

  chat.save((err, chatStored) => {
    if (err) {
      res.status(500).send({ message: "Chat ya almacenado" });
    } else {
      if (!chatStored) {
        res.status(404).send({ message: "Error en registrar chat" });
      } else {
        res.status(200).send({ chat: chatStored });
      }
    }
  });
}
module.exports = {
  crearChat,
};
