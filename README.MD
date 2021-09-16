##Версия NodeJS 14.17.1

##Пакетный менеджер Yarn

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
###запуск express в режиме watch (nodemon):
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

### запуск тестов:

результат тестов [test result](Test%20Results%20-%20All_Tests.html)

все тесты:
```shell
$ yarn jest
 PASS  test/unit/controller/home.controller.spec.js
 PASS  test/unit/service/book.service.spec.js
 PASS  test/unit/controller/auth.conrtoller.spec.js
 PASS  test/e2e/index.spec.js
 PASS  test/unit/service/auth.service.spec.js
 PASS  test/e2e/books/book-create.spec.js
 PASS  test/e2e/books/book-update.spec.js
 PASS  test/e2e/auth.spec.js
 PASS  test/unit/controller/book.controller.spec.js
 PASS  test/e2e/books/book-delete.spec.js
 PASS  test/e2e/books/book-index.spec.js
 PASS  test/e2e/books/book-get-by-id.spec.js

Test Suites: 12 passed, 12 total
Tests:       27 passed, 27 total
Snapshots:   0 total
Time:        2.329 s
Ran all test suites.
```
запуск unit:
```shell
$ yarn test:unit
```
запуск e2e:
```shell
$ yarn test:e2e
```
покрытие тестами:

```
--------------------|---------|----------|---------|---------|-------------------
File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------|---------|----------|---------|---------|-------------------
All files            |     100 |      100 |     100 |     100 |                   
src                 |     100 |      100 |     100 |     100 |                   
routes.js          |     100 |      100 |     100 |     100 |                   
src/controller      |     100 |      100 |     100 |     100 |                   
auth.controller.js |     100 |      100 |     100 |     100 |                   
book.controller.js |     100 |      100 |     100 |     100 |                   
home.controller.js |     100 |      100 |     100 |     100 |                   
src/entity          |     100 |      100 |     100 |     100 |                   
book.entity.js     |     100 |      100 |     100 |     100 |                   
src/service         |     100 |      100 |     100 |     100 |                   
auth.service.js    |     100 |      100 |     100 |     100 |                   
book.service.js    |     100 |      100 |     100 |     100 |                   
src/store           |     100 |      100 |     100 |     100 |                   
book.store.js      |     100 |      100 |     100 |     100 |                   
---------------------|---------|----------|---------|---------|-------------------
```
