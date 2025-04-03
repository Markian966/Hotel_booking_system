import api_hotel from "./api_hotel.js";

class UI {
    constructor(hotel) {
        this.hotel = hotel;
        this.roomList = document.getElementById("room-list");
    }

    renderRooms() {
        this.roomList.innerHTML = "";
        this.hotel.rooms.forEach(room => {
            const roomDiv = document.createElement("div");
            roomDiv.className = `room ${room.isAvailable ? "" : "booked"}`;
            roomDiv.innerHTML = `
                <h3>Room ${room.number} (${room.type})</h3>
                <p>Status: ${room.isAvailable ? "Available" : "Booked"}</p>
                <button onclick="bookRoom(${room.number})" ${room.isAvailable ? "" : "disabled"}>Book</button>
                <button onclick="cancelBooking(${room.number})" ${room.isAvailable ? "disabled" : ""}>Cancel</button>
                <button onclick="loadReviews(${room.number})">Load Reviews</button>
                <div id="reviews-${room.number}" class="reviews"></div>
            `;
            this.roomList.appendChild(roomDiv);
        });
    }
}

export default UI;