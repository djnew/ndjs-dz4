$(function (){
  const getTmp = (msg) => {
    const date = dayjs(msg.createdAt);
    return `
  <li>
    <article class="uk-comment">
        <header class="uk-comment-header">
            <div class="uk-grid-medium uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                    <img class="uk-comment-avatar" src="/img/avatar.jpg" width="80" height="80" alt="">
                </div>
                <div class="uk-width-expand">
                    <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">${msg.author}</a></h4>
                    <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                    <li>${date.format('DD.MM.YYYY HH:mm:ss')}</li>
                </ul>
                </div>
            </div>
        </header>
        <div class="uk-comment-body">
            <p>${msg.comment}</p>
        </div>
    </article>
    <hr>
  </li>
        `;
  };

  const bookId = $('input[name=book]').val();
  const socket = io.connect('/', {query: `bookId=${bookId}`});

  $('#comment-form').on('submit',function (e){
    e.preventDefault();
    let formData = {};
    $(this).serializeArray().map(function (x) {
      formData[x.name] = x.value;
    });
    socket.emit('comment-to-book', formData);
    $(this)[0].reset();
    UIkit.notification({message: 'Ваш комментарий добавлен', status: 'success'})
  })

  socket.on('comment-to-book', (msg) => {
    const div = getTmp(msg);
    $('#comments').append(div);
  });
});

