const Chat = require("../models/chat");

function crearChat(req, res) {
  const chat = new Chat();

  const { _id, queryText, fullfilmentText } = req.body;
  chat.user = _id;
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

function findChats(req, res) {
  Chat.find().then((chat) => {
    if (!chat) {
      res.status(404).send({
        message: "No se han encotrado usuarios.",
      });
    } else {
      res.status(200).send({ chat });
    }
  });
}

function findChatsById(req, res) {
  const params = req.params;

  User.findById({ _id: params.id }, (err, userChat) => {
    if (err) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (!userChat) {
        res.status(404).send({ message: "No se ha encontrado chat" });
      } else {
        res.status(200).send({ userChat });
      }
    }
  });
}

module.exports = {
  crearChat,
  findChats,
  findChatsById,
};
