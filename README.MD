## Версия NodeJS 14.17.1

## Пакетный менеджер Yarn

## ENV

```dotenv
POST=3000#Порт сервера
```

## Прокет

[README](test/README.MD) - тесты

[README](src/modules/auth/README.MD) - модуль авторизации

[README](src/modules/book/README.MD) - модуль книг

### запуск express:
```shell
$ yarn start
yarn run v1.22.5
$ node src/index.js
/ get: home init
/api/user/login post: auth init
/api/books get: bookIndex init
/api/books/:id get: bookGetById init
/api/books post: bookCreate init
/api/books/:id put: bookUpdate init
/api/books/:id delete: bookDelete init
Example app listening at http://localhost:3000
```
### запуск express в режиме watch (nodemon):
```shell
$ yarn watch
yarn run v1.22.5
$ nodemon --watch src src/index.js
[nodemon] 2.0.12
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src\**\*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`
/ get: home init
/api/user/login post: auth init
/api/books get: bookIndex init
/api/books/:id get: bookGetById init
/api/books post: bookCreate init
/api/books/:id put: bookUpdate init
/api/books/:id delete: bookDelete init
Example app listening at http://localhost:3000
```

### запуск eslint:
```shell
$ yarn lint
yarn run v1.22.5
$ eslint --ext ".js" --ignore-path .eslintignore .
Done in 3.52s.
```
