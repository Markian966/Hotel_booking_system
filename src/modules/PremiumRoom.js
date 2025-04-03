class PremiumRoom extends Room {
    constructor(number, type, premiumService) {
        super(number, type);
        this.premiumService = premiumService;
    }
}