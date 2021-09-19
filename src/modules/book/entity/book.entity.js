const {v4: uuidv4} = require('uuid');

class BookEntity {


  constructor(params = {}) {
    this.id = params.id ? params.id : this.generateUUID();
    this.title = params.title ? params.title : '';
    this.description = params.description ? params.description : '';
    this.authors = params.authors ? params.authors : '';
    this.favorite = params.favorite ? params.favorite : '';
    this.fileCover = params.fileCover ? params.fileCover : '';
    this.fileName = params.fileName ? params.fileName : '';
    this.fileBook = params.fileBook ? params.fileBook : '';
  }

  bookFill(params){
    const keys = Object.keys(params);
    keys.forEach(key => {
      if(key in this) {
        this[key] = params[key];
      }
    })
  }

  generateUUID() {
    return uuidv4();
  }

}

module.exports = {BookEntity};
