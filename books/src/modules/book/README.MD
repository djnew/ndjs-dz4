## Модуль
модуль книг

- [container](book.container.ts) - контейнер dependency injection
- [controller-api](controller/book.controller.ts) - контроллер api
- [controller-web](controller/book-view.controller.ts) - контроллер ejs
- [router-api](router/book.router.ts) - роутер api
- [router-web](router/book-library.router.ts) - роутер ejs
- [book-service](service/book.service.ts) - сервис книг
- [book-model](model/book.model.ts) - модель книги


```
GET /api/books/         api получение всех книг
GET /api/books/:id      api получение книги по ID
POST /api/books/        api создание книги
PUT /api/books/:id      api обновление книги
DELETE /api/books/:id   api удаление книги

GET /library/               страница всех книг
GET /library/:id            страница книги
GET /library/add            страница добавления книги
GET /library/update/:id     страница обновления книги
POST /library/add           api добавления книги
POST /library/update/:id    api обновления книги
POST /library/delete/:id    api удаления книги
```
