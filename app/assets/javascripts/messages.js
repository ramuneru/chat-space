$(function(){
  function buildHTML(message){
    let MessageImage = (message.image) ? `<img src='${ message.image }', class='lower_message__image' >` : ""
    let html = `<div class='message', data-id='${message.id}' >
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
      $('#new_message')[0].reset();
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

  let reloadMessages = function() {                                 //（正規表現： \で直後の記号文字を毎回エスケープ）
      if (window.location.href.match(/\/groups\/\d+\/messages/)){   // ifでグループメッセージの画面でのみ自動更新
        let last_message_id = $('.message').last().data('id');

      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        if (messages.length !== 0){               //メッセージの中身があればappend&スクロールするようにする
        let insertHTML = '';                      //追加するHTMLの入れ物を作る
        
        messages.forEach(function(message) {      //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
          insertHTML = buildHTML(message);        //メッセージが入ったHTMLを取得
          $('.messages').append(insertHTML);      //メッセージを追加
        })
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast')   //メッセージ分だけスクロール
        }
      })

      .fail(function() {
        alert('自動更新に失敗しました');
      });
    }
  };
  setInterval(reloadMessages, 5000);
});