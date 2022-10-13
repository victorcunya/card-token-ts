
import mongoose from 'mongoose';

export type cardToken = mongoose.Document & {
    card_number: number;
    cvv: number;
    expiration_month: string;
    expiration_year: string;
    email: string;
}

const cardTokenSchema = new mongoose.Schema({
    card_number: {
        type: Number,
        required: [true, 'card number required.'],
    },
    cvv: {
        type: Number,
        require: [true, 'cvv required.'],
    },
    expiration_month: {
        type: String,
        require: [true, 'expiration month required.'],
    },
    expiration_year: {
        type: String,
        required: [true, 'expiration year required.'],
    },
    email: {
        type: String,
        require: [true, 'email required'],
    }
});

export const CardToken = mongoose.model<cardToken>('cardToken', cardTokenSchema, 'cardToken');
