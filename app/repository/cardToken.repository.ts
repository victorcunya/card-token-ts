
import { RedisDBRepository } from '@extensions/index';
import { random } from '@helper/index';
import { ICardToken } from '@model/index';

export class CardTokenRepository extends RedisDBRepository {

    async create(value: any): Promise<string> {
        const key = random();
        await this.set(key, JSON.stringify(value));
        return key
    }

    async getCard(key: string): Promise<ICardToken> {
        const data = await this.get(key);
        return JSON.parse(data) as ICardToken;
    }

}
