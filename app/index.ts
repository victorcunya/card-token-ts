import {
    APIGatewayProxyEvent, APIGatewayProxyResult
} from 'aws-lambda';
import { CardTokenController } from '@controller/index';

const controller = new CardTokenController();

export const create = (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    return controller.create(event);
};

export const getCardNumber = (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    return controller.getCard(event);
}
