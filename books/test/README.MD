
### запуск тестов:

результат тестов [test result](Test%20Results%20-%20All_Tests.html)

все тесты:
```shell
$  yarn test
yarn run v1.22.5
$ jest
 PASS  src/modules/auth/test/unit/auth.service.spec.js
 PASS  src/modules/auth/test/unit/auth.conrtoller.spec.js
 PASS  test/unit/controller/home.controller.spec.js
 PASS  src/modules/book/test/unit/book.service.spec.js
 PASS  test/e2e/index.spec.js
 PASS  src/modules/book/test/unit/book.controller.spec.js
 PASS  src/modules/auth/test/e2e/auth.spec.js
 PASS  src/modules/book/test/e2e/book-update.spec.js
 PASS  src/modules/book/test/e2e/book-get-by-id.spec.js
 PASS  src/modules/book/test/e2e/book-create.spec.js
 PASS  src/modules/book/test/e2e/book-index.spec.js
 PASS  src/modules/book/test/e2e/book-delete.spec.js

Test Suites: 12 passed, 12 total
Tests:       30 passed, 30 total
Snapshots:   0 total
Time:        2.948 s, estimated 3 s
Ran all test suites.
Done in 4.11s.
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
-------------------------|---------|----------|---------|---------|-------------------
File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------------|---------|----------|---------|---------|-------------------
All files                |   93.52 |    70.73 |    87.5 |   93.52 |                   
 controller              |     100 |      100 |     100 |     100 |                   
  home.controller.js     |     100 |      100 |     100 |     100 |                   
 modules/auth            |     100 |      100 |     100 |     100 |                   
  auth.module.js         |     100 |      100 |     100 |     100 |                   
 modules/auth/controller |     100 |      100 |     100 |     100 |                   
  auth.controller.js     |     100 |      100 |     100 |     100 |                   
 modules/auth/router     |     100 |      100 |     100 |     100 |                   
  auth.router.js         |     100 |      100 |     100 |     100 |                   
 modules/auth/service    |     100 |      100 |     100 |     100 |                   
  auth.service.js        |     100 |      100 |     100 |     100 |                   
 modules/book            |     100 |      100 |     100 |     100 |                   
  book.module.js         |     100 |      100 |     100 |     100 |                   
 modules/book/controller |     100 |      100 |     100 |     100 |                   
  book.controller.js     |     100 |      100 |     100 |     100 |                   
 modules/book/entity     |     100 |    57.89 |     100 |     100 |                   
  book.entity.js         |     100 |    57.89 |     100 |     100 | 6,8-13,20         
 modules/book/middleware |      50 |        0 |       0 |      50 |                   
  file.js                |      50 |        0 |       0 |      50 | 5-8,22-25         
 modules/book/router     |     100 |      100 |     100 |     100 |                   
  book.router.js         |     100 |      100 |     100 |     100 |                   
 modules/book/service    |      92 |    83.33 |     100 |      92 |                   
  book.service.js        |      92 |    83.33 |     100 |      92 | 28,42             
 modules/book/store      |     100 |      100 |     100 |     100 |                   
  book.store.js          |     100 |      100 |     100 |     100 |                   
-------------------------|---------|----------|---------|---------|-------------------

```
