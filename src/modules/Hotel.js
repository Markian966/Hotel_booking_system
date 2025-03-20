  function Hotel(name) {
    this.name = name;
    this.rooms = [];
  }

  Hotel.prototype.addRoom = function (room) {
    this.rooms.push(room);
  };

  Hotel.prototype.getAvailableRooms = function() {
    return this.rooms.filter(room => room.isAvailable);
  };


module.exports = Hotel;
