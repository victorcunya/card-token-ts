import {
    APIGatewayProxyEvent,
    APIGatewayProxyHandler,
    APIGatewayProxyResult
} from 'aws-lambda';
import { CardTokenController } from '@controller/index';

const controller = new CardTokenController();

export const create: APIGatewayProxyHandler = (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    return controller.create(event);
};

export const getCardNumber: APIGatewayProxyHandler = (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    return controller.getCard(event);
}
