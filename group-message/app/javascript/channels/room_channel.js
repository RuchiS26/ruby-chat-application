import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    if (data.content != ''){

      $('.message').last().css({'background-color':''});
      $('#messages-table').append('<div class="message">' +
          '<div class="message-user">' + data.username + ":" + '</div>' +
          '<div class="message-content">' + data.content + '</div>' + '</div>');
      $("#messages").animate({ scrollTop: $('#messages').prop("scrollHeight")}, 1000);
      $('.message').last().css({'background-color':'black'});

    }
  }
});

let submit_messages;

$(document).on('turbolinks:load', function () {
  submit_messages();
});

submit_messages = function () {
  $('#message_content').on('keydown', function (event) {
    if (event.keyCode == 13) {
      $('input').click();
      // event.target.value = '';
      event.preventDefault();
    }
  })
};
