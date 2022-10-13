
enum StatusCode {
    success = 200,
    created = 201,
    serverError = 500,
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

    /**
     * Serverless: According to the API Gateway specs, the body content must be stringified
     */
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

    static error(message: string, statusCode: number = StatusCode.serverError) {
        const result = new Result(statusCode, message, {});
        return result.bodyToString();
    }
}
