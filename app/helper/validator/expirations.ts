import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';

@ValidatorConstraint({
    name: 'validExpirationYear',
    async: false
})
export class CustomValidExpirationYear implements ValidatorConstraintInterface {

    validate(value: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        const cardYear = Number(value);
        const fullYear = new Date().getFullYear();
        return ((fullYear <= cardYear) && (cardYear <= fullYear + 5))
    }
    defaultMessage(arg?: ValidationArguments): string {
        return `Expiration year ${arg.value} invalid!`;
    }
}

@ValidatorConstraint({
    name: 'validExpirationMonth',
    async: false
})
export class CustomValidExpirationMonth implements ValidatorConstraintInterface {

    validate(value: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        const month = Number(value);
        return ((1 <= month) && (month <= 12))
    }
    defaultMessage(arg?: ValidationArguments): string {
        return `Expiration month ${arg.value} invalid!`;
    }
}
