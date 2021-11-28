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

## Проект

/book/src - файлы проекта TypeScript

/book/build - билд проекта JavaScript

[README](src/modules/auth/README.MD) - модуль авторизации

[README](src/modules/book/README.MD) - модуль книг

[README](src/modules/comment/README.MD) - модуль комментариев (WebSocket/socket.io)

### запуск express:
```shell
$ yarn build      
yarn run v1.22.17
$ tsc
Done in 2.85s.
```
```shell
$ yarn start
yarn run v1.22.5
$ node src/index.ts
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
$ yarn build:watch
[8:22:31 PM] Starting compilation in watch mode...

[8:22:34 PM] Found 0 errors. Watching for file changes.
```
```shell
$ yarn watch
yarn run v1.22.5
$ nodemon --watch src src/index.ts
[nodemon] 2.0.12
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src\**\*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.ts`
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
yarn run v1.22.17
$ node_modules/.bin/eslint --ext ".ts" --ignore-path .eslintignore .
Done in 1.15s.
```
