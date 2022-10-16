import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';

const validDomain = [
    'gmail.com',
    'hotmail.com',
    'yahoo.es',
]

@ValidatorConstraint({
    name: 'validEmailDomain',
    async: false
})
export class CustomEmailDomain implements ValidatorConstraintInterface {

    validate(value: string): boolean {
        const domain = value.split('@')[1];
        return validDomain.includes(domain);
    }

    defaultMessage(arg?: ValidationArguments): string {
        return `email ${arg.value} invalid, please use ${validDomain}`;
    }

}
