import {
    APIGatewayProxyEvent,
    Context
} from 'aws-lambda';
import {
    Response,
    StatusCode
} from '@helper/utils';
import { CreateCardTokenDto } from '@model/dto/createCardTokenDTO';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
// import { CardTokenService } from '@service/cardToken';
// import { Model } from 'mongoose';


export class CardTokenController /*extends CardTokenService */ {

    constructor() {
        // super(cardToken);
    }

    async create(event: APIGatewayProxyEvent, context?: Context) {
        console.log('functionName', context?.functionName);
        const body = (event.body) ? event.body : '{}'
        const cardTokenDto = plainToClass(CreateCardTokenDto, JSON.parse(body))
        const validated = await validate(cardTokenDto)

        if (validated.length) {
            const data = validated.map(
                error => ({
                    property: error.property,
                    constraints: error.constraints,
                })
            );
            const message = 'Card token invalid';
            return Response.error(data, message, StatusCode.badRequest);
        }
        try {
            // const result = await this.createCardToken(params);
            const params = { "hoa": 1 }
            return Response.success(params);
        } catch (error) {
            console.error(error);
            return Response.error({}, (error as Error).message, 500);
        }
    }
}
