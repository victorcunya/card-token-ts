
import { createClient } from 'redis';

export abstract class RedisDBRepository {

    protected readonly client;

    constructor() {
        this.client = createClient();
    }

    async set(key: string, value: any, exp: number = 15 * 60) {
        await this.client.connect();
        await this.client.set(key, value, {
            EX: exp // TTL: 15 min by default
        });
        await this.client.quit();
    }

    async get(key: string): Promise<string> {
        await this.client.connect();
        const value = await this.client.get(key);
        await this.client.quit();
        return value;
    }
}