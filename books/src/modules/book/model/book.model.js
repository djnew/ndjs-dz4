const {Schema, model} = require("mongoose");

const bookScheme = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  favorite: String,
  fileCover: String,
  fileName: String,
  fileBook: String
});

const BookModel = model("Book", bookScheme);

module.exports = {BookModel};
