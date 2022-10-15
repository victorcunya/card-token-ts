
export enum StatusCode {
    HTTP_200_OK = 200,
    HTTP_201_CREATED = 201,
    HTTP_400_BAD_REQUEST = 400,
    HTTP_401_UNAUTHORIZED = 401,
    HTTP_404_NOT_FOUND = 404,
    HTTP_500_INTERNAL_SERVER_ERROR = 500,
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

    static success(
        data: object,
        statusCode: number = StatusCode.HTTP_200_OK
    ) {
        const result = new Result(statusCode, 'success', data);
        return result.bodyToString();
    }

    static error(
        data: object,
        message: string,
        statusCode: number = StatusCode.HTTP_500_INTERNAL_SERVER_ERROR
    ) {
        const result = new Result(statusCode, message, data);
        return result.bodyToString();
    }
}
