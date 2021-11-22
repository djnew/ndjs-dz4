$(function () {
  $('#login').on('submit', function (e) {
    e.preventDefault()
    const formData = {}
    $(this).serializeArray().map(function (x) {
      formData[x.name] = x.value
    })
    axios.post('/api/user/login', formData)
      .then(function (response) {
        window.location.href = '/user/me'
      })
      .catch(function (error) {
        $('.form-errors-login').removeClass('hidden').html('<div class="uk-alert-danger" uk-alert><a class="uk-alert-close" uk-close></a><p>Не верное имя пользователя или пароль</p></div>')
      })
  })
  $('#registration').on('submit', function (e) {
    e.preventDefault()
    const password1 = $(this).find('input[name=password]').val()
    const password2 = $(this).find('input[name=password_confirm]').val()
    if (password2 !== password1) {
      $('.form-errors').removeClass('hidden').html('<div class="uk-alert-danger" uk-alert><a class="uk-alert-close" uk-close></a><p>Пароли не совпадают</p></div>')
    } else {
      const formData = {}
      $(this).serializeArray().map(function (x) {
        formData[x.name] = x.value
      })
      axios.post('/api/user/signup', formData)
        .then((response) => {
          $(this).html('<div class="uk-alert-success" uk-alert><a class="uk-alert-close" uk-close></a><p>Вы успешно зарегистрировались, перейдите на вкладку входа для авторизации</p></div>')
        })
        .catch(function (error) {
          console.log(error)
          if (error.response) {
            $('.form-errors').removeClass('hidden').html(`<div class="uk-alert-danger" uk-alert><a class="uk-alert-close" uk-close></a><p>${error.response.data.message}</p></div>`)
            console.log() // => the response payload
          }
        })
    }
  })
})
