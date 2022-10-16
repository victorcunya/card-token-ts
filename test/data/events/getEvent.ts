import { APIGatewayProxyEvent } from 'aws-lambda';

export const getEventBad: APIGatewayProxyEvent = {
    body: null,
    headers: {
        Authorization: 'Bearer 6059f42b-956a-4357-820d-a458d4f36f4f',
        'User-Agent': 'PostmanRuntime/7.29.2',
        Accept: '*/*',
        'Postman-Token': 'aa87aec9-0602-4bdf-9ad2-71ff777b8a38',
        Host: 'localhost:3000',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive'
    },
    httpMethod: 'GET',
    isBase64Encoded: false,
    multiValueHeaders: {
        Authorization: ['Bearer 6059f42b-956a-4357-820d-a458d4f36f4f'],
        'User-Agent': ['PostmanRuntime/7.29.2'],
        Accept: ['*/*'],
        'Postman-Token': ['aa87aec9-0602-4bdf-9ad2-71ff777b8a38'],
        Host: ['localhost:3000'],
        'Accept-Encoding': ['gzip, deflate, br'],
        Connection: ['keep-alive']
    },
    multiValueQueryStringParameters: null,
    path: '/gets/ff2a8b75b14d4D98',
    pathParameters: { token: 'ff2a8b75b14d4D9' },
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
        extendedRequestId: 'af5b2c00-e589-49bb-a049-1513e72f2f64',
        httpMethod: 'GET',
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
        path: '/gets/ff2a8b75b14d4D98',
        protocol: 'HTTP/1.1',
        requestId: 'a21a62cc-4e00-4ab9-9d56-39323d18be90',
        requestTime: '15/Oct/2022:20:22:06 -0500',
        requestTimeEpoch: 1665883326804,
        resourceId: 'offlineContext_resourceId',
        resourcePath: '/dev/gets/{token}',
        stage: 'dev'
    },
    resource: '/gets/{token}',
    stageVariables: null
}

export const getEventFail: APIGatewayProxyEvent = {
    body: null,
    headers: {
        'User-Agent': 'PostmanRuntime/7.29.2',
        Accept: '*/*',
        'Postman-Token': 'aa87aec9-0602-4bdf-9ad2-71ff777b8a38',
        Host: 'localhost:3000',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive'
    },
    httpMethod: 'GET',
    isBase64Encoded: false,
    multiValueHeaders: {
        'User-Agent': ['PostmanRuntime/7.29.2'],
        Accept: ['*/*'],
        'Postman-Token': ['aa87aec9-0602-4bdf-9ad2-71ff777b8a38'],
        Host: ['localhost:3000'],
        'Accept-Encoding': ['gzip, deflate, br'],
        Connection: ['keep-alive']
    },
    multiValueQueryStringParameters: null,
    path: '/gets/ff2a8b75b14d4D98',
    pathParameters: { token: 'ff2a8b75b14d4D9' },
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
        extendedRequestId: 'af5b2c00-e589-49bb-a049-1513e72f2f64',
        httpMethod: 'GET',
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
        path: '/gets/ff2a8b75b14d4D98',
        protocol: 'HTTP/1.1',
        requestId: 'a21a62cc-4e00-4ab9-9d56-39323d18be90',
        requestTime: '15/Oct/2022:20:22:06 -0500',
        requestTimeEpoch: 1665883326804,
        resourceId: 'offlineContext_resourceId',
        resourcePath: '/dev/gets/{token}',
        stage: 'dev'
    },
    resource: '/gets/{token}',
    stageVariables: null
}
