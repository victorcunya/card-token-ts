
export enum StatusCode {
    success = 200,
    created = 201,
    serverError = 500,
    badRequest = 400,
}

class Result {
    private statusCode: number;
    private message: string;
    private data?: any;

    constructor(statusCode: number, message: string, data?: any) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }

    bodyToString() {
        return {
            statusCode: this.statusCode,
            body: JSON.stringify({
                message: this.message,
                data: this.data,
            }),
        };
    }
}

export class Response {

    static success(data: object, statusCode: number = StatusCode.success) {
        const result = new Result(statusCode, 'success', data);
        return result.bodyToString();
    }

    static error(data: object, message: string, statusCode: number = StatusCode.serverError) {
        const result = new Result(statusCode, message, data);
        return result.bodyToString();
    }
}
