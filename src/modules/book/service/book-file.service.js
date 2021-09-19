const fs = require('fs')
const path = require('path');

class BookFileService {
  static async uploadFile(file, rowId){
    if(file !== undefined) {
      const ext = file.originalname.split('.');
      const filePath = path.join(
        'uploads/',
        `${rowId}.${ext[ext.length - 1]}`,
      );
      const currentPath = path.join(__dirname,'../../../../',file.path);

      await fs.promises.copyFile(currentPath, filePath);
      await fs.promises.unlink(currentPath);
      return filePath;
    }
    return false;
  }
}

module.exports = {BookFileService}
