import {
    IsEmail,
    IsNumberString,
    Length,
    MaxLength,
    Validate
} from 'class-validator';
import {
    CustomValidCardNumber,
    CustomValidExpirationYear,
    CustomValidExpirationMonth,
} from '@helper/index';

export class CreateCardTokenDto {

    @IsEmail()
    @MaxLength(80)
    email!: string;

    @IsNumberString()
    @Length(14, 16)
    @Validate(CustomValidCardNumber)
    cardNumber!: string;

    @IsNumberString()
    @Length(3, 4)
    cvv!: string;

    @IsNumberString()
    @Length(4, 4)
    @Validate(CustomValidExpirationYear)
    expirationYear!: string;

    @IsNumberString()
    @Length(1, 2)
    @Validate(CustomValidExpirationMonth)
    expirationMonth!: string;
}
