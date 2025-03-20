const Hotel = require("./modules/Hotel");
const Room = require("./modules/Room");
const UI = require("./modules/UI");

const hotel = new Hotel("Grand Hotel");
const room101 = new Room(101, "Standard");
const room102 = new Room(102, "Deluxe");
const room103 = new Room(103, "Suite");
const room104 = new Room(104, "Standard");

hotel.addRoom(room101);
hotel.addRoom(room102);
hotel.addRoom(room103);
hotel.addRoom(room104);


const ui = new UI(hotel);
ui.renderRooms();

global.bookRoom = function(number){
    const room = hotel.rooms.find(r => r.number === number);
    if (room){
        alert(room.book());
        ui.renderRooms();
    }
};

global.cancelBooking = function(number){
    const room = hotel.rooms.find(r => r.number === number);
    if (room){
        alert(room.cancelBooking());
        ui.renderRooms();
    }
};
