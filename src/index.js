import Hotel from "./modules/Hotel.js";
import Room from "./modules/Room.js";
import UI from "./modules/UI.js";
import HotelAPI from "./modules/api_hotel.js";

document.addEventListener("DOMContentLoaded", () => {
    const hotel = new Hotel("Grand Hotel");

    const rooms = [
        new Room(101, "Standard"),
        new Room(102, "Deluxe"),
        new Room(103, "Suite"),
        new Room(104, "Standard")
    ];

    rooms.forEach(room => hotel.addRoom(room));

    const ui = new UI(hotel);
    ui.renderRooms();

    window.bookRoom = function (number) {
        const room = hotel.rooms.find(r => r.number === number);
        if (room) {
            alert(room.book());
            ui.renderRooms();
        }
    };

    window.cancelBooking = function (number) {
        const room = hotel.rooms.find(r => r.number === number);
        if (room) {
            alert(room.cancelBooking());
            ui.renderRooms();
        }
    };

    window.loadReviews = async function (number) {
        const reviews = await HotelAPI.fetchReviews();
        const randomReviews = reviews.sort(() => 0.5 - Math.random()).slice(0, 3);
        const reviewsDiv = document.getElementById(`reviews-${number}`);
        reviewsDiv.innerHTML = randomReviews.map(r => `<p>${r.body}</p>`).join('');
    };
});