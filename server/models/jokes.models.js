const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema(
  {
    setup: { type: String, required: true },
    punchline: { type: String, required: true },
  },
  { timestamps: true }
);

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;
