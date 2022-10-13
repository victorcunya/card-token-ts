import { Model } from 'mongoose';
import { CreateCardTokenDto } from '@model/dto/createCardTokenDTO';


export class CardTokenService {

    private cardToken: Model<any>;

    constructor(cardToken: Model<any>) {
        this.cardToken = cardToken;
    }

    /**
     * @param params 
     * @returns 
     */
    createCardToken(params: CreateCardTokenDto): Promise<object> {
        try {
            const result = this.cardToken.create({ ...params });
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}
