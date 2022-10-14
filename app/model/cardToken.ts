
import { Schema, model } from 'mongoose';

interface ICardToken {
    card_number: number;
    cvv: number;
    expiration_month: string;
    expiration_year: string;
    email: string;
}

const cardTokenSchema = new Schema<ICardToken>({
    card_number: {
        type: Number,
        required: true,
    },
    cvv: {
        type: Number,
        require: true,
    },
    expiration_month: {
        type: String,
        require: true,
    },
    expiration_year: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
    }
});

export const CardToken = model<ICardToken>('CardToken', cardTokenSchema);
