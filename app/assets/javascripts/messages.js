$(function(){
  function buildHTML(message){
    let MessageImage = (message.image) ? `<img src='${ message.image }', class='lower_message__image' >` : ""
    console.log(MessageImage);
    let html = `<div class='message'>
                  <div class='message__upper-info'>
                    <div class='message__upper-info__talker'>
                      ${ message.user_name }
                    </div>
                    <div class='message__upper-info__date'>
                      ${ message.date }
                    </div>
                  </div>
                  <div class='lower_message'>
                    <p class='message__text'>
                      ${ message.text }
                    </p>
                      ${ MessageImage }
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      let html = buildHTML(data);
      $('.messages').append(html);
      $('#message_content').val('');
      $('#message_image').val('');
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      return false
    })
    .fail(function() {
      alert('入力エラー：文章または画像を入力してください');
    })
    .always(function() {
      $('.submit-btn').attr('disabled', false);
    });
  });
});