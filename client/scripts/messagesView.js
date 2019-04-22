let MessagesView = {

  $chats: $('#chats'),

  initialize: function(allMessages) {
    this.render(allMessages);
  },

  render: function(allMessages) {
    for(let message of allMessages) {
      this.$chats.append(MessageView.render(message));
    }
  },

  renderMessage: function() {
    let message = {
      username: App.username,
      text :$('#message').val(),
      roomname: $('#roomname').val()
    };
    Parse.create(message);
    this.$chats.prepend(MessageView.render(message));
  }
}

// when you add a new message all the messages re-render
$('.submit').on('click', () => {
  MessagesView.renderMessage();
})