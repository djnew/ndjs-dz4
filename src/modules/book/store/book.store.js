const {BookEntity} = require('../entity/book.entity');

const books = {
  'dc00eaf9-4343-4b30-9918-a32122d450d0': new BookEntity({
    id: 'dc00eaf9-4343-4b30-9918-a32122d450d0',
    title: 'test',
    description: 'test description',
    authors: 'authors 1',
    favorite: 'favorite',
    fileCover: 'fileCover',
    fileName: 'fileName',
    fileBook: '/uploads/test.html',
  }),
  '0e052e8e-1204-4540-b157-9f27faf034c8': new BookEntity({
    id: '0e052e8e-1204-4540-b157-9f27faf034c8',
    title: 'test 1',
    description: 'test description',
    authors: 'authors 1',
    favorite: 'favorite',
    fileCover: 'fileCover',
    fileName: 'fileName',
    fileBook: '',
  }),
  '0da81a5b-9a96-4c12-bf1f-dd03887ad7de': new BookEntity({
    id: '0da81a5b-9a96-4c12-bf1f-dd03887ad7de',
    title: 'test 2',
    description: 'test description',
    authors: 'authors 1',
    favorite: 'favorite',
    fileCover: 'fileCover',
    fileName: 'fileName',
    fileBook: '',
  }),
  '6e6c433d-7c9d-4962-a03c-4629ab78d3de': new BookEntity({
    id: '6e6c433d-7c9d-4962-a03c-4629ab78d3de',
    title: 'test last',
    description: 'test description',
    authors: 'authors 1',
    favorite: 'favorite',
    fileCover: 'fileCover',
    fileName: 'fileName',
    fileBook: '',
  }),
};

module.exports = books;
