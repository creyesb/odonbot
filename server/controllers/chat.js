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
  Chat.find({}, (err, res) => {
    //console.log(res);
  });
}
module.exports = {
  crearChat,
  findChats,
};
