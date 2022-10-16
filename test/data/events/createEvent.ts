import { APIGatewayProxyEvent } from 'aws-lambda';

export const createFail: APIGatewayProxyEvent = {
    body: '{\n' +
        '    "email": "admin@admin.com",\n' +
        '    "cardNumber": "1111111111111111",\n' +
        '    "cvv": "123",\n' +
        '    "expirationYear": "2023",\n' +
        '    "expirationMonth": "13"\n' +
        '}',
    headers: {
        Authorization: 'Bearer 6059f42b-956a-4357-820d-a458d4f36f4f',
        'Content-Type': 'application/json',
        'User-Agent': 'PostmanRuntime/7.29.2',
        Accept: '*/*',
        'Postman-Token': '9b44e276-d3ee-4d74-82c9-5b10eb6e5832',
        Host: 'localhost:3000',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        'Content-Length': '157'
    },
    httpMethod: 'POST',
    isBase64Encoded: false,
    multiValueHeaders: {
        Authorization: ['Bearer 6059f42b-956a-4357-820d-a458d4f36f4f'],
        'Content-Type': ['application/json'],
        'User-Agent': ['PostmanRuntime/7.29.2'],
        Accept: ['*/*'],
        'Postman-Token': ['9b44e276-d3ee-4d74-82c9-5b10eb6e5832'],
        Host: ['localhost:3000'],
        'Accept-Encoding': ['gzip, deflate, br'],
        Connection: ['keep-alive'],
        'Content-Length': ['157']
    },
    multiValueQueryStringParameters: null,
    path: '/creates',
    pathParameters: null,
    queryStringParameters: null,
    requestContext: {
        accountId: 'offlineContext_accountId',
        apiId: 'offlineContext_apiId',
        authorizer: {
            claims: undefined,
            principalId: 'offlineContext_authorizer_principalId',
            scopes: undefined
        },
        domainName: 'offlineContext_domainName',
        domainPrefix: 'offlineContext_domainPrefix',
        extendedRequestId: '05fdfe7c-e511-4211-897c-681d4a693d69',
        httpMethod: 'POST',
        identity: {
            accessKey: null,
            accountId: 'offlineContext_accountId',
            apiKey: 'offlineContext_apiKey',
            apiKeyId: 'offlineContext_apiKeyId',
            caller: 'offlineContext_caller',
            cognitoAuthenticationProvider: 'offlineContext_cognitoAuthenticationProvider',
            cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
            cognitoIdentityId: 'offlineContext_cognitoIdentityId',
            cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
            principalOrgId: null,
            sourceIp: '::1',
            user: 'offlineContext_user',
            userAgent: 'PostmanRuntime/7.29.2',
            userArn: 'offlineContext_userArn',
            clientCert: null
        },
        path: '/creates',
        protocol: 'HTTP/1.1',
        requestId: 'e0921836-56f0-4a36-aaf2-e874ed9fc559',
        requestTime: '15/Oct/2022:18:45:32 -0500',
        requestTimeEpoch: 1665877532173,
        resourceId: 'offlineContext_resourceId',
        resourcePath: '/dev/creates',
        stage: 'dev'
    },
    resource: '/creates',
    stageVariables: null
}

