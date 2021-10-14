## Версия NodeJS 14.17.1

## Пакетный менеджер Yarn

## ENV

```dotenv
POST=3000# Порт сервера
COUNTER_PORT=3000# Порт счетчика
COUNTER_URL=http://ndjs-dz4-counter# урл счетчика 
MONGO_CONNECT_URL=mongodb://ndjs-dz4-mongo:27017#строка подключения к mongo
MONGO_CONNECT_DB=db# база данных mongo
MONGO_CONNECT_PASSWORD=example# пароль подключения к mongo
MONGO_CONNECT_USERNAME=root# логин подключения к mongo
```

## Прокет

[README](src/modules/auth/README.MD) - модуль авторизации

[README](src/modules/book/README.MD) - модуль книг

[README](src/modules/comment/README.MD) - модуль комментариев (WebSocket/socket.io)

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
