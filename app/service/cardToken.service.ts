import { CardTokenRepository } from '@repository/index';
import { CreateCardTokenDto } from '@model/index';


export class CardTokenService {

    private repository: CardTokenRepository;

    constructor() {
        this.repository = new CardTokenRepository();
    }

    createCardToken(params: CreateCardTokenDto) {
        try {
            return this.repository.create(params);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getCardNumber(token: string) {
        try {
            const card = await this.repository.getCard(token);
            return (card) ?
                {
                    email: card.email,
                    cardNumber: card.cardNumber,
                    expirationYear: card.expirationYear,
                    expirationMonth: card.expirationMonth,
                }
                : card
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}
