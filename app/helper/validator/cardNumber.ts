import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';

@ValidatorConstraint({
    name: 'validCardNumber',
    async: false
})
export class CustomValidCardNumber implements ValidatorConstraintInterface {

    validate(num: string): boolean {
        return this.isValidLuhn(num);
    }

    defaultMessage(arg?: ValidationArguments): string {
        return `Card Number ${arg.value} invalid!`;
    }

    private isValidLuhn(num: string): boolean {
        try {
            const sumTable = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]];
            let sum = 0, flip = 0;
            for (let i = num.length - 1; i >= 0; i--, flip++)
                sum += sumTable[flip & 0x1][parseInt(num.charAt(i))];
            return ((sum % 10) == 0);
        } catch (e) {
            return false;
        }
    }
}
