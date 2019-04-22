let RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(rooms) {
    this.render(rooms);
  },
  
  render: function(rooms) {
    for (let room in rooms) {
      this.$select.append(RoomListView.render({room}))
    }
  }

};

let RoomListView = {
  render: _.template(`
    <option class="room <%- room%>"><%- room%></option>
  `)
}