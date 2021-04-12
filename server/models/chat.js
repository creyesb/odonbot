const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = Schema(
  {
    emisor: String,
    receptor: String,
    _iduser: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", ChatSchema);