export const createBad: APIGatewayProxyEvent = {
    body: '{\n' +
        '    "email": "admin@admin.com",\n' +
        '    "cardNumber": "1111111111111111",\n' +
        '    "cvv": "123",\n' +
        '    "expirationYear": "2023",\n' +
        '    "expirationMonth": "13"\n' +
        '}',
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'PostmanRuntime/7.29.2',
        Accept: '*/*',
        'Postman-Token': '9b44e276-d3ee-4d74-82c9-5b10eb6e5832',
        Host: 'localhost:3000',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        'Content-Length': '157'
    },
    httpMethod: 'POST',
    isBase64Encoded: false,
    multiValueHeaders: {
        'Content-Type': ['application/json'],
        'User-Agent': ['PostmanRuntime/7.29.2'],
        Accept: ['*/*'],
        'Postman-Token': ['9b44e276-d3ee-4d74-82c9-5b10eb6e5832'],
        Host: ['localhost:3000'],
        'Accept-Encoding': ['gzip, deflate, br'],
        Connection: ['keep-alive'],
        'Content-Length': ['157']
    },
    multiValueQueryStringParameters: null,
    path: '/creates',
    pathParameters: null,
    queryStringParameters: null,
    requestContext: {
        accountId: 'offlineContext_accountId',
        apiId: 'offlineContext_apiId',
        authorizer: {
            claims: undefined,
            principalId: 'offlineContext_authorizer_principalId',
            scopes: undefined
        },
        domainName: 'offlineContext_domainName',
        domainPrefix: 'offlineContext_domainPrefix',
        extendedRequestId: '05fdfe7c-e511-4211-897c-681d4a693d69',
        httpMethod: 'POST',
        identity: {
            accessKey: null,
            accountId: 'offlineContext_accountId',
            apiKey: 'offlineContext_apiKey',
            apiKeyId: 'offlineContext_apiKeyId',
            caller: 'offlineContext_caller',
            cognitoAuthenticationProvider: 'offlineContext_cognitoAuthenticationProvider',
            cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
            cognitoIdentityId: 'offlineContext_cognitoIdentityId',
            cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
            principalOrgId: null,
            sourceIp: '::1',
            user: 'offlineContext_user',
            userAgent: 'PostmanRuntime/7.29.2',
            userArn: 'offlineContext_userArn',
            clientCert: null
        },
        path: '/creates',
        protocol: 'HTTP/1.1',
        requestId: 'e0921836-56f0-4a36-aaf2-e874ed9fc559',
        requestTime: '15/Oct/2022:18:45:32 -0500',
        requestTimeEpoch: 1665877532173,
        resourceId: 'offlineContext_resourceId',
        resourcePath: '/dev/creates',
        stage: 'dev'
    },
    resource: '/creates',
    stageVariables: null
}

export const createOk: APIGatewayProxyEvent = {
    body: '{\n' +
        '    "email": "admin@gmail.com",\n' +
        '    "cardNumber": "4970110000000062",\n' +
        '    "cvv": "123",\n' +
        '    "expirationYear": "2023",\n' +
        '    "expirationMonth": "12"\n' +
        '}',
    headers: {
        Authorization: 'Bearer 6059f42b-956a-4357-820d-a458d4f36f4f',
        'Content-Type': 'application/json',
        'User-Agent': 'PostmanRuntime/7.29.2',
        Accept: '*/*',
        'Postman-Token': '9b44e276-d3ee-4d74-82c9-5b10eb6e5832',
        Host: 'localhost:3000',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        'Content-Length': '157'
    },
    httpMethod: 'POST',
    isBase64Encoded: false,
    multiValueHeaders: {
        Authorization: ['Bearer 6059f42b-956a-4357-820d-a458d4f36f4f'],
        'Content-Type': ['application/json'],
        'User-Agent': ['PostmanRuntime/7.29.2'],
        Accept: ['*/*'],
        'Postman-Token': ['9b44e276-d3ee-4d74-82c9-5b10eb6e5832'],
        Host: ['localhost:3000'],
        'Accept-Encoding': ['gzip, deflate, br'],
        Connection: ['keep-alive'],
        'Content-Length': ['157']
    },
    multiValueQueryStringParameters: null,
    path: '/creates',
    pathParameters: null,
    queryStringParameters: null,
    requestContext: {
        accountId: 'offlineContext_accountId',
        apiId: 'offlineContext_apiId',
        authorizer: {
            claims: undefined,
            principalId: 'offlineContext_authorizer_principalId',
            scopes: undefined
        },
        domainName: 'offlineContext_domainName',
        domainPrefix: 'offlineContext_domainPrefix',
        extendedRequestId: '05fdfe7c-e511-4211-897c-681d4a693d69',
        httpMethod: 'POST',
        identity: {
            accessKey: null,
            accountId: 'offlineContext_accountId',
            apiKey: 'offlineContext_apiKey',
            apiKeyId: 'offlineContext_apiKeyId',
            caller: 'offlineContext_caller',
            cognitoAuthenticationProvider: 'offlineContext_cognitoAuthenticationProvider',
            cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
            cognitoIdentityId: 'offlineContext_cognitoIdentityId',
            cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
            principalOrgId: null,
            sourceIp: '::1',
            user: 'offlineContext_user',
            userAgent: 'PostmanRuntime/7.29.2',
            userArn: 'offlineContext_userArn',
            clientCert: null
        },
        path: '/creates',
        protocol: 'HTTP/1.1',
        requestId: 'e0921836-56f0-4a36-aaf2-e874ed9fc559',
        requestTime: '15/Oct/2022:18:45:32 -0500',
        requestTimeEpoch: 1665877532173,
        resourceId: 'offlineContext_resourceId',
        resourcePath: '/dev/creates',
        stage: 'dev'
    },
    resource: '/creates',
    stageVariables: null
}
