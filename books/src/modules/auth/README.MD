## Модуль
модуль авторизации, на данный момент не действует, отдает статичный json

- [controller](controller/auth.controller.js) - контроллер
- [controller-view](controller/auth-view.controller.js) - контроллер ejs
- [router](router/auth.router.js) - роутер
- [router-view](router/auth-view.router.js) - роутер ejs
- [service](service/user.service.js) - сервис работы с пользователями

```javascript
GET /user/login   страница с формой входа / регистрации
GET /user/logout  страница выхода
GET /user/me      страница профиля
POST /api/user/login
POST /api/user/signup
```