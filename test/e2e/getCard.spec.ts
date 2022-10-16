
import { getCardNumber } from '../../app'
import { getEventBad, getEventFail } from '../data';

describe('Invalid token', () => {
    test('Bad Request', async () => {
        const result = await getCardNumber(getEventBad);
        expect(result.statusCode).toBe(400)
        const body = JSON.parse(result.body)
        expect(body['message']).toEqual('Invalid token!')
    })
})

describe('Unthourized', () => {
    test('Without pk authorization', async () => {
        const result = await getCardNumber(getEventFail);
        expect(result.statusCode).toBe(401)
        console.log(result);
        const body = JSON.parse(result.body)
        expect(body['message']).toEqual('Not authorized!')
    })
})
