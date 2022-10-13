import {
    IsEmail,
    IsNumber,
    IsNumberString
} from 'class-validator';

export class CreateCardTokenDto {

    @IsEmail()
    email!: string;

    @IsNumberString()
    cardNumber!: number;

    @IsNumber()
    cvv!: number;

    @IsNumberString()
    expirationYear!: string;

    @IsNumberString()
    expirationMonth!: string;
}
