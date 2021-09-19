
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
 PASS  src/modules/book/test/e2e/book-create.spec.js
 PASS  src/modules/book/test/e2e/book-delete.spec.js
 PASS  src/modules/book/test/e2e/book-index.spec.js
 PASS  src/modules/book/test/e2e/book-get-by-id.spec.js

Test Suites: 12 passed, 12 total
Tests:       28 passed, 28 total
Snapshots:   0 total
Time:        3.273 s
Ran all test suites.
Done in 4.56s.

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
All files                |      80 |    55.56 |   86.36 |      80 |                   
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
 modules/book/controller |      75 |    66.67 |   83.33 |      75 |                   
  book.controller.js     |      75 |    66.67 |   83.33 |      75 | 41-47             
 modules/book/entity     |     100 |    57.89 |     100 |     100 |                   
  book.entity.js         |     100 |    57.89 |     100 |     100 | 6,8-13,20         
 modules/book/router     |     100 |      100 |     100 |     100 |                   
  book.router.js         |     100 |      100 |     100 |     100 |                   
 modules/book/service    |   58.54 |    44.44 |   71.43 |   58.54 |                   
  book-file.service.js   |   27.27 |        0 |       0 |   27.27 | 6-18              
  book.service.js        |      70 |       50 |   83.33 |      70 | 29-32,47-50,62-65 
 modules/book/store      |     100 |      100 |     100 |     100 |                   
  book.store.js          |     100 |      100 |     100 |     100 |                   
-------------------------|---------|----------|---------|---------|-------------------

```
