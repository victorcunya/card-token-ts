import {
    APIGatewayProxyEvent,
    APIGatewayProxyHandler,
    APIGatewayProxyResult,
    Context
} from 'aws-lambda';
import { CardToken } from './model';
import { CardTokenController } from '@controller/cardToken';

const controller = new CardTokenController(CardToken);

export const create: APIGatewayProxyHandler = (
    event: APIGatewayProxyEvent,
    context: Context
): Promise<APIGatewayProxyResult> => {
    return controller.create(event, context);
};

