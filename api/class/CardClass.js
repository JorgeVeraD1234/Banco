import CardModel from "../models/CardModel.js"





class ManagerCards {
    constructor(
        userId,
        accountId,
        cardNumber,
        cardType,
        expirationDate,
        securityCode,
        status
    ) {
        this.userId = userId;
        this.accountId = accountId;
        this.cardNumber = cardNumber;
        this.cardType = cardType;
        this.expirationDate = expirationDate;
        this.securityCode = securityCode;
        this.status = status;
    }
    async createCard() {
        try {
            await CardModel.create({
                userId: this.userId,
                accountId: this.accountId,
                cardNumber: this.cardNumber,
                cardType: this.cardType,
                expirationDate: this.expirationDate,
                securityCode: this.securityCode,
                status: this.status
            })
            return "ok"
        } catch (error) {
            throw new Error(`Error al obtener cuentas: ${error}`);
        }
    }

    async getCards() {
        try {
            const cards = await CardModel.find();
            return cards;
        } catch (error) {
            throw new Error(`Error al obtener cartas: ${error}`);
        }
    }

    async getCard(id) {
        try {
            const card = await CardModel.findById(id);
            return card;
        } catch (error) {
            throw new Error(`Error al obtener Carta: ${error}`);
        }
    }
}

export default ManagerCards;