const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = Schema(
  {
    user: String,
    queryText: String,
    fullfilmentText: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", ChatSchema);
