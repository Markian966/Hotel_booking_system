class Room {
    #creditCardNumber;

    constructor(number, type) {
        this.number = number;
        this.type = type;
        this.isAvailable = true;
    }

    setCreditCardNumber(number) {
        if (/^\d{16}$/.test(number)) {
            this.#creditCardNumber = number;
        } else {
            throw new Error("Invalid credit card number. It must be 16 digits.");
        }
    }

    getMaskedCardNumber() {
        return this.#creditCardNumber ? `**** **** **** ${this.#creditCardNumber.slice(-4)}` : "No card on file";
    }

    book() {
        const cardNumber = prompt("Enter your 16-digit credit card number:");
        try {
            this.setCreditCardNumber(cardNumber);
            this.isAvailable = false;
            return `Room ${this.number} has been reserved. Card: ${this.getMaskedCardNumber()}`;
        } catch (error) {
            return error.message;
        }
    }

    cancelBooking() {
        this.isAvailable = true;
        return `Room ${this.number} is now open for booking.`;
    }
}

export default Room;