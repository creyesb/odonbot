const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = Schema({
  iduser: String,
  queryText: String,
  fullfilmentText: String,
});

module.exports = mongoose.model("Chat", ChatSchema);
