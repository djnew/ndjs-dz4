## Модуль
Модуль авторизации, на данный момент не действует, отдает статичный json

- [container](auth.container.ts) - контейнер dependency injection
- [controller](controller/auth.controller.ts) - контроллер
- [controller-view](controller/auth-view.controller.ts) - контроллер ejs
- [router](router/auth.router.ts) - роутер
- [router-view](router/auth-view.router.ts) - роутер ejs
- [service](service/user.service.ts) - сервис работы с пользователями

```
GET /user/login         страница с формой входа / регистрации
GET /user/logout        страница выхода
GET /user/me            страница профиля
POST /api/user/login    api входа
POST /api/user/signup   api регистрации
```
