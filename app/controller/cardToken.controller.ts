import { APIGatewayProxyEvent } from 'aws-lambda';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { Response, StatusCode, commercePk } from '@helper/index';
import { CreateCardTokenDto, ValidateTokenDto } from '@model/index';
import { CardTokenService } from '@service/cardToken.service';


export class CardTokenController {

    private cardTokenService: CardTokenService;

    constructor() {
        this.cardTokenService = new CardTokenService();
    }

    async create(event: APIGatewayProxyEvent) {

        this.validateHeader(event.headers);
        const body = (event.body) ? event.body : '{}'
        const cardTokenDto = plainToClass(CreateCardTokenDto, JSON.parse(body))
        const validated = await validate(cardTokenDto)
        if (validated.length) {
            const errors = this.formatError(validated);
            const message = 'Bad Request!';
            return Response.error(errors, message, StatusCode.HTTP_400_BAD_REQUEST);
        }

        try {
            const token = await this.cardTokenService.createCardToken(cardTokenDto);
            return Response.success({ token }, StatusCode.HTTP_201_CREATED);
        } catch (error) {
            console.error(error);
            return Response.error({}, (error as Error).message);
        }
    }

    async getCard(event: APIGatewayProxyEvent) {

        this.validateHeader(event.headers);
        const token = event.pathParameters;
        const tokenDto = plainToClass(ValidateTokenDto, token);
        const validated = await validate(tokenDto)

        if (validated.length) {
            const errors = this.formatError(validated);
            const message = 'Invalid token!';
            return Response.error(errors, message, StatusCode.HTTP_400_BAD_REQUEST);
        }
        try {
            const card = await this.cardTokenService.getCardNumber(tokenDto.token);
            return (card)
                ? Response.success(card, StatusCode.HTTP_200_OK)
                : Response.error({}, 'Token expired!', StatusCode.HTTP_404_NOT_FOUND);
        } catch (error) {
            console.error(error);
            return Response.error({}, (error as Error).message);
        }
    }

    private formatError(validated: ValidationError[]) {
        return validated.map(
            error => ({
                property: error.property,
                constraints: error.constraints,
            })
        );
    }

    private validateHeader(headers: any) {

        if (!headers['Authorization']) {
            throw Response.error({}, 'Not authorized!', StatusCode.HTTP_401_UNAUTHORIZED);
        }

        const pk = headers['Authorization'].split(' ').at(-1);
        if (!commercePk.includes(pk)) {
            throw Response.error({}, `${pk} not registered`, StatusCode.HTTP_401_UNAUTHORIZED);
        }
    }
}
