import { createFail, createBad, createOk } from '../data'
import { create } from '../../app'


describe('Fail create token', () => {
    test('Bad Request', async () => {
        const result = await create(createFail);
        expect(result.statusCode).toBe(400)
        const body = JSON.parse(result.body)
        expect(body['message']).toEqual('Bad Request!')
    })
})

describe('Without Authorization', () => {
    test('Unthourized', async () => {
        const result = await create(createBad);
        expect(result.statusCode).toBe(401);
        const body = JSON.parse(result.body)
        expect(body['message']).toEqual('Not authorized!')
    })
})

describe('Create Ok', () => {
    test('Success', async () => {
        const result = await create(createOk);
        expect(result.statusCode).toBe(201)
        const body = JSON.parse(result.body)
        expect(body['message']).toEqual('success')
    })
})
