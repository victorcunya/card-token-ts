import {
    APIGatewayProxyEvent,
    Context
} from 'aws-lambda';
import { Response } from '@helper/utils';
import { CreateCardTokenDto } from '@model/dto/createCardTokenDTO';
import { CardTokenService } from '@service/cardToken';
import { Model } from 'mongoose';


export class CardTokenController extends CardTokenService {

    constructor(cardToken: Model<any>) {
        super(cardToken);
    }

    async create(event: APIGatewayProxyEvent, context?: Context) {
        console.log('functionName', context?.functionName);
        const body = (event.body) ? event.body : '{}'
        const params: CreateCardTokenDto = JSON.parse(body)

        try {
            const result = await this.createCardToken(params);
            return Response.success(result);
        } catch (error) {
            console.error(error);
            return Response.error((error as Error).message, 500);
        }
    }
}
