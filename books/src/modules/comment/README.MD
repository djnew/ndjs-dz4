## WebSocket socket.io
Подключен в детальной странице книг, отправка через socket.io, рендер через jquery, стили uikit, работа с датой dayjs

- [container](comment.container.ts) - контейнер dependency injection
- [comment-model](./model/comment.model.ts) - модель комментариев
- [comment-service](./service/comment.service.ts) - сервис комментариев
- [comment-socket](./comment.socket.ts) - обработка запросов от сокета


```
WebSocket   comment-to-book     добавление комментария к книге
```
