const {v4: uuidv4} = require('uuid');

class BookEntity {
  constructor(params) {
    this.id = params.id ? params.id : this.generateUUID();
    this.title = params.title;
    this.description = params.description;
    this.authors = params.authors;
    this.favorite = params.favorite;
    this.fileCover = params.fileCover;
    this.fileName = params.fileName;
  }

  generateUUID() {
    return uuidv4();
  }

}

module.exports = {BookEntity};
