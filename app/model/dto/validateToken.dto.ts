import {
    IsString,
    Length,
} from 'class-validator';

export class ValidateTokenDto {

    @IsString()
    @Length(16, 16)
    token!: string;
}
