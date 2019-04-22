let App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  // initializes app (ran at end of HTML doc)
  initialize: () => {
    //creates username
    App.username = window.location.search.substr(10);
    //sets up form for username
    FormView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: (callback = ()=>{}) => {
    Parse.readAll((data) => {
      // examine the response from the server request:
      for (let messageObject of data.results) {
        // only pushes data if user typed in text
        if (messageObject.text) {
          // changes empty usernames to anon
          messageObject.username = messageObject.username || 'Anon'
          // pushes messages to messages object
          Messages.results.push(messageObject);
          // create unique room names property in Rooms object
          if (!Rooms[messageObject.roomname]) {
            Rooms[messageObject.roomname] = [messageObject];
          } else {
            Rooms[messageObject.roomname].push(messageObject);
          }
        }
      }
      //creates all messages on site
      MessagesView.initialize(Messages.results);
      callback();
      //creates all rooms on site
      RoomsView.initialize(Rooms);
    });
  },

  startSpinner: () => {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: () => {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
